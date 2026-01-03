import React from 'react'
import Container from './Container'
import logo from "../assets/Logo0.png"
import { FaFacebookSquare ,FaInstagramSquare} from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";




const Footer = () => {
  return (
    <>
    <section className='py-6 lg:px-1 px-2 bg-[#263238] '>
        <Container>
            <div className=" ">
                <div className="lg:flex lg:justify-between items-center ">
                    <img className='ml-[50%] translate-x-[-50%] lg:ml-0 lg:translate-x-0 h-[40px]' src={logo} alt="logo" />
                    <p className="text-[#F5F7FA] font-inter text-[16px] mt-4 lg:mt-0 text-center">Copyright © 2020 Soft vio it . All rights reserved .</p>
                    <div className="ml-[50%] translate-x-[-50%] lg:ml-0 lg:translate-x-0 mt-4 lg:mt-0 ">
                        <div className=" flex justify-center  gap-4 text-[24px]   ">
                        < FaFacebookSquare className='text-[#0866FF] ' />
                        
                        < FaWhatsappSquare className='text-[#0ee415]' />
                        
                    </div>
                    </div>
                </div>
                {/* <div className="lg:w-[60%] w-full">
                    <div className=" lg:flex justify-between">
                    <div className="lg:w-[30%] w-full text-center">
                        <h1 className="text-[#F5F7FA] font-semibold text-[20px] font-inter mt-3 lg:mt-0 ">Company</h1>
                        <ul className="mt-3 ">
                            <li className="text-[#F5F7FA] font-inter lg:text-[16px] text-[14px] cursor-pointer my-1">About us</li>
                            <li className="text-[#F5F7FA] font-inter lg:text-[16px] text-[14px] cursor-pointer my-1">Blog</li>
                            <li className="text-[#F5F7FA] font-inter lg:text-[16px] text-[14px] cursor-pointer my-1">Contact us</li>
                            <li className="text-[#F5F7FA] font-inter lg:text-[16px] text-[14px] cursor-pointer my-1">Pricing</li>
                            <li className="text-[#F5F7FA] font-inter lg:text-[16px] text-[14px] cursor-pointer my-1">Testimonials</li>
                        </ul>
                    </div>
                    <div className="lg:w-[30%] w-full text-center"> 
                        <h1 className="text-[#F5F7FA] font-semibold text-[20px] font-inter mt-3 lg:mt-0">Support</h1>
                        <ul className="mt-3">
                            <li className="text-[#F5F7FA] font-inter lg:text-[16px] text-[14px] cursor-pointer my-1">Help Support</li>
                            <li className="text-[#F5F7FA] font-inter lg:text-[16px] text-[14px] cursor-pointer my-1">Terms of service</li>
                            <li className="text-[#F5F7FA] font-inter lg:text-[16px] text-[14px] cursor-pointer my-1">Legal</li>
                            <li className="text-[#F5F7FA] font-inter lg:text-[16px] text-[14px] cursor-pointer my-1">Privacy policy</li>
                            <li className="text-[#F5F7FA] font-inter lg:text-[16px] text-[14px] cursor-pointer my-1">Status</li>
                        </ul>
                    </div>
                    <div className="lg:w-[40%] w-full text-center">
                        <h1 className="text-[#F5F7FA] font-semibold text-[20px] font-inter mt-3 lg:mt-0">Stay up to date</h1>
                       <form action="" className="mt-3">
                            <input type="text" placeholder="Enter your email" className="w-[65%] py-2 px-3 rounded-l-xl outline-none" />
                            <button className="bg-[#4CAF4F] text-[#fff] rounded-r-xl px-3 py-2">Subscribe</button>
                            </form>

                    </div>
                    </div>
                </div> */}
            </div>
        </Container>
    </section>
    </>
  )
}

export default Footer