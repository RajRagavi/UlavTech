import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Sidebar from "./Sidebar";

const SeedPlan = () => {
  const userData = {
    profilePhoto: "https://via.placeholder.com/100",
    name: "John Doe",
    phone: "9876543210",
    email: "johndoe@example.com",
    accountNo: "",
    panNo: "",
    aadharNo: "",
    investmentAmount: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [errors, setErrors] = useState({}); // Store validation errors

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};

    if (!formData.accountNo || formData.accountNo.length < 6) {
      newErrors.accountNo = "Account Number must be at least 6 digits";
    }
    if (!formData.panNo || formData.panNo.length !== 10) {
      newErrors.panNo = "PAN Number must be exactly 10 characters";
    }
    if (!formData.aadharNo || formData.aadharNo.length !== 12) {
      newErrors.aadharNo = "Aadhar Number must be exactly 12 digits";
    }
    if (
      !formData.investmentAmount ||
      formData.investmentAmount < 5000 ||
      formData.investmentAmount > 50000
    ) {
      newErrors.investmentAmount = "Investment must be between ₹5000 and ₹50000";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully! ✅");
      setIsModalOpen(false); // Close modal after successful validation
    }
  };

  return (
    <div className="flex h-full bg-gray-200 ">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-gradient-to-r from-green-200 to-green-50 py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-green-800 text-center mb-4">🌱 Seed Plan</h1>
          <p className="text-gray-700 text-center mb-6">
            The Seed Plan is designed for small investors who want to start with a low-risk agricultural investment.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-green-100 p-4 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-green-900">Minimum Investment</h3>
              <p className="text-green-700 font-bold">₹5000</p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-green-900">Maximum Investment</h3>
              <p className="text-green-700 font-bold">₹50000</p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-green-900">Average Return</h3>
              <p className="text-green-700 font-bold">12% per annum</p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-green-900">Duration</h3>
              <p className="text-green-700 font-bold">12 months</p>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              onClick={() => setIsModalOpen(true)}
            >
              Invest Now
            </button>
          </div>
        </div>
      </div>

      {/* Investment Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-[650px] rounded-lg shadow-lg flex overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes size={20} />
            </button>

            {/* Left Side - Form */}
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Invest Now</h2>
              
        <p className="text-sm text-gray-600 mb-4">
          The Seed Plan is designed for small investors who want to start with a low-risk agricultural investment.
        </p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="accountNo"
                    value={formData.accountNo}
                    onChange={handleInputChange}
                    placeholder="Account No"
                    className="p-2 border rounded w-full"
                  />
                  {errors.accountNo && <p className="text-red-600 text-sm">{errors.accountNo}</p>}

                  <input
                    type="text"
                    name="panNo"
                    value={formData.panNo}
                    onChange={handleInputChange}
                    placeholder="PAN No"
                    className="p-2 border rounded w-full"
                  />
                  {errors.panNo && <p className="text-red-600 text-sm">{errors.panNo}</p>}

                  <input
                    type="text"
                    name="aadharNo"
                    value={formData.aadharNo}
                    onChange={handleInputChange}
                    placeholder="Aadhar No"
                    className="p-2 border rounded w-full"
                  />
                  {errors.aadharNo && <p className="text-red-600 text-sm">{errors.aadharNo}</p>}

                  <input
                    type="number"
                    name="investmentAmount"
                    value={formData.investmentAmount}
                    onChange={handleInputChange}
                    placeholder="Investment Amount"
                    className="p-2 border rounded w-full"
                  />
                  {errors.investmentAmount && <p className="text-red-600 text-sm">{errors.investmentAmount}</p>}
                </div>

                <button type="submit" className="bg-blue-600 text-white w-full p-2 rounded mt-4 hover:bg-blue-700">
                  Invest Now
                </button>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="w-1/2 bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white flex flex-col items-center">
              <img src={formData.profilePhoto} alt="Profile" className="w-20 h-20 rounded-full border mb-2" />
              <p className="text-lg font-semibold">{formData.name}</p>
              <p className="mt-2"><FaPhoneAlt className="inline mr-2" />{formData.phone}</p>
              <p className="mt-2"><FaEnvelope className="inline mr-2" />{formData.email}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SeedPlan;
