"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import "./VerticalNavContent.css";
import VerticalNavLogout from "./VerticalNavLogout";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  handleLinkClick: () => void;
}

const VerticalNavContent = ({ handleLinkClick }: Props) => {
  const session = useSession();
  const router = useRouter();
  const userAccountType = session.data?.accounttype;
  const userUid = session.data?.uid;
  console.log("Account Type: " + userAccountType);
  console.log("User UID: " + userUid);

  const [lastPath, setlastPath] = useState("");

  useEffect(() => {
    // Ensure this code only runs on the client-side
    if (typeof window !== "undefined") {
      const path = window.location.pathname.split("/");
      setlastPath(path[path.length - 1].toLowerCase());
    }
  }, []);

  const [activeItem, setactiveItem] = useState(lastPath);
  const handleNavItemClick = (item: string) => {
    setactiveItem(item);
    router.push("/CondoCompany/" + item);
    handleLinkClick();
  };
  return (
    <div id="verticalNavbarCtn">
      <ul className="flex flex-col w-full h-full">
        {userAccountType === "CONDO_MANAGEMENT_COMPANY" && (
          <>
            <li
              className={`mainNavItemVertical ${
                activeItem === "Properties" ? "activeNavItemVertical" : ""
              }`}
              onClick={() => handleNavItemClick("Properties")}
            >
              <Link href="/CondoCompany/Properties" style={{ width: "100%" }}>
                Properties
              </Link>
            </li>
            <li
              className={`mainNavItemVertical ${
                activeItem === "propertyowners" ? "activeNavItemVertical" : ""
              }`}
              onClick={() => handleNavItemClick("propertyowners")}
            >
              <Link href="">Propery Owners</Link>
            </li>
            <li
              className={`mainNavItemVertical ${
                activeItem === "rentalusers" ? "activeNavItemVertical" : ""
              }`}
              onClick={() => handleNavItemClick("rentalusers")}
            >
              <Link href="">Rental Users</Link>
            </li>
            <li
              className={`mainNavItemVertical ${
                activeItem === "financials" ? "activeNavItemVertical" : ""
              }`}
              onClick={() => handleNavItemClick("financials")}
            >
              <Link href="">Financials</Link>
            </li>
            <li
              className={`mainNavItemVertical ${
                activeItem === "operations" ? "activeNavItemVertical" : ""
              }`}
              onClick={() => handleNavItemClick("operations")}
            >
              <Link href="">Operations</Link>
            </li>
            <li
              className={`mainNavItemVertical ${
                activeItem === "reservationsystem"
                  ? "activeNavItemVertical"
                  : ""
              }`}
              onClick={() => handleNavItemClick("reservationsystem")}
            >
              <Link href="">Reservation System</Link>
            </li>
            <li
              className={`mainNavItemVertical ${
                activeItem === "employees" ? "activeNavItemVertical" : ""
              }`}
              onClick={() => handleNavItemClick("employees")}
            >
              <Link href="">Employees</Link>
            </li>
            <li
              className={`mainNavItemVertical ${
                activeItem === "notifications" ? "activeNavItemVertical" : ""
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
            <li className="mainNavItemVertical">
              <a href="">Common Facilities</a>
            </li>
            <li className="mainNavItemVertical">
              <a href="">Submit a Request</a>
            </li>
            <li className="mainNavItemVertical">
              <a href="">Notifications</a>
            </li>
          </>
        )}
        {userAccountType === "RENTAL_USER" && (
          <>
            <li className="mainNavItemVertical">
              <a href="">My Rental Units</a>
            </li>
            <li className="mainNavItemVertical">
              <a href="">Common Facilities</a>
            </li>
            <li className="mainNavItemVertical">
              <a href="">Submit a Request</a>
            </li>
            <li className="mainNavItemVertical">
              <a href="">Notifications</a>
            </li>
          </>
        )}
        {userAccountType === "EMPLOYEE" && (
          <>
            <li className="mainNavItemVertical">
              <a href="">Assignments</a>
            </li>
            <li className="mainNavItemVertical">
              <a href="">Notifications</a>
            </li>
          </>
        )}
        {userAccountType === "PUBLIC_USER" && (
          <>
            <li className="mainNavItemVertical">
              <a href="">View Properties</a>
            </li>
            <li className="mainNavItemVertical">
              <a href="">Notifications</a>
            </li>
          </>
        )}
      </ul>
      <div className="flex flex-col align-middle w-full">
        <Link href="/UserProfile">
          <button
            id="loginBtn"
            className="dashboardBtnNavVertical w-full"
            style={{ fontSize: "16px" }}
          >
            <p>Dashboard</p>
          </button>
        </Link>
        <div>
          <VerticalNavLogout />
        </div>
      </div>
    </div>
  );
};

export default VerticalNavContent;
