import { useEffect, useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  const { pathname } = useLocation();

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
    <header className="header_main">
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
              <li className={`nav-item ${(pathname === "/" || pathname === "/home") && "active"}`}>
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/home");
                  }}
                >
                  Anasayfa
                </a>
              </li>
              <li className={`nav-item ${(pathname === "/addplan") && "active"}`}>
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/addplan");
                  }}
                >
                  Plan Ekle
                </a>
              </li>
              <li className={`nav-item ${(pathname === "/monthly") && "active"}`}>
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/monthly");
                  }}
                >
                  Aylık
                </a>
              </li>
              <li className={`nav-item ${(pathname === "/weekly") && "active"}`}>
                <a
                  className="nav-link "
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/weekly");
                  }}
                >
                  Haftalık
                </a>
              </li>
              <li className={`nav-item ${pathname.startsWith("/daily") && "active"}`}>
                <a
                  className="nav-link "
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/daily");
                  }}
                >
                  Günlük
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
            <li className={pathname === "/"||pathname === "/home"?"active":""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/home");
                }}
              >
                Anasayfa
              </a>
            </li>
            <li className={pathname === "/addplan" ?"active":""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/addplan");
                }}
              >
                Plan Ekle
              </a>
            </li>
            <li className={pathname === "/monthly" ?"active":""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/monthly");
                }}
              >
                Aylık
              </a>
            </li>
            <li className={pathname === "/weekly" ?"active":""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/weekly");
                }}
              >
                Haftalık
              </a>
            </li>
            <li className={pathname.startsWith("/daily") ?"active":""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/daily");
                }}
              >
                Günlük
              </a>
            </li>

            <li>
              <a href="#" onClick={handleLogout}>
                <img src="src/assets/images/search-icon.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
