import React from 'react'
import Container from './Container'
import fra from '../assets/Frame 35.png'

const Unseen = () => {
  return (
    <>
    <section className='py-10 px-1 bg-[#fff]'>
        <Container>
            <div className=" lg:flex justify-between items-center">
                <div className="lg:w-[50%] w-full">
                    <img className='w-full' src={fra} alt="" />

                </div>
                <div className="lg:w-[50%] w-full">
                    <h1 className='text-[#4D4D4D] font-semibold lg:text-[36px]  text-[28px] font-inter lg:w-[600px] '>The unseen of spending three years at Pixelgrade</h1>
                    <p className='text-[#7E7E7E] font-medium text-[16px] font-inter mt-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <button className='px-5 py-2 text-[#000]  rounded-xl border-2 border-[#4CAF4F] mt-8 duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff] '>Learn More</button>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Unseen