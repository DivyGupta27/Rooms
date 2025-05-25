import React, { useContext } from 'react';
import RoomCard from './RoomCard';
import myroom from '../Booking.rooms.json';
import RoomContext from '../contextApi/RoomContext.js';

const ShowRooms = ({ type, category }) => {
  const{search} =useContext(RoomContext)
  let filteredRooms = myroom;

  if (type) {
    filteredRooms = filteredRooms.filter(room => room.type === type);
  }

  if (category) {
    filteredRooms = filteredRooms.filter(room => room.category === category);
  }

  if (search && search.trim() !== "") {
    filteredRooms = filteredRooms.filter(room => 
      room.location.toLowerCase().includes(search.trim().toLowerCase())
    );
  }
  return (
    <div className="flex flex-wrap justify-center mx-6 gap-9">
      {filteredRooms.map((room, i) => (
        <RoomCard
          key={i}
          id={room._id.$oid}
          name={room.name}
          price={room.price}
          ex1={room.amenities[0]}
          ex2={room.amenities[1]}
          ex3={room.amenities[2]}
          image={room.image}
        />
      ))}
    </div>
  );
};

export default ShowRooms;
