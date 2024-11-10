import React from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='bg-gray-400'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="ml-3 text-xl"></span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Sehrish Khan.All Right Reserved.
      <a
        href="https://twitter.com/knyttneve"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-5 justify-center sm:justify-start">
      <Link 
      target="_blank"
      href={"https://www.gmail.com/"} className="text-white">
      <MdOutlineMarkEmailRead  className='text-3xl'/>

      </Link>
      
      <Link 
      target="_blank"
      href={"https://www.linkedin.com/"}
       className="ml-3 text-white">
      <CiLinkedin  className='text-3xl'/>
        </Link>
      
      <Link 
      target="_blank"
      href={"https://github.com/"}
      className="ml-3 text-white">
      <FaGithub  className='text-3xl'/>
        </Link>
      
      <a className="ml-3 text-white">
         </a>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
