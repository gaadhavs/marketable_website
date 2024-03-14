import React, { useEffect, useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import cookies from "js-cookie";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  useEffect(() => {
    const storedUsername = cookies.get("username");
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    cookies.remove("username");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/");
  };

  return (
    <div className="navbar_body">
      <div className="left_navbar">
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <div className="right_navbar">
        <div className="heading">
          <h1>Courses</h1>
          <h1>Cart</h1>
        </div>
        <div className="profile">
          {isLoggedIn ? (
            <div className="dropdown">
              <button className="dropbtn">{username}</button>
              <div className="dropdown-content">
                <Link to="/" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <div className="dropdown">
              <button className="dropbtn">Profile</button>
              <div className="dropdown-content">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
