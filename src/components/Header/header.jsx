import React from "react";
import logo from "../../assets/logo.png";
import customer from "../../assets/customer.png";
import "./header.css"
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row header-row">
            <div className="col-lg-4">
              <div className="piecebox">
                <div className="leftbox">
                  <img src={logo} alt="" />
                  <div>
                    <button>Subscripe</button>  </div>  
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="piecebox ms-5">
                <span style={{color:"red"}}>Home</span>
                <span>Features</span>
                <span>Pages</span>
                <span>Blog</span>
                <span>Shops</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pieceboxright">
                <img className="customer" src={customer} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
