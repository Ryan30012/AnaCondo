import { getServerSession } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";

export default async function ViewOperationCosts() {
    const session = await getServerSession();

    // 1 - ENSURING CORRECT USER IS LOGGED IN
    // If not logged in, redirect to signin
    if (!session?.user?.email) redirect("/SignIn");

    // Retreive User type
    var email = "";
    if (session?.user?.email) email = session.user.email;
    const userInfo = await sql`SELECT * FROM users WHERE Email = ${email}`;
    const userType = userInfo.rows[0].accounttype;

    // Redirect if not condo owner
    if (userType != "CONDO_MANAGEMENT_COMPANY") redirect("/SignIn");


    // 2 - RETRIEVING DATA FROM DATABASE
    // Retrieve condo owner's user id for future retrieval
    const userQuery = await sql`SELECT * FROM users WHERE email = ${session.user.email}`;
    const ownerID = userQuery.rows[0].uid;

    // Retrieve condo units
    const condoUnitsQuery = await sql`SELECT * FROM condounits WHERE owner = ${ownerID}`;
    const condoUnits = condoUnitsQuery.rows;

    // Retrieve operations associated to condo units
    const operationsQuery = await sql`SELECT * FROM operations WHERE ownerid = ${ownerID}`;
    const operations = operationsQuery.rows;

}
