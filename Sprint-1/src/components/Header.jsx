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
        <section className="header__search">
          <Input
            className="header__search__input"
            type="text"
            placeholder="Search"
          />
        </section>
        <section className="upload__section">
          <Btn text="+ UPLOAD" className="btn btn--header" />
          <ProfileImg
            image="./Images/Mohan-muruge.jpg"
            className="profile__img"
          />
        </section>
      </header>
    );
  }
}

export default Header;
