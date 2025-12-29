import React from 'react'
import Container from './Container'
import icon001 from '../assets/Icon01.png'
import icon002 from '../assets/Icon02.png'
import icon003 from '../assets/Icon.png'

const Manage = () => {
    return (
        <>
            <section className='py-10 lg:px-1 px-3 bg-[#fff]'>
                <Container>
                    <div className="">

                        <h1 className='text-[#4D4D4D] font-semibold lg:text-[36px] sm:text-[28px] text-[22px] font-inter m-auto text-center lg:w-[580px]'>Manage your entire community in a single system</h1>
                        <p className='text-[#7E7E7E] font-medium text-[16px] font-inter text-center'>Who is Nextcent suitable for?
                        </p>
                       </div>
                       <div className=" lg:flex justify-between mt-5">
                        <div className=" lg:w-[30%] w-full p-4 bg-[#fff] rounded-md  drop-shadow-lg duration-300 ease-in-out hover:transform hover:scale-105">
                            <img className='ml-[50%] translate-x-[-50%]' src={icon001} alt="icon001" />
                            <h3 className=' text-[#4D4D4D] font-semibold text-[28px] font-inter text-center'>Membership Organisations</h3>
                            <p className=' text-[#4D4D4D] font-semibold text-[16px] font-inter text-center'> Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                        <div className=" lg:w-[30%] w-full p-4 my-3 lg:my-0 bg-[#fff] rounded-md  drop-shadow-lg duration-300 ease-in-out hover:transform hover:scale-105">
                            <img className='ml-[50%] translate-x-[-50%]' src={icon002} alt="icon002" />
                            <h3 className=' text-[#4D4D4D] font-semibold text-[28px] font-inter text-center w-[70%] m-auto'>National Associations</h3>
                            <p className=' text-[#4D4D4D] font-semibold text-[16px] font-inter text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                        <div className=" lg:w-[30%] w-full p-4 bg-[#fff] rounded-md  drop-shadow-lg duration-300 ease-in-out hover:transform hover:scale-105">
                            <img className='ml-[50%] translate-x-[-50%]' src={icon003} alt="icon003" />
                            <h3 className=' text-[#4D4D4D] font-semibold text-[28px] font-inter text-center w-[60%] m-auto'>Clubs And Groups</h3>
                            <p className=' text-[#4D4D4D] font-semibold text-[16px] font-inter text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                       </div>
                </Container>
            </section>
        </>
    )
}

export default Manage