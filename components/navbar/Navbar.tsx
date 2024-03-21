"use client";

import React from "react";
import { useState, useRef } from "react";
import "/styles/global.css";
import Link from "next/link";
import Logout from "@/components/logout/Logout";
import NavbarMainContent from "@/components/navbarMainContent/NavbarMainContent";
import { useEffect } from "react";
import VerticalNavContent from "../verticalnavcontent/VerticalNavContent";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    if (burgerOpen) {
      setBurgerOpen(false);
    } else {
      setBurgerOpen(true);
    }
  };

  return (
    <>
      <div id="horizontalNav">
        <div
          id="navbarMain"
          className="flex justify-between px-6 py-6 w-full"
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
                Dashboard
              </button>
            </Link>
            <div>
              <Logout />
            </div>
          </div>
        </div>
      </div>
      <div id="verticalNav">
        <div
          id="navbarMain"
          className="flex justify-between px-6 py-6 w-full"
          style={{ zIndex: "999" }}
        >
          <div className="navbarLogo">
            <p className="navbarLogoTitle">
              <Link href="/">AnaCondo</Link>
            </p>
          </div>
          {burgerOpen && <VerticalNavContent />}
          <div
            id="menuIcon"
            className={`menu-icon-btn ${burgerOpen ? "open" : ""}`}
            onClick={handleBurgerClick}
          >
            <div className="menu-btn-burger"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
