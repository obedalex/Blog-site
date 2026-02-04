import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import BlogPost from "./pages/BlogPost";
// import CreatePost from "./pages/CreatePost";
// import EditPost from "./pages/EditPost";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/post/:id" element={<BlogPost />} /> */}
            {/* <Route path="/create" element={<CreatePost />} /> */}
            {/* <Route path="/edit/:id" element={<EditPost />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
