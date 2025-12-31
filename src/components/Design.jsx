import React from 'react'
import Container from './Container'
import pana from '../assets/pana.png'

const Design = () => {
  return (
    <section className='py-10 lg:px-1 px-2 bg-[#fff]'>
    <Container>
        <div className=" lg:flex justify-between items-center">
            <div className="lg:w-[50%] w-full">
                <img className='w-full' src={pana} alt="" />

            </div>
            <div className="lg:w-[50%] w-full mt-10 lg:mt-0">
                <h1 className='text-[#4D4D4D] font-semibold lg:text-[36px] text-[28px] font-inter lg:w-[600px] '>How to design your site footer like we did</h1>
                <p className='text-[#7E7E7E] font-medium text-[16px] font-inter mt-5 '>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <button className='px-5 py-2 text-[#000]  rounded-xl border-2 border-[#4CAF4F] mt-8 duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff] '>Learn More</button>
            </div>
        </div>
    </Container>
</section>
  )
}

export default Design