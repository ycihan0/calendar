import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUserFromLocalStorage = () => {
      const User = localStorage.getItem("user");
      return User ? setUser(JSON.parse(User)) : null;
    };

    getUserFromLocalStorage();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.href = "/auth";
  };

  return (
    <div className="header_main">
      <div className="mobile_menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo_mobile">
            <h1 className="user-title">
              {user ? user.username : "Hoş Geldiniz!"}
            </h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="watchs.html">
                  Watchs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="testimonial.html">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="contact.html">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  <img src="src/assets/images/search-icon.png" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="logo">
          <h1 className="user-title">
            {user ? "Hoş Geldin " + user.username + "!" : "Hoş Geldiniz!"}
          </h1>
        </div>
        <div className="menu_main">
          <ul>
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="watchs.html">Watchs</a>
            </li>
            <li>
              <a href="testimonial.html">Testimonial</a>
            </li>
            <li>
              <a href="contact.html">Contact us</a>
            </li>
            <li>
              <a href="#" onClick={handleLogout}>
                <img src="src/assets/images/search-icon.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
