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
                        <h1 className='text-[#4D4D4D] font-semibold lg:text-[36px] text-[28px] font-inter lg:w-[600px] '>A Thoughtfully Crafted Footer Experience</h1>
                        <p className='text-[#7E7E7E] font-medium text-[16px] font-inter mt-5 '>Designed to enhance usability, accessibility, and brand trust.

                            Combining clarity, consistency, and user-first design.

                            A seamless balance of function, structure, and simplicity.

                            Built to support navigation, engagement, and connection.

                            Where every detail improves the user journey.
                        </p>
                        <button className='px-5 py-2 text-[#000]  rounded-xl border border-[#4CAF4F] mt-8 duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff] '>Learn More</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Design