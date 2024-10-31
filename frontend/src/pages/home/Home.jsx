import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import Offers from './Offers';
import HomeServices from './HomeServices';
import ConsultingProcess from './ConsultingProcess';
import ContactUs from './ContactUs';

function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/66e8876f50c10f7a00ab4415/1i7u52331';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append the script to the document
    document.body.appendChild(script);

    // Configure Tawk API to hide messages
    script.onload = () => {
      if (window.Tawk_API) {
        // Hide the initial message
        window.Tawk_API.onLoad = function() {
          window.Tawk_API.hideWidget();
        };
        
        // Show widget on button click
        document.getElementById('show-tawk').onclick = function() {
          window.Tawk_API.showWidget();
        };
      }
    };

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full bg-slate-100 mt-[-38px]">
      <HeroSection />
      <Offers />
      <ContactUs />
      <HomeServices />
      <ConsultingProcess />
      {/* Button to open Tawk widget */}
      
    </div>
  );
}

export default Home;
