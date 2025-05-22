import React, { useEffect, useState } from 'react';
import RoomCard from './RoomCard';
import myroom from '../Booking.rooms.json'

const ShowRooms = ({type}) => {
  return (
    <div className='flex flex-wrap justify-center mx-6 gap-9'>
      {!type?
      myroom.map((list, i) => (
        <RoomCard name={list.name} price={list.price} key={i} ex1={list.amenities[0]} ex2={list.amenities[1]} ex3={list.amenities[2]} image={list.image}/>
      )): myroom.filter(find=>find.type==type).map((list, i) => (
        <RoomCard name={list.name} price={list.price} key={i} ex1={list.amenities[0]} ex2={list.amenities[1]} ex3={list.amenities[2]} image={list.image}/>
      ))
      }
    </div>
  );
};

export default ShowRooms;
