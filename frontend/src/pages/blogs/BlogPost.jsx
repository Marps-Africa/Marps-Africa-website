import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogData from "../../mockData.json";
import { updateMockData } from "../../utility/updateMockData";
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function BlogPost() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));
  const [comments, setComments] = useState(blog.comments || []);
  
  console.log(blog.image)

  if (!blog) return <div className="text-center py-8">Blog not found</div>;

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <Link
          to="/blogs"
          className="inline-block mt-4 ml-4 text-blue-500 hover:text-blue-700 transition duration-300"
        >
          ← Back to Blogs
        </Link>
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {blog.title}
          </h1>
          <p className="text-gray-600 mb-4">{blog.date}</p>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover mb-8 rounded-lg shadow"
          />
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <ShareButtons blog={blog} />
          <CommentSection
            comments={comments}
            setComments={setComments}
            blogId={id}
          />
        </div>
      </motion.div>
    </div>
  );
}

function ShareButtons({ blog }) {
  const currentURL = encodeURIComponent(window.location.href);
  const blogTitle = encodeURIComponent(blog.title);
  const blogSummary = encodeURIComponent(
    blog.summary || "Check out this interesting blog post!"
  );

  const shareUrls = {
    Whatsapp: `https://api.whatsapp.com/send?text=${blogTitle}%20${currentURL}`,
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
    Twitter: `https://twitter.com/intent/tweet?url=${currentURL}&text=${blogTitle}`,
    LinkedIn: `https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}&title=${blogTitle}&summary=${blogSummary}`,
  };

  const buttonColors = {
    Whatsapp: "bg-green-600 hover:bg-green-700 text-white",
    Facebook: "bg-blue-700 hover:bg-blue-800 text-white",
    X: "bg-black hover:bg-gray-900 text-white",
    LinkedIn: "bg-blue-500 hover:bg-blue-600 text-white",
  };

  const iconComponents = {
    Whatsapp: <FaWhatsapp />,
    Facebook: <FaFacebook />,
    Twitter: <FaTwitter />,
    LinkedIn: <FaLinkedin />,
  };

  const handleShare = (platform) => {
    window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Share:</h3>
      <div className="flex space-x-4">
        {Object.entries(buttonColors).map(([platform, color]) => (
          <motion.button
            key={platform}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${color} flex items-center space-x-2 text-white px-4 py-2 rounded-full hover:opacity-90 transition duration-300`}
            onClick={() => handleShare(platform)}
          >
            {iconComponents[platform]}
            <span>{platform}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function CommentSection({ comments, setComments, blogId }) {
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      id: Date.now(),
      name: name || "Anonymous",
      content: newComment,
      date: new Date().toLocaleString(),
    };

    // Update local state
    setComments([...comments, comment]);
    updateMockData(blogId, comment);

    setNewComment("");
    setName("");
  };

  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h3>
      {comments.map((comment) => (
        <motion.div
          key={comment.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 p-4 rounded-lg mb-4 shadow"
        >
          <p className="font-semibold text-gray-800">{comment.name}</p>
          <p className="text-gray-600 text-sm mb-2">{comment.date}</p>
          <p>{comment.content}</p>
        </motion.div>
      ))}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name (optional)"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Type your comment here..."
          required
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Post Comment
        </motion.button>
      </form>
    </div>
  );
}

export default BlogPost;
