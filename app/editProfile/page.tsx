"use server";

import React from "react";
import "/styles/global.css";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import AddPictureButton from "../UserProfile/AddPictureButton";
import {SaveButton} from "@/components/SaveButton/SaveButton.js";

export default async function editProfilePage() {
  // -> Retrieving User Data from Postgres
  const session = await getServerSession();
  var email = "";
  if (session?.user?.email) email = session.user.email;
  console.log("Session Email: " + email);
  console.log("Fetching user data...");
  const res = await sql`SELECT * FROM users WHERE Email = ${email}`;
  const user = res.rows[0];
  const userProfilePictureUrl = user.pictureblob;
  console.log(user.username);
  console.log(user.pictureblob);

  return (
    <section id="profileContainerMasterCtn" className="mt-12">
      <div id="profileContainer" className="flex flex-col p-6">
        <div className="pageHeaderCtn text-left w-full">
          {/* Page Header */}
          <h1 className="pageHeader p-2">
            <b>My Profile</b>
          </h1>
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
                    {user.fname} {user.lname}
                  </b>
                </p>
              </div>
              <div id="userDataCtn" className="flex flex-col gap-2">
                <div>
                  <p>
                    <b>Account Type</b>: <span>{user.accounttype}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <b>Username</b>: 
                    <input
                        name="Uname"
                        type="text"
                        placeholder={user.username}
                        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
                    />
                  </p>
                </div>
                <div>
                  <p>
                    <b>Contact e-mail</b>:
                    <input
                        name="userEmail"
                        type="text"
                        placeholder={user.email}
                        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
                    />
                  </p>
                </div>
                <div>
                  <p>
                    <b>Phone Number</b>:
                    <input
                        name="Uname"
                        type="text"
                        placeholder={user.phone}
                        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
                    />
                  </p>
                </div>
                <div>
                  <p>
                    <b>Registration Key</b>:
                    <input
                        name="regKey"
                        type="text"
                        placeholder="Enter your registration key"
                        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
                    />
                  </p>
                </div>
                <button type="submit"></button>
                <SaveButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
