import React from 'react'
import myroom from '../Booking.rooms.json';

const Modal = () => {
  return (
    <div>
        <div className="fixed inset-0 bg-gray-200 bg-opacity-100 flex justify-center items-center z-50">
  <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold">CoWork Surat Suites</h2>
      <button onClick={() => window.history.back()} className="text-gray-500 cursor-pointer hover:text-gray-700 text-xl font-bold">&times;</button>
    </div>

    <img
      src="https://coworkingers.com/wp-content/uploads/2020/07/Coworq-Coworking-Space-005.jpg"
      alt="CoWork Surat Suites"
      className="rounded w-full h-40 object-cover mb-4"
    />

    <p className="text-gray-700 mb-2">
      Early term very support last blood move event close unit price themselves.
    </p>
    <p className="text-sm text-gray-500 mb-2">📍 Surat, India</p>
    <p className="text-sm font-semibold text-rose-600 mb-2">₹ 1401.08</p>
    <p className="text-sm text-gray-600">⭐ 4.7</p>

    <div className="mt-4">
      <h3 className="font-medium">Amenities:</h3>
      <ul className="list-disc ml-5 text-sm text-gray-700">
        <li>spa</li>
        <li>parking</li>
        <li>cultural performances</li>
        <li>breakfast included</li>
      </ul>
    </div>

    <div className="mt-6 text-right">
      <button className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700 transition">
        Close
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Modal