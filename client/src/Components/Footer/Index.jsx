import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import './Index.scss'

function Index() {
  return (
    <footer>
      <div className="footer__container">
        <div className="left">
          Copyright ©2023 All rights reserved | This template is made with{" "}
          <AiFillHeart style={{ color: "red" }} /> by
          <span style={{ color: "red", marginLeft: "10px" }}>Colorlib</span>
        </div>
        <div className="right">
          <AiFillTwitterCircle
            style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
          />
          <BsFacebook
            style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
          />
          <TbWorld
            style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
          />
          <AiFillInstagram
            style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Index