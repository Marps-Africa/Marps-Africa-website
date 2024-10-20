import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Loader from "./components/Loader";

import Blogs from "./pages/blogs/Blogs";
import BlogPost from "./pages/blogs/BlogPost";
import Navba from "./pages/blogs/Nav";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NoPage from "./pages/NoPage";
import Book_Appoitment from "./pages/Book_Appoitment";
import SoftDev from "./pages/services/SoftDev";
import MobiDev from "./pages/services/MobiDev";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import WebDev from "./pages/services/WebDev";
import BulkSms from "./pages/services/BulkSms";
import PayIntergration from "./pages/services/PayIntergration";
import Research from "./pages/services/Research";
import Home  from "./pages/home/Home";

function App() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <Loader />; // Show the loader during the first load
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogPost />} />
          <Route path="/services/software-development" element={<SoftDev />} />
          <Route path="/services/mobile-app-development" element={<MobiDev />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/website-design" element={<WebDev />} />
          <Route path="/services/bulk-sms" element={<BulkSms />} />
          <Route path="/services/payment-integration" element={<PayIntergration />} />
          <Route path="/services/market-research" element={<Research />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="appoitment" element={<Book_Appoitment />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/nav" element={<Navba />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
