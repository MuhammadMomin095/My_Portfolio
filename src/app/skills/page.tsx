"use client"; // Ensure client-side rendering

import Link from 'next/link';
import Button from "../components/button"; // Ensure path is correct
import Navbar from '../components/Navbar'; // Importing Navbar
import Footer from '../components/Footer'; // Importing Footer

const Skills = () => {
    return (
       <div className='bg-gradient-to-r from-black via-gray-950 to-black'>
                <Navbar />

                <div className="min-h-screen bg-cover bg-center relative z-10 pt-60">
            

            {/* Skills Section */}
            <div className="z-10 p-8 mx-10 bg-white bg-opacity-20 rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                <h2 className="text-4xl font-bold mb-4 text-center text-[#F9A602] drop-shadow-[2px_2px_4px_rgba(220,38,38,0.8)]">Skills</h2> {/* Updated Heading Color */}

                {/* Skills List */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
                    <div className="p-4 bg-gray-600 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }} // Blue shadow
>
                        <h3 className="text-xl font-bold text-yellow-300">HTML</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Structured web pages with semantic markup.</p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                        <h3 className="text-xl font-bold text-yellow-300">CSS</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Styling web pages with responsive designs.</p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                        <h3 className="text-xl font-bold text-yellow-300">JavaScript</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Adding interactivity to web applications.</p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                        <h3 className="text-xl font-bold text-yellow-300">TypeScript</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Static typing for better maintainability.</p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                        <h3 className="text-xl font-bold text-yellow-300">Next.js</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Server-rendered React applications.</p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                        <h3 className="text-xl font-bold text-yellow-300">React</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Building user interfaces with components.</p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                        <h3 className="text-xl font-bold text-yellow-300">Python</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Learning Python for backend development and automation.</p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                    <h3 className="text-xl font-bold text-yellow-300">Problem Solving</h3>
                    <p className="mt-2">Analyzing and resolving complex issues efficiently.</p>
                </div>
                </div>


                 {/* Skills Proficiency Section */}
    <div className="mt-40 p-6 bg-gray-800 rounded-lg text-white" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
        <h3 className="text-3xl font-semibold mb-6 text-center text-yellow-400">Skills Proficiency</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Skill Progress: HTML */}
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
                            strokeDashoffset="25.12" // 70% proficiency
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-yellow-300 text-xl font-bold">90%</span>
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
                    <span className="absolute inset-0 flex items-center justify-center text-yellow-300 text-xl font-bold">90%</span>
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
                    <span className="absolute inset-0 flex items-center justify-center text-yellow-300 text-xl font-bold">80%</span>
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
                    <span className="absolute inset-0 flex items-center justify-center text-yellow-300 text-xl font-bold">80%</span>
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
                    <span className="absolute inset-0 flex items-center justify-center text-yellow-300 text-xl font-bold">85%</span>
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
                    <span className="absolute inset-0 flex items-center justify-center text-yellow-300 text-xl font-bold">70%</span>
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
                    <span className="absolute inset-0 flex items-center justify-center text-yellow-300 text-xl font-bold">60%</span>
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
                    <span className="absolute inset-0 flex items-center justify-center text-yellow-300 text-xl font-bold">80%</span>
                </div>
                <p className="mt-4 text-lg">Next.js</p>
            </div>
        </div>
    </div>


                  {/* Additional Content: Skills Overview */}
    <div className="mt-40 p-6 bg-gray-800 rounded-lg text-white" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
        <h3 className="text-3xl font-semibold mb-4 text-center text-yellow-400">Why Skills Matter</h3>
        <p className="text-lg mb-4">
            Your skills are the foundation of your professional journey. From writing clean, maintainable code to designing engaging interfaces, every skill you learn contributes to building impactful projects and solving real-world problems.
        </p>
        <ul className="list-disc pl-8 space-y-2">
            <li>
                <span className="font-bold text-yellow-300">Continuous Learning:</span> Technology is ever-evolving, and staying updated ensures your skills remain relevant.
            </li>
            <li>
                <span className="font-bold text-yellow-300">Collaboration:</span> Skills like Git and teamwork tools make working with others seamless and productive.
            </li>
            <li>
                <span className="font-bold text-yellow-300">Problem-Solving:</span> Strong technical skills allow you to break down complex tasks into manageable solutions.
            </li>
        </ul>
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

export default Skills;
