import React, { useState } from 'react'; // Import useState  
import Logo from '/logo.png';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faList } from '@fortawesome/free-solid-svg-icons';  

function Header() {  
  const [isNavVisible, setIsNavVisible] = useState(false); 
  const toggleNav = () => {  
    setIsNavVisible(!isNavVisible);  
  };  

  return (  
    <>  
      <header className='bg-black flex items-center justify-between px-8 py-3 lg:px-40 relative'>  
        <a href="./">  
          <img src={Logo} alt="rosto logo" loading='lazy' className='w-[200px]'/>  
        </a>  

        <nav className={`text-white flex md:flex-row items-center gap-6 md:gap-13 flex-col md:relative md:inline-flex md:top-0 md:right-0 absolute right-0 bg-black top-15 z-100 transition-all duration-300 ${isNavVisible ? 'md:inline-flex' : 'hidden'}`}>  
          <ul className='flex gap-6 text-lg md:flex-row flex-col'>  
            <li className='hover:border-t-2 hover:border-red-500 p-2 px-4 border-t-2 border-black'><a href="/">Home</a></li>  
            <li className='hover:border-t-2 hover:border-red-500 p-2 px-4 border-t-2 border-black'><a href="#about">About</a></li>  
            <li className='hover:border-t-2 hover:border-red-500 p-2 px-4 border-t-2 border-black'><a href="#gallery">Gallery</a></li>  
          </ul>  

          <a href="#contact" className='bg-red-600 p-4 px-7 hover:bg-red-800 transition-all duration-[200]'>  
            Contact Us  
          </a>  
        </nav>  

        <div className='inline-block md:hidden'>
           <FontAwesomeIcon   
          icon={faList}   
          size={'x'}
          className="text-white  cursor-pointer"   
          onClick={toggleNav} 
        />  
        </div>
        
      </header>  
    </>  
  );  
}  

export default Header;  
