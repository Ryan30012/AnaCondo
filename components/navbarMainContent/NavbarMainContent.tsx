"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import "./NavbarMainContent.css";
import Link from "next/link";

const NavbarMainContent = () => {
  const session = useSession();
  const userAccountType = session.data?.accounttype;
  console.log(userAccountType);

  const path = window.location.pathname.split("/");
  const lastPath = path[path.length - 1].toLowerCase();
  console.log("path: " + lastPath);

  const [activeItem, setactiveItem] = useState(lastPath);
  const handleNavItemClick = (item: string) => {
    setactiveItem(item);
  };

  return (
    <div className="flex" style={{ fontSize: "14px" }}>
      <ul className="flex gap-4">
        {userAccountType === "CONDO_MANAGEMENT_COMPANY" && (
          <>
            <li
              className={`mainNavItem ${
                activeItem === "properties" ? "activeNavItem" : ""
              }`}
              onClick={() => handleNavItemClick("properties")}
            >
              <Link href="/CondoCompany/Properties">Properties</Link>
            </li>
            <li
              className={`mainNavItem ${
                activeItem === "propertyowners" ? "activeNavItem" : ""
              }`}
              onClick={() => handleNavItemClick("propertyowners")}
            >
              <Link href="">Propery Owners</Link>
            </li>
            <li
              className={`mainNavItem ${
                activeItem === "rentalusers" ? "activeNavItem" : ""
              }`}
              onClick={() => handleNavItemClick("rentalusers")}
            >
              <Link href="">Rental Users</Link>
            </li>
            <li
              className={`mainNavItem ${
                activeItem === "financials" ? "activeNavItem" : ""
              }`}
              onClick={() => handleNavItemClick("financials")}
            >
              <Link href="">Financials</Link>
            </li>
            <li
              className={`mainNavItem ${
                activeItem === "operations" ? "activeNavItem" : ""
              }`}
              onClick={() => handleNavItemClick("operations")}
            >
              <Link href="">Operations</Link>
            </li>
            <li
              className={`mainNavItem ${
                activeItem === "reservationsystem" ? "activeNavItem" : ""
              }`}
              onClick={() => handleNavItemClick("reservationsystem")}
            >
              <Link href="">Reservation System</Link>
            </li>
            <li
              className={`mainNavItem ${
                activeItem === "employees" ? "activeNavItem" : ""
              }`}
              onClick={() => handleNavItemClick("employees")}
            >
              <Link href="">Employees</Link>
            </li>
            <li
              className={`mainNavItem ${
                activeItem === "notifications" ? "activeNavItem" : ""
              }`}
              onClick={() => handleNavItemClick("notifications")}
            >
              <Link href="">Notifications</Link>
            </li>
          </>
        )}
        {userAccountType === "CONDO_OWNER" && (
          <>
            <li className="mainNavItem">
              <a href="">My Properties</a>
            </li>
            <li className="mainNavItem">
              <a href="">Common Facilities</a>
            </li>
            <li className="mainNavItem">
              <a href="">Submit a Request</a>
            </li>
            <li className="mainNavItem">
              <a href="">Notifications</a>
            </li>
          </>
        )}
        {userAccountType === "RENTAL_USER" && (
          <>
            <li className="mainNavItem">
              <a href="">My Rental Units</a>
            </li>
            <li className="mainNavItem">
              <a href="">Common Facilities</a>
            </li>
            <li className="mainNavItem">
              <a href="">Submit a Request</a>
            </li>
            <li className="mainNavItem">
              <a href="">Notifications</a>
            </li>
          </>
        )}
        {userAccountType === "EMPLOYEE" && (
          <>
            <li className="mainNavItem">
              <a href="">Assignments</a>
            </li>
            <li className="mainNavItem">
              <a href="">Notifications</a>
            </li>
          </>
        )}
        {userAccountType === "PUBLIC_USER" && (
          <>
            <li className="mainNavItem">
              <a href="">View Properties</a>
            </li>
            <li className="mainNavItem">
              <a href="">Notifications</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavbarMainContent;
