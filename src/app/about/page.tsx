"use client";

import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from "react";



const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-[#4A5C6A] via-gray-400 to-slate-500 " >
      
      <section className="about-section bg-gradient-to-r from-[#4A5C6A] via-gray-400 to-slate-500 py-12 md:py-24 lg:py-48 animate-gradient">
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






        {/* Container */}
        <div className="container mx-auto px-6 sm:px-12 lg:px-28 mt-36 text-center">
          {/* About Me Box */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[327px] h-[87px] justify-center flex items-center bg-transparent border-4 border-black" style={{ boxShadow: "10px 10px 20px #06141B" }}>About Me</h2>
            </div>


{/* About Me Content Section with Image and Paragraph Side by Side */}
<div className="flex flex-col lg:flex-row justify-center gap-10 items-center mt-40">
  {/* Image Container */}
  <div className="relative group w-64 h-72 mb-6 lg:mb-0 lg:mr-10">
    {/* Bottom Frame with subtle shadow */}
    <div className="absolute inset-0 bg-[#9BA8AB] z-0 border-2 transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-xl border-black shadow-lg" style={{ boxShadow: "10px 10px 20px #06141B" }}></div>

    {/* Image with Hover Effect */}
    <img
      className="absolute top-[-20px] left-4 w-64 h-72 border-4 bg-gradient-to-r from-[#4A5C6A] via-[#9BA8AB] to-[#4A5C6A] rounded-xl border-gray-800 object-cover z-20 transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-xl" style={{ boxShadow: "10px 10px 20px #06141B" }}
      alt="Muhammad Momin"
      src="images/MM.png" // Replace with your actual image path
    />
  </div>

  {/* Text Content */}
  <p className="text-gray-900 w-2/3 mt-12 border-l-2 border-gray-600 pl-6  max-w-xl lg:mt-0">
    Hi, I'm Muhammad Momin, a Front-End Developer and UI Designer with a passion for creating user-centric, responsive websites. I specialize in using HTML, CSS, JavaScript, and TypeScript to design seamless digital experiences. I believe that well-crafted user interfaces can transform how people interact with technology, and I aim to make those interactions both enjoyable and intuitive.

    With each project, I combine creativity and technical skills to build visually appealing, functional websites. I'm always learning and adapting to new trends, striving to stay ahead in a fast-evolving industry. My goal is to create products that not only look great but also offer real value to users and businesses alike.
  </p>
</div>
</div>



           

          {/* Explore */}
          <div className="mb-8 mt-32">
            <div className="flex justify-center">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2 w-36 border-l-2 border-r-2 border-black">Explore</h3>
            </div>
           
            <div className="w-28 border-t-2 border-gray-800 mx-auto mt-32"></div>
          </div>

          <div className='border-l-2 border-gray-700 px-20'>

          {/* Services Row 1 */}
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-12 mt-32 mb-8">
            {/* Design */}
            <div className="service-item">
            <img
             src="images/design.png"
             className="absolute w-48 h-48"
               />
              <h3 className="text-lg font-semibold mb-2 uppercase">Design</h3>
              <p className="text-gray-900">
                I specialize in crafting unique, user-centric designs tailored to align perfectly with your vision. Whether you need a complete website redesign or fresh, innovative design solutions from scratch, I bring creative ideas to life. My approach is collaborative, focusing on understanding your needs and transforming them into engaging, responsive designs that deliver a compelling user experience.
              </p>
            </div>
            {/* Development */}
            <div className="service-item">
            <img
             src="images/deployment.png"
             className="absolute w-48 h-48"
               />
              <h3 className="text-lg font-semibold mb-2 uppercase">Development</h3>
             
              <p className="text-gray-900">
                I specialize in building robust, scalable websites and web applications tailored to your specific needs. Whether it's developing a site from scratch or enhancing an existing one, I ensure a seamless user experience and top-notch performance. My development process is collaborative, ensuring that you're involved every step of the way, from concept to deployment, to create a product that truly represents your brand.
              </p>
              
            </div>
          </div>

          {/* Maintenance (Single in New Row) */}
          <div className="flex justify-center mt-32">
            <div className="service-item w-1/2">
            <img
             src="images/maintenance.png"
             className="absolute w-48 h-48"
               />
              <h3 className="text-lg font-semibold mb-2 uppercase">Maintenance</h3>
              <p className="text-gray-900">
                I offer ongoing maintenance services to ensure your website remains up-to-date, secure, and fully optimized. Whether it's regular updates, performance improvements, or bug fixes, I ensure your site runs smoothly at all times. I also provide consultation services, helping you make informed decisions about your site's future direction and growth.
              </p>
            </div>
          </div>
          </div>
        </div>
        <div className="w-32 border-t-2 border-gray-800 mx-auto mt-32"></div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
