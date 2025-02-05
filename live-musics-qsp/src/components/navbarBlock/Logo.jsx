import React from "react";
import MusicLogo from "./img8.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <aside className="logo">
      <figure>
        <Link to={"/"}>
          <img src={MusicLogo} alt="" width={"80"} />
        </Link>
      </figure>
    </aside>
  );
};

export default Logo;
