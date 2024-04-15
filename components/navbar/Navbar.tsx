"use client";

import React from "react";
import "/styles/global.css";
import Link from "next/link";
import Logout from "@/components/logout/Logout";
import NavbarMainContent from "@/components/navbarMainContent/NavbarMainContent";

const Navbar = () => {
  return (
    <div
      id="navbarMain"
      className="flex justify-between px-6 py-6"
      style={{ zIndex: "999" }}
    >
      <div className="navbarLogo">
        <p className="navbarLogoTitle">
          <Link href="/">AnaCondo</Link>
        </p>
      </div>
      <div
        id="mainNavContent"
        className="flex justify-start pl-8"
        style={{ alignItems: "center", flexGrow: "1" }}
      >
        <NavbarMainContent />
      </div>
      <div className="navBarAccount flex align-middle">
        <Link href="/UserProfile">
          <button
            id="loginBtn"
            className="navButtonWhite"
            style={{ fontSize: "14px" }}
          >
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
