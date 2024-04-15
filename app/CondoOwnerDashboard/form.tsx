"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import Image from "next/image";

import RentalPropertyCard from "@/components/renter-dashboard/RentalPropertyCard";
import RentalSubmittedRequests from "@/components/renter-dashboard/RentalSubmittedRequests";
import RentalFinancialStatus from "@/components/renter-dashboard/RentalFinancialStatus";
import AddPictureButton from "../UserProfile/AddPictureButton";

import img from "@/assets/profile-pic.png";
import { cookies } from "next/headers";
import PropertyList from "../CondoCompany/Properties/page";

var type = "";

 const breadcrumbItems = [
    { text: "Public User Dashboard", url: "/CondoOwnerDashboard" },
  ];

function submitRequests() {
  if (type == "Condo Owner")
    return (
      <Link href="/SubmitRequest" className="">
        <button id="submitForms" className="font-semibold">
          Submit Request
        </button>
      </Link>
    );
}

export default function CondoOwnerDashboard(props: any) {
  //console.log(props.userInfo.uid);
  console.log(props.userUnits.rows);
  const userUnits = props.userUnits.rows;
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User>();
  const [userProfilePictureUrl, setUserProfilePictureUrl] = useState(null);
  const [loadingUserProfile, setLoadingUserProfile] = useState(true);

  var accountType = "";
  var counter = 0;

  useEffect(() => {
    if (session) {
      console.log("Session from dashboard: ", session);
      console.log("Session acc type: " + session.user?.name);
      accountType = session.user?.name || "";
      switch (accountType) {
        case "CONDO_OWNER":
          type = "Condo Owner";
          break;
        case "RENTAL_USER":
          type = "Renter";
          break;
        case "PUBLIC_USER":
          type = "Public User";
          break;
        default:
          type = "Error";
          break;
      }

      var email = "";
      if (session?.user?.email) email = session.user.email;
      fetch(`/api/getuserprofile?email=${email}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data.user);
          setUserProfilePictureUrl(data.user.pictureblob);
          setLoadingUserProfile(false);
          console.log("User Profile pic url: " + userProfilePictureUrl);
        });
    }
  }, []);
  /**
   * 'TYPE' SHOULD BE CHANGED TO PULL DATA FROM THE USER SESSION AND DETERMINE IF THE USER IS A OWNER
   * OR RENTER, THEN DISPLAY THE CORRECT USER INFORMATION AND CHANGE THE DISPLAY TO "CONDO OWNER PAGE", ETC.
   */

  const handleRegKeyBtnClick = () => {
    const overlay = document.getElementById("regKeyOverlay");
    if (overlay) {
      overlay.style.display = "flex";
    }
  };

  if (status === "loading" || (loadingUserProfile && session))
    return <p>DASHBOARD: Loading...</p>;
  else if (!session)
    return (
      <div className="grid place-items-center h-screen">
        <div className="my-12 mx-10">
          <h1 className="font-bold text-3xl text-center">
            You are not signed in as a {type}
          </h1>
          <h1 className="text-center">Log in to view your dashboard</h1>
        </div>
      </div>
    );
  else if (session) {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <div id="regKeyOverlay" style={{ display: "none" }}>
          <div id="regKeyPopup">
            <RegKeyInput />
          </div>
          <h1 className="font-semibold text-center">{props.userInfo.fname} {props.userInfo.lname}</h1>
          <h2 className="text-center">@{props.userInfo.username}</h2>
          <h2 className="text-center">{props.userInfo.email}</h2>
          <h2 className="text-center">({props.userInfo.phone.substring(0,3)}) {props.userInfo.phone.substring(3,6)}-{props.userInfo.phone.substring(6,10)}</h2>
        </div>
        <div className="flex flex-col my-20 mx-20">
          <div className="my-12 mx-10">
            <h1 className="font-bold text-3xl text-center">{type} Dashboard</h1>
          </div>
          <div>
            <h1 className="font-bold text-xl pb-6">Your Rental Properties</h1>
            {userUnits?.map((unit: any) => {
              return (
                <RentalPropertyCard
                  key={unit.cuid}
                  unit={unit}
                  buildingInfo={unit.buildingInfo}
                />
              );
            })}
            {/* <RentalPropertyCard /> */}
          </div>
          <div className="ml-6 ">
            <h1 className="font-bold text-xl pb-6">Your Financial Status</h1>
            {userUnits?.map((unit: any) => {
              return (
                <RentalFinancialStatus
                  key={unit.cuid}
                  unit={unit}
                  buildingInfo={unit.buildingInfo}
                />
              );
            })}
            {/* <RentalFinancialStatus /> */}
          </div>
          {!(type == "Public User") && (
            <>
              <div className="grid md:grid-cols-2 gap-3 my-12">
                <div>
                  <h1 className="font-bold text-xl pb-6">
                    Your {type == "Rental User" && "Rental"} Properties
                  </h1>
                  <RentalPropertyCard />
                </div>
                <div className="ml-6 ">
                  <h1 className="font-bold text-xl pb-6">
                    Your Financial Status
                  </h1>
                  <RentalFinancialStatus />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-xl pr-10 pb-6">
                  Your Submitted Requests
                </h1>
                <RentalSubmittedRequests
                    email={session?.user?.email as string}
                  />
              </div>
            </>
          )}
        </div>
      </>
    );
  } else {
    return (
      <div className="grid place-items-center h-screen">
        <div className="my-12 mx-10">
          <h1 className="font-bold text-3xl text-center">
            You are not signed in
          </h1>
          <h1 className="text-center">Log in to view your dashboard</h1>
        </div>
      </div>
    );
  }
}
