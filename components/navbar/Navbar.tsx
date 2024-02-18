"use client";

import React from "react";
import "/styles/global.css";
import Link from "next/link";
import Logout from "@/components/logout/Logout";

const Navbar = () => {
  return (
    <div id="navbarMain" className="flex justify-between px-7 py-5">
      <div className="navbarLogo">
        <p className="navbarLogoTitle">
          <Link href="/">AnaCondo</Link>
        </p>
      </div>
      <div className="navBarAccount flex align-middle">
        <Link href="/UserProfile">
          <button id="loginBtn" className="navButtonWhite">
            User Profile
          </button>
        </Link>
        <div>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
