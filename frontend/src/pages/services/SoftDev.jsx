import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInWhenVisible = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function SoftDev() {
  const sections = [
    {
      title: "Welcome to MarpsAfrica",
      content: "Empowering your business with tailored software solutions.",
    },
    {
      title: "Mission",
      content: "Delivering quality software that drives innovation.",
    },
    {
      title: "Our Approach",
      content:
        "Collaborative and transparent development, from start to finish.",
    },
    {
      title: "Quality Assurance",
      content: "Rigorous testing ensures smooth deployment and reliability.",
    },
    {
      title: "Client-Centric Solutions",
      content: "Customized to align with your unique business goals.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row lg:ml-64">
      <div className="flex-grow p-4 md:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeInWhenVisible>
            <h2 className="font-semibold text-3xl text-gray-800 py-2 text-center">
              Software Development
            </h2>
          </FadeInWhenVisible>

          {sections.map((section, index) => (
            <FadeInWhenVisible key={index}>
              <div className="flex flex-col md:flex-row items-center rounded-lg p-6 hover:bg-gray-100 transition-transform duration-200 transform hover:scale-105">
                <motion.img
                  src={`/images/softdev/image${index + 1}.png`}
                  alt=""
                  className="rounded-lg w-full md:w-1/3 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="w-full md:w-2/3 md:pl-8 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-blue-600">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{section.content}</p>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}

          <FadeInWhenVisible>
            <div className="flex justify-center mt-8">
              <NavLink
                to="/appointment"
                className="bg-[#37B6FF] text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105"
              >
                Book Appointment
              </NavLink>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
}
