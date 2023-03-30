import "./App.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="allBox">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1 className="head">Hello World</h1>}></Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
        </Routes>
        <nav>
          <div className="nav">
            <NavLink className="navLink" to="/Home">
              Home
            </NavLink>
            <NavLink className="navLink" to="/About">
              About
            </NavLink>
            <NavLink className="navLink" to="/Contact">
              Contract
            </NavLink>
          </div>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
