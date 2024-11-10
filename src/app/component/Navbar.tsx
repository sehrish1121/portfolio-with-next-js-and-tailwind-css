import React from 'react'
import Link from 'next/link'
import { FaBeer } from 'react-icons/fa';
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl">Sehrish Khan</span>
    </a> 
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-500">Home</Link>
      <Link  href={"#About"}className="mr-5 hover:text-blue-500">About</Link>
      <Link href={"#Skills"}className="mr-5 hover:text-blue-500">Skills</Link>
      <Link href={"#Project"}className="mr-5 hover:text-blue-500">Project</Link>
      <Link href={"#Contact"}className="mr-5 hover:text-blue-500">Contact</Link>
    </nav>
    <a href="/sehrish khan resume.pdf">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0">

      Download Resume
      <FaCloudDownloadAlt  className='text-xl ml-3'/>

    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar
