"use client";


import Footer from '../components/Footer'; 
import Link from 'next/link';
import { useState } from 'react';


const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-gradient-to-r from-[#06141B] via-[#9BA8AB] to-[#11212D]'>
    
    <section className="w-full bg-gradient-to-r from-[#06141B] via-[#9BA8AB] to-[#11212D]  py-40 px-8 md:px-24">

    <Link href="/">
          <img
            className="w-32 h-32 absolute top-4 left-28 transform -translate-x-1/2" 
            alt="logo"
            src="images/3.png" 
          />
        </Link>

         {/* Desktop Buttons */}
       <div className="absolute top-10 right-10 hidden md:flex flex-wrap gap-4 px-6 py-3">
          <Link href="about" className="px-4 rounded-full text-xl text-black font-bold transition">About Me</Link>
          <Link href="skills" className="px-4 rounded-full text-xl text-black font-bold transition">Skills</Link>
          <Link href="projects" className="px-4 rounded-full text-xl text-black font-bold transition">Portfolio</Link>
          <Link href="contact" className="px-4 rounded-full h-9 text-xl bg-white text-black font-bold border-2 border-black hover:bg-gray-100 transition">Contact Me</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center absolute top-16 right-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="text-black focus:outline-none">
            {/* Hamburger icon */}
            <div
              className={`w-6 h-1 bg-black my-1 rounded transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></div>
            <div
              className={`w-6 h-1 bg-black my-1 rounded transition-all ${isMenuOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`w-6 h-1 bg-black my-1 rounded transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden w-full bg-gradient-to-r from-[#06141B] via-[#9BA8AB] to-[#253745] absolute top-20 left-0  ${isMenuOpen ? "block" : "hidden"} p-4`}>
        <Link href="/" className="block text-white py-2">Home</Link>
          <Link href="about" className="block text-white py-2">About Me</Link>
          <Link href="skills" className="block text-white py-2">Skills</Link>
          <Link href="projects" className="block text-white py-2">Portfolio</Link>
          <Link href="contact" className="block text-white py-2">Contact Me</Link>
        </div>



      {/* Contact Header */}
      <div className="text-center mt-36 mb-12">
        <div className='flex justify-center '>
        <h2 className="text-4xl font-bold uppercase tracking-widest mb-4  w-[327px] h-[87px] justify-center flex items-center bg-transparent border-4 border-black" style={{ boxShadow: "10px 10px 20px #06141B" }}>Contact</h2>
        </div>
        <p className="text-gray-800 mt-10 max-w-2xl mx-auto">
        Feel free to reach out to me for any opportunities, collaborations, or inquiries. I am always excited to connect and explore new ideas. Let's work together to create something meaningful and impactful!
        </p>
        <div className="w-28 border-t-2 border-gray-800 mx-auto mt-12"></div>
      </div>

      {/* Contact Form */}
      <form action="29830fbd-76b6-40fe-8d8c-630a992b22b4" method='POST' className="max-w-2xl mx-auto space-y-12 mt-24">
        <input type="hidden" name="access_key" value="your access key" />
        {/* Name Field */}
        <div className="mb-6">        
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            className="w-full border-t-0 border-l-2 border-r-0 border-b-2  border-black focus:border-black focus:outline-none py-2 px-3 bg-transparent placeholder-gray-700" 
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            className="w-full border-t-0 border-l-2 border-r-0 border-b-2 border-black focus:border-black focus:outline-none py-2 px-3 bg-transparent placeholder-gray-700"
          />
        </div>

        {/* Phone Number Field */}
        <div className="mb-6">        
          <input
            id="phone"
            type="text"
            placeholder="Phone Number"
            className="w-full border-t-0 border-l-2 border-r-0 border-b-2 border-black focus:border-black focus:outline-none py-2 px-3 bg-transparent placeholder-gray-700"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <textarea
            id="message"
            rows={5}
            placeholder="Your Message"
            className="w-full border-t-0 border-l-2 border-r-0 border-b-2 border-black focus:border-black focus:outline-none py-2 px-3 bg-transparent resize-none placeholder-gray-700"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <Link href="/">
          <button
            type="submit"
            className="px-8 py-2 border-l-2 border-r-2 border-black text-black font-semibold uppercase hover:bg-black hover:text-white transition-all"
          >
            Submit
          </button>
          </Link>
        </div>
      </form>
    </section>
    <Footer />
    </div>

  );
};

export default Contact;
