exports.protect = async (req, res, next) => {
  try {
    // Add your JWT verify logic here

    // Example:
    // req.user = decodedTokenUserData;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not authorized",
    });
  }
};
