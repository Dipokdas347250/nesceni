import React, { useState } from 'react'
import Container from './Container'
import logo from "../assets/Logo.png"
import { GiLightSabers } from "react-icons/gi";
import { FaBars } from "react-icons/fa";


const Navber = () => {

    let [show , setShow] = useState(()=>{

    })
   





  return (
    <nav className=" bg-[#F5F7FA]  py-3 px-1 w-full fixed z-50">
        <Container >
       <div className="flex items-center ">
       <div className="flex justify-between items-center w-full">
     
     <div className="lg:w-[20%] w-[40%]">
     <img  src={logo} alt="logo" />
      </div>
     <div className="lg:w-[80%]">
         <div className={`lg:flex justify-between items-center absolute lg:static  duration-700 ease-in-out ${show== true ? "bg-[#FB2E86] w-full top-10 left-0" : "w-full top-[-300px] left-0"}`}>
             <div className="lg:w-[70%] w-full">
                 <ul className="lg:flex justify-around text-center  ">
                     <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F] mt-3 lg:mt-0'>Home</li>
                     <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F] mt-3 lg:mt-0'>Service</li>
                     <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F] mt-3 lg:mt-0'>Feature</li>
                     <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F] mt-3 lg:mt-0'>Product</li>
                     <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F] mt-3 lg:mt-0'>Testimonial</li>
                     <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F] mt-3 lg:mt-0'>FAQ</li>
                 </ul>
             </div>
             
                 <div className="lg:w-[30%] w-full lg:flex lg:justify-end flex justify-center   gap-4 font-inter pb-3 lg:pb-0 mt-3 lg:mt-0">
                     <button className='px-5 py-2 text-[#000]  rounded-xl border-2 border-[#4CAF4F] duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff] '>Login</button>
                     <button className=' px-5 py-2 text-[#000]  rounded-xl border-2 border-[#4CAF4F] duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff]'>Sign UP</button>
                 </div>
            
         </div>
     </div>
 {/* <div className="w-[50%]">
     <ul className={`lg:flex justify-around text-center lg:static absolute duration-700 ease-in-out ${show== true ? "bg-[#4CAF4F] w-full top-16 left-0" : "w-full top-[-300px] left-0"}`}>
         <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F]'>Home</li>
         <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F]'>Service</li>
         <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F]'>Feature</li>
         <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F]'>Product</li>
         <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F]'>Testimonial</li>
         <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F]'>FAQ</li>
     </ul>
 </div>
 <div className="w-[20%] flex justify-end   gap-4 font-inter">
     <button className='px-5 py-2 text-[#000]  rounded-xl border-2 border-[#4CAF4F] duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff] '>Login</button>
     <button className=' px-5 py-2 text-[#000]  rounded-xl border-2 border-[#4CAF4F] duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff]'>Sign UP</button>
 </div> */}
 
     
     </div>
     <div className=" lg:hidden cursor-pointer    " onClick={()=>setShow(!show)}>
         {show == true ?  <GiLightSabers /> : <FaBars />}
         
     </div>
       </div>
        </Container>
    </nav>
  
  )
}

export default Navber