import React, { useContext } from 'react';
import RoomCard from './RoomCard';
import ShowRooms from './ShowRooms';
import RoomContext from '../contextApi/RoomContext.js';

const Filters = () => {
  const { setFind } = useContext(RoomContext)
  return (
    <div>
      {/* Hero filter bar */}
      <div className="min-h-[120px] rounded-xl bg-[url(https://images.unsplash.com/photo-1747193544056-088ffe8969ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDZ8fHxlbnwwfHx8fHw%3D)] bg-cover bg-center bg-no-repeat m-2 p-4 flex flex-col justify-center relative">
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="city">
              <p className="font-medium cursor-pointer">Enter your city</p>
            </label>
            <input
              type="text"
              placeholder="City?"
              id="city"
              onChange={(e) => setFind(e.target.value)}
              className="bg-gray-50 outline-none mt-1 rounded h-10 w-full p-2 hover:bg-gray-100 transition"
            />
          </div>
          <div>
            <label htmlFor="in">
              <p className="font-medium cursor-pointer">Check in</p>
            </label>
            <input
              type="date"
              id="in"
              className="bg-gray-50 outline-none mt-1 rounded h-10 w-full p-2 hover:bg-gray-100 transition"
            />
          </div>
          <div>
            <label htmlFor="out">
              <p className="font-medium cursor-pointer">Check out</p>
            </label>
            <input
              type="date"
              id="out"
              className="bg-gray-50 outline-none mt-1 rounded h-10 w-full p-2 hover:bg-gray-100 transition"
            />
          </div>
          <div>
            <label htmlFor="adult">
              <p className="font-medium cursor-pointer">Number of Adults</p>
            </label>
            <input
              type="number"
              id="adult"
              max={5}
              placeholder="2 Adults"
              className="bg-gray-50 outline-none mt-1 rounded h-10 w-full p-2 hover:bg-gray-100 transition"
            />
          </div>
        </form>

        <div className="mt-4 sm:mt-6 flex justify-center">
          <button className="capitalize cursor-pointer text-rose-600 font-medium rounded-full px-6 py-2 bg-white border hover:bg-gray-100 transition">
            Submit
          </button>
        </div>
      </div>

      {/* Room results */}
      <ShowRooms />
    </div>
  );
};

export default Filters;
