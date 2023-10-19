import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import TestingBlog from "./Blogs/TestingBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/history-of-testing" element={<TestingBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
