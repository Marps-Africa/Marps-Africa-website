import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className='h-[10vh]'>
        <Navbar />
      </header>
      <main className="flex-grow min-h-[90vh] bg-gray-100 mt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
