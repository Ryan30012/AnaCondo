"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { FormEvent } from "react";
import Image from "next/image";
import RentalPropertyCard from "@/components/renter-dashboard/RentalPropertyCard";
import RentalSubmittedRequests from "@/components/renter-dashboard/RentalSubmittedRequests";
import RentalFinancialStatus from "@/components/renter-dashboard/RentalFinancialStatus";
import img from "@/assets/profile-pic.png";
import { cookies } from "next/headers";

function submitRequests() {
  return (
    <Link
      href="/SubmitRequest"
      className="border p-3  text-center rounded-lg border-slate-950 hover:bg-slate-100"
    >
      <button id="submitForms" className="font-semibold">
        Submit Request
      </button>
    </Link>
  );
}

export default function CondoOwnerDashboard() {
  const { data: session, status } = useSession();
  /**
   * 'TYPE' SHOULD BE CHANGED TO PULL DATA FROM THE USER SESSION AND DETERMINE IF THE USER IS A OWNER
   * OR RENTER, THEN DISPLAY THE CORRECT USER INFORMATION AND CHANGE THE DISPLAY TO "CONDO OWNER PAGE", ETC.
   */
  let type = "Condo Owner";
  if (status === "loading") return <p>DASHBOARD: Loading...</p>;
  if (!session)
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
  if (session) {
    return (
      <div className="flex flex-col my-20 mx-20">
        <div className="my-12 mx-10">
          <h1 className="font-bold text-3xl text-center">{type} Dashboard</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <Image src={img} className="rounded-lg  w-40 " alt="img" />
          </div>
          <h1 className="font-semibold text-center">Name</h1>
          <h2 className="text-center">@user</h2>
          <h2 className="text-center">{session.user.email}</h2>
          <h2 className="text-center">(514) 999-9999</h2>
        </div>
        <hr className="w-48 h-1 mx-auto mt-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        <div> {submitRequests()} </div>
        <div>
          <h1 className="font-bold text-xl pb-2">Shortcuts</h1>
          <div className="dashboard-shortcuts grid md:grid-cols-4 gap-4 my-6">
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
        </div>

        <div className="grid md:grid-cols-2 gap-3 my-12">
          <div>
            <h1 className="font-bold text-xl pb-6">Your Condo Properties</h1>
            <RentalPropertyCard />
          </div>
          <div className="ml-6 ">
            <h1 className="font-bold text-xl pb-6">Your Financial Status</h1>
            <RentalFinancialStatus />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl pr-10 pb-6">
            Your Submitted Requests
          </h1>
          <RentalSubmittedRequests />
        </div>
      </div>
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
