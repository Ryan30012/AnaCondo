"use client";

import React from "react";
import "/styles/global.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div id="navbarMain" className="flex justify-between p-5">
      <div className="navbarLogo">
        <p className="navbarLogoTitle">
          <Link href="/">AnaCondo</Link>
        </p>
      </div>
      <div className="navBarAccount flex align-middle">
        <div>
          <Link href="/UserProfile">
            <button id="loginBtn" className="navButtonWhite">
              User Profile
            </button>
          </Link>
        </div>
        <div>
          <button id="logoutBtn" className="navButton">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
