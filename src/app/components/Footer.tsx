import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black mt-36 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} Muhammad Momin. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link href="https://www.linkedin.com/in/muhammad-momin-62069b2b9/" target="_blank">
            <FaLinkedin className="hover:text-emerald-500 cursor-pointer" size={24} />
          </Link>
          <Link href="https://github.com/MuhammadMomin095" target="_blank">
            <FaGithub className="hover:text-emerald-500 cursor-pointer" size={24} />
          </Link>
          <Link href="https://www.instagram.com/mominshykh/?hl=en" target="_blank">
            <FaInstagram className="hover:text-emerald-500 cursor-pointer" size={24} />
          </Link>
          <Link href="https://www.facebook.com/mominshykh.xx" target="_blank">
            <FaFacebook className="hover:text-emerald-500 cursor-pointer" size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
