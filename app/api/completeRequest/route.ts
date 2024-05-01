import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    //console.log("Request: " + request.body);
    const body = await request.json();
    const assignmentID = body.requestid;
    console.log("inside completeRequest api. request ID : "+ assignmentID);
    
    await sql `DELETE FROM Request WHERE requestID = ${assignmentID};`;
    return NextResponse.json(assignmentID);
}