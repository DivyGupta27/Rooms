import React from 'react'
import roomContext from './roomContext'
const RoomProvider = ({children}) => {

  return (
    <roomContext.Provider value={{}}>
        {children}
    </roomContext.Provider>
  )
}

export default RoomProvider