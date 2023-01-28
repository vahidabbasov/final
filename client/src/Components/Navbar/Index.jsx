import React from "react";
import { Link } from "react-router-dom";
import './Index.scss'
function Index({wishList, setWishList}) {
  return (
    <header>
      <nav>
        <div className="left">
          <Link to={"/"}>
            <img
              src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp"
              alt=""
            />
          </Link>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to={"/"} className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/AddPage"} className="link">
                AddPage
              </Link>
            </li>
            <li style={{ position: "relative" }}>
              <Link to={"/WishList"} className="link">
                WishList{" "}
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    left: "80px",
                    top: "-14px",
                  }}
                >
                  {wishList.length}
                </div>
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
