import React from "react";
import "../styles/nav.css";
const NavWithSignOut = ({ signUserOut }) => {
  return (
    <>
      <nav className="nav-room">
        <div className="flex">
          <img
            src="./public/images/whatsapp-logo.svg"
            className="nav-img"
          ></img>
          <h1>ChatConnect</h1>
        </div>
        <div>
          <button onClick={signUserOut} className="sign-out">
            Sign Out
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavWithSignOut;
