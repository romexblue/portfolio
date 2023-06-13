import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../helpers/AppContext';

const Contact = () => {
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
            <div name='contact' className='w-full h-screen bg-[#98A8F8] text-gray-900 flex justify-center items-center dark:bg-gray-900 dark:text-gray-50 transition-colors duration-300 p-4'>
                <form method='POST' action='https://getform.io/f/356931f9-f324-45b6-9fa5-95ed1d9f0766' className='flex flex-col max-w-[600px] w-full h-screen pt-24'>
                    <div>
                        <p className='text-4xl font-bold inline border-b-4 border-[#3632aa]'>Contact</p>
                        <p className='py-4'>//Submit the form below or send me an email - gerometahud55@gmail.com</p>
                    </div>
                    <input required className='my-4 p-2 text-gray-900 font-bold' type='text' placeholder='Name' name='name' />
                    <input required className='p-2 text-gray-900 font-bold' type='email' placeholder='Email' name='email' />
                    <textarea required className='my-4 p-2 text-gray-900 font-bold' name='message' rows='10' placeholder='Your Message'></textarea>
                    <button type='submit' className='border-2 hover:bg-gray-600 hover:border-gray-600 px-4 py-3 my-6 mx-auto flex items-center'>Let's Collaborate</button>
                </form>
            </div>
        </div>
    )
}

export default Contact