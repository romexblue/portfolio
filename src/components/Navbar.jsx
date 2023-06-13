import React, { useEffect, useState, useContext } from 'react';
import { FaBars, FaTimes, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill, BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import logo from '../assets/logo.png';
import resume from '../assets/Resume-Gerome.pdf'
import { Link } from 'react-scroll';
import AppContext from '../helpers/AppContext'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const appContext = useContext(AppContext);

    useEffect(() => {
        setDarkMode(appContext.darkMode);
        if (localStorage.getItem("darkMode") === "true") {
            appContext.darkModeToggle(true); //bug when refresh and in dark mode
            setDarkMode(true);
        }
    }, []);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#98A8F8] text-gray-900 dark:bg-gray-900 dark:text-gray-50 transition-colors duration-200 z-[2]'>
                <div>
                    <Link className='cursor-pointer' to="home" smooth={true} duration={500}>
                        <img src={logo} alt="logo" style={{ width: "120px", height: "90px" }} />
                    </Link>
                </div>

                <ul className='hidden md:flex'>
                    <li onClick={() => { appContext.darkModeToggle(!darkMode), setDarkMode(!darkMode) }} className='text-lg'>
                        {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
                    </li>
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="work" smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>

                <div onClick={() => setNav(!nav)} className='md:hidden z-10 cursor-pointer'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#98A8F8] flex flex-col justify-center items-center dark:bg-gray-900 dark:text-gray-50'}>
                    <li onClick={() => { appContext.darkModeToggle(!darkMode), setDarkMode(!darkMode) }} className='text-lg'>
                        {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to="work" smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-gray-900'>
                    <ul>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-300'>
                            <a className='flex justify-between items-center w-full'
                                href="https://www.linkedin.com/in/gerome-mico-tahud-335763279/" target='_blank'>
                                LinkedIn <FaLinkedin className='text-[#0A66C2]' size={25} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-300'>
                            <a className='flex justify-between items-center w-full'
                                href="https://www.facebook.com/gerome.tahud" target='_blank'>
                                Facebook <FaFacebook className='text-[#4267B2]' size={25} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-300'>
                            <a className='flex justify-between items-center w-full'
                                href="/contact">
                                Email <HiOutlineMail className='text-[#EA4335]' size={25} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-300'>
                            <a className='flex justify-between items-center w-full'
                                href={resume} download="Resume">
                                Resume <BsFillPersonLinesFill className='text-gray-900' size={25} />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar