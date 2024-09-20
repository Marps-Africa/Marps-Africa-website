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

export default function BulkSms() {
  return (
    <div className='grid justify-center p-4 space-y-4 lg:mx-80'>
      <div className='space-y-8 p-10'>
        <FadeInWhenVisible>
          <h2 className='flex justify-center font-semibold text-2xl text-gray-800 py-2'>
            Bulk SMS Services
          </h2>
        </FadeInWhenVisible>
        
        {[1, 2, 3, 4, 5].map((index) => (
          <FadeInWhenVisible key={index}>
            <div className='grid lg:grid-cols-2 rounded-lg p-4 gap-16 hover:bg-gray-200'>
              {index % 2 !== 0 ? (
                <>
                  <motion.img 
                    src={`/src/assets/images/bulksms/image${index}.png`} 
                    alt="" 
                    className='rounded-lg'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div className='grid items-center'>
                    {index === 1 && (
                      <div className="space-y-4">
                        <p>
                          Welcome to <span className="font-bold">MarpsAfrica's Bulk SMS</span> services: Your Direct Line to Effective Communication.
                        </p>
                        <p>
                          At MarpsAfrica, we understand the power of instant, widespread communication in today's fast-paced business environment.
                        </p>
                        <p>
                          Our <span className="font-bold">Mission</span> is to provide reliable, efficient, and cost-effective bulk SMS solutions that enable businesses to reach their audience quickly and effectively.
                        </p>
                        <p>
                          Our <span className="font-bold">Vision</span> is to be the leading bulk SMS provider in Africa, empowering businesses with cutting-edge mobile communication tools.
                        </p>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Comprehensive Bulk SMS Solutions</span></p>
                        <p>Our range of bulk SMS services caters to various business needs:</p>
                        <p>• Promotional SMS campaigns for marketing</p>
                        <p>• Transactional SMS for order updates and notifications</p>
                        <p>• SMS alerts for time-sensitive information</p>
                        <p>• Two-way SMS for customer engagement</p>
                        <p>• SMS scheduling for timed message delivery</p>
                      </div>
                    )}
                    {index === 5 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Advanced Features and Integration</span></p>
                        <p>Our bulk SMS platform offers advanced features to enhance your messaging strategy:</p>
                        <p>• Personalized messaging with dynamic fields</p>
                        <p>• Detailed delivery reports and analytics</p>
                        <p>• API integration for seamless connectivity with your existing systems</p>
                        <p>• Contact list management and segmentation</p>
                        <p>• Opt-out management to ensure compliance</p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className='grid items-center'>
                    {index === 2 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Why Choose Our Bulk SMS Service?</span></p>
                        <p>• High delivery rates ensuring your messages reach the intended recipients</p>
                        <p>• User-friendly interface for easy campaign management</p>
                        <p>• Scalable solutions suitable for businesses of all sizes</p>
                        <p>• Competitive pricing with flexible packages</p>
                        <p>• 24/7 customer support for uninterrupted service</p>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Compliance and Security</span></p>
                        <p>We prioritize the security and compliance of our bulk SMS services:</p>
                        <p>• Adherence to local and international SMS regulations</p>
                        <p>• Secure infrastructure to protect your data and contact lists</p>
                        <p>• Spam prevention measures to maintain your brand reputation</p>
                        <p>• Regular security audits and updates</p>
                        <p>• GDPR compliant practices for data protection</p>
                      </div>
                    )}
                  </div>
                  <motion.img 
                    src={`/src/assets/images/bulksms/image${index}.png`} 
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
              <span className="font-bold">Elevate Your Communication Strategy with MarpsAfrica</span>
            </p>
            <p>
              In an era where instant communication is key, our bulk SMS services provide a direct and efficient channel to reach your audience. Whether you're sending promotional offers, important updates, or time-sensitive alerts, MarpsAfrica's bulk SMS solutions ensure your message gets delivered.
            </p>
            <p>
              Our platform is designed to cater to businesses of all sizes, from small startups to large enterprises. We offer the flexibility and scalability to grow with your business needs.
            </p>
            <p>
              With MarpsAfrica as your bulk SMS partner, you're choosing reliability, efficiency, and a commitment to helping you achieve your communication goals. Our team of experts is always ready to assist you in crafting effective SMS campaigns that drive results.
            </p>
            <p>
              Ready to revolutionize your mobile communication strategy? Let's get started with MarpsAfrica's Bulk SMS services today!
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