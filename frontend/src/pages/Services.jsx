import React from 'react'
import { FaLaptopCode, FaMobileAlt, FaPalette, FaMoneyBillWave, FaChartBar, FaSms, FaLightbulb, FaIndustry } from 'react-icons/fa';


function Services() {
  return (
    <div className='mx-10 lg:mx-80'>
      <h1 className=' flex justify-center text-gray-700 font-bold text-3xl pt-8'>Our Services</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 pt-4 gap-4'>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
            Software Development
            <p className="text-gray-500 text-sm">We plan, design and develop robust software applications that are scalable. Our talented team of developers implements rigorous testing while offering regular maintenance and real-time support.</p>
          </div>
          <div className='absolute top-2 right-2'>
            <FaLaptopCode className="h-6 w-6 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Mobile App Development
            <p className="text-gray-500 text-sm">We develop cross-platform mobile applications.</p>
          </div>
          <div className=''>
          <FaMobileAlt className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Website Design
            <p className="text-gray-500 text-sm">Aesthetically pleasing website designs.</p>
          </div>
          <div className=''>
          <FaPalette className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Digital Marketing
            <p className="text-gray-500 text-sm">Premier provider of digital marketing.</p>
          </div>
          <div className=''>
          <FaChartBar className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Payment Intergration
            <p className="text-gray-500 text-sm">Secure payment intergrations for multiple modes of payment. This will ensure smooth checkout while driving more sales and revenue to your business.</p>
          </div>
          <div className=''>
          <FaMoneyBillWave className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Bulk SMS
            <p className="text-gray-500 text-sm">Quick and easy integration Bulk SMS service.</p>
          </div>
          <div className=''>
          <FaSms className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Research & Innovations
            <p className="text-gray-500 text-sm">We help companies to conduct extensive research and innovations.</p>
          </div>
          <div className=''>
          <FaLightbulb className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services