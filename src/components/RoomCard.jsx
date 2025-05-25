import React, { useContext } from 'react'
import Marquee from "react-fast-marquee";
import RoomContext from '../contextApi/RoomContext.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RoomCard = ({name,price,ex1,ex2,ex3,image,id}) => {
  const {setUserid}=useContext(RoomContext)
let navigate =useNavigate()
let getToken=localStorage.getItem('token')
const handleClick = () => {
    if(getToken) {
      setUserid(id);
      navigate("/model");
    } else {
      toast.error('login first', {
              position: 'top-center',
              autoClose: 4000,
              theme: 'colored',
            });
            navigate("/login")
    }
  };
  return (
    
    <div onClick={handleClick}  className='mt-3 w-85 h-87 max-sm:h-90 rounded shadow-xl overflow-hidden hover:-translate-y-.5 hover:scale-105 transition'>
        <a className="block rounded-lg p-4 shadow-xs shadow-indigo-100">
  <img
    alt=""
    src={image}
    className="h-56 w-full rounded-md object-cover"
  />

  <div className="mt-2">
    <dl>
      <div>
        <dt className="sr-only">Price</dt>

        <dd className="text-sm text-gray-500">₹ {price}</dd>
      </div>

      <div>
        <dt className="sr-only">Address</dt>

        <dd className="font-medium">{name}</dd>
      </div>
    </dl>

    <div className="mt-3 flex items-center md:pb-6 sm:pb-9 gap-8 jusify-evenly text-xs">
      <div className="sm:inline-flex sm:shrink-0 flex sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">{ex1}</p>

          <p className="font-medium">♾️</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">{ex2}</p>

          <p className="font-medium">♾️</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0 ">
          {ex3.length>9?<Marquee speed={40} className="text-gray-500">{ex3}</Marquee>:<p className="text-gray-500">{ex3}</p>}

          <p className="font-medium">♾️</p>
        </div>
      </div>
    </div>
  </div>
</a>

    </div>
  )
}

export default RoomCard