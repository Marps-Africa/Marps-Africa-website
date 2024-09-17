import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] pt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Our Services</h2>
          <nav className="flex flex-col space-y-2">
            <NavLink to="#" className="text-white font-semibold hover:underline">Software Development</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">Cybersecurity</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">Cloud Computing</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">Data Analytics</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">IT Consulting</NavLink>
          </nav>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Company</h2>
          <nav className="flex flex-col space-y-2">
            <NavLink to="#" className="text-white font-semibold hover:underline">About Us</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">Careers</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">Partners</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">Blog</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">Contact</NavLink>
          </nav>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Support</h2>
          <nav className="flex flex-col space-y-2">
            <NavLink to="#" className="text-white font-semibold hover:underline">Help Center</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">FAQ</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">Security</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">Terms of Service</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">Privacy Policy</NavLink>
          </nav>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Resources</h2>
          <nav className="flex flex-col space-y-2">
            <NavLink to="#" className="text-white font-semibold hover:underline">Case Studies</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">News</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">Events</NavLink>
            <NavLink to="#" className="text-white font-semibold hover:underline">Webinars</NavLink>
          </nav>
        </div>
      </div>
      <hr className="border-white mt-12"/>
      <p className="text-center font-semibold text-white py-8">© 2024 Marps Africa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
