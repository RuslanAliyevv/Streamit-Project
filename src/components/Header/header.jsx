import React from "react";
import logo from "../../assets/logo.png";
import customer from "../../assets/customer.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center header-row">

          {/* LEFT */}
          <div className="col-lg-4">
            <div className="header-left">
              <img src={logo} alt="Logo" className="logo" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>

          {/* CENTER */}
          <div className="col-lg-5">
            <nav className="header-nav">
              <span className="active">Home</span>
              <span>Features</span>
              <span>Pages</span>
              <span>Blog</span>
              <span>Shop</span>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="col-lg-3">
            <div className="header-right">
              <i className="icon search">🔍</i>
              <i className="icon bag">👜</i>
              <img src={customer} alt="Profile" className="customer" />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
