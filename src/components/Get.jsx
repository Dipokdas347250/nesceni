import React from 'react'
import Container from './Container'



const Get = () => {
  return (
    <>
    <section className='lg:pt-24 pt-12 pb-8 lg:px-1 px-2 bg-[#F5F7FA] '>
        <Container>
            <div className="">
                <h2 className='text-[#18191F] font-semibold lg:text-[64px] sm:text-[42px] text-[28px] font-inter lg:w-[70%] w-full text-center m-auto lg:leading-[76px]'>Pellentesque suscipit fringilla libero eu.</h2>
               
                <button className='px-5 py-2  text-[#fff] bg-[#4CAF4F]  rounded-xl border-2 border-[#4CAF4F] ml-[50%] translate-x-[-50%] mt-8 duration-300 ease-in-out hover:bg-[#fff] hover:text-[#000] '> Get a Demo </button>
                
               
            </div>
        </Container>
    </section>
    </>
  )
}

export default Get