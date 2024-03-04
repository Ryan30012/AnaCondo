"use client";

import React from "react";
import "/styles/global.css";
import Link from "next/link";
import Logout from "@/components/logout/Logout";

const Navbar = () => {
  return (
    <div id="navbarMain" className="flex justify-between px-6 py-6">
      <div className="navbarLogo">
        <p className="navbarLogoTitle">
          <Link href="/">AnaCondo</Link>
        </p>
      </div>
      <div className="navBarAccount flex align-middle">
        <Link href="@/RentalUserDashboard/page.tsx">
          <button id="renterDashboardBtn" className="navButtonWhite">
            Renter Dashboard
          </button>
        </Link>
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
