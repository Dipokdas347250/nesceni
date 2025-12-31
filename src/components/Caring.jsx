import React from 'react'
import Container from './Container'
import car from "../assets/image 18.png"
import car01 from "../assets/image 19.png"
import car02 from "../assets/image 20.png"


const Caring = () => {
  return (
    <>
    <section className="py-10 lg:px-1 px-2 bg-[#fff]">
        <Container>
            
                <div className="text-center">
                    <h1 className="text-[#18191F] text-[36px] font-semibold font-inter text-center">Caring is the new marketing</h1>
                    <p className="text-[#7E7E7E] text-[16px] font-medium font-inter mt-3 lg:w-[615px] m-auto">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            
            </div>
            <div className=" lg:flex justify-around mt-5 ">
                <div className=" relative group overflow-hidden mt-2 lg:mt-0 ">
                  <img className='ml-[50%] translate-x-[-50%] lg:ml-0 lg:translate-x-0 ' src={car} alt="" />
                  <div className="lg:w-[80%] w-full sm:w-[50%] bg-[#fff] rounded-t-xl drop-shadow-xl cursor-pointer absolute ml-[50%] translate-x-[-50%] duration-500 ease-in-out bottom-[-200px] left-0 py-4 group-hover:bottom-0">
                      <p className="text-[#717171] text-[20px] font-semibold font-inter mt-3 text-center px-4 leading-6">Creating Streamlined Safeguarding Processes with OneRen​</p>
                      {/* <h1 className="text-[#4CAF4F] text-[20px] font-semibold font-inter text-center mt-3">Readmore</h1> */}
                       <button className='px-5 py-2  text-[#fff] bg-[#4CAF4F]  rounded-xl border-2 border-[#4CAF4F] ml-[50%] translate-x-[-50%] mt-8 duration-300 ease-in-out hover:bg-[#fff] hover:text-[#000] '> Read more </button>
                  </div>
                </div>
                <div className="relative group overflow-hidden mt-2 lg:mt-0">
                    <img className='ml-[50%] translate-x-[-50%] lg:ml-0 lg:translate-x-0' src={car01} alt="" />
                     <div className="lg:w-[80%] w-full sm:w-[50%] bg-[#fff] rounded-t-xl drop-shadow-xl cursor-pointer absolute ml-[50%] translate-x-[-50%] duration-500 ease-in-out bottom-[-200px] left-0 py-4 group-hover:bottom-0">
                      <p className="text-[#717171] text-[20px] font-semibold font-inter mt-3 text-center px-3 leading-6">What are your safeguarding responsibilities and how can you manage them?​</p>
                      
                      {/* <h1 className="text-[#4CAF4F] text-[20px] font-semibold font-inter text-center mt-3">Readmore</h1> */}
                      <button className='px-5 py-2  text-[#fff] bg-[#4CAF4F]  rounded-xl border-2 border-[#4CAF4F] ml-[50%] translate-x-[-50%] mt-8 duration-300 ease-in-out hover:bg-[#fff] hover:text-[#000] '> Read more </button>
                     
                     
                  </div>
                </div>
                <div className="relative group overflow-hidden mt-2 lg:mt-0">
                    <img className='ml-[50%] translate-x-[-50%] lg:ml-0 lg:translate-x-0' src={car02} alt="" />
                     <div className="lg:w-[80%] w-full sm:w-[50%] bg-[#fff] rounded-t-xl drop-shadow-xl cursor-pointer absolute ml-[50%] translate-x-[-50%] duration-500 ease-in-out bottom-[-200px] left-0 py-4 group-hover:bottom-0">
                      <p className="text-[#717171] text-[20px] font-semibold font-inter mt-3 text-center px-4 leading-6">Revamping the Membership Model with Triathlon Australia​</p>
                      {/* <h1 className="text-[#4CAF4F] text-[20px] font-semibold font-inter text-center mt-3">Readmore</h1> */}
                      <button className='px-5 py-2  text-[#fff] bg-[#4CAF4F]  rounded-xl border-2 border-[#4CAF4F] ml-[50%] translate-x-[-50%] mt-8 duration-300 ease-in-out hover:bg-[#fff] hover:text-[#000] '> Read more </button>
                  </div>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Caring