"use client"; // Ensure client-side rendering

import Link from 'next/link';
import Button from "../components/button"; // Ensure path is correct
import Navbar from '../components/Navbar'; // Importing Navbar
import Footer from '../components/Footer'; // Importing Footer

const Contact: React.FC = () => {
    return (
        <div className='bg-gradient-to-r from-black via-gray-950 to-slate-950 w-[99vw]'>

            {/* Navbar */}
            
                <Navbar />
                <div className="pt-52">
           

            {/* Contact Section */}
            <div className="relative z-10 p-8 mx-10 mt-24 bg-white bg-opacity-30 rounded-lg shadow-xl transition-transform duration-500 ease-in-out hover:scale-105" style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.5)' }} // Orange shadow
>
                <h1 className="text-4xl font-bold mb-4 text-center text-[#F9A602] drop-shadow-[2px_2px_4px_rgba(220,38,38,0.8)]">Contact Me</h1>

                {/* Contact Form */}
                <form className="space-y-6" 
>
                    <div>
                        <label className="block text-lg font-bold mb-2"  htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 bg-gray-800 text-white rounded-md"
                            placeholder="Your Name" style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.5)' }}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 bg-gray-800 text-white rounded-md"
                            placeholder="Your Email" style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.5)' }}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-bold mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full p-3 bg-gray-800 text-white rounded-md"
                            placeholder="Your Message" style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.5)' }}
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <Button props="Send Message" />
                    </div>
                </form>

                {/* Additional Information */}
                <div className="mt-8 text-white"
>
                    <h2 className="text-2xl font-bold mb-2 text-center text-[#F9A602]">Get in Touch</h2>
                    <p className="text-lg text-center mb-2">Feel free to reach out for any inquiries or collaborations!</p>
                    <p className="text-lg text-center">You can also connect with me on:</p>
                    <ul className="list-disc list-inside text-center">
                        <li>Email: <a href="mailto:mominshykh7@gmail.com" className="underline">mominshykh7@gmail.com</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/muhammad-momin-62069b2b9/" className="underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li>GitHub: <a href="https://github.com/MuhammadMomin095" className="underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
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

export default Contact;
