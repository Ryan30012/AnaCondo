"use client";

import React from "react";
import "/styles/global.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div id="navbarMain" className="flex justify-between p-5">
        <div className="navbarLogo">
          <p className="navbarLogoTitle">
            <Link href="/">AnaCondo</Link>
          </p>
        </div>
        <div id="navbarAccountNoLogin" className="flex">
          <Link href="/SignIn">
            <button id="loginBtn" className="navButton">
              Login
            </button>
          </Link>
          <Link href="/SignUp">
            <button id="signupBtn" className="navButton">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
