import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPost, deletePost } from "../services/api";

const BlogPost = () => {
  // STATE - stores data
  const [post, setPost] = useState(null); // null, not "" - we're storing an object
  const [loading, setLoading] = useState(true); // Start as true since we're loading

  // GET ID FROM URL
  const { id } = useParams(); // This extracts the id from /post/:id

  // NAVIGATION
  const navigate = useNavigate(); // For redirecting after delete

  // FETCH POST FUNCTION
  const fetchPost = async () => {
    try {
      setLoading(true); // Start loading
      const response = await getPost(id);
      setPost(response.data); // Store the post
      setLoading(false); // Stop loading
    } catch (error) {
      console.error("Error Loading Post: ", error);
      setLoading(false); // Stop loading even if error
    }
  };

  // DELETE POST FUNCTION
  const handleDelete = async () => {
    // Ask for confirmation
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?",
    );

    if (confirmed) {
      try {
        await deletePost(id);
        navigate("/"); // Go back to home page
      } catch (error) {
        console.error("Error deleting post: ", error);
        alert("Failed to delete post");
      }
    }
  };

  // RUN FETCH WHEN COMPONENT LOADS
  useEffect(() => {
    fetchPost();
  }, [id]); // Re-fetch if id changes

  // CONDITIONAL RENDERING - Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  // CONDITIONAL RENDERING - Post not found
  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl text-gray-600">Post not found</div>
      </div>
    );
  }

  // MAIN RENDER - Only runs if post exists
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back to Home Link */}
      <Link
        to="/"
        className="text-yellow-500 hover:text-yellow-600 font-medium mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      {/* Post Container */}
      <article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-gray-600 mb-8 pb-6 border-b border-gray-200">
          <p className="font-semibold">
            By <span className="text-gray-800">{post.author}</span>
          </p>
          <span className="text-gray-400">•</span>
          <p className="text-gray-500">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6 border-t border-gray-200">
          <Link to={`/edit/${id}`} className="flex-1">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Edit Post
            </button>
          </Link>

          <button
            onClick={handleDelete}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Delete Post
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
