import React from "react";
import "/styles/global.css";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import AddPictureButton from "./AddPictureButton";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  // -> Retrieving User Data from Postgres
  const session = await getServerSession();
  const email = session?.user?.email;
  console.log("Session Email: " + email);
  console.log("Fetching user data...");
  const res = await sql`SELECT * FROM users WHERE Email = ${email}`;
  const user = res.rows[0];
  console.log(user.username);
  console.log(user.ProfilePictureHandle);

  const uploadProfilePicture = () => {
    document.getElementById("profilePicFileInput")?.click();
  };

  return (
    <section id="profileContainerMasterCtn" className="mt-12">
      <div id="profileContainer" className="flex flex-col">
        <div className="pageHeaderCtn text-left w-full mb-6">
          {/* Page Header */}
          <h1 className="pageHeader">
            <b>My Profile</b>
          </h1>
        </div>
        {/* User Profile Header */}
        <div className="flex flex-col w-full">
          <div id="userHeaderCtn" className="flex">
            {!(user.ProfilePictureHandle == undefined) ? (
              <div className="flex justify-start align-middle profilePictureCtn">
                <img
                  id="profilePicture"
                  src=""
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
