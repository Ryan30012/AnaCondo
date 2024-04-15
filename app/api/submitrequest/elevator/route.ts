
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { useSession } from "next-auth/react";

export async function POST(request: Request) {
    /**Fetch user data */
    const session = await getServerSession();
    console.log("This is session user email:" + session?.user?.email);
    const data = await request.formData(); //fetches form data

    /**Check that table exists */
    try {
        await sql`CREATE TABLE IF NOT EXISTS "submittedrequests" (
            request_id int primary key,
            request_type varchar(50),
            user_email varchar(100),
            request_status varchar(30),
            question varchar(500),
            day varchar(2),
            month varchar(20),
            year varchar(4),
            unit_nb varchar(30),
            access_method varchar(10),
            common_room varchar(100),
            violation varchar(100),
            deficiency varchar(300)
        );`;
        console.log("Successfully initialized the SubmittedRequests table");
    } catch (error) {
        throw new Error(`RAN INTO ERROR WITH SUBMITTED_REQUESTS TABLE: ${error}`);
    };

    /**Fetch SubmittedRequests pk */
    const current_request_id = (await sql`SELECT count(*) FROM "submittedrequests"`).rows[0].count; //find the count of the pk
    console.log(current_request_id);
    var pk = current_request_id + 1;

    /**Get formdata*/
    const user_email = data.get("email") as string;  
    const day = data.get("day") as string;
    const month = data.get("month") as string;
    const year = data.get("year") as string;

    /**Error Response if form fields are incorrect */
    if (typeof user_email !== "string") {
        throw new Error("Invalid or missing email address");
    }
    const validEmail = (await sql`SELECT email FROM users WHERE email=${user_email}`).rows[0].email;
    if (validEmail === null || validEmail === undefined) {
        return NextResponse.json(
        { error: "Invalid Post Request" },
        { status: 500 }
        );
    } else {  
        /**Insert form data variables into SubmittedRequests table */
        try {
            await sql`INSERT INTO "submittedrequests" (request_id, request_type, user_email, request_status, day, month, year) VALUES (${pk}, 'ELEVATOR', ${user_email}, 'Pending', ${day}, ${month}, ${year});`;
            console.log("Successfully added row in submittedrequests table");
        } catch (error) {
            throw new Error(`Yikes! We ran into an error: ${error}`);
        }
        console.log("ELEVATOR COMPLETED");
    }  

    /**Return final response : OK */
    return NextResponse.redirect(new URL('/CondoOwnerDashboard', request.url))
};
