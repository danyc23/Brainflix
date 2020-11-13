import React from "react";
import LogoImg from "./Logo";
import Input from "./Input";
import Btn from "./Btn";
import ProfileImg from "./ProfileImg";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <LogoImg src={LogoImg} />
        </Link>

        <section className="header__search">
          <Input
            className="header__search__input header__search__input__loop"
            type="text"
            placeholder="Search"
          />
        </section>
        <section className="upload__section">
          <Link to="/upload">
            <Btn text="+ UPLOAD" className="btn btn--header" />
          </Link>

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
