import React from "react";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import About from "./component/About";
import Blogs from "./component/Blogs";
import Uses from "./component/Uses";
import Contact from "./component/Contact";
import Newsletter from "./component/Newsletter";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/uses" element={<Uses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
