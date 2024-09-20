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

export default function DigitalMarketing() {
  return (
    <div className='grid justify-center p-4 space-y-4 lg:mx-80'>
      <div className='space-y-8 p-10'>
        <FadeInWhenVisible>
          <h2 className='flex justify-center font-semibold text-2xl text-gray-800 py-2'>
            Digital Marketing Services
          </h2>
        </FadeInWhenVisible>
        
        {[1, 2, 3, 4, 5].map((index) => (
          <FadeInWhenVisible key={index}>
            <div className='grid lg:grid-cols-2 rounded-lg p-4 gap-16 hover:bg-gray-200'>
              {index % 2 !== 0 ? (
                <>
                  <motion.img 
                    src={`/src/assets/images/digitalmarketing/image${index}.png`} 
                    alt="" 
                    className='rounded-lg'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div className='grid items-center'>
                    {index === 1 && (
                      <div className="space-y-4">
                        <p>
                          Welcome to <span className="font-bold">MarpsAfrica's Digital Marketing</span> services: Your Path to Online Success.
                        </p>
                        <p>
                          At MarpsAfrica, we understand that effective digital marketing is crucial for businesses to thrive in today's competitive online landscape.
                        </p>
                        <p>
                          Our <span className="font-bold">Mission</span> is to create tailored, data-driven digital marketing strategies that boost your online presence, engage your target audience, and drive measurable results.
                        </p>
                        <p>
                          Our <span className="font-bold">Vision</span> is to be the premier digital marketing partner for businesses across Africa, helping them achieve sustainable growth in the digital realm.
                        </p>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Comprehensive Digital Marketing Services</span></p>
                        <p>Our team of digital marketing experts offers a full suite of services to elevate your online presence:</p>
                        <p>• Search Engine Optimization (SEO) to improve your website's visibility</p>
                        <p>• Pay-Per-Click (PPC) advertising for immediate targeted traffic</p>
                        <p>• Social Media Marketing to engage and grow your audience</p>
                        <p>• Content Marketing to establish your brand as an industry leader</p>
                        <p>• Email Marketing for nurturing leads and customer retention</p>
                      </div>
                    )}
                    {index === 5 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Data-Driven Strategies</span></p>
                        <p>We believe in the power of data to inform and optimize marketing strategies.</p>
                        <p>Our team utilizes advanced analytics tools to track campaign performance and user behavior.</p>
                        <p>We provide regular, detailed reports to keep you informed about your digital marketing ROI.</p>
                        <p>Our data-driven approach allows for continuous optimization, ensuring your marketing budget is always working efficiently.</p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className='grid items-center'>
                    {index === 2 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Our Digital Marketing Approach</span></p>
                        <p>We start with a comprehensive analysis of your business, target audience, and competitors.</p>
                        <p>Based on our findings, we develop a customized digital marketing strategy aligned with your goals.</p>
                        <p>Our agile approach allows us to quickly adapt to market trends and algorithm changes.</p>
                        <p>We focus on creating cohesive campaigns across multiple channels for maximum impact.</p>
                        <p>Regular strategy reviews ensure we're always aligned with your evolving business objectives.</p>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Creative Content and Design</span></p>
                        <p>Our creative team crafts compelling content that resonates with your target audience.</p>
                        <p>We create visually stunning designs that capture attention and reinforce your brand identity.</p>
                        <p>Our content strategy covers various formats: blog posts, infographics, videos, and more.</p>
                        <p>We ensure all content is optimized for both search engines and user engagement.</p>
                        <p>Our design work is responsive, ensuring a seamless experience across all devices.</p>
                      </div>
                    )}
                  </div>
                  <motion.img 
                    src={`/src/assets/images/digitalmarketing/image${index}.png`} 
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
              <span className="font-bold">Elevate Your Digital Presence with MarpsAfrica</span>
            </p>
            <p>
              In today's digital-first world, a strong online presence is not just an advantage – it's a necessity. At MarpsAfrica, we're passionate about helping businesses like yours navigate the complex digital landscape and achieve measurable success.
            </p>
            <p>
              Whether you're a small business looking to establish your online presence or a large corporation aiming to dominate your market, our tailored digital marketing solutions are designed to meet your unique needs and objectives.
            </p>
            <p>
              Let's collaborate to create a digital marketing strategy that sets you apart from the competition. With MarpsAfrica as your digital marketing partner, you're choosing expertise, innovation, and a commitment to your growth.
            </p>
            <p>
              Ready to take your digital marketing to the next level? Let's start your journey to online success today.
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