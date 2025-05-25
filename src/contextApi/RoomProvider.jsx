import React, { useState } from 'react';
import RoomContext from './RoomContext.js';

const RoomProvider = ({ children }) => {
  const [userid, setUserid] = useState(null);
  const [search, setFind] = useState('')
  const [userBookDetail, setUserBookDetail] = useState({ hotel_name: "", room_id: "" })
  return (
    <RoomContext.Provider value={{ userid, setUserid, userBookDetail, setUserBookDetail, search, setFind }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;