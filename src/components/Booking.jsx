import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import RoomContext from '../contextApi/RoomContext.js';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const { userBookDetail } = useContext(RoomContext)
  const { hotel_name, room_id } = userBookDetail
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [check_in_date, setCheckin] = useState("");
  const [check_out_date, setCheckout] = useState("");
  const [message, setMessage] = useState("");

  const navigate=useNavigate()
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   guests: 1,
  //   check_in_date: '',
  //   check_out_date: '',
  //   message: '',
  //   hotel_name:hotel_name,
  //   room_id:room_id
  // });

  const formData = {
    name: name,
    email: email,
    guests: guests,
    check_in_date: check_in_date,
    check_out_date: check_out_date,
    message: message,
    hotel_name: hotel_name,
    room_id: room_id
  }


  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token'); // Get token if required for authentication

      const response = await fetch('https://booking-y3rp.onrender.com/user/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success('Booking Submitted Successfully!',
          {
            position: 'top-center',
            autoClose: 4000,
            theme: 'colored',
          });
          setName('')
          setEmail('')
          setGuests('')
          setCheckin('')
          setCheckout('')
          setMessage('')
          navigate('/')

      } else {
        toast.error(data.message || 'Booking failed!'),
        {
          position: 'top-center',
          autoClose: 4000,
          theme: 'colored',
        };
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong while submitting your booking.');
    }
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

            onChange={(e) => { setName(e.target.value) }}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            required

            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
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
            onChange={(e) => setGuests(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
          <input
            type="date"
            name="check_in_date"
            required
            onChange={(e) => setCheckin(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
          <input
            type="date"
            name="check_out_date"
            required
            onChange={(e) => setCheckout(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Special Requests</label>
          <textarea
            name="message"
            rows="3"
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
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
