import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    if (session==null || session.accounttype !== 'CONDO_MANAGEMENT_COMPANY') {
      return NextResponse.json("Unauthorized access");
    }

    const { aid, newDescription } = await request.json();

    const oldDescriptionResult = await sql`SELECT description FROM assignment WHERE aid = ${aid}`;
    const oldDescription = oldDescriptionResult.rows[0].description;

    // Concatenate the old description with the new one and append "NOTES" at the end
    const updatedDescription = `${oldDescription}\n ${newDescription}`;

    // Update the description in the database
    await sql`UPDATE assignment SET description = ${updatedDescription} WHERE aid = ${aid}`;

    return NextResponse.json({ message: 'Description updated successfully' });
  } catch (error) {
    console.error("Error updating description:");
    return NextResponse.json("An error occurred while updating description", { status: 500 });
  }
}
