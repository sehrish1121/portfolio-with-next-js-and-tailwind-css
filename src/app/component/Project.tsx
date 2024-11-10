import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <div id='Project'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-12">
      {/*projects*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/WhatsApp Image 2024-10-24 at 19.53.26.jpeg"
            width={100}
            height={100}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Editable Resume Builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Resume
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Cumque possimus aliquid consectetur! Expedita sit numquam ducimus quam dignissimos,
               vel veritatis natus perspiciatis harum non repellat sint esse laborum iure porro.
            </p>
            <Link target="_blank" href={"https://vercel.com/sehrishs-projects-3beebecd/milestone2-resumebysehrish"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
           View Project
           </p>
           </Link>
            
          </div>
        </div>
      </div>
      {/*projects*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/timmer.webp"
            width={100}
            height={100}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Count down timmer
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Timmer
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Cumque possimus aliquid consectetur! Expedita sit numquam ducimus quam dignissimos,
               vel veritatis natus perspiciatis harum non repellat sint esse laborum iure porro.
            </p>
            <Link target="_blank"href={"https://vercel.com/sehrishs-projects-3beebecd/milestone2-resumebysehrish"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
           View Project
           </p>
           </Link>
            
          </div>
        </div>
      </div>
{/*projects*/}
<div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/timmer.webp"
            width={100}
            height={100}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Count down timmer
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Timmer
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Cumque possimus aliquid consectetur! Expedita sit numquam ducimus quam dignissimos,
               vel veritatis natus perspiciatis harum non repellat sint esse laborum iure porro.
            </p>
            <Link target="_blank" href={"https://vercel.com/sehrishs-projects-3beebecd/milestone2-resumebysehrish"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
           View Project
           </p>
           </Link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
