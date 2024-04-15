"use client";

import React, { useEffect, useState } from "react";
import "/styles/global.css";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { EditButton } from "@/components/EditButton/EditButton.js";
import { redirect } from "next/navigation";
import AddPictureButton from "./AddPictureButton";

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

export default function ProfilePage() {
  // -> Retrieving User Data from Postgres
  const { data: session } = useSession();
  const [user, setUser] = useState<User>();
  // If not logged in, redirect to signin
  if (!session?.user?.email) {
    redirect("/SignIn");
  }

  useEffect(() => {
    var email = "";
    if (session?.user?.email) email = session.user.email;
    fetch(`/api/getuserprofile?email=${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
      });
  }, []);

  const userProfilePictureUrl = user?.pictureblob;

  return (
    <section id="profileContainerMasterCtn" className="mt-12">
      <div id="profileContainer" className="flex flex-col p-6">
        <div className="pageHeaderCtn text-left w-full">
          {/* Page Header */}
          <h1 className="pageHeader px-6 py-2">My Profile</h1>
        </div>
        {/* User Profile Header */}
        <div className="flex flex-col w-full userMainContent p-6">
          <div id="userHeaderCtn" className="flex">
            {!(userProfilePictureUrl == null) ? (
              <div className="flex justify-start align-middle profilePictureCtn">
                <img
                  id="profilePicture"
                  src={userProfilePictureUrl}
                  alt="Profile Picture will be here"
                />
              </div>
            ) : (
              <div className="flex flex-col">
                <AddPictureButton />
                <div className="w-auto mt-4 addPictureText">
                  <p>
                    <i>Add a Profile Picture</i>
                  </p>
                </div>
              </div>
            )}
            {/* User Data */}
            <div id="userFullNameCtn" className="flex flex-col">
              <div id="userLegalName" className="mb-5">
                <p className="fullNameText">
                  <b>
                    {user?.fname} {user?.lname}
                  </b>
                </p>
              </div>
              <div id="userDataCtn" className="flex flex-col gap-2">
                <div>
                  <p>
                    <b>Account Type</b>: <span>{user?.accounttype}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <b>Username</b>: <span>{user?.username}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <b>Contact e-mail</b>: <span>{user?.email}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <b>Phone Number</b>: <span>{user?.phone}</span>
                  </p>
                </div>
                <div className="mt-4">
                  <EditButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
