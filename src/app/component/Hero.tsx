import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I Am Web Developer and Marketing Specialist
        <br className="hidden lg:inline-block" />
  
      </h1>
    
      <p className="mb-8 leading-relaxed">
       A web developer and marketing specialist dedicated to crafting websites that drive results. I create user-friendly, responsive websites tailored to meet your business needs. My background in marketing allows me to design  strategically optimized ones that convert visitors into loyal customers. Lets collaborate to bring your digital presence to life  explore my work or contact me to get started!
</p>

      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
          Contact
        </button>
        </Link>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        src="/pic1.png" 
        className="object-cover object-center rounded mx-auto w-500"
        alt="hero"
         width={300} height={300}
     
   />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
