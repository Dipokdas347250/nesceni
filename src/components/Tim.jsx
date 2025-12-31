import React from 'react'
import Container from './Container'
import panaa from '../assets/image 9.png'
import logo01 from "../assets/Logo (1).png"
import logo02 from "../assets/Logo (2).png"
import logo03 from "../assets/Logo (3).png"
import logo04 from "../assets/Logo (4).png"
import logo05 from "../assets/Logo (5).png"
import logo06 from "../assets/Logo (6).png"




const Tim = () => {
    return (
        <>
            <section className='py-8 lg:px-1 px-2 bg-[#F5F7FA]'>
                <Container>
                    <div className=" lg:flex justify-between items-center">
                        <div className="lg:w-[40%] w-full">
                            <img className='' src={panaa} alt="" />
                        </div>
                        <div className="lg:w-[60%] w-full">
                            <p className='text-[#7E7E7E] font-medium text-[16px] font-inter  '>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                            <h3 className='text-[#4CAF4F] font-semibold text-[20px] font-inter mt-5 '>Tim Smith</h3>
                            <h5 className='text-[#7E7E7E] font-medium text-[16px] font-inter mt-5 '>British Dragon Boat Racing Association</h5>
                            <div className=" flex justify-between items-center mt-3">
                                <img src={logo01} alt="" />
                                <img src={logo02} alt="" />
                                <img src={logo03} alt="" />
                                <img src={logo04} alt="" />
                                <img src={logo05} alt="" />
                                
                              
                                    <h4 className='text-[#4CAF4F] font-semibold lg:text-[20px] font-inter  '>Meet all customers</h4>
                                   
                                   
                                
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Tim