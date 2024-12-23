"use client";

import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import { useState } from 'react';




const Projects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-[#06141B] via-[#9BA8AB] to-[#253745] ">
    
     
    <section className="w-full h-auto bg-gradient-to-r from-[#06141B] via-[#9BA8AB] to-[#253745] text-white">
    
        
      {/* Header Section */}
      <header className="relative w-full h-[530px] flex items-center justify-center bg-cover bg-center" 
              style={{ backgroundImage: "url('images/1.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#11212D] via-[#4A5C6A] to-[#06141B] opacity-60"></div>

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
          <Link href="contact" className="px-4 rounded-full h-9 text-xl bg-white text-black font-semibold border-2 border-black hover:bg-gray-100 transition">Contact Me</Link>
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




        <h1 className="relative text-6xl  mt-36  text-black font-bold tracking-wider uppercase w-[420px] h-[107px] justify-center flex items-center bg-transparent border-8 border-black" style={{ boxShadow: "10px 10px 20px #06141B" }}>
          Portfolio
        </h1>
      </header>

      {/* Tabs Section */}
      <div className="flex justify-center space-x-20 py-8  bg-black"style={{ boxShadow: "28px 32px 60px #06141B" }}>
        <button className="text-lg font-bold text-white hover:text-gray-400 border-l-2 border-r-2 border-white w-36">PROJECTS</button>
       
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-20 gap-8 py-32">
        {/* Example Grid Item */}
        <div className="relative border group   transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://hackathon-2-xi.vercel.app" target="_blank" rel="noopener noreferrer">
          <img 
            src="images/4.png" 
            alt="Project 1" 
            className="w-full h-96 object-cover  transition-transform transform " 
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black  bg-opacity-70 transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">
              Description: Participated in a 24-hour hackathon where I developed a pixel-perfect, responsive UI based on an assigned Figma template. The project was submitted within the allocated time, adhering to guidelines and focusing on delivering a seamless user experience across devices.</p>
          </div>
          </a>

        </div>

        
          <div className="relative border  group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://cv-template-builder.vercel.app" target="_blank" rel="noopener noreferrer">
          <img 
            src="images/5.png" 
            alt="Project 2" 
            className="w-full h-96 object-cover transition-transform " 
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70  transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Built a CV template and builder application using HTML, CSS, and TypeScript. This project highlights your ability to implement a feature-rich user interface where users can design and customize professional CVs with ease.</p>
          </div>
          </a>

        </div>

        {/* Repeat for other grid items */}
        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://hackathon-2-xi.vercel.app" target="_blank" rel="noopener noreferrer">
          <img 
            src="images/6.png" 
            alt="Project 3" 
            className="w-full h-96 object-cover transition-transform transform " 
           
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70  transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Completed a practice Figma template as part of preparation for the hackathon. This template served as a foundational exercise to develop skills in creating pixel-perfect, responsive UI designs. The practice project helped refine my ability to translate design specifications into functional code, making the final project development process smoother and more efficient.</p>
          </div>
          </a>
        </div>


        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://deskify-store-blog.vercel.app" target="_blank" rel="noopener noreferrer">
         
          <img 
            src="images/deskify.png" 
            alt="Project 3" 
            className="w-full h-96 object-cover transition-transform transform " 
           
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70  transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Developed a comprehensive e-commerce website for Deskify Store using Next.js. This project integrates seamless shopping functionalities with a modern blog section, providing users with both a shopping and content-rich experience. The website is fully responsive, ensuring optimal usability across devices.</p>
          </div>
          </a>

        </div>


        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://momin-kitchen-website.vercel.app" target="_blank" rel="noopener noreferrer">
         
          <img 
            src="images/kitchen.png" 
            alt="Project 4" 
            className="w-full h-96 object-cover transition-transform transform " 
           
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Converted a Figma design into a fully functional and responsive kitchen-themed website using Next.js. This project showcases your expertise in transforming design concepts into a real-world application while maintaining design fidelity and responsive performance.</p>
          </div>
          </a>

        </div>



        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://calculator-zeta-beige.vercel.app" target="_blank" rel="noopener noreferrer">
          <img 
            src="images/Calculator.png" 
            alt="Project 5" 
            className="w-full h-96 object-cover transition-transform transform " 
           
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70  transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Created a basic calculator using HTML, CSS, and TypeScript. This project served as a skill assessment to practice logic implementation and user interface design for a functional utility tool.</p>
          </div>
          </a>

        </div>



        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://currency-converter-website-zeta.vercel.app" target="_blank" rel="noopener noreferrer">
         
          <img 
            src="images/currency converter.png" 
            alt="Project 6" 
            className="w-full h-96 object-cover transition-transform transform " 
           
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70  transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Developed a currency converter application with HTML, CSS, and TypeScript. This tool enables users to convert currencies seamlessly, focusing on data handling and interface usability.</p>
          </div>
          </a>

        </div>



        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://number-guessing-delta.vercel.app" target="_blank" rel="noopener noreferrer">
         
          <img 
            src="images/Guess.png" 
            alt="Project 7" 
            className="w-full h-96 object-cover transition-transform transform " 
           
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70  transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Designed a number guessing game to showcase your skills in HTML, CSS, and TypeScript. This interactive game demonstrates your ability to combine logic with engaging user experiences.</p>
          </div>
          </a>

        </div>



        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://showroom-website.vercel.app" target="_blank" rel="noopener noreferrer">
         
          <img 
            src="images/showroom.png" 
            alt="Project 8" 
            className="w-full h-96 object-cover transition-transform transform " 
           
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70  transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Built a showroom website using HTML, CSS, and TypeScript. This project focuses on creating a visually appealing platform to showcase products or services, demonstrating layout structuring and responsiveness.</p>
          </div>
          </a>

        </div>



        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://atm-puce.vercel.app" target="_blank" rel="noopener noreferrer">
         
          <img 
            src="images/ATM.png" 
            alt="Project 9" 
            className="w-full h-96 object-cover transition-transform transform " 
           
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70  transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Created an ATM simulation project using HTML, CSS, and TypeScript. This project emphasizes simulating real-world functionalities like balance checking, withdrawals, and deposits in an interactive interface.</p>
          </div>
          </a>

        </div>


        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}> 
        <Link href="/">    
          <img 
            src="images/portfolio.png" 
            alt="Project 10" 
            className="w-full h-96 object-cover cursor-pointer transition-transform transform "        
          />
          
          <div className="absolute inset-0 flex items-center cursor-pointer justify-center bg-black bg-opacity-70  transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Designed a professional portfolio using Next.js to showcase your skills and projects. This portfolio reflects your expertise in web development, attention to detail, and ability to present information effectively.</p>
          </div>
          </Link>
        </div>


        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://adventure-game-omega.vercel.app" target="_blank" rel="noopener noreferrer">
         
          <img 
            src="images/Adventure game.png" 
            alt="Project 11" 
            className="w-full h-96 object-cover transition-transform transform " 
           
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70  transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Developed an engaging adventure game using HTML, CSS, and TypeScript. This project highlights your ability to incorporate game logic and design captivating user interfaces.</p>
          </div>
          </a>

        </div>



        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="https://student-id-card-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
         
          <img 
            src="images/id-card.png" 
            alt="Project 12" 
            className="w-full h-96 object-cover transition-transform transform " 
           
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70  transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Created interactive ID cards with a responsive layout using Next.js. This project showcases your understanding of responsive design principles and the ability to enhance user interaction.</p>
          </div>
          </a>

        </div>



        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://word-counter-omega-drab.vercel.app" target="_blank" rel="noopener noreferrer">
         
          <img 
            src="images/Counter.png" 
            alt="Project 12" 
            className="w-full h-96 object-cover transition-transform transform " 
           
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70  transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Built a word counter tool using HTML, CSS, and TypeScript. This utility helps users count words and characters, showcasing your ability to develop functional tools with intuitive interfaces.</p>
          </div>
          </a>

        </div>



        <div className="relative border group  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
        <a href="http://to-do-list-eta-eight-96.vercel.app" target="_blank" rel="noopener noreferrer">
         
          <img 
            src="images/List.png" 
            alt="Project 14" 
            className="w-full h-96 object-cover transition-transform transform " 
           
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-opacity">
            <p className="text-[#CCD0CF] opacity-0 group-hover:opacity-100 px-8 font-bold">Description: Developed a simple yet functional To-Do List application using HTML, CSS, and TypeScript. This project focuses on task management features, demonstrating your ability to build user-centric applications.</p>
          </div>
          </a>

        </div>


     


       
        
      </div>

      <div className="flex justify-center py-24 ">
       <Link href="projects"> <h3 className="text-lg font-bold uppercase flex justify-center  tracking-wider mb-2 w-60 border-l-2 border-r-2 border-white">VIEW MORE PROJECT</h3> </Link>
       </div>

      {/* Footer */}
      <div className='flex justify-center items-center'>
      <footer className="text-center py-8 w-60 rounded-full justify-center flex  bg-black text-gray-400" style={{ boxShadow: "-36px -36px 40px #06141B, 36px 36px 40px #06141B" }} >
        <p>And many more to come!</p>
      </footer>
      </div>
    </section>
    <Footer />
    </div>
   
   
  );
};

export default Projects;
