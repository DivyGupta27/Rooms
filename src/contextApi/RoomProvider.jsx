import React, { useState } from 'react';
import RoomContext from './RoomContext';

const RoomProvider = ({ children }) => {
  const [userid, setUserid] = useState(null);

  const [userBookDetail,setUserBookDetail]=useState({hotel_name:"",room_id:""})
  return (
    <RoomContext.Provider value={{ userid, setUserid,userBookDetail,setUserBookDetail }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;