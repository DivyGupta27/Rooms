import React from 'react'
import Filters from './Filters'

const Card = () => {
  return (
    <div>
        <div className='h-[350px] w-full p-10 bg-gray-100 flex gap-10 justify-center items-center'>
            <div className=''>
                <p className='font-bold text-medium text-amber-900 uppercase'>introducing</p>
                <span className='font-bold text-4xl uppercase text-amber-400'>myt </span>
                <span className='font-bold text-4xl uppercase text-amber-400'>luxe </span><br />
                <span className='font-bold text-4xl capitalize text-amber-400'>selection </span>
                <p className='font-medium'>Escape to the epitome of luxury, packed with signature amenities and services</p>
                <button className='capitalize cursor-pointer text-rose-600 font-medium rounded-full px-4 pt-2 pb-2 mt-2 bg-white hover:bg-gray-100'>
                    learn more
                </button>
            </div>
            <div className='h-[200px] w-[400px] hover:-translate-y-.5 hover:scale-110 transition '>
                <img className=' w-full object-cover rounded ' src="https://cdn-ijnhp.nitrocdn.com/pywIAllcUPgoWDXtkiXtBgvTOSromKIg/assets/images/optimized/rev-5794eaa/www.jaypeehotels.com/blog/wp-content/uploads/2025/04/Top-10-Richest-Cities-in-India-March-2025-2-scaled.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, consectetur?</p>
            </div>
            <div className='h-[200px] w-[400px] hover:-translate-y-.5 hover:scale-110 transition'>
                <img className='w-full object-cover bg-green-100 rounded' src="https://www.datocms-assets.com/32623/1660060831-safetravelinda_hero.jpg?auto=format" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, consectetur?</p>
            </div>
            <div className='h-[200px] w-[400px] hover:-translate-y-.5 hover:scale-110 transition'>
                <img className='w-full object-cover bg-green-100 rounded' src="https://s7ap1.scene7.com/is/image/incredibleindia/1-india-gate-delhi1-city-hero?qlt=82&ts=1726737112852" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, consectetur?</p>
            </div>
            
        </div>
        <Filters/>
    </div>
  )
}

export default Card