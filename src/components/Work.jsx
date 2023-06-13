import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../helpers/AppContext';
import Lib from '../assets/libwork.png';
import Port from '../assets/portfolio.png';

const Work = () => {
    const appContext = useContext(AppContext);
    const [darkMode, setDarkMode] = useState(appContext.darkMode);

    useEffect(() => {
        setDarkMode(appContext.darkMode);
        if (localStorage.getItem("darkMode") === "true") {
            setDarkMode(true);
        }
    }, [appContext]);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div name='work' className='w-full md:h-screen bg-[#98A8F8] text-gray-900 dark:bg-gray-900 dark:text-gray-50 transition-colors duration-300 py-24'>
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#3632aa]'>Work</p>
                        <p className='py-6'>//My relevant projects</p>
                    </div>

                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {/* Grid Item */}
                        <div style={{ backgroundImage: `url(${Lib})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            <div className='opacity-0 group-hover:opacity-100 group-hover: hover:duration-1000 text-center p-4'>
                                <span className='mx-auto text-2xl font-bold tracking-wider'>
                                    XU Lib Sentry
                                </span>
                                <p className='text-sm mt-3'>An entry/exit and reservation system for Xavier University Libraries</p>
                                <div className='pt-8 text-center'>
                                    <a href="https://youtu.be/sKAFoCLSBAk" target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#98A8F8] font-bold text-lg'>Video Demo</button>
                                    </a>
                                    <a href='https://github.com/romexblue/library-app' target='_blank' >
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#98A8F8] font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                                <div className='mt-8 flex flex-row justify-between text-xs text-gray-900 font-bold'>
                                    <p className='w-16 bg-[#b9b9d4] rounded-lg'>React</p>
                                    <p className='w-16 bg-[#b9b9d4] rounded-lg'>Express</p>
                                    <p className='w-16 bg-[#b9b9d4] rounded-lg'>Node</p>
                                    <p className='w-16 bg-[#b9b9d4] rounded-lg'>MySQL</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundImage: `url(${Port})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            <div className='opacity-0 group-hover:opacity-100 group-hover: hover:duration-1000 text-center p-4'>
                                <span className='mx-auto text-2xl font-bold tracking-wider'>
                                    My Portfolio Site
                                </span>
                                <p className='text-sm mt-3'>My portfolio website. This is my first time using TailwindCSS</p>
                                <div className='pt-8 text-center'>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#98A8F8] font-bold text-lg'>Live Demo</button>
                                    </a>
                                    <a href='https://github.com/romexblue/portfolio' target='_blank' >
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#98A8F8] font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                                <div className='mt-8 flex flex-row justify-center gap-5 text-xs text-gray-900 font-bold'>
                                    <p className='w-16 bg-[#b9b9d4] rounded-lg'>React</p>
                                    <p className='w-16 bg-[#b9b9d4] rounded-lg'>Tailwind</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work