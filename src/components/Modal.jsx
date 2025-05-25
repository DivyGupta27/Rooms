import React, { useContext } from 'react';
import myroom from '../Booking.rooms.json';
import RoomContext from '../contextApi/RoomContext.js';
import { useNavigate } from 'react-router-dom';

const Modal = () => {
  const { userid,setUserBookDetail } = useContext(RoomContext);
  const navigate=useNavigate()

  const room = myroom.find(room => room._id.$oid === userid);

  if (!room) {
    return <div className="text-center text-gray-500">Room not found.</div>;
  }

  const { name, description, location, price, rating, image, amenities,id } = room;

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex justify-center items-center z-50 px-4 sm:px-6 md:px-8">
      <div className="bg-white rounded-xl shadow-xl p-5 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg md:max-w-xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{name}</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Image */}
        <img
          src={image}
          alt={name}
          className="rounded-lg w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
        />

        {/* Info */}
        <p className="text-gray-700 mb-3 text-sm sm:text-base">{description}</p>
        <p className="text-sm sm:text-base text-gray-600 mb-1">📍 {location}</p>
        <p className="text-sm sm:text-base font-semibold text-rose-600 mb-1">₹ {price}</p>
        <p className="text-sm sm:text-base text-gray-600 mb-3">⭐ {rating}</p>

        {/* Amenities */}
        <div className="mt-3">
          <h3 className="font-medium mb-1">Amenities:</h3>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
            {amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Close Button */}
        <div className="mt-6 text-right">
          <button onClick={()=>{navigate('/booking');setUserBookDetail({hotel_name:name,room_id:id})}}
            className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition text-sm sm:text-base"
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
