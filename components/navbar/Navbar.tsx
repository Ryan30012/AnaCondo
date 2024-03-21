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
  const [burgerDisplay, setBurgerDisplay] = useState("none");
  const [windowWidth, setWindowWidth] = useState(0); // Catch window screen size for navbar type
  const [breakpointReached, setBreakpointReached] = useState(false); // Switch between horizontal and vertical navbar
  const breakpoint = 1400;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log("Window Width: " + windowWidth);
      setBreakpointReached(windowWidth < breakpoint);
      console.log("Breakpoint Reached: " + breakpointReached);
    };

    if (window !== undefined) window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, breakpointReached]);

  const handleBurgerClick = () => {
    if (burgerOpen) {
      setBurgerOpen(false);
    } else {
      setBurgerOpen(true);
    }
  };

  return (
    <>
      {breakpointReached ? (
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
                Dashboard
              </button>
            </Link>
            <div>
              <Logout />
            </div>
          </div>
        </div>
      ) : (
        <>
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
            {burgerOpen && <VerticalNavContent />}
            <div
              id="menuIcon"
              className={`menu-icon-btn ${burgerOpen ? "open" : ""}`}
              onClick={handleBurgerClick}
            >
              <div className="menu-btn-burger"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
