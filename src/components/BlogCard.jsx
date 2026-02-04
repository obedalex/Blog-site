import { Link } from "react-router-dom";

const BlogCard = ({ id, title, content, author, createdAt }) => {
  const preview =
    content.length > 150 ? content.substring(0, 150) + "..." : content;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-3 hover:text-yellow-500 transition-colors">
        {title}
      </h1>

      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
        {preview}
      </p>

      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
        <p className="flex items-center gap-2">
          <span className="font-semibold text-gray-700">By {author}</span>
        </p>
        <p className="text-gray-400">
          {new Date(createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>

      <Link to={`/post/${id}`}>
        <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 shadow-md hover:shadow-lg">
          Read More →
        </button>
      </Link>
    </div>
  );
};

export default BlogCard;
