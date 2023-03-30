import "./App.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Admin from './Pages/Admin';
import Profile from './Pages/Profile'
import { useState } from "react";

function App() {

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  return (
    <div className="allBox">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1 className="head">Hello World</h1>}></Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="Admin" element={<Admin />}></Route>
          <Route path="users">
          <Route path="Profil/:userId" element={<Profile />} />
          </Route>
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
            <NavLink className="navLink" to="/Admin">
              Admin
            </NavLink>
            <NavLink className="navLink" to="/Profile">
              Profile
            </NavLink>
          </div>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;

