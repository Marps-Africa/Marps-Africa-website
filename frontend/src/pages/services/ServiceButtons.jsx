import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

export default function ServiceButtons() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <>
      {/* Menu button for small/medium screens */}
      <button 
        onClick={toggleSidebar} 
        className="fixed top-20 left-6 z-50 lg:hidden bg-blue-600 text-white p-2 rounded-lg"
      >
        <Menu size={24} />
      </button>

      {/* Overlay for small/medium screens when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={closeSidebar}
        ></div>
      )}

      {/* Service buttons container */}
      <div className={`
        fixed bg-white p-4 shadow-lg z-50 
        transform transition-transform duration-300 ease-in-out
        lg:top-24 lg:left-16 lg:rounded-lg
        ${sidebarOpen ? 'top-0 left-0 h-full w-64 translate-x-0' : 'top-0 left-0 h-full w-64 -translate-x-full'}
        lg:translate-x-0 lg:h-auto lg:w-auto
      `}>
        <h2 className="flex justify-center text-3xl font-bold text-blue-600 mb-6">Our Services</h2>
        <div className='grid space-y-2 space-x-2'>
          <div></div>
          <NavLink
            to="/services/software-development"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `px-2 hover:bg-gray-300 hover:underline rounded-lg text-gray-700 ${
                isActive ? 'bg-blue-600 text-white hover:bg-blue-700' : ''
              }`
            }
          >
            Software Development
          </NavLink>
          <NavLink
            to="/services/mobile-app-development"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `px-2 hover:bg-gray-300 hover:underline rounded-lg text-gray-700 ${
                isActive ? 'bg-blue-600 text-white hover:bg-blue-700' : ''
              }`
            }
          >
            Mobile App Development
          </NavLink>
          <NavLink
            to="/services/digital-marketing"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `px-2 hover:bg-gray-300 hover:underline rounded-lg text-gray-700 ${
                isActive ? 'bg-blue-600 text-white hover:bg-blue-700' : ''
              }`
            }
          >
            Digital Marketing
          </NavLink>
          <NavLink
            to="/services/website-design"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `px-2 hover:bg-gray-300 hover:underline rounded-lg text-gray-700 ${
                isActive ? 'bg-blue-600 text-white hover:bg-blue-700' : ''
              }`
            }
          >
            Website Design & Development
          </NavLink>
          <NavLink
            to="/services/bulk-sms"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `px-2 hover:bg-gray-300 hover:underline rounded-lg text-gray-700 ${
                isActive ? 'bg-blue-600 text-white hover:bg-blue-700' : ''
              }`
            }
          >
            Bulk SMS
          </NavLink>
          <NavLink
            to="/services/payment-integration"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `px-2 hover:bg-gray-300 hover:underline rounded-lg text-gray-700 ${
                isActive ? 'bg-blue-600 text-white hover:bg-blue-700' : ''
              }`
            }
          >
            Payment Integration
          </NavLink>
          <NavLink
            to="/services/market-research"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `px-2 hover:bg-gray-300 hover:underline rounded-lg text-gray-700 ${
                isActive ? 'bg-blue-600 text-white hover:bg-blue-700' : ''
              }`
            }
          >
            Market Research
          </NavLink>
        </div>
      </div>
    </>
  )
}