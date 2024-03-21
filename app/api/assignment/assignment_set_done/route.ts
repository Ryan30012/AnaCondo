import { sql, QueryResultRow } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    if (session==null || session.accounttype !== 'CONDO_MANAGEMENT_COMPANY') {
      return NextResponse.json("Unauthorized access");
    }

    const aid = await request.json();


    // Update the status to "done" in the database
    await sql`UPDATE assignment SET status = 'done' WHERE aid = ${aid}`;

    return NextResponse.json({ message: 'Description updated and status set to "done" successfully' });
  } catch (error) {
    console.error("Error updating status");
    return NextResponse.json("An error occurred while updating description and status", { status: 500 });
  }
}