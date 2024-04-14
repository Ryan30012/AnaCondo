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
import RegKeyInput from "@/components/RegKeyInput/RegKeyInput";

interface User {
  fname: string;
  lname: string;
  username: string;
  dob: string;
  address: string;
  phone: string;
  email: string;
  regkey: string;
  pictureblob: string;
  accounttype: string;
  companyid: number;
}

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

export default function CondoOwnerDashboard() {
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
        </div>
        <div className="flex flex-col my-20 mx-20">
          <div className="my-12 mx-10">
            <h1 className="font-bold text-3xl text-center">{type} Dashboard</h1>
          </div>
          <div>
            <div className="flex justify-center items-center">
              {/* <Image src={img} className="rounded-lg w-40 " alt="img" /> */}
              {userProfilePictureUrl == null ? (
                <AddPictureButton />
              ) : (
                <div className="flex justify-start align-middle profilePictureCtn">
                  <img
                    id="profilePicture"
                    src={userProfilePictureUrl}
                    alt="Profile Picture will be here"
                  />
                </div>
              )}
            </div>
            <h1 className="font-semibold text-center">
              {user?.fname} {user?.lname}
            </h1>
            <h2 className="text-center">@{user?.username}</h2>
            <h2 className="text-center">{session?.user?.email}</h2>
            <h2 className="text-center">{user?.phone}</h2>
          </div>
          <hr className="w-48 h-1 mx-auto mt-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          <div>
            <h1 className="font-bold text-xl pb-2">Shortcuts</h1>
            {!(type == "Public User") ? (
              <div
                className={`dashboard-shortcuts grid md:grid-cols-${
                  type == "Condo Owner" ? "4" : "3"
                } gap-4 my-6`}
              >
                {type === "Condo Owner" && (
                  <div className="border p-3  text-center rounded-lg border-slate-950 hover:bg-slate-100">
                    {submitRequests()}
                  </div>
                )}
                <Link
                  href="/"
                  className="border p-3 text-center rounded-lg border-slate-950 hover:bg-slate-100"
                >
                  <button id="submitForms" className="font-semibold">
                    Reservation
                  </button>
                </Link>
                <Link
                  href="/"
                  className="border p-3 text-center rounded-lg border-slate-950 hover:bg-slate-100"
                >
                  <button id="submitForms" className="font-semibold">
                    Notifications
                  </button>
                </Link>
                <Link
                  href="/"
                  className="border p-3 text-center rounded-lg border-slate-950 hover:bg-slate-100"
                >
                  <button id="submitForms" className="font-semibold">
                    Message Board
                  </button>
                </Link>
              </div>
            ) : (
              <div className="dashboard-shortcuts grid md:grid-cols-1 gap-4 my-6">
                <div className="border p-3 text-center rounded-lg border-slate-950 hover:bg-slate-100">
                  <button
                    id="regKeyBtn"
                    className="font-semibold"
                    onClick={handleRegKeyBtnClick}
                  >
                    Manage Registration Keys
                  </button>
                </div>
              </div>
            )}
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
