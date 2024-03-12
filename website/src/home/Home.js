import React, { useEffect, useState } from "react";
import "./home.css";
import { Link ,useNavigate} from "react-router-dom";
import cookies from "js-cookie";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate=useNavigate();


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
    cookies.remove("password"); 
    setIsLoggedIn(false);
    setUsername("");
    navigate("/");
  };

  return (
    <div className="navbar_body">
      <div className="navbar_left">
        <h1>Marketable</h1>
      </div>
      <div className="navbar_right">
        {isLoggedIn ? (
          <>
            <h1>{username}</h1>
            <h1 onClick={handleLogout}>Logout</h1>
          </>
        ) : (
          <>
            <Link to="/login">
              <h1>Login</h1>
            </Link>
            <Link to="/register">
              <h1>Register</h1>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
/*
  <nav className="navbar_main">
          <div className="navbar-brand">
            <h1>My Website</h1>
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-buttons">
            {!isLoggedIn && (
              <>
                <Link to="/login">
                  <button>Login</button>
                </Link>
                <Link to="/register">
                  <button>Register</button>
                </Link>
              </>
            )}
          </div>
        </nav>
  */
