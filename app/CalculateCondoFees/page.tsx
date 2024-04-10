"use client";
import React from "react";
import CondoFees from "../../components/calculate-condoFees/CondoFees";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Fees() {
  const { data: session, status } = useSession();
  var accountType = "";
  useEffect(() => {
    if (session) {
      accountType = session.user?.name || "";
      console.log("Account Type: ", accountType);
    }
  }, []);
  return (
    <div>
      <div className="flex flex-col my-20 mx-20">
        <h1 className="font-bold text-3xl text-center">Condo Fee Calculator</h1>
        <div className="calculate-condoFees mb-6">
          <CondoFees />
          <hr></hr>
        </div>
      </div>
    </div>
  );
}
