import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaSalesforce } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // ✅ Fix: Handle form submission correctly
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }

      const res = await axios.post(
        "http://localhost:8080/api/v1/portfolio/sendEmail", // ✅ Ensure the backend URL is correct
        { name, email, msg }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center py-12 px-6 bg-gray-100 pl-50" id="contact">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                alt="contact"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="md:w-1/2 p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="card2 d-flex card border-0 px-4 py-5"
            >
              <h2 className="text-2xl font-semibold text-gray-800 text-center">Contact Me</h2>
              <div className="flex justify-center space-x-4 mt-4">
  <a href="https://www.linkedin.com/in/writtika-mitra-24019b26b" target="_blank" rel="noopener noreferrer">
    <BsLinkedin className="text-blue-600 text-2xl cursor-pointer" />
  </a>
  <a href="https://github.com/writtikaaa/" target="_blank" rel="noopener noreferrer">
    <BsGithub className="text-black text-2xl cursor-pointer" />
  </a>
  <a href="https://www.instagram.com/invites/contact/?igsh=g44i1ldd6xfa&utm_content=m5zubpr" target="_blank" rel="noopener noreferrer">
    <BsInstagram className="text-red-600 text-2xl cursor-pointer" />
  </a>
  <a href="https://www.salesforce.com/trailblazer/bkatkpkze7qypu63cf" target="_blank" rel="noopener noreferrer">
    <FaSalesforce className="text-blue-600 text-2xl cursor-pointer" />
  </a>
</div>

              <div className="flex items-center my-6">
                <div className="h-px flex-1 bg-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm">OR</span>
                <div className="h-px flex-1 bg-gray-300"></div>
              </div>

              {/* ✅ Fix: Use onSubmit on the form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Write your message"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-black transition"
                >
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
