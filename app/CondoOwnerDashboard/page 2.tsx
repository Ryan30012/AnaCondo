import { getServerSession } from "next-auth";
import CondoOwnerDashbaord from "./form";
import React from "react";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";

export default async function CondoDashbaord() {
  const session = await getServerSession();

  // If not logged in, redirect to signin
  if (!session?.user?.email) {
    redirect("/SignIn");
  }

  // Retreive User type
  var email = "";
  if (session?.user?.email) email = session.user.email;
  const userInfo = await sql`SELECT * FROM users WHERE Email = ${email}`;
  const userType = userInfo.rows[0].accounttype;
  
  // Redirect if not condo owner
  if (userType != "CONDO_OWNER") {
    redirect("/SignIn");
  }

  // Retrieve Condo Owner's units
  // this will be passed as props to the Client Component (CondoOwnerDashboard)
  const userUnits = await sql`SELECT * FROM condounits WHERE owner = ${userInfo.rows[0].uid}`;
  console.log(userUnits.rowCount);

  // Retrieve condo units' building IDs
  // this is important for other information such as condo address, name, etc.
  for (let i = 0; i < userUnits.rowCount; i++) {
    var buildingUnit = await sql`SELECT * FROM buildings WHERE bid = ${userUnits.rows[i].bid}`;
    userUnits.rows[i].buildingInfo = buildingUnit.rows[0];
  }
  // console.log(userUnits.rows);

  // const buildingInfo = await sql`SELECT * FROM buildings WHERE bid IN = ${userUnits.rows[0].building_id}`;
  return <CondoOwnerDashbaord userUnits={userUnits} userInfo={userInfo.rows[0]} />;
}
