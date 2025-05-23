import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    check_in_date: '',
    check_out_date: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Booking Data:', formData);
    toast.success('Booking Submitted!');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-2xl shadow-2xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-rose-600 text-center">Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            required
            value={formData.guests}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
          <input
            type="date"
            name="check_in_date"
            required
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
          <input
            type="date"
            name="check_out_date"
            required
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Special Requests</label>
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500"
            placeholder="Any additional notes?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
