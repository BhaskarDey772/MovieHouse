import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import logoSvg from "../../Assets/Logo.svg";
import searchIcon from "../../Assets/search.svg";
import menu from "../../Assets/menu.svg";
import { IoClose } from "react-icons/io5";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const history = useHistory();

  const [isMobile, setIsMobile] = useState(false);

  const onMobile = () => {
    setIsMobile(!isMobile);
  };
  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => {
          history.push("/");
        }}
      >
        <img src={logoSvg} alt="" className="logo-svg" />
        <h1 className="logo-title">MovieHouse</h1>
      </div>
      <div className={`navbar ${isMobile ? "navbar-mobile" : "navbar"}`}>
        <ul>
          <li>
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/shows"
            >
              TV Shows
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={`search ${isMobile ? "  search-mobile" : "search"}`}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchTerm && history.push(`/search/${searchTerm}`);
            setSearchTerm("");
          }}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <label>
            <input type="submit" value="" />
            <img src={searchIcon} alt="" className="search-svg" />
          </label>
        </form>
      </div>
      <button className="hamburgar" onClick={onMobile}>
        {!isMobile ? <img src={menu} /> : <IoClose size={"30px"} />}
      </button>
    </div>
  );
};

export default Header;
