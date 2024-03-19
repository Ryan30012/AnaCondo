import React from "react";
import { useSession } from "next-auth/react";
import "./NavbarMainContent.css";

const NavbarMainContent = () => {
  const session = useSession();
  const userAccountType = session.data?.accounttype;
  console.log(userAccountType);

  return (
    <div className="flex" style={{ fontSize: "14px" }}>
      <ul className="flex gap-4">
        {userAccountType === "CONDO_MANAGEMENT_COMPANY" && (
          <>
            <li className="mainNavItem">
              <a href="">Properties</a>
            </li>
            <li className="mainNavItem">
              <a href="">Propery Owners</a>
            </li>
            <li className="mainNavItem">
              <a href="">Rental Users</a>
            </li>
            <li className="mainNavItem">
              <a href="">Financials</a>
            </li>
            <li className="mainNavItem">
              <a href="">Operations</a>
            </li>
            <li className="mainNavItem">
              <a href="">Reservation System</a>
            </li>
            <li className="mainNavItem">
              <a href="">Employees</a>
            </li>
            <li className="mainNavItem">
              <a href="">Notifications</a>
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
      </ul>
    </div>
  );
};

export default NavbarMainContent;
