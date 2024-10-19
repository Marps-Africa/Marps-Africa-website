import React, { useEffect } from 'react';
import HeroSection from './HeroSection'; // Import your new HeroSection component
import Offers from './Offers';
import HomeServices from './HomeServices';
import ConsultingProcess from './ConsultingProcess';
import ContactUs from './ContactUs';

function Home() {
  // Adding the Tawk.to script dynamically using useEffect
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/66e8876f50c10f7a00ab4415/1i7u52331';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script when the component is unmounted
    };
  }, []);

  return (
    <div className="relative w-full bg-slate-100 mt-[-38px]">
      <HeroSection /> 
      <Offers />
      <ContactUs />
      <HomeServices />
      <ConsultingProcess />
    </div>
  );
}

export default Home;
