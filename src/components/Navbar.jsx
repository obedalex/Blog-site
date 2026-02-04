import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link
          to="/"
          className="text-2xl font-bold hover:text-yellow-400 transition-colors"
        >
          My<span className="text-yellow-400">Blog</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-lg font-medium hover:text-yellow-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
