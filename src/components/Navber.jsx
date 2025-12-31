import React, { useState } from 'react'
import Container from './Container'
import logo from "../assets/Logo.png"
import { GiLightSabers } from "react-icons/gi";
import { FaBars } from "react-icons/fa";





const Navber = () => {

    let [show, setShow] = useState(() => {

    })

     let [login, setLogin] = React.useState(false);
    
      
      const handlelogin = () => {
        setLogin(!login);
       
      }






    return (
        <nav className=" bg-[#F5F7FA]  lg:py-3 lg:px-1 px-2 w-full fixed z-50 shadow-lg">
            <Container >
                <div className="flex justify-between items-center lg:hidden py-2 px-1 shadow-sm">
                    <div className=" lg:hidden cursor-pointer  border border-[#bdebbe] p-2 rounded-[2px]   " onClick={() => setShow(!show)}>
                        {show == true ? <GiLightSabers /> : <FaBars />}

                    </div>
                    <div className=" ">

                        <div className="">
                            <div className={`lg:flex justify-between items-center absolute lg:static  duration-700 ease-in-out ${show == true ? "bg-white  hover:text-[#fff] w-[35%] top-[52px] left-1 " : "w-[35%] top-[-400px] left-1 shadow-lg"}`}>
                                <div className="lg:w-[70%] w-full">
                                    <ul className="lg:flex justify-around p-3  ">
                                        <li className={`p-2 text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out ${show == true ? "hover:text-black hover:bg-gray-100" : ""}   hover:text-[#4CAF4F] mt-1 lg:mt-0`}>Home</li>
                                        <li className={`p-2 text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out ${show == true ? "hover:text-black hover:bg-gray-100" : ""}   hover:text-[#4CAF4F] mt-1 lg:mt-0`}>About</li>
                                        <li className={`p-2 text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out ${show == true ? "hover:text-black hover:bg-gray-100" : ""}   hover:text-[#4CAF4F] mt-1 lg:mt-0`}>Service</li>
                                        <li className={`p-2 text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out ${show == true ? "hover:text-black hover:bg-gray-100" : ""}   hover:text-[#4CAF4F] mt-1 lg:mt-0`}>Product</li>
                                        
                                        <li className={`p-2 text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out ${show == true ? "hover:text-black hover:bg-gray-100" : ""}   hover:text-[#4CAF4F] mt-1 lg:mt-0`}>Contact</li>
                                    </ul>
                                </div>


                            </div>
                        </div>


                    </div>
                        <div className="">
                            <img className='' src={logo} alt="logo" />
                        </div>

                    <div className="font-inter ">
                        <button onClick={handlelogin} className=' py-1 px-4 text-[#000]  rounded-[2px] text-[16px] border border-[#bdebbe] duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff] '>Login</button>
                        
                       
                    </div>
                    

                </div>
                {login && (<div className=" mt-2 p-2 lg:w-[30%] w-[45%] bg-white text-green-800 shadow-lg rounded-md  absolute top-[45px] right-0 lg:hidden">
                  <ul className='text-end'>
                    <li className='p-2  text-[#000] text-[16px] font-medium duration-300 ease-in-out hover:bg-gray-100 hover:text-[#4CAF4F] cursor-pointer '>Astha Academic</li>
                    <li className='p-2  text-[#000] text-[16px] font-medium mt-1 duration-300 ease-in-out hover:bg-gray-100 hover:text-[#4CAF4F] cursor-pointer '>Astha Hospital </li>
                    <li className='p-2  text-[#000] text-[16px] font-medium mt-1 duration-300 ease-in-out hover:bg-gray-100 hover:text-[#4CAF4F] cursor-pointer '>Astha Wallet</li>
                  </ul>
                </div> )}
                <div className="flex items-center lg:block hidden ">
                    <div className="flex justify-between items-center w-full">

                        <div className="lg:w-[20%] w-[40%]">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="lg:w-[80%]">
                            <div className={`lg:flex justify-between items-center absolute lg:static  duration-700 ease-in-out ${show == true ? "bg-[#4CAF4F] hover:text-[#fff] w-full top-14 left-0" : "w-full top-[-300px] left-0"}`}>
                                <div className="lg:w-[70%] w-full">
                                    <ul className="lg:flex justify-around text-center  ">
                                        <li className={`text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out ${show == true ? "hover:text-[#fff]" : ""}   hover:text-[#4CAF4F] mt-3 lg:mt-0`}>Home</li>
                                        <li className={`text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out ${show == true ? "hover:text-[#fff]" : ""}   hover:text-[#4CAF4F] mt-3 lg:mt-0`}>About</li>
                                        <li className={`text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out ${show == true ? "hover:text-[#fff]" : ""}   hover:text-[#4CAF4F] mt-3 lg:mt-0`}>Service</li>
                                        <li className={`text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out ${show == true ? "hover:text-[#fff]" : ""}   hover:text-[#4CAF4F] mt-3 lg:mt-0`}>Product</li>
                                        
                                        <li className={`text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out ${show == true ? "hover:text-[#fff]" : ""}   hover:text-[#4CAF4F] mt-3 lg:mt-0`}>Contact</li>
                                    </ul>
                                </div>

                                <div className="lg:w-[30%] w-full lg:flex lg:justify-end flex justify-center   gap-4 font-inter pb-3 lg:pb-0 mt-3 lg:mt-0">
                                    <button onClick={handlelogin} className='px-5 py-2 text-[#000]  rounded-[2px] border border-[#4CAF4F] duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff] '>Login</button>
                                  
                                </div>

                            </div>
                        </div>
                       {login && (<div className=" mt-2 p-2  bg-white text-green-800 shadow-lg rounded-md  absolute top-[60px] right-[184px] ">
                  <ul className='text-end'>
                    <li className='p-2  text-[#000] text-[16px] font-medium duration-300 ease-in-out hover:bg-gray-100 hover:text-[#4CAF4F] cursor-pointer '>Astha Academic</li>
                    <li className='p-2  text-[#000] text-[16px] font-medium mt-1 duration-300 ease-in-out hover:bg-gray-100 hover:text-[#4CAF4F] cursor-pointer '>Astha Hospital </li>
                    <li className='p-2  text-[#000] text-[16px] font-medium mt-1 duration-300 ease-in-out hover:bg-gray-100 hover:text-[#4CAF4F] cursor-pointer '>Astha Wallet</li>
                  </ul>
                </div> )}   
                        {/* <div className="w-[50%] lg:hidden">
     <ul className={`lg:flex justify-around text-center lg:static absolute duration-700 ease-in-out ${show== true ? "bg-[#4CAF4F] w-full top-16 left-0" : "w-full top-[-300px] left-0"}`}>
         <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F]'>Home</li>
         <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F]'>Service</li>
         <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F]'>Feature</li>
         <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F]'>Product</li>
         <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F]'>Testimonial</li>
         <li className=' text-[#18191F] font-medium text-[16px] font-inter cursor-pointer duration-300 ease-in-out  hover:text-[#4CAF4F]'>FAQ</li>
     </ul>
 <div className="w-[20%] flex justify-end   gap-4 font-inter">
     <button className='px-5 py-2 text-[#000]  rounded-xl border-2 border-[#4CAF4F] duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff] '>Login</button>
     <button className=' px-5 py-2 text-[#000]  rounded-xl border-2 border-[#4CAF4F] duration-300 ease-in-out hover:bg-[#4CAF4F] hover:text-[#fff]'>Sign UP</button>
 </div>
 </div> */}


                    </div>
                    <div className=" lg:hidden cursor-pointer    " onClick={() => setShow(!show)}>
                        {show == true ? <GiLightSabers /> : <FaBars />}

                    </div>
                </div>
            </Container>
        </nav>

    )
}

export default Navber