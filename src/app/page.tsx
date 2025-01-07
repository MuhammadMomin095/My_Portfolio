"use client";

import { useState } from 'react';
import Footer from './components/Footer';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#CCD0CF] via-[#253745] to-[#06141B]">




      
      {/* Hero Section */}
      <section className="relative flex flex-col items-start justify-center py-24">
  <Link href="/">
    <img
      className="w-44 h-44 absolute top-4 left-24 sm:left-10"
      alt="logo"
      src="images/3.png"
    />
  </Link>


  <div className="flex flex-col lg:flex-row relative">
  {/* Text Content */}
  <div className="px-8 sm:px-12 mt-32 sm:mt-48 z-10 relative sm:text-start">
    <h2 className="text-3xl sm:text-4xl font-bold text-black animate-typing">
      <span className="typing-text">Hi, I am </span>
    </h2>

    <h1 className="text-5xl sm:text-7xl font-bold mt-4 text-black animate-typing">
      <span className="typing-text">Muhammad</span>
    </h1>

    <h1 className="text-5xl sm:text-7xl font-bold mt-4 text-black animate-typing">
      <span className="typing-text">Momin</span>
    </h1>

    <p className="text-xl sm:text-2xl font-bold mt-3 text-[#CCD0CF] lg:text-gray-700 animate-typing">
      <span className="typing-text">Front-end Developer | UI/UX Designer</span>
    </p>

    {/* Personal Introduction */}
    <p className="text-lg mt-14 sm:text-xl border-l-2 border-gray-600 pl-6 max-w-xl w-full sm:w-3/4 text-[#CCD0CF] lg:text-gray-800">
      A passionate web developer and designer with a knack for creating dynamic, responsive, and user-friendly websites. I specialize in bringing creative concepts to life with a focus on sleek design and optimized performance.
    </p>

    <Link href="projects">
      <div className="text-center py-8 mt-14 w-60 rounded-full justify-center flex bg-black text-gray-400" style={{ boxShadow: "16px 16px 20px #06141B" }}>
        <p>Explore My Work</p>
      </div>
    </Link>

    {/* Social Icons */}
    <div className="px-8 sm:px-24 flex mt-20 space-x-6 text-gray-600">
      <Link href="https://github.com/MuhammadMomin095" target="_blank" title="Visit my GitHub">
        <FaGithub className="w-11 h-11 hover:text-black transition" />
      </Link>
      <Link href="https://www.linkedin.com/in/muhammad-momin-62069b2b9/" target="_blank" title="Connect with me on LinkedIn">
        <FaLinkedin className="w-11 h-11 hover:text-black transition" />
      </Link>
      <Link href="https://www.instagram.com/mominshykh/?hl=en" target="_blank" title="Follow me on Instagram">
        <FaInstagram className="w-11 h-11 hover:text-black transition" />
      </Link>
    </div>
  </div>

  {/* Hero Image */}
  <img
    src="images/MM.png"
    className=" relative object-cover w-full sm:w-auto sm:h-auto sm:mt-16 z-0"
    alt="Hero Image"
  />
</div>


 

  {/* Desktop Navigation Buttons */}
  <div className="absolute top-10 right-10 hidden md:flex flex-wrap gap-4 px-6 py-3 z-10">
    <Link href="/" className="px-4 rounded-full text-xl text-white font-bold transition">Home</Link>
    <Link href="about" className="px-4 rounded-full text-xl text-white font-bold transition">About Me</Link>
    <Link href="skills" className="px-4 rounded-full text-xl text-white font-bold transition">Skills</Link>
    <Link href="projects" className="px-4 rounded-full text-xl text-white font-bold transition">Portfolio</Link>
    <Link href="contact" className="px-4 rounded-full h-9 text-xl bg-white text-black font-bold border-2 border-black hover:bg-gray-100 transition">Contact Me</Link>
  </div>

  {/* Mobile Hamburger Button */}
  <div className="md:hidden flex items-center absolute top-16 right-10 z-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    <button className="text-black focus:outline-none">
      <div className={`w-6 h-1 bg-white my-1 rounded transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
      <div className={`w-6 h-1 bg-white my-1 rounded transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
      <div className={`w-6 h-1 bg-white my-1 rounded transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
    </button>
  </div>

  {/* Mobile Menu */}
  <div className={`md:hidden w-full bg-gradient-to-r from-[#06141B] via-[#9BA8AB] to-[#253745] absolute top-20 left-0 ${isMenuOpen ? "block" : "hidden"} p-4 z-10`}>
    <Link href="/" className="block text-white py-2">Home</Link>
    <Link href="about" className="block text-white py-2">About Me</Link>
    <Link href="skills" className="block text-white py-2">Skills</Link>
    <Link href="projects" className="block text-white py-2">Portfolio</Link>
    <Link href="contact" className="block text-white py-2">Contact Me</Link>
  </div>
</section>






      {/* About Me Section */}
      <section className="px-8 py-16 bg-gradient-to-r from-[#06141B]  via-[#253745] to-[#CCD0CF] " style={{ boxShadow: "-44px -44px 96px #06141B" }}>
      <div className="flex justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[327px] h-[87px] justify-center flex items-center bg-transparent border-4 text-[#CCD0CF] border-black" style={{ boxShadow: "10px 10px 20px #06141B" }}>About</h2>
            </div>
            <div className='flex justify-center mt-24'>
        <p className="text-[#CCD0CF] text-lg w-2/3 mt-24 pr-8 pl-8 border-l-2 border-r-2 border-gray-600  max-w-xl lg:mt-0">
         Hi, I'm Muhammad Momin, a Front-End Developer and UI Designer with a passion for creating user-centric, responsive websites. I specialize in using HTML, CSS, JavaScript, and TypeScript to design seamless digital experiences. I believe that well-crafted user interfaces can transform how people interact with technology, and I aim to make those interactions both enjoyable and intuitive.

        With each project, I combine creativity and technical skills to build visually appealing, functional websites. I'm always learning and adapting to new trends, striving to stay ahead in a fast-evolving industry. My goal is to create products that not only look great but also offer real value to users and businesses alike.
       </p>
       </div>
        <div className="flex justify-center mt-8">
          <Link href="about" >
              <div className="text-center py-8 mt-14 w-60 rounded-full justify-center flex  bg-black text-gray-400" style={{ boxShadow: " 16px 16px 20px #06141B" }} >
           <p>Learn More</p>
         </div></Link>
        </div>
      </section>







      {/* Skills Section */}
      <section className="px-8 py-16 bg-gradient-to-r from-[#06141B]  via-[#253745] to-[#CCD0CF]" >
      <div className="flex justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[327px] h-[87px] justify-center flex items-center bg-transparent border-4 text-[#CCD0CF] border-black" style={{ boxShadow: "10px 10px 20px #06141B" }}>Skills</h2>
            </div>
            <div className="grid sm:grid-cols-1 sm:px-40   md:grid-cols-1 md:px-40 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-24">



           {/* Skill Box for Next.js */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/next.js.png" alt="Next.js" className="lg:h-16 md:h-20 sm:h-24" />
    <p className="text-center mt-3 font-bold text-white ">Next.js</p>
    <p className="text-center mt-2 text-sm text-white ">
      Next.js is a powerful React framework that enables server-side rendering (SSR) and static site generation (SSG). It's known for its performance, scalability, and SEO-friendly capabilities.
    </p>



  </div> {/* Skill Box for Figma */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/figma.png" alt="Figma" className="lg:h-16 md:h-20 sm:h-24" />
    <p className="text-center mt-3 font-bold text-white ">Figma</p>
    <p className="text-center mt-2 text-sm text-white ">
      Figma is a cloud-based design tool used for user interface (UI) and user experience (UX) design. It allows for collaborative design work and real-time feedback across teams.
    </p>
  </div>
           {/* Skill Box for TypeScript */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/typescript.png" alt="TypeScript" className="lg:h-16 md:h-20 sm:h-24" />
    <p className="text-center mt-3 font-bold text-white ">TypeScript</p>
    <p className="text-center mt-2 text-sm text-white ">
      TypeScript is a superset of JavaScript that introduces static types, making it easier to write robust, scalable, and maintainable code. It provides compile-time checking, which helps catch errors early.
    </p>
  </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="skills" >
             <div className="text-center py-8 mt-14 w-60 rounded-full justify-center flex  bg-black text-gray-400" style={{ boxShadow: " 16px 16px 20px #06141B" }} >
           <p>View All Skills</p>
         </div>
         </Link>
        </div>
      </section>








      {/* Portfolio Section */}
      <section className="px-8 py-16 bg-gradient-to-r from-[#CCD0CF] via-[#253745] to-[#06141B] text-white" style={{ boxShadow: "-44px -44px 96px #06141B" }}>
      <div className="flex justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[327px] h-[87px] justify-center flex items-center bg-transparent border-4 text-[#CCD0CF] border-black" style={{ boxShadow: "10px 10px 20px #06141B" }}>Portfolio</h2>
            </div>






        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-12 gap-8 mt-24">



        <div className="bg-gradient-to-r from-[#06141B] via-[#253745] to-[#06141B] hover:bg-[#11212D] p-6 rounded-lg shadow-md  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
            <img src="images/5.png" className="w-full h-72 object-cover rounded-md" alt="Project 2" />
            <h3 className="text-2xl font-semibold mt-4">Hackathon 1</h3>
            <p className="text-lg mt-2">A stunning UI/UX design for a mobile app created with Figma and React Native.</p>
            <Link href="projects#project2" className="text-blue-500 hover:underline mt-4 inline-block">View Project</Link>
          </div>


          <div className="bg-gradient-to-r from-[#06141B] via-[#253745] to-[#06141B] hover:bg-[#11212D] p-6 rounded-lg shadow-md  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
            <img src="images/4.png" className="w-full h-72 object-cover rounded-md" alt="Project 1" />
            <h3 className="text-2xl font-semibold mt-4">Hackathon 2</h3>
            <p className="text-lg mt-2">A web application built with React that solves a real-world problem.</p>
            <Link href="projects#project1" className="text-blue-500 hover:underline mt-4 inline-block">View Project</Link>
          </div>



          <div className="bg-gradient-to-r from-[#06141B] via-[#253745] to-[#06141B] hover:bg-[#11212D] p-6 rounded-lg shadow-md  transition-transform transform duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "40px 40px 60px #06141B" }}>
            <img src="images/6.png" className="w-full h-72 object-cover rounded-md" alt="Project 3" />
            <h3 className="text-2xl font-semibold mt-4">Practice For Hackathon</h3>
            <p className="text-lg mt-2">A fully responsive website designed to showcase creative portfolios.</p>
            <Link href="projects#project3" className="text-blue-500 hover:underline mt-4 inline-block">View Project</Link>
          </div>



        </div>
        <div className="flex justify-center mt-8">
          <Link href="projects"> 
          <div className="text-center py-8 mt-14 w-60 rounded-full justify-center flex  bg-black text-gray-400" style={{ boxShadow: " 16px 16px 20px #06141B" }} >
           <p>View All Projects</p>
         </div>
         </Link>
         </div>


      </section>

      {/* Contact Section */}
      <section className="px-8 py-16 bg-gradient-to-r from-[#CCD0CF] via-[#253745] to-[#06141B] ">
      <div className="flex justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[327px] h-[87px] justify-center flex items-center bg-transparent border-4 text-[#CCD0CF] border-black" style={{ boxShadow: "10px 10px 20px #06141B" }}>Contact</h2>
            </div>
            <div className='mt-24'>
        <p className="sm:text-xl text-center  text-[#CCD0CF]  mx-auto text-lg w-2/3  pr-8 pl-8 border-l-2 border-r-2 border-gray-600  max-w-xl lg:mt-0">
          Interested in collaborating or working on a project together? Feel free to reach out to me, and let’s create something amazing.
        </p>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="contact" >
             <div className="text-center py-8 mt-14 w-60 rounded-full justify-center flex  bg-black text-gray-400" style={{ boxShadow: " 16px 16px 20px #06141B" }} >
           <p>Get In Touch</p>
         </div>
         </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
