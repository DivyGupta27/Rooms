import React, { useEffect, useState } from 'react';
import { FaHotel, FaUser, FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://booking-y3rp.onrender.com/user/getUserBooking', {
        headers: {
          'auth-token': localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      if (data.success) {
        setBookings(data.booking);
        setUser(data.booking[0]?.createdby || null);
      } else {
        console.error("Failed to fetch bookings:", data.message);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-10 text-lg text-gray-600">Loading dashboard...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* User Info */}
      <div className="bg-rose-50 p-6 rounded-xl shadow-md mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-rose-700">
            Welcome, {user?.name || 'User'}
          </h2>
          <p className="text-gray-700">{user?.email}</p>
        </div>
        <FaUser className="text-4xl text-rose-500" />
      </div>

      {/* Bookings */}
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Recent Bookings</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center gap-2 text-rose-600 mb-3">
                <FaHotel />
                <h4 className="text-lg font-semibold">{booking.hotel_name}</h4>
              </div>

              <div className="text-sm text-gray-700 space-y-1">
                <div className="flex items-center gap-2">
                  <FaDoorOpen className="text-gray-500" />
                  <span>Room: {booking.room_id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-gray-500" />
                  <span>Guests: {booking.guests}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-500" />
                  <span>Check-in: {booking.check_in_date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-500" />
                  <span>Check-out: {booking.check_out_date}</span>
                </div>
                {booking.message && (
                  <p className="italic text-gray-500 mt-2">Note: {booking.message}</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
