import CondoFees from "@/components/calculate-condoFees/CondoFees";
import React, { useState } from "react";

export default function calculateCondoFees() {
  return (
    <>
      <div className="flex flex-col my-20 mx-20">
        <h1 className="font-bold text-3xl text-center">
          Approximate Condo Fee Calculator
        </h1>
        <div className="calculate-condoFees mb-6">
          <CondoFees />
          <hr></hr>
        </div>
      </div>
    </>
  );
}
