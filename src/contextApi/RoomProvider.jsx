import React, { useState } from 'react';
import RoomContext from './RoomContext';

const RoomProvider = ({ children }) => {
  const [userid, setUserid] = useState(null);
// {console.log(userid)}
  return (
    <RoomContext.Provider value={{ userid, setUserid }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;