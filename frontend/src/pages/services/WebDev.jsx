import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInWhenVisible = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function WebDev() {
  return (
    <div className='grid justify-center p-4 space-y-4 lg:mx-80'>
      <div className='space-y-8 p-10'>
        <FadeInWhenVisible>
          <h2 className='flex justify-center font-semibold text-2xl text-gray-800 py-2'>
            Website Design Services
          </h2>
        </FadeInWhenVisible>
        
        {[1, 2, 3, 4, 5].map((index) => (
          <FadeInWhenVisible key={index}>
            <div className='grid lg:grid-cols-2 rounded-lg p-4 gap-16 hover:bg-gray-200'>
              {index % 2 !== 0 ? (
                <>
                  <motion.img 
                    src={`/src/assets/images/websitedesign/image${index}.png`} 
                    alt="" 
                    className='rounded-lg'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div className='grid items-center'>
                    {index === 1 && (
                      <div className="space-y-4">
                        <p>
                          Welcome to <span className="font-bold">MarpsAfrica's Website Design</span> services: Your Gateway to Stunning Online Presence.
                        </p>
                        <p>
                          At MarpsAfrica, we understand that a well-designed website is crucial for making a lasting impression in the digital world.
                        </p>
                        <p>
                          Our <span className="font-bold">Mission</span> is to create visually appealing, user-friendly, and functional websites that reflect your brand's unique identity and drive your business goals.
                        </p>
                        <p>
                          Our <span className="font-bold">Vision</span> is to be the leading website design partner for businesses across Africa, helping them establish a powerful online presence.
                        </p>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Comprehensive Website Design Services</span></p>
                        <p>Our team of expert designers and developers offer a full range of website design services:</p>
                        <p>• Custom Website Design tailored to your brand</p>
                        <p>• Responsive Design for seamless viewing on all devices</p>
                        <p>• E-commerce Website Development</p>
                        <p>• Content Management System (CMS) Integration</p>
                        <p>• Website Maintenance and Support</p>
                      </div>
                    )}
                    {index === 5 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">User-Centric Design Approach</span></p>
                        <p>We prioritize user experience (UX) in every aspect of our design process.</p>
                        <p>Our team conducts thorough research to understand your target audience and their needs.</p>
                        <p>We create intuitive navigation structures and user interfaces.</p>
                        <p>We perform usability testing to ensure optimal performance and user satisfaction.</p>
                        <p>Our designs focus on converting visitors into customers or leads.</p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className='grid items-center'>
                    {index === 2 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Our Website Design Process</span></p>
                        <p>We begin with a detailed consultation to understand your business, goals, and vision.</p>
                        <p>Our team creates wireframes and mockups for your approval before development begins.</p>
                        <p>We use the latest web technologies to build fast, secure, and scalable websites.</p>
                        <p>Our quality assurance process ensures your website functions flawlessly across all browsers and devices.</p>
                        <p>We provide training and documentation to help you manage your new website effectively.</p>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Search Engine Optimization (SEO) Integration</span></p>
                        <p>We design with SEO best practices in mind to improve your website's visibility.</p>
                        <p>Our websites are built with clean, semantic code that search engines love.</p>
                        <p>We optimize page load speeds for better user experience and search rankings.</p>
                        <p>We integrate essential SEO elements like meta tags, sitemaps, and structured data.</p>
                        <p>Our content strategy ensures your website's copy is both user-friendly and SEO-optimized.</p>
                      </div>
                    )}
                  </div>
                  <motion.img 
                    src={`/src/assets/images/websitedesign/image${index}.png`} 
                    alt="" 
                    className='rounded-lg'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </>
              )}
            </div>
          </FadeInWhenVisible>
        ))}
        
        <FadeInWhenVisible>
          <div className="space-y-4 pt-4">
            <p>
              <span className="font-bold">Transform Your Online Presence with MarpsAfrica</span>
            </p>
            <p>
              In today's digital age, your website is often the first point of contact between your business and potential customers. At MarpsAfrica, we're committed to creating websites that not only look great but also drive results for your business.
            </p>
            <p>
              Whether you're a startup looking for your first website or an established business needing a redesign, our tailored website design solutions are crafted to meet your specific needs and objectives.
            </p>
            <p>
              Let's collaborate to create a website that truly represents your brand and engages your audience. With MarpsAfrica as your website design partner, you're choosing creativity, functionality, and a commitment to your online success.
            </p>
            <p>
              Ready to elevate your online presence? Let's start building your dream website today.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
      <FadeInWhenVisible>
        <div className='flex justify-end'>
          <NavLink
            to="/appoitment"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Book Appointment
          </NavLink>
        </div>
      </FadeInWhenVisible>
    </div>
  );
}