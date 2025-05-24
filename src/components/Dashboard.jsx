import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:8000/user/bookings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        }
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setBookings(data.bookings);
      } else {
        toast.error(data.message || "Failed to fetch bookings");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while fetching bookings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // redirect to login
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-rose-600">Welcome to Your Dashboard</h1>
        <button onClick={handleLogout} className="bg-gray-700 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading your bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500">You have no bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-rose-600">{booking.hotel_name}</h2>
              <p><strong>Room:</strong> {booking.room_id}</p>
              <p><strong>Guests:</strong> {booking.guests}</p>
              <p><strong>Check-in:</strong> {booking.check_in_date}</p>
              <p><strong>Check-out:</strong> {booking.check_out_date}</p>
              <p><strong>Special Notes:</strong> {booking.message || "None"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
