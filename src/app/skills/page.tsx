"use client";


import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';



const Skills = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-[#4A5C6A] via-gray-400 to-[#4A5C6A]  ">



      <section className="skills-section w-full py-20 md:py-36 lg:py-52 bg-gradient-to-r from-[#4A5C6A] via-gray-400 to-[#4A5C6A]   ">
      

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
          <Link href="contact" className="px-4 rounded-full h-9 bg-[#CCD0CF] text-xl text-black font-semibold border-2 border-black hover:bg-gray-100 transition">Contact Me</Link>
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
        <div className="container mx-auto px-4 mt-36 ">
          {/* Skills Title */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase px-4 sm:px-6 py-2 lg:py-4 mb-6 inline-block bg-transparent border-4 border-black" style={{ boxShadow: "10px 10px 20px #06141B" }}>
              Skills
            </h2>
          </div>

         



          {/* Using Now */}
          <div className="text-center flex justify-center mb-12 mt-44">
            <h3 className="border-l-2 border-r-2 border-black text-center sm:w-64 md:w-56 lg:w-48 text-md sm:text-lg  font-bold uppercase mb-4 tracking-wider">
              Using Now
            </h3>
            </div>
            
            <div className="grid sm:grid-cols-1 sm:px-40   md:grid-cols-1 md:px-40 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-16">
  {/* Skill Box for HTML */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/html.png" alt="HTML5" className="lg:h-16 md:h-20 sm:h-24" />
    <p className="text-center mt-3 font-bold text-white ">HTML</p>
    <p className="text-center mt-2 text-sm text-white ">
      HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It defines the structure of web pages by using a system of elements and tags.
    </p>
  </div>

  {/* Skill Box for Tailwind CSS */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/tailwind.png" alt="Tailwind CSS" className="lg:h-16 md:h-20 sm:h-24" />
    <p className="text-center mt-3 font-bold text-white ">Tailwind CSS</p>
    <p className="text-center mt-2 text-sm text-white ">
      Tailwind CSS is a utility-first CSS framework that allows for rapid custom UI development. Instead of writing custom CSS, you use pre-defined utility classes to style elements directly in HTML.
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

  {/* Skill Box for JavaScript */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/javascript.png" alt="JavaScript" className="lg:h-16 md:h-20 sm:h-24" />
    <p className="text-center mt-3 font-bold text-white ">JavaScript</p>
    <p className="text-center mt-2 text-sm text-white ">
      JavaScript is a versatile programming language used to make web pages interactive. It enables client-side scripting for dynamic content, and with the rise of Node.js, it's also used for server-side development.
    </p>
  </div>

  {/* Skill Box for Next.js */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/next.js.png" alt="Next.js" className="lg:h-16 md:h-20 sm:h-24" />
    <p className="text-center mt-3 font-bold text-white ">Next.js</p>
    <p className="text-center mt-2 text-sm text-white ">
      Next.js is a powerful React framework that enables server-side rendering (SSR) and static site generation (SSG). It's known for its performance, scalability, and SEO-friendly capabilities.
    </p>
  </div>

  {/* Skill Box for Vercel */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/vercel.png" alt="Vercel" className="lg:h-16 md:h-20 sm:h-24" />
    <p className="text-center mt-3 font-bold text-white ">Vercel</p>
    <p className="text-center mt-2 text-sm text-white ">
      Vercel is a cloud platform optimized for front-end frameworks, particularly Next.js. It allows developers to deploy, preview, and scale their web applications with ease.
    </p>
  </div>

  {/* Skill Box for React */}
<div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
  <img src="images/react.png" alt="React" className="sm:h-24 md:h-20 lg:h-16" />
  <p className="text-center mt-3 font-bold text-white ">React</p>
  <p className="text-center mt-2 text-sm text-white ">
    React is a JavaScript library for building user interfaces. It is component-based, declarative, and enables developers to create interactive and dynamic web applications efficiently.
  </p>
</div>

  {/* Skill Box for Git & GitHub */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/github.png" alt="Git & GitHub" className="lg:h-16 md:h-20 sm:h-24" />
    <p className="text-center mt-3 font-bold text-white ">GitHub</p>
    <p className="text-center mt-2 text-sm text-white ">
      GitHub is a platform for version control and collaboration. It allows developers to track changes in their code, collaborate with others, and manage open-source projects using Git.
    </p>
  </div>

  {/* Skill Box for Figma */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/figma.png" alt="Figma" className="lg:h-16 md:h-20 sm:h-24" />
    <p className="text-center mt-3 font-bold text-white ">Figma</p>
    <p className="text-center mt-2 text-sm text-white ">
      Figma is a cloud-based design tool used for user interface (UI) and user experience (UX) design. It allows for collaborative design work and real-time feedback across teams.
    </p>
  </div>
</div>





<div className="w-44 border-t-2 border-gray-800 mx-auto mt-44" ></div>

     





{/* Learning */}
<div className="text-center flex justify-center mb-12 mt-44">
  <h3 className="border-l-2 border-r-2 border-black text-center w-48 text-md sm:text-lg font-bold uppercase mb-4 tracking-wider">
    Learning
  </h3>
</div>

<div className="grid sm:grid-cols-1 sm:px-40 md:grid-cols-1 md:px-40 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-16">
  {/* Skill Box for Agentic AI */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/ai.png" alt="Agentic AI" className="sm:h-24 md:h-20 lg:h-16" />
    <p className="text-center mt-3 font-bold text-white ">Agentic AI</p>
    <p className="text-center mt-2 text-sm text-white ">
      Agentic AI refers to AI systems that can autonomously make decisions and take actions to solve problems. These systems leverage advanced machine learning algorithms to analyze data and drive intelligent behavior in real-time.
    </p>
  </div>

  {/* Skill Box for PostgreSQL */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/postgresql.png" alt="PostgreSQL" className="sm:h-24 md:h-20 lg:h-16" />
    <p className="text-center mt-3 font-bold text-white ">PostgreSQL</p>
    <p className="text-center mt-2 text-sm text-white ">
      PostgreSQL is an open-source, object-relational database system that emphasizes extensibility and SQL compliance. It supports a wide variety of programming languages and is known for its reliability, data integrity, and advanced features.
    </p>
  </div>

  {/* Skill Box for Node.js */}
<div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
  <img src="images/nodejs.png" alt="Node.js" className="sm:h-24 md:h-20 lg:h-16" />
  <p className="text-center mt-3 font-bold text-white ">Node.js</p>
  <p className="text-center mt-2 text-sm text-white ">
    Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable network applications using server-side JavaScript.
  </p>
</div>

{/* Skill Box for React */}
<div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
  <img src="images/react.png" alt="React" className="sm:h-24 md:h-20 lg:h-16" />
  <p className="text-center mt-3 font-bold text-white ">React</p>
  <p className="text-center mt-2 text-sm text-white ">
    React is a JavaScript library for building user interfaces. It is component-based, declarative, and enables developers to create interactive and dynamic web applications efficiently.
  </p>
</div>


  {/* Skill Box for Python */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/python.png" alt="Python" className="sm:h-24 md:h-20 lg:h-16" />
    <p className="text-center mt-3 font-bold text-white ">Python</p>
    <p className="text-center mt-2 text-sm text-white ">
      Python is a highly versatile and popular programming language known for its readability and wide usage in various fields such as web development, data science, machine learning, automation, and scientific computing.
    </p>
  </div>

  {/* Skill Box for Web Accessibility */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/accessibility.png" alt="Web Accessibility" className="sm:h-24 md:h-20 lg:h-16" />
    <p className="text-center mt-3 font-bold text-white ">Web Accessibility</p>
    <p className="text-center mt-2 text-sm text-white ">
      Web Accessibility involves designing and developing websites and web applications that are usable by all people, including those with disabilities. It ensures that web content is accessible through various assistive technologies.
    </p>
  </div>
</div>



<div className="w-36 border-t-2 border-gray-800 mx-auto mt-44"></div>





{/* Other Skills */}
<div className="text-center flex justify-center mb-12 mt-44">
  <h3 className="border-l-2 border-r-2 border-black text-center w-48 text-md sm:text-lg font-bold uppercase mb-8 tracking-wider">
    Other Skills
  </h3>
</div>

<div className="grid sm:grid-cols-1 sm:px-40 md:grid-cols-1 md:px-40 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-16">
  {/* Skill Box for English */}
  <div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
    <img src="images/english.png" alt="English" className="sm:h-24 md:h-20 lg:h-16" />
    <p className="text-center mt-3 font-bold text-white ">English</p>
    <p className="text-center mt-2 text-sm text-white ">
      English is a global language used for communication in business, education, and media. It is the primary or secondary language for many countries and is essential for international collaboration.
    </p>
  </div>
{/* Skill Box for Responsive Web Design */}
<div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
  <img src="images/responsive.png" alt="Responsive Web Design" className="sm:h-24 md:h-20 lg:h-16" />
  <p className="text-center mt-3 font-bold text-white ">Responsive Web Design</p>
  <p className="text-center mt-2 text-sm text-white ">
    Expertise in creating mobile-first, fluid, and adaptive designs that ensure consistent user experience across all devices.
  </p>
</div>

{/* Skill Box for Cross-Browser Compatibility */}
<div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
  <img src="images/cross.png" alt="Cross-Browser Compatibility" className="sm:h-24 md:h-20 lg:h-16" />
  <p className="text-center mt-3 font-bold text-white ">Cross-Browser Compatibility</p>
  <p className="text-center mt-2 text-sm text-white ">
    Ensuring seamless functionality and consistent design across all major browsers to provide a unified user experience.
  </p>
</div>

{/* Skill Box for Version Control (Git) */}
<div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
  <img src="images/git.png" alt="Version Control (Git)" className="sm:h-24 md:h-20 lg:h-16" />
  <p className="text-center mt-3 font-bold text-white ">Version Control (Git)</p>
  <p className="text-center mt-2 text-sm text-white ">
    Strong knowledge of Git for efficient code management, collaboration, and version tracking in software projects.
  </p>
</div>

{/* Skill Box for Performance Optimization */}
<div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
  <img src="images/performance.png" alt="Performance Optimization" className="sm:h-24 md:h-20 lg:h-16" />
  <p className="text-center mt-3 font-bold text-white ">Performance Optimization</p>
  <p className="text-center mt-2 text-sm text-white ">
    Optimizing web assets and scripts for faster load times, improved performance, and enhanced user experience.
  </p>
</div>

{/* Skill Box for SEO Fundamentals */}
<div className="flex group bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] hover:bg-[#11212D] justify-center lg:w-72 lg:h-72 items-center p-6 border-2 border-black rounded-lg shadow-lg flex-col transition-transform transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: "16px 16px 24px #06141B" }}>
  <img src="images/seo.png" alt="SEO Fundamentals" className="sm:h-24 md:h-20 lg:h-16" />
  <p className="text-center mt-3 font-bold text-white ">SEO Fundamentals</p>
  <p className="text-center mt-2 text-sm text-white ">
    Proficiency in on-page and technical SEO practices to boost website visibility and search engine rankings.
  </p>
</div>

</div>





</div>











        <div className="w-36 border-t-2 border-gray-800 mx-auto mt-44"></div>




        {/* Proficiency Section */}
        <div className="mt-36 px-4 sm:px-8 lg:px-24">
          <div className="text-center mb-12">
            <h3 className="text-md sm:text-lg font-bold uppercase tracking-wider inline-block px-4 py-2 border-l-2 border-r-2 border-black">
              Skill Proficiency
            </h3>
          </div>
          <div className="mt-36 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-16 gap-12">
           



        {/* Skill Progress: HTML */}
        <div className=" flex flex-col items-center ">
                <div className="relative ">
                    <svg className="w-24 h-24 ">
                        <circle cx="50%" cy="50%" r="40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="8" fill="none" />
                        <circle
                            cx="50%"
                            cy="50%"
                            r="40"
                            stroke="#F9A602"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="25.12" // 70% proficiency
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[#06141B] text-xl font-bold">90%</span>
                </div>
                <p className="mt-4 text-lg">HTML</p>
            </div>

            {/* Skill Progress: CSS */}
            <div className="flex flex-col items-center">
                <div className="relative">
                    <svg className="w-24 h-24">
                        <circle cx="50%" cy="50%" r="40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="8" fill="none" />
                        <circle
                            cx="50%"
                            cy="50%"
                            r="40"
                            stroke="#F9A602"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="25.12" // 80% proficiency
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[#06141B] text-xl font-bold">90%</span>
                </div>
                <p className="mt-4 text-lg">CSS</p>
            </div>

            {/* Skill Progress: JavaScript */}
            <div className="flex flex-col items-center">
                <div className="relative">
                    <svg className="w-24 h-24">
                        <circle cx="50%" cy="50%" r="40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="8" fill="none" />
                        <circle
                            cx="50%"
                            cy="50%"
                            r="40"
                            stroke="#F9A602"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="50.24" 
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[#06141B] text-xl font-bold">80%</span>
                </div>
                <p className="mt-4 text-lg">JavaScript</p>
            </div>

            {/* Skill Progress: React */}
            <div className="flex flex-col items-center">
                <div className="relative">
                    <svg className="w-24 h-24">
                        <circle cx="50%" cy="50%" r="40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="8" fill="none" />
                        <circle
                            cx="50%"
                            cy="50%"
                            r="40"
                            stroke="#F9A602"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="50.24" // 80% proficiency
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[#06141B] text-xl font-bold">80%</span>
                </div>
                <p className="mt-4 text-lg">React</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="relative">
                    <svg className="w-24 h-24">
                        <circle cx="50%" cy="50%" r="40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="8" fill="none" />
                        <circle
                            cx="50%"
                            cy="50%"
                            r="40"
                            stroke="#F9A602"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="37.68" // 70% proficiency
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[#06141B] text-xl font-bold">85%</span>
                </div>
                <p className="mt-4 text-lg">TypeScript</p>
            </div>

            {/* Skill Progress: CSS */}
            <div className="flex flex-col items-center">
                <div className="relative">
                    <svg className="w-24 h-24">
                        <circle cx="50%" cy="50%" r="40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="8" fill="none" />
                        <circle
                            cx="50%"
                            cy="50%"
                            r="40"
                            stroke="#F9A602"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="75.36" // 80% proficiency
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[#06141B] text-xl font-bold">70%</span>
                </div>
                <p className="mt-4 text-lg">Python</p>
            </div>

            {/* Skill Progress: JavaScript */}
            <div className="flex flex-col items-center">
                <div className="relative">
                    <svg className="w-24 h-24">
                        <circle cx="50%" cy="50%" r="40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="8" fill="none" />
                        <circle
                            cx="50%"
                            cy="50%"
                            r="40"
                            stroke="#F9A602"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="100.48" // 60% proficiency
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[#06141B] text-xl font-bold">60%</span>
                </div>
                <p className="mt-4 text-lg">Problem Solving</p>
            </div>

            {/* Skill Progress: React */}
            <div className="flex flex-col items-center">
                <div className="relative">
                    <svg className="w-24 h-24">
                        <circle cx="50%" cy="50%" r="40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="8" fill="none" />
                        <circle
                            cx="50%"
                            cy="50%"
                            r="40"
                            stroke="#F9A602"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="50.24" // 80% proficiency
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[#06141B] text-xl font-bold">80%</span>
                </div>
                <p className="mt-4 text-lg">Next.js</p>
            </div>







          </div>
        <div className="w-36 border-t-2 border-gray-800 mx-auto mt-44"></div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Skills;