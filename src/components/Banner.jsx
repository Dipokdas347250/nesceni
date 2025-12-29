import React from 'react'
import Container from './Container'
import ban from "../assets/banner.png"

const Banner = () => {
  return (
    <>
    <section className='py-24 lg:pt-40 pt-20 px-1 bg-[#F5F7FA]'>
        <Container>
            <div className=" lg:flex justify-between items-center">
            <div className="w-[40%] lg:w-[50%]">
                <h1 className=" text-[#18191F] font-semibold lg:text-[64px] sm:text-[42px] text-[28px] font-inter ">Lessons and insights  <span className=' inline-block text-[#4CAF4F]'>from 8 years</span> </h1>
                <p className="text-[#717171] font-medium text-[16px] font-inter">Where to grow your business as a photographer: site or social media? </p>
                <button className=" px-5 py-2 text-[#fff]  rounded-xl bg-[#4CAF4F] border-2 border-[#4CAF4F] duration-300 ease-in-out hover:bg-[#fff] hover:text-[#000] mt-5">Register</button>
            </div>
            <div className="">
                <img className='mt-4 lg:mt-0' src={ban} alt="" />
            </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Banner