import React from "react";
import Logo from "../Assets/Logo/Logo-brainflix.svg";

function LogoImg(props) {
  return (
    <div className="logo">
      <img src={Logo} alt="Brainflix Logo" />
    </div>
  );
}
export default LogoImg;
