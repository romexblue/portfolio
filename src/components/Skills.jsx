import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../helpers/AppContext';
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import Django from '../assets/django.png';
import Express from '../assets/express.png';
import Node from '../assets/node.png';
import ReactImg from '../assets/react.png';
import MySQL from '../assets/mysql.png';
import Mongo from '../assets/mongo.png';
import PHP from '../assets/php.png';

const Skills = () => {
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
            <div name='skills' className='w-full md:h-screen bg-[#98A8F8] text-gray-900 dark:bg-gray-900 dark:text-gray-50 transition-colors duration-300 py-24'>
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div className='mt-1'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#3632aa]'>Skills</p>
                        <p className='py-4'>//These are the technologies I've worked with</p>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                        <div className='shadow-md bg-gray-600 shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-16 mt-2 mx-auto' src={HTML} alt="icon" />
                            <p>HTML</p>
                        </div>
                        <div className='shadow-md bg-gray-600 shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-16 mt-2 mx-auto' src={CSS} alt="icon" />
                            <p>CSS</p>
                        </div>
                        <div className='shadow-md bg-gray-600 shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-16 mt-2 mx-auto' src={ReactImg} alt="icon" />
                            <p>React</p>
                        </div>
                        <div className='shadow-md bg-gray-600 shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                            <img className='h-16 mt-2 mx-auto' src={Express} alt="icon" />
                            <p>Express</p>
                        </div>
                        <div className='shadow-md bg-gray-600 shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-16 mt-2 mx-auto' src={Node} alt="icon" />
                            <p>Node</p>
                        </div>
                        <div className='shadow-md bg-gray-600 shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-16 h-16 mt-2 mx-auto' src={Django} alt="icon" />
                            <p>Django</p>
                        </div>
                        <div className='shadow-md bg-gray-600 shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-16 mt-2 mx-auto' src={PHP} alt="icon" />
                            <p>PHP</p>
                        </div>
                        <div className='shadow-md bg-gray-600 shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-16 h-[64px] mt-2 mx-auto' src={MySQL} alt="icon" />
                            <p>MySQL</p>
                        </div>
                        <div className='shadow-md bg-gray-600 shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-16 mt-2 mx-auto' src={Mongo} alt="icon" />
                            <p>MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills