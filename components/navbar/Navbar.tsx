"use client";

import React from "react";
import "/styles/global.css";
import Link from "next/link";
import { getServerSession } from "next-auth/next";

const Navbar = async () => {
  const session = await getServerSession();

  return (
    <div id="navbarMain" className="flex justify-between p-5">
      <div className="navbarLogo">
        <p className="navbarLogoTitle">
          <Link href="/">AnaCondo</Link>
        </p>
      </div>
      {session ? (
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
      ) : (
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
      )}
    </div>
  );
};

export default Navbar;
