import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { getPost, updatePost } from "../services/api"
import BlogForm from "../components/BlogForm"  // ✅ Import BlogForm, not BlogPost

const EditPost = () => {
  const { id } = useParams();  // ✅ Get ID from URL
  const navigate = useNavigate();
  
  const [post, setPost] = useState(null);  // ✅ Store the post
  const [loading, setLoading] = useState(true);  // ✅ Track loading

  // ✅ Fetch the existing post
  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await getPost(id);
      setPost(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error loading post: ", error);
      setLoading(false);
      alert("Failed to load post");
    }
  };

  // ✅ Run fetch when component mounts
  useEffect(() => {
    fetchPost();
  }, [id]);

  // ✅ Handle form submission
  const handleUpdate = async (postData) => {
    try {
      await updatePost(id, postData);  // ✅ Pass ID and data
      navigate(`/post/${id}`);  // ✅ Navigate to updated post
    } catch (error) {
      console.error("Could not edit post: ", error);
      alert("Failed to update post. Please try again");
    }
  };

  // ✅ Show loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // ✅ Show error if post not found
  if (!post) {
    return <div>Post not found</div>;
  }

  // ✅ Render the form with existing data
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Edit Post</h1>
      <BlogForm 
        onSubmit={handleUpdate} 
        initialValues={post}  // ✅ Pre-fill with existing data
        buttonText="Update Post" 
      />
    </div>
  );
}

export default EditPost;