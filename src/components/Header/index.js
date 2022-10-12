import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { MdClose, MdMenu } from "react-icons/md";
import "./styles.scss";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="topnav">
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <div className={!showNav ? "nav-items hide-item" : "nav-items"}>
        <div
          className="close-nav-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <NavLink
          activeClassName="active1"
          to="/"
          exact
          onClick={() => setShowNav(!showNav)}
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="active1"
          to="/about"
          onClick={() => setShowNav(!showNav)}
        >
          About
        </NavLink>
        <NavLink
          activeClassName="active1"
          to="/projects"
          onClick={() => setShowNav(!showNav)}
        >
          Projects
        </NavLink>
        <NavLink
          activeClassName="active1"
          to="/contact"
          onClick={() => setShowNav(!showNav)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
