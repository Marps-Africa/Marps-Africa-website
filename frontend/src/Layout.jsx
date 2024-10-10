import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow min-h-[90vh] bg-[#F4F4F6] mt-16">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
