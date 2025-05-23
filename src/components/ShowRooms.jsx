import React from 'react';
import RoomCard from './RoomCard';
import myroom from '../Booking.rooms.json';

const ShowRooms = ({ type, category }) => {
  let filteredRooms = myroom;

  if (type) {
    filteredRooms = myroom.filter(room => room.type === type);
  } else if (category) {
    filteredRooms = myroom.filter(room => room.category === category);
  }

  return (
    <div className="flex flex-wrap justify-center mx-6 gap-9">
      {filteredRooms.map((room, i) => (
        <RoomCard
          key={i}
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
