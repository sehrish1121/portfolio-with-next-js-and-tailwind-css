import React from 'react'
import { CiSquareCheck } from "react-icons/ci";

const Skills = () => {
  return (
    <div id='Skills'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-14 "> 
        {/*skills*/}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <CiSquareCheck  className='text-xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[100%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>100%</p>
            
          </div>
          
        </div>
      </div>
      {/*skills*/}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <CiSquareCheck  className='text-xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[90%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>90%</p>
          </div>
          
          
        </div>
        
      </div>
      {/*skills*/}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <CiSquareCheck  className='text-xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              TypeScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>80%</p>
          </div>
          
          
        </div>
        
      </div>
      {/*skills*/}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <CiSquareCheck  className='text-xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            Next js
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[75%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>75%</p>
          </div>
          
          
        </div>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills
