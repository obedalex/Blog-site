// import { useState, useEffect } from "react";
// import { getPosts } from "../services/api";
// import BlogCard from "../components/BlogCard";

// function Home() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await getPosts();
//       setPosts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       setLoading(false);
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="home">
//       <h1>Blog Posts</h1>
//       <div className="posts-grid">
//         {posts.map((post) => (
//           <BlogCard key={post._id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;



const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home