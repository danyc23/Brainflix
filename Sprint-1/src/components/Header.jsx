import React from "react";
import LogoImg from "./Logo";
import Input from "./Input";
import Btn from "./Btn";
import ProfileImg from "./ProfileImg";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <LogoImg src={LogoImg} />
        <Input className="input-text" type="text" placeholder="Search" />
        <section className="upload__section">
          <Btn text="+ UPLOAD" />
          <ProfileImg image="./Images/Mohan-muruge.jpg" />
        </section>
      </header>
    );
  }
}

export default Header;
