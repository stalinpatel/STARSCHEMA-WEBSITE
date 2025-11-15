const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { default: mongoose } = require("mongoose");
const BuyerOwner = require("../models/BuyerOwner.js");
const BuilderAgent = require("../models/BuilderAgent.js");

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days (ms) - match token expiry
};

exports.requestOtp = async (req, res) => {
  try {
    const { phone } = req.body;

    // generate 4-6 digit OTP
    // const otp = Math.floor(100000 + Math.random() * 900000);

    // save OTP  with expiry (5-10 mins)
    // await otpService.saveOtp(phone, otp);

    // send OTP via SMS gateway
    // await otpService.sendOtp(phone, otp);

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.resendOtp = async (req, res) => {
  try {
    const { phone } = req.body;

    // Generate a new OTP (4-6 digits)
    const otp = Math.floor(100000 + Math.random() * 900000);

    // await otpService.saveOtp(phone, otp);

    // await otpService.sendOtp(phone, otp);

    res.status(200).json({
      message: "OTP resent successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { phone, otp, role, city } = req.body;

    // const isValid = await otpService.verifyOtp(phone, otp);
    const isValid = true;
    //TODO: remove after otp service integration

    if (!isValid) return res.status(400).json({ message: "Invalid OTP" });

    let user = await User.findOne({ phone });

    //   new user then send first time flag
    if (!user) {
      return res.status(200).json({ isRegistered: false, phone, role, city });
    }

    // existing user then login
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );
    res.cookie("token", token, COOKIE_OPTIONS);
    res.status(200).json({ isRegistered: true, token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.completeRegistration = async (req, res) => {
  try {
    const { phone, name, email, city, role, reraNumber } = req.body;

    let user = await User.findOne({ phone });
    if (user) {
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "7d" }
      );
      res.cookie("token", token, COOKIE_OPTIONS);
      return res.status(200).json({ token, user });
    }

    user = new User({
      fullName: name,
      email,
      phone,
      role,
      preferredCity: city,
      isVerified: true,
      lastLogin: new Date(),
    });

    await user.save();

    if (role === "buyer-owner") {
      await BuyerOwner.create({ userId: user._id });
    } else if (role === "builder-agent") {
      await BuilderAgent.create({
        userId: user._id,
        reraNumber: reraNumber,
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );
    res.cookie("token", token, COOKIE_OPTIONS);
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    // req.user already attached by authMiddleware
    const user = req.user;
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user" });
  }
};

exports.logout = async (req, res) => {
  try {
    const { maxAge, ...cookieOptionsWithoutMaxAge } = COOKIE_OPTIONS;

    res.clearCookie("token", cookieOptionsWithoutMaxAge);

    res.status(200).json({ message: "Logged out successfully" });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
