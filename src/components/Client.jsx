import React from 'react'
import Container from './Container'
import logo01 from "../assets/Logo (1).png"
import logo02 from "../assets/Logo (2).png"
import logo03 from "../assets/Logo (3).png"
import logo04 from "../assets/Logo (4).png"
import logo05 from "../assets/Logo (5).png"
import logo06 from "../assets/Logo (6).png"
import logo07 from "../assets/Logo (7).png"
import Marquee from 'react-fast-marquee'

const Client = () => {
  return (
    <>
    <section className='py-10 lg:px-1 px-2 bg-[#fff] ' id='about'>
        <Container>
           
            <div className=" text-center">
                <h1 className="text-[#4D4D4D] font-semibold text-[36px] font-inter">Our Clients</h1>
                <p className="text-[#717171] font-medium text-[16px] font-inter">We are proud to have worked with some of the best companies in the world.</p>
            </div>
              <Marquee className='' gradient={false} speed={100}>
            <div className="flex justify-between py-8 ">
                <img className=' lg:px-24 px-10' src={logo01} alt="" />
                <img className=' lg:px-24 px-10' src={logo02} alt="" />
                <img className=' lg:px-24 px-10' src={logo03} alt="" />
                <img className=' lg:px-24 px-10' src={logo04} alt="" />
                <img className=' lg:px-24 px-10' src={logo05} alt="" />
                <img className=' lg:px-24 px-10' src={logo06} alt="" />
                <img className=' lg:px-24 px-10' src={logo07} alt="" />
            </div>
              </Marquee>
            {/* <div className=" hidden lg:flex justify-between py-8">
                <img src={logo01} alt="" />
                <img src={logo02} alt="" />
                <img src={logo03} alt="" />
                <img src={logo04} alt="" />
                <img src={logo05} alt="" />
                <img src={logo06} alt="" />
                <img src={logo07} alt="" />
            </div> */}
            
        </Container>
    </section>
    </>
  )
}

export default Client