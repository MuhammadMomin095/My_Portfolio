"use client"; // Ensure client-side rendering

import Link from 'next/link';
import Button from "../components/button"; // Ensure path is correct
import Navbar from '../components/Navbar'; // Importing Navbar
import Footer from '../components/Footer'; // Importing Footer

const Projects: React.FC = () => {
    return (
        <div className='bg-gradient-to-r from-black via-gray-950 to-black'>
            {/* Navbar */}
            <Navbar />

            <div className="min-h-screen bg-cover bg-center z-10 pt-52">
                {/* Projects Section */}
                <div className="z-10 p-8 mx-10 bg-white bg-opacity-20 rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: '0 4px 15px rgba(0, 128, 128, 0.5)' }}>
                    <h1 className="text-4xl font-bold mb-4 text-center text-[#F9A602] drop-shadow-[2px_2px_4px_rgba(220,38,38,0.8)]">My Projects</h1> {/* Updated Heading Color */}

                    {/* Projects List */}
                    <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Projects Data */}
                        {[ 
                             {
                                title: "Deskify Store Blogs",
                                imgSrc: "/images/deskify.png",
                                description: "Developed a modern e-commerce website for Deskify Store with integrated blog functionality using Next.js, providing a seamless shopping experience and engaging content.",
                                link: "http://deskify-store-blog.vercel.app"
                            },
                            {
                                title: "Momin Kitchen Website",
                                imgSrc: "/images/kitchen.png",
                                description: "Converted a Figma design of a kitchen website into a fully functional and responsive site using Next.js.",
                                link: "http://momin-kitchen-website.vercel.app"
                            },
                            {
                                title: "CV-Template-Builder",
                                imgSrc: "/images/cv-template.png",
                                description: "Developed a CV template and builder using HTML, CSS, and TypeScript, highlighting my skills through multiple milestones.",
                                link: "http://cv-template-builder.vercel.app"
                            },
                            {
                                title: "Calculator",
                                imgSrc: "/images/Calculator.png",
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
                                imgSrc: "/images/ATM.png",
                                description: "This project was built using HTML, CSS, and TypeScript to check my skills.",
                                link: "http://atm-puce.vercel.app"
                            },
                            {
                                title: "Next.js Portfolio",
                                imgSrc: "/images/portfolio.png",
                                description: "A well-crafted portfolio showcasing my work and skills, built with Next.js, reflecting my dedication and effort in web development.",
                                link: "#" // Update with actual link if available
                            },
                            {
                                title: "Adventure Game",
                                imgSrc: "/images/Adventure game.png",
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
                                imgSrc: "/images/List.png",
                                description: "This project was built using HTML, CSS, and TypeScript to check my skills.",
                                link: "http://to-do-list-eta-eight-96.vercel.app"
                            }
                        ].map((project, index) => (
                            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md text-white transition-transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: '0 4px 15px rgba(0, 128, 128, 0.5)' }}>
                                <h2 className="text-2xl font-bold mb-2 text-center text-yellow-300">{project.title}</h2>
                                <img src={project.imgSrc} alt={`Image of ${project.title}`} className="w-full h-48 object-cover mb-2 rounded" />
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
            </div>
    );
};

export default Projects;
