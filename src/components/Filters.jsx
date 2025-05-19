import React from 'react'
import RoomCard from './RoomCard'
import ShowRooms from './ShowRooms'

const Filters = () => {
  return (
    <div>
        <div className='h-[100px] rounded-xl bg-[url(https://images.unsplash.com/photo-1747193544056-088ffe8969ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDZ8fHxlbnwwfHx8fHw%3D)] bg-cover bg-center bg-no-repeat flex m-2 items-center'>
            <form action="" className='flex justify-around w-full relative'>
                    <div>
                        <label htmlFor="city">
                        <p className='font-medium cursor-pointer'>Enter your city</p>
                        </label>
                    <input type="text" placeholder='city?' id='city' className='bg-gray-50 outline-none mt-1 rounded h-7 p-3 hover:bg-gray-100 transition' />
                    </div>
                    <div>
                        <label htmlFor="in">
                        <p className='font-medium cursor-pointer'>Check in </p>
                        </label>
                    <input type="date" id='in' className='outline-none' />
                    </div>
                    <div>
                        <label htmlFor="out">
                        <p className='font-medium cursor-pointer'>Check out</p>
                        </label>
                    <input type="date" id='out' className='outline-none' />
                    </div>
                    <div>
                        <label htmlFor="adult">
                        <p className='font-medium cursor-pointer'>Number of Adults</p>
                        </label>
                    <input type="number" id='adult' className='bg-gray-50 outline-none rounded mt-1 h-7 p-3 hover:bg-gray-100 transition' max={1} placeholder='2 Adults'/>
                    </div>
            </form>
            <div className='capitalize cursor-pointer text-rose-600 font-medium rounded-full px-4 pt-2 pb-2 mt-2 bg-white absolute bottom-5 left-[50%] border hover:bg-gray-100'>Submit</div>
        </div>
        <ShowRooms/>
    </div>
  )
}

export default Filters