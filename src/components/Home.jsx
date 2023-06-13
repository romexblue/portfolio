import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../helpers/AppContext';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

const Home = () => {
    const appContext = useContext(AppContext);
    const [darkMode, setDarkMode] = useState(appContext.darkMode);

    useEffect(() => {
        setDarkMode(appContext.darkMode);
        if (localStorage.getItem("darkMode") === "true") {
            setDarkMode(true);
        }
    }, [appContext]);

    return (
        <div className={darkMode ? "dark " : ""}>
            <div name='home' className='w-full h-screen bg-[#98A8F8] text-gray-900 dark:bg-gray-900 dark:text-gray-50 transition-colors duration-200'>
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                    <p className='text-[#3632aa]'>Hi, my name is</p>
                    <h1 className='text-4xl sm:text-7xl font-bold'>Gerome Mico Tahud</h1>
                    <h2 className='z-[1] flex text-4xl sm:text-7xl font-bold text-[#4942E4]'>
                        I'm&nbsp;
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("a Full Stack Developer")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Jobless :(")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Learning New Stuff :)")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("a Full Stack Developer")
                                    .start();
                            }}
                        />
                    </h2>
                    <p className='py-4 max-w-[700px]'>
                        Recent graduate with a passion for web development.
                        While my professional experience is limited,
                        I have completed several projects during my
                        academic journey that have allowed me to apply and strengthen my skills in web development.
                        I am eager to further expand my knowledge and contribute to real-world projects.
                    </p>
                    <div>
                        <Link to="work" smooth={true} duration={500}>
                            <button className='group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-600 hover:border-gray-600'>
                                View Projects<HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home