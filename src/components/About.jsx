import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../helpers/AppContext';
import img1 from '../assets/mypic.png'

const About = () => {
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
            <div name='about' className='w-full h-screen bg-[#98A8F8] text-gray-900 dark:bg-gray-900 dark:text-gray-50 transition-colors duration-200'>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 mt-auto sm:mt-0'>
                        <div className='sm:text-right pb-8 pl-4'>
                            <p className='text-4xl font-bold inline border-b-4 border-[#3632aa]'>About Me</p>
                        </div>

                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className=''>
                            <img className='h-56 w-56 rounded-md sm:float-right'
                                src={img1} alt="mypic" />
                        </div>
                        <div>
                            <p>Gerome Mico B. Tahud</p>
                            <p>22 years old</p>
                            <p>Email: gerometahud55@gmail.com</p>
                            <p>Phone: 0926-837-9144</p>
                            <p>Bachelor of Science In Information Technology</p>
                            <p>Xavier University - Ateneo de Cagayan, 2019-2023</p>
                            <p>Cagayan de Oro, Philippines</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About