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

export default function PayIntergration() {
  return (
    <div className='grid justify-center p-4 space-y-4 lg:mx-80'>
      <div className='space-y-8 p-10'>
        <FadeInWhenVisible>
          <h2 className='flex justify-center font-semibold text-2xl text-gray-800 py-2'>
            Payment Integration Services
          </h2>
        </FadeInWhenVisible>
        
        {[1, 2, 3, 4, 5].map((index) => (
          <FadeInWhenVisible key={index}>
            <div className='grid lg:grid-cols-2 rounded-lg p-4 gap-16 hover:bg-gray-200'>
              {index % 2 !== 0 ? (
                <>
                  <motion.img 
                    src={`/src/assets/images/payment/image${index}.png`} 
                    alt="" 
                    className='rounded-lg'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div className='grid items-center'>
                    {index === 1 && (
                      <div className="space-y-4">
                        <p>
                          Welcome to <span className="font-bold">MarpsAfrica's Payment Integration</span> services: Your Gateway to Seamless Transactions.
                        </p>
                        <p>
                          At MarpsAfrica, we understand that efficient and diverse payment options are crucial for business success in the digital age.
                        </p>
                        <p>
                          Our <span className="font-bold">Mission</span> is to provide robust, secure, and user-friendly payment integration solutions that cater to the diverse needs of businesses and customers across Africa.
                        </p>
                        <p>
                          Our <span className="font-bold">Vision</span> is to be the leading payment integration service provider in Africa, facilitating smooth transactions and driving financial inclusion.
                        </p>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Comprehensive Payment Solutions</span></p>
                        <p>We offer integration with a wide range of payment methods:</p>
                        <p>• Mobile Money (e.g., M-Pesa, MTN Mobile Money)</p>
                        <p>• Credit and Debit Cards (Visa, Mastercard, American Express)</p>
                        <p>• PaySii for seamless online payments</p>
                        <p>• PayPal for international transactions</p>
                        <p>• Bank transfers and direct debits</p>
                        <p>• Cryptocurrency payments for tech-savvy customers</p>
                      </div>
                    )}
                    {index === 5 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Advanced Features and Benefits</span></p>
                        <p>Our payment integration services come with advanced features:</p>
                        <p>• Real-time transaction monitoring and reporting</p>
                        <p>• Fraud detection and prevention mechanisms</p>
                        <p>• Multi-currency support for international businesses</p>
                        <p>• Recurring billing for subscription-based models</p>
                        <p>• Customizable checkout experiences to match your brand</p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className='grid items-center'>
                    {index === 2 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Why Choose Our Payment Integration Service?</span></p>
                        <p>• Seamless integration with your existing systems and websites</p>
                        <p>• Support for multiple payment gateways to maximize reach</p>
                        <p>• Highly secure transactions with PCI DSS compliance</p>
                        <p>• Scalable solutions suitable for businesses of all sizes</p>
                        <p>• 24/7 technical support and monitoring</p>
                        <p>• Competitive transaction fees and flexible pricing models</p>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="space-y-4">
                        <p><span className="font-bold">Security and Compliance</span></p>
                        <p>We prioritize the security of every transaction:</p>
                        <p>• End-to-end encryption for all payment data</p>
                        <p>• Compliance with PCI DSS and other relevant standards</p>
                        <p>• Regular security audits and penetration testing</p>
                        <p>• Tokenization to protect sensitive payment information</p>
                        <p>• Adherence to local and international financial regulations</p>
                      </div>
                    )}
                  </div>
                  <motion.img 
                    src={`/src/assets/images/payment/image${index}.png`} 
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
              <span className="font-bold">Empower Your Business with MarpsAfrica's Payment Integration</span>
            </p>
            <p>
              In today's digital economy, offering a variety of secure and convenient payment options is crucial for business success. MarpsAfrica's payment integration services ensure that you can accept payments from customers using their preferred methods, whether it's mobile money, cards, or online payment platforms.
            </p>
            <p>
              Our solutions are designed to cater to businesses of all sizes, from small e-commerce startups to large multinational corporations. We provide the flexibility and scalability to grow with your business needs, ensuring that you're always ready to meet your customers' payment preferences.
            </p>
            <p>
              With MarpsAfrica as your payment integration partner, you're choosing reliability, security, and innovation. Our team of experts is always ready to assist you in implementing a payment solution that drives your business forward.
            </p>
            <p>
              Ready to streamline your payment processes and boost your sales? Let's integrate cutting-edge payment solutions with MarpsAfrica today!
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