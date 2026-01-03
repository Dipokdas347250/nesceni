import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";




const Contact = () => {
  return (
    <section id="contact">
        
            <div className="relative min-h-screen overflow-hidden  flex items-center justify-center px-4 py-20">

      {/* Background Orbs */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#4CAF4F]/40 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[500px] h-[500px] bg-[#4CAF4F]/40 rounded-full blur-[160px]" />

      {/* Main Card */}
      <div className="relative z-10 max-w-6xl w-full rounded-[5px] grid md:grid-cols-2 overflow-hidden 
                      bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_40px_120px_rgba(109,93,246,0.35)]">

        {/* Left Brand Section */}
        <div className="relative lg:p-12 p-6 flex flex-col justify-between bg-gradient-to-br from-[#4CAF4F]/90 to-[#9F8CFF]/90 text-white">
          <div>
            <h2 className="lg:text-5xl text-[30px] font-extrabold leading-tight mb-6">
              Start Your <br /> Next Big Idea
            </h2>
            <p className="text-indigo-100 max-w-md text-lg">
              At Soft Vio, we blend strategy, design, and technology to create
              meaningful digital experiences.
            </p>
          </div>

          <div className="space-y-4 text-sm opacity-90">
            <p className="flex items-center gap-3"><FaLocationDot /> Dhaka, Bangladesh</p>
            <p className="flex items-center gap-3"><MdMarkEmailRead /> hello@softvio.com</p>
            <p className="flex items-center gap-3"><FaPhoneAlt /> +880 1234 567 890</p>
          </div>

          {/* Inner Glow */}
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
        </div>

        {/* Form Section */}
        <div className="lg:p-12 p-6 bg-[#0E0C1F]/80">
          <h3 className="text-3xl font-semibold text-white mb-2">
            Contact Soft Vio
          </h3>
          <p className="text-gray-400 mb-10">
            Tell us about your project and we’ll reach out soon.
          </p>

          <form className="space-y-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                className="peer w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent
                           focus:outline-none focus:border-[#9F8CFF]"
              />
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all 
                                 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                                 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#9F8CFF]">
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="peer w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent
                           focus:outline-none focus:border-[#9F8CFF]"
              />
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all 
                                 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                                 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#9F8CFF]">
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                rows="3"
                placeholder="Message"
                className="peer w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent
                           focus:outline-none focus:border-[#9F8CFF]"
              ></textarea>
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all 
                                 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                                 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#9F8CFF]">
                Message
              </label>
            </div>

            <button
              type="submit"
              className="group relative w-full py-4 rounded-[2px] font-semibold text-white
                         bg-gradient-to-r from-[#4CAF4F] to-[#9F8CFF]
                         shadow-[0_20px_50px_rgba(159,140,255,0.45)]
                         hover:scale-[1.02] transition-all duration-300"
            >
              Send Message
              <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition" />
            </button>
          </form>
        </div>
      </div>
    </div>
       
    </section>
  );
};

export default Contact;
