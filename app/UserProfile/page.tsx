"use server";

import React from "react";
import "/styles/global.css";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import AddPictureButton from "./AddPictureButton";
import { EditButton } from "@/components/EditButton/EditButton.js";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  // -> Retrieving User Data from Postgres
  const session = await getServerSession();

  // If not logged in, redirect to signin
  if (!session?.user?.email) {
    redirect("/SignIn");
  }

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
          <h1 className="pageHeader px-6 py-2">
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
                    <b>Username</b>: <span>{user.username}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <b>Contact e-mail</b>: <span>{user.email}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <b>Phone Number</b>: <span>{user.phone}</span>
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
