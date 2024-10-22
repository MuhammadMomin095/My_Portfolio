"use client"; // Ensure client-side rendering

import Link from 'next/link';
import Button from "../components/button"; // Ensure path is correct
import Navbar from '../components/Navbar'; // Importing Navbar
import Footer from '../components/Footer'; // Importing Footer

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen bg-cover bg-center relative"
             style={{ backgroundImage: 'url("/images/6.jpg")' }}> {/* Background image */}  
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Navbar */}
            <div className="relative z-10">
                <Navbar />
            </div>

            {/* Projects Section */}
            <div className="relative z-10 p-8 mx-10 mt-24 bg-white bg-opacity-20 rounded-lg shadow-lg" style={{ boxShadow: '0 4px 15px rgba(255, 0, 0, 0.5)' }}>
                <h1 className="text-4xl font-bold mb-4 text-center text-[#F9A602]">My Projects</h1> {/* Updated Heading Color */}

                {/* Projects List */}
                <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Projects Data */}
                    {[ 
                        {
                            title: "CV-Template-Builder",
                            imgSrc: "/images/cv-template.png",
                            description: "Developed a CV template and builder using HTML, CSS, and TypeScript, highlighting my skills through multiple milestones.",
                            link: "http://cv-template-builder.vercel.app"
                        },
                        {
                            title: "Calculator",
                            imgSrc: "/images/calculator.png",
                            description: "This project was built using HTML, CSS, and TypeScript to check my skills.",
                            link: "http://calculator-zeta-beige.vercel.app"
                        },
                        {
                            title: "Currency Converter",
                            imgSrc: "/images/currency converter.png",
                            description: "This project was built using HTML, CSS, and TypeScript to check my skills.",
                            link: "http://currency-converter-website-zeta.vercel.app"
                        },
                        {
                            title: "Number Guessing Game",
                            imgSrc: "/images/Guess.png",
                            description: "This project was built using HTML, CSS, and TypeScript to check my skills.",
                            link: "http://number-guessing-delta.vercel.app"
                        },
                        {
                            title: "Showroom Website",
                            imgSrc: "/images/showroom.png",
                            description: "This project was built using HTML, CSS, and TypeScript to check my skills.",
                            link: "http://showroom-website.vercel.app"
                        },
                        {
                            title: "ATM Simulation",
                            imgSrc: "/images/atm.png",
                            description: "This project was built using HTML, CSS, and TypeScript to check my skills.",
                            link: "http://atm-puce.vercel.app"
                        },
                        {
                            title: "Next.js Portfolio",
                            imgSrc: "/images/portfolio.png",
                            description: "A well-crafted portfolio showcasing my work and skills, built with Next.js, reflecting my dedication and effort in web development.",
                            link: "" // Update with actual link if available
                        },
                        {
                            title: "Adventure Game",
                            imgSrc: "/images/adventure game.png",
                            description: "This project was built using HTML, CSS, and TypeScript to check my skills.",
                            link: "http://adventure-game-omega.vercel.app"
                        },                       
                        {
                            title: "ID Card",
                            imgSrc: "/images/id-card.png",
                            description: "An engaging project where I developed interactive ID cards using Next.js, focusing on responsive layouts to enhance user experience.",
                            link: "https://student-id-card-pi.vercel.app/"
                        },
                        {
                            title: "Word Counter",
                            imgSrc: "/images/Counter.png",
                            description: "This project was built using HTML, CSS, and TypeScript to check my skills.",
                            link: "http://word-counter-omega-drab.vercel.app"
                        },
                        {
                            title: "Practice Navbar",
                            imgSrc: "/images/navbar.png",
                            description: "This project is created using Next.js for practicing routing and component structure.",
                            link: "https://navbar-ten-delta.vercel.app/"
                        },
                        {
                            title: "To-Do List",
                            imgSrc: "/images/list.png",
                            description: "This project was built using HTML, CSS, and TypeScript to check my skills.",
                            link: "http://to-do-list-eta-eight-96.vercel.app"
                        }
                    ].map((project, index) => (
                        <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md text-white transition-transform duration-300 hover:scale-105" style={{ boxShadow: '0 4px 15px rgba(255, 0, 0, 0.5)' }}>
                            <h2 className="text-2xl font-bold mb-2 text-center text-yellow-300">{project.title}</h2>
                            <img src={project.imgSrc} alt={project.title} className="w-full h-48 object-cover mb-2 rounded" />
                            <p className="text-lg mb-4 text-center">{project.description}</p>
                            <div className="text-center">
                                <Link href={project.link} passHref>
                                    <Button props="View Project" /> {/* Updated to use Button component */}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Go Back Button */}
                <div className="text-center mt-8">
                    <Link href={"/"}>
                        <Button props="Go Back Home" />
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 mt-10">
                <Footer />
            </div>
        </div>
    );
};

export default Projects;