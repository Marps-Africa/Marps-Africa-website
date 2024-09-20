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

export default function Research() {
  return (
    <div className='grid justify-center p-4 space-y-4 lg:mx-80'>
      <div className='space-y-8 p-10'>
        <FadeInWhenVisible>
          <h2 className='flex justify-center font-semibold text-2xl text-gray-800 py-2'>
            Market Research Services
          </h2>
        </FadeInWhenVisible>
        
        {[1, 2, 3, 4, 5].map((index) => (
          <FadeInWhenVisible key={index}>
            <div className='grid lg:grid-cols-2 rounded-lg p-4 gap-16 hover:bg-gray-200'>
              {index % 2 !== 0 ? (
                <>
                  <motion.img 
                    src={`/src/assets/images/research/image${index}.png`} 
                    alt="" 
                    className='rounded-lg'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div className='grid items-center'>
                    {index === 1 && (
                      <div className="space-y-4">
                        <p>
                          Welcome to <span className="font-bold">MarpsAfrica's Market Research</span> services: Your Key to Informed Business Decisions.
                        </p>
                        <p>
                          At MarpsAfrica, we understand that comprehensive market insights are crucial for business success in today's competitive landscape.
                        </p>
                        <p>
                          Our <span className="font-bold">Mission</span> is to provide in-depth, actionable market research that empowers businesses to make data-driven decisions and stay ahead of the curve.
                        </p>
                        <p>
                          Our <span className="font-bold">Vision</span> is to be the leading market research provider in Africa, known for our accurate insights and innovative research methodologies.
                        </p>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Comprehensive Market Research Solutions</span></p>
                        <p>We offer a wide range of market research services:</p>
                        <p>• Consumer Behavior Analysis</p>
                        <p>• Competitor Analysis and Benchmarking</p>
                        <p>• Market Segmentation and Targeting</p>
                        <p>• Brand Perception and Awareness Studies</p>
                        <p>• Product Development and Testing</p>
                        <p>• Customer Satisfaction and Loyalty Research</p>
                      </div>
                    )}
                    {index === 5 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Advanced Research Methodologies</span></p>
                        <p>Our research employs cutting-edge methodologies:</p>
                        <p>• Big Data Analytics for trend identification</p>
                        <p>• AI-powered sentiment analysis</p>
                        <p>• Virtual Focus Groups for in-depth insights</p>
                        <p>• Mobile Ethnography for real-time consumer behavior</p>
                        <p>• Predictive Modeling for market forecasting</p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className='grid items-center'>
                    {index === 2 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Why Choose Our Market Research Services?</span></p>
                        <p>• Tailored research designs to meet your specific business needs</p>
                        <p>• Combination of qualitative and quantitative research methods</p>
                        <p>• Expertise in African markets and consumer behavior</p>
                        <p>• Advanced data analytics and visualization tools</p>
                        <p>• Actionable insights and strategic recommendations</p>
                        <p>• Timely delivery of research findings</p>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Our Research Process</span></p>
                        <p>We follow a rigorous research process to ensure quality:</p>
                        <p>1. Initial Consultation and Research Design</p>
                        <p>2. Data Collection through various channels</p>
                        <p>3. Advanced Data Analysis and Interpretation</p>
                        <p>4. Insight Generation and Strategy Formulation</p>
                        <p>5. Presentation of Findings and Recommendations</p>
                        <p>6. Follow-up Support and Implementation Guidance</p>
                      </div>
                    )}
                  </div>
                  <motion.img 
                    src={`/src/assets/images/research/image${index}.png`} 
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
              <span className="font-bold">Empower Your Business with MarpsAfrica's Market Research</span>
            </p>
            <p>
              In today's rapidly evolving market, staying ahead requires more than just intuition. It demands a deep understanding of your market, customers, and competitors. MarpsAfrica's market research services provide you with the insights you need to make informed decisions, identify new opportunities, and mitigate risks.
            </p>
            <p>
              Our team of experienced researchers and analysts combines industry expertise with cutting-edge research methodologies to deliver actionable insights tailored to your business needs. Whether you're looking to enter a new market, launch a new product, or optimize your current strategies, our research can provide the foundation for your success.
            </p>
            <p>
              With MarpsAfrica as your market research partner, you're choosing accuracy, innovation, and strategic thinking. Our insights don't just inform – they inspire action and drive growth.
            </p>
            <p>
              Ready to unlock the power of data-driven decision making? Let's dive into your market with MarpsAfrica's research expertise today!
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