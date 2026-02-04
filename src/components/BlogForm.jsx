import React from "react";
import { useState, useEffect } from "react";

const BlogForm = ({ onSubmit, initialValues, buttonText }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Add validation
    if (!title.trim() || !content.trim() || !author.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const postObject = {
      title,
      content,
      author,
    };

    onSubmit(postObject);
  };

  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title || "");
      setContent(initialValues.content || "");
      setAuthor(initialValues.author || "");
    }
  }, [initialValues]);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Field */}
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="text-gray-700 font-semibold mb-2 text-lg"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your blog post title..."
            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
          />
        </div>

        {/* Author Field */}
        <div className="flex flex-col">
          <label
            htmlFor="author"
            className="text-gray-700 font-semibold mb-2 text-lg"
          >
            Author
          </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name..."
            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
          />
        </div>

        {/* Content Field */}
        <div className="flex flex-col">
          <label
            htmlFor="content"
            className="text-gray-700 font-semibold mb-2 text-lg"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog post content here..."
            rows="12"
            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200 resize-vertical"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
