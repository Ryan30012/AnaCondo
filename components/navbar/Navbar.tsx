"use client";

import React, { useState } from "react";
import "/styles/global.css";
import Link from "next/link";

interface navbarProps {
  authenticatedUser: boolean;
}

const Navbar = ({ authenticatedUser }: navbarProps) => {
  return (
    <div id="navbarMain" className="flex justify-between p-5">
      <div className="navbarLogo">
        <p className="navbarLogoTitle">
          <Link href="/">AnaCondo</Link>
        </p>
      </div>
      <div className="navBarAccount flex align-middle">
        {authenticatedUser ? (
          <div>
            <button id="logoutBtn" className="navButton">
              Logout
            </button>
          </div>
        ) : (
          <div id="navbarAccountNoLogin" className="flex">
            <Link href="/signin">
              <button id="loginBtn" className="navButton">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button id="signupBtn" className="navButton">
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
