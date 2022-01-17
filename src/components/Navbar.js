import React, { Component } from "react";
import Logo from "images/icons/Linkedin.png";
import NavbarSearch from "./NavbarSearch";
import NavbarLinks from "./NavbarLinks";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="" width="34" height="34" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-flex justify-content-between"
              id="navbarSupportedContent"
            >
              <NavbarSearch/>
              <NavbarLinks/>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
