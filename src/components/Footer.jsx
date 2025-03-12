import React from 'react';  

const Footer = () => {  
    return (  
        <footer className='bg-black text-white py-6'>  
            <div className='flex flex-col lg:flex-row justify-between items-center px-8 lg:px-20'>  
                <div className='mb-4 lg:mb-0 '>  
                    <h2 className='text-lg font-bold text-red-600 text-center'>ROTSO CARS</h2>  
                    <p className='text-sm text-gray-500'>© 2025 Eng.Fatma Akram. All rights reserved.</p>  
                </div>  

                <div className='flex gap-6 mb-4 lg:mb-0'>  
                    <a href="#" className='hover:text-red-500 transition-colors'>Privacy Policy</a>  
                    <a href="#" className='hover:text-red-500 transition-colors'>Terms of Service</a>  
                    <a href="#" className='hover:text-red-500 transition-colors'>Contact Us</a>  
                </div>  

                <div className='flex gap-4'>  
                    <a href="#" className='text-white hover:text-red-500 transition-colors'>Facebook</a>  
                    <a href="#" className='text-white hover:text-red-500 transition-colors'>X</a>  
                    <a href="#" className='text-white hover:text-red-500 transition-colors'>Instagram</a>  
                </div>  
            </div>  
        </footer>  
    );  
}  

export default Footer;  