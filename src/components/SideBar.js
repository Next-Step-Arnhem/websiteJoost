import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function SidebarMenu() {
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      sidebar.style.top = `${scrollPosition}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-dark col-md-2-vh-100">
          <div className="sidebar">
            <a
              href="https://www.google.com"
              className="'text-decoration-none text-white d-flex align-itemcenter border"
            >
              <br></br>
              <br></br>
              <hr></hr>
              <i className="fs-4 bi bi-speedometer"></i>
              <span className="ms-1 fs-4">LOGO</span>
            </a>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item text-white fs-4">
                <a
                  href="#home"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-house"></i>
                  <span className="ms-2">HOME</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4">
                <a
                  href="#about"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-2">ABOUT</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4">
                <a
                  href="#portfolio"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-palette"></i>
                  <span className="ms-2">PORTFOLIO</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4">
                <a
                  href="#blog"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-envelope-paper-fill"></i>
                  <span className="ms-2">BLOG</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4">
                <a
                  href="#contact"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-person-lines-fill"></i>
                  <span className="ms-2">CONTACT</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4">
                <a
                  href="https://www.google.com"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-brush"></i>
                  <span className="ms-2">ARTIST'S RECOURCES </span>
                </a>
              </li>
              <li class="nav-item text-white fs-4">
                <a
                  href="https://www.google.com"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-table"></i>
                  <span className="ms-2">ARTWORK LICENSING</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4">
                <a
                  href="https://www.google.com"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-basket"></i>
                  <span className="ms-2">SHOP</span>
                </a>
              </li>
            </ul>
            <div className="container d-flex justify-content-between align-items-center">
              <a href="https://www.facebook.com">
                <i className="bi bi-facebook border text-white icon"></i>
              </a>
              <a href="https://www.instagram.com">
                <i className="bi bi-instagram border text-white icon"></i>
              </a>
              <a href="https://www.youtube.com">
                <i className="bi bi-youtube border text-white icon"></i>
              </a>
              <a href="https://www.twitter.com">
                <i className="bi bi-twitter border text-white icon"></i>
              </a>
              <a href="https://www.gmail.com">
                <i className="bi bi-envelope border text-white icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
