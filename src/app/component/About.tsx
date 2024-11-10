import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div  id='About'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto w-500"
        alt="hero"
        width={300}
        height={300}
        src="/pic1.png" 
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me 
      </h1>
      <p className="mb-5 leading-relaxed">
      Hi, I am Sehrish Khan, a passionate web developer with expertise in HTML, CSS, JavaScript, and WordPress. I specialize in creating responsive, user-friendly websites that not only look great but also provide seamless functionality. With a background in marketing, I bring a unique perspective to web development, ensuring my designs are both visually appealing and strategically optimized. I’m always eager to learn new technologies and stay up-to-date with industry trends to create innovative solutions.
     </p> 
     <div className="flex justify-center">
        <Link href={"/sehrish khan resume.pdf"}>
        <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
        View Resume
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
