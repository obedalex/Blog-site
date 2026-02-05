import { useNavigate } from "react-router-dom";
import { createPost } from "../services/api";
import BlogForm from "../components/BlogForm";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (postData) => {
    try {
     await createPost(postData); // ✅ Pass postData
      navigate("/"); // ✅ Navigate to home after success
      // OR navigate(`/post/${response.data._id}`); to go to new post
    } catch (error) {
      console.error("Could not create post: ", error);
      alert("Failed to create post. Please try again."); // ✅ User feedback
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Create New Post</h1>
      <BlogForm onSubmit={handleSubmit} buttonText="Create Post" />
    </div>
  );
};

export default CreatePost;
