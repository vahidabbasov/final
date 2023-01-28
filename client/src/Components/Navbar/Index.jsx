import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
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
            <li >
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
            <li style={{marginLeft:"22px"}}>
              <Link to={"/"} className="link dropdown">
                <Dropdown style
                  overlay={
                    <Menu style={{ backgroundColor: "#0D2D3E", color: "white",  }}>
                      <Menu.Item style={{ color: "white" }} key="0">
                        Blog
                      </Menu.Item>
                      <Menu.Item style={{ color: "white" }} key="1">
                        Blog Details
                      </Menu.Item>
                      <Menu.Item style={{ color: "white" }} key="1">
                        Element
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <li
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Blog
                  </li>
                </Dropdown>
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
