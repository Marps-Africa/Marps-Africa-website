/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogData from "../../mockData.json";

function Blogs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-gray-800"
      >
        Marps Africa Blogs
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog, index) => (
          <BlogPreview key={blog.id} blog={blog} index={index} />
        ))}
      </div>
    </div>
  );
}

function BlogPreview({ blog, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          {blog.title}
        </h2>
        <p className="text-gray-600 mb-4">{blog.date}</p>
        <Link
          to={`/blogs/${blog.id}`}
          className="text-blue-500 hover:text-blue-700 font-medium transition duration-300"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}

export default Blogs;
