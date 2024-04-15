import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  const session = await getServerSession();

  try {
    const { bid, name, location, description } = await request.json();

    console.log("Data Object received for SETUP: ", {
      bid,
      name,
      location,
      description,
    });

    const userId = session?.uid;
    // Create fid
    const rows = await sql`SELECT COUNT(*) AS table_count FROM facilities;`;
    const facilityCount = rows.rows[0].table_count;
    const fid = parseInt(facilityCount) + 1;

    const storageResponse =
      await sql`INSERT INTO facilities (fid, bid, name, location, description)
        VALUES (${fid}, ${bid}, ${name}, ${location}, ${description})`;

    return NextResponse.json(
      {
        message: "Your facility has been successfully added.",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: "failed to set up the facility." });
  }
}
