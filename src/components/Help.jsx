import React from 'react'
import Container from './Container'

import Icon03 from "../assets/Icon03.png"
import Icon04 from "../assets/Icon04.png"
import Icon05 from "../assets/Icon05.png"
import Icon06 from "../assets/Icon06.png"

const Help = () => {
  return (
   <>
   <section className='py-10 px-1 bg-[#F5F7FA]' >
    <Container>
        <div className=" lg:flex justify-between items-center">
            <div className="lg:w-[40%] w-full">
                <h2 className=' text-[#18191F] font-semibold lg:text-[36px] text-[28px] font-inter leading-10'>Helping a local  <span className='text-[#4CAF4F] font-semibold text-[36px] font-inter inline-block'>business reinvent itselfp</span></h2>
                <p className='text-[#000] font-medium text-[16px] font-inter mt-2'>We reached here with our hard work and dedication</p>
            </div>
            <div className="lg:w-[40%] w-full">
              <div className=" lg:flex sm:flex justify-between mt-10  lg:mt-0 ">
                <div className="lg:w-[50%] w-full flex items-center gap-4">
                    <img src={Icon03} alt="icon" />
                   <div className="">
                          <h2 className='text-[#4D4D4D] font-bold text-[28px] font-inter'>2,245,341</h2>
                          <p className='text-[#18191F] font-normal text-[16px] font-inter'>Members</p>
                   </div>
                </div>
                <div className="lg:w-[50%] w-full flex items-center gap-4 mt-10 lg:mt-0 sm:mt-0">
                    <img src={Icon04} alt="icon" />
                   <div className=" ">
                          <h2 className='text-[#4D4D4D] font-bold text-[28px] font-inter'>46,328</h2>
                          <p className='text-[#18191F] font-normal text-[16px] font-inter'>Clubs</p>
                   </div>
                </div>
                
              </div>
              <div className=" lg:flex  sm:flex justify-between mt-10">
                <div className="lg:w-[50%] w-full flex items-center gap-4">
                    <img src={Icon05} alt="icon" />
                   <div className="">
                          <h2 className='text-[#4D4D4D] font-bold text-[28px] font-inter'>828,867</h2>
                          <p className='text-[#18191F] font-normal text-[16px] font-inter'>Event Bookings</p>
                   </div>
                </div>
                <div className="lg:w-[50%] w-full flex items-center gap-4 mt-10 lg:mt-0 sm:mt-0">
                    <img src={Icon06} alt="icon" />
                   <div className=" ">
                          <h2 className='text-[#4D4D4D] font-bold text-[28px] font-inter'>1,926,436</h2>
                          <p className='text-[#18191F] font-normal text-[16px] font-inter'>Payments</p>
                   </div>
                </div>
                
              </div>
            </div>
        </div>
    </Container>
   </section>
   </>
  )
}

export default Help