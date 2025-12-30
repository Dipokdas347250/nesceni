import React from 'react'
import Container from './Container'
import ban from "../assets/banner.png"

const Banner = () => {
  
  let [show, setShow] = React.useState(false);

  
  const handleReg = () => {
    setShow(!show);
   
  }

  return (
    <>
    <section className='py-24 lg:pt-40 pt-40 px-1 bg-[#F5F7FA]'>
        <Container>
            <div className=" lg:flex justify-between items-center">
            <div className="w-[100%] lg:w-[50%]">
                <h1 className=" text-[#18191F] font-semibold lg:text-[64px] sm:text-[42px] text-[28px] font-inter ">Lessons and insights  <span className=' inline-block text-[#4CAF4F]'>from 8 years</span> </h1>
                <p className="text-[#717171] font-medium text-[16px] font-inter">Where to grow your business as a photographer: site or social media? </p>
                <button onClick={handleReg} className=" px-5 py-2 text-[#fff]  rounded-xl bg-[#4CAF4F] border-2 border-[#4CAF4F] duration-300 ease-in-out hover:bg-[#fff] hover:text-[#000] mt-5">Register</button>
                {show && (<div className=" mt-2 p-4 lg:w-[30%] w-[50%] bg-green-100 text-green-800 rounded-md">
                  <ul>
                    <li className='p-2 border border-[#4caf4f] text-[#000] text-[18px] font-medium duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff] '>Hospital</li>
                    <li className='p-2 border border-[#4caf4f] text-[#000] text-[18px] font-medium mt-1 duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff] '>pre School</li>
                  </ul>
                </div> )}
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