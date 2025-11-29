import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FRONTEND VALIDATION
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      setLoading(true);
      
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/leads`,
        form,
        { headers: { "Content-Type": "application/json" } }
      );


    if (res.status === 200) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Failed to send message");
    }
 

    } catch (error) {
      console.error("Error sending message:", error);
      alert("Server error — message not sent");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f4ff] flex items-center justify-center px-6 py-10">
      <div className="bg-white shadow-xl rounded-2xl max-w-6xl w-full p-10 flex gap-10">

        {/* LEFT INFORMATION */}
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-orange-500">Contact Us</h4>
          <h1 className="text-4xl font-bold mt-2">Get In Touch With Us</h1>

          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            Leading IT training and consulting services in Data & Analytics, AI, and Cloud Technologies.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">📍</div>
              <div>
                <h3 className="font-semibold">Our Location</h3>
                <p className="text-sm text-gray-600">Bhubaneswar, Odisha,</p>
                <p className="text-sm text-gray-600">India</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">📞</div>
              <div>
                <h3 className="font-semibold">Phone Number</h3>
                <p className="text-sm text-gray-600">9849257188</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">✉️</div>
              <div>
                <h3 className="font-semibold">Email Address</h3>
                <p className="text-sm text-gray-600">info@starschema.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1 bg-orange-200 p-8 rounded-xl shadow-xl">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md outline-none bg-white"
            />
            <input
              name="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md outline-none bg-white"
            />
            <input
              name="phone"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-md outline-none bg-white"
            />

            <textarea
              name="message"
              placeholder="Your Message *"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md h-28 outline-none bg-white"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-400 text-white py-3 rounded-md font-medium hover:bg-pink-500 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
