import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    category: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-black">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div>
          <label className="block text-black">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div>
          <label className="block text-black">Phone Number</label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div>
          <label className="block text-black">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="">Select Category</option>
            <option value="mixer">Mixer</option>
            <option value="iron">Iron</option>
            <option value="washing machine">Washing Machine</option>
            <option value="microwave">Microwave</option>
            <option value="three phase motor">Three Phase Motor</option>
            <option value="cooler">Cooler</option>
            <option value="ac">AC</option>
            <option value="fridge">Fridge</option>
          </select>
        </div>
        <div>
          <label className="block text-black">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows="4"
            required
          ></textarea>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button
            type="submit"
            className="w-full bg-slate-700 text-white p-3 rounded-lg font-semibold hover:bg-slate-800"
          >
            Submit
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
