import React from "react";
import { Link } from "react-router-dom";
import './Index.scss'
function Index() {
  return (
    <header>
      <nav>
        <div className="left">
          <img
            src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp"
            alt=""
          />
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to={"/"} className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/"} className="link">
                About
              </Link>
            </li>
            <li>
              <Link to={"/"} className="link">
                Services
              </Link>
            </li>
            <li>
              <Link to={"/"} className="link">
                Blog
              </Link>
            </li>
            <li>
              <Link to={"/"} className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Index;
