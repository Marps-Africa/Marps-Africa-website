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

export default function SoftDev() {
  return (
    <div className='grid justify-center p-4 space-y-4 lg:mx-80'>
      <div className='space-y-8 p-10'>
        <FadeInWhenVisible>
          <h2 className='flex justify-center font-semibold text-2xl text-gray-800 py-2'>
            Software Development
          </h2>
        </FadeInWhenVisible>
        
        {[1, 2, 3, 4, 5].map((index) => (
          <FadeInWhenVisible key={index}>
            <div className='grid lg:grid-cols-2 rounded-lg p-4 gap-16 hover:bg-gray-200'>
              {index % 2 !== 0 ? (
                <>
                  <motion.img 
                    src={`/src/assets/images/softdev/image${index}.png`} 
                    alt="" 
                    className='rounded-lg'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div className='grid items-center'>
                    {index === 1 && (
                      <div className="space-y-4">
                        <p>
                          Welcome to <span className="font-bold">MarpsAfrica</span>: Your Partner in Quality Software Development.
                        </p>
                        <p>
                          At MarpsAfrica, we know that the right software can transform your business in today's fast-paced digital world.
                        </p>
                        <p>
                          Our <span className="font-bold">Mission</span> is clear: deliver robust, high-quality software that meets our clients' unique needs. We believe technology should empower businesses, boost productivity, and drive innovation.
                        </p>
                        <p>
                          Our <span className="font-bold">Vision</span> is to be a leading software development partner in Africa and beyond.
                        </p>
                      </div>
                    )}{index === 3 && (
                        <div className="space-y-4">
                          <p><span className="font-bold">Expertise and Innovation</span></p>
                          <p>Our team consists of highly skilled software developers, designers, and project managers who are passionate about technology and its potential to drive change.</p>
                          <p>We specialize in various domains, including web and mobile application development, cloud solutions, and enterprise software.</p>
                          <p>By leveraging the latest technologies and methodologies, we create software that is not only functional but also user-friendly and scalable.</p>
                          <p>Innovation is at the heart of what we do. We continuously explore emerging technologies such as artificial intelligence, machine learning, and blockchain to enhance our offerings.</p>
                          <p>This commitment to innovation ensures that our clients receive solutions that are not only current but also future-proof.</p>
                        </div>
                      )}{index === 5 && (
                        <div className="space-y-4">
                          <p><span className="font-bold">Client-Centric Solutions</span></p>
                          <p>We recognize that every business is unique, and so are its software needs.</p>
                          <p>At MarpsAfrica, we pride ourselves on our ability to develop customized solutions that align with our clients' strategic goals.</p>
                          <p>Whether it's a startup looking to build its first application or an established enterprise seeking to optimize existing systems, we have the expertise to deliver results.</p>
                          <p>Our client-centric philosophy extends beyond just software development.</p>
                          <p>We offer ongoing support and maintenance, ensuring that our solutions continue to perform effectively as our clients' businesses grow and evolve.</p>
                          <p>We view our relationships with clients as partnerships, built on trust, communication, and a shared commitment to success.</p>
                        </div>
                      )}
                  </div>
                </>
              ) : (
                <>
                  <div className='grid items-center'>
                    {index === 2 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Our Approach</span></p>
                        <p>At MarpsAfrica, our development process is rooted in collaboration and transparency.</p>
                        <p>Our collaborative approach with our clients allows us to tailor our software solutions precisely to their requirements.</p>
                        <p>From the initial consultation to the final deployment, we maintain open lines of communication, ensuring that our clients are involved every step of the way.</p>
                      </div>
                    )}
                    {index === 4 && (
                    <div className="space-y-4">
                        <p><span className="font-bold">Quality Assurance</span></p>
                        <p>Quality is non-negotiable at MarpsAfrica.</p>
                        <p>We implement rigorous testing and quality assurance processes to ensure that our software is reliable and performs optimally under various conditions.</p>
                        <p>Our team conducts thorough testing at every stage of development, from unit testing to user acceptance testing.</p>
                        <p>This meticulous approach allows us to identify and resolve potential issues before they reach our clients, guaranteeing a smooth deployment and a seamless user experience.</p>
                    </div>
                    )}
                  </div>
                  <motion.img 
                    src={`/src/assets/images/softdev/image${index}.png`} 
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
                <span className="font-bold">Join Us on this Journey</span>
            </p>
            <p>
                We are excited about the future of technology and its potential to transform businesses across the continent.
                If you're looking for a dedicated software development partner that prioritizes quality, innovation, and client satisfaction, look no further.
                Together, let's create robust software solutions that propel your business forward.
                With MarpsAfrica, you're not just choosing a software development company; you're choosing a partner committed to your success.
                Let's embark on this journey together.
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
