import React, { useEffect, useState } from 'react';
import { FaUserShield, FaClipboardList, FaHotel, FaUsers, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const StatCard = ({ icon, title, value, color }) => (
  <div className="bg-white p-5 rounded-xl shadow hover:shadow-md flex items-center gap-4 border">
    <div className={`text-3xl p-3 rounded-full ${color}`}>
      {icon}
    </div>
    <div>
      <h4 className="text-gray-600 text-sm">{title}</h4>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

const AdminPanel = () => {
  const [data, setData] = useState({
    allUserlen: 0,
    allBooklen: 0,
    allRooms: 0,
    allBooking: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAdmindata = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch('https://booking-y3rp.onrender.com/admin/admindata', {
        method: 'GET',
        headers: {
          'auth-token': token,
        },
      });

      if (!response.ok) throw new Error("Unauthorized or failed to fetch data");

      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error(err);
      setError("Only admin can fetch the data");
    } finally {
      setLoading(false);
    }
  };

  const deleteBooking = async (bookingId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`https://booking-y3rp.onrender.com/admin/delete/${bookingId}`, {
        method: 'DELETE',
        headers: {
          'auth-token': token,
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Booking deleted successfully", {
          position: 'top-center',
          autoClose: 4000,
          theme: 'colored',
        });

        // Update UI after deletion
        setData((prev) => ({
          ...prev,
          allBooking: prev.allBooking.filter((b) => b._id !== bookingId),
          allBooklen: prev.allBooklen - 1,
        }));
      } else {
        throw new Error(result.message || "Failed to delete");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error deleting booking", {
        position: 'top-center',
        autoClose: 4000,
        theme: 'colored',
      });
    }
  };

  useEffect(() => {
    getAdmindata();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-10">
      <h2 className="text-3xl font-bold mb-8 text-rose-600 flex items-center gap-2">
        <FaUserShield /> Admin Dashboard
      </h2>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          {/* Stats */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            <StatCard icon={<FaUsers />} title="Total Users" value={data.allUserlen} color="bg-rose-100 text-rose-600" />
            <StatCard icon={<FaClipboardList />} title="Total Bookings" value={data.allBooklen} color="bg-blue-100 text-blue-600" />
            <StatCard icon={<FaHotel />} title="Total Rooms" value={data.allRooms} color="bg-green-100 text-green-600" />
          </div>

          {/* Bookings Table */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow border overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Bookings</h3>
            <table className="min-w-full text-sm text-left border">
              <thead className="bg-gray-100 text-gray-600 uppercase">
                <tr>
                  <th className="p-3">Booking</th>
                  <th className="p-3">Booked By</th>
                  <th className="p-3">Hotel</th>
                  <th className="p-3">Room</th>
                  <th className="p-3">Guests</th>
                  <th className="p-3">Check-In</th>
                  <th className="p-3">Check-Out</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {data.allBooking.map((booking) => (
                  <tr key={booking._id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{booking.name}</td>
                    <td className="p-3">{booking.createdby?.name || "N/A"}</td>
                    <td className="p-3">{booking.hotel_name || "N/A"}</td>
                    <td className="p-3">{booking.room_id || 'N/A'}</td>
                    <td className="p-3">{booking.guests}</td>
                    <td className="p-3">{new Date(booking.check_in_date).toLocaleDateString()}</td>
                    <td className="p-3">{new Date(booking.check_out_date).toLocaleDateString()}</td>
                    <td className="p-3">
                      <button
                        onClick={() => deleteBooking(booking._id)}
                        className="text-red-600 hover:text-red-800 flex items-center gap-1"
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPanel;
