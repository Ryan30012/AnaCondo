import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  const session = await getServerSession();
  const userId = session?.uid;

  try {
    const { email, day, month, year, startTime, endTime, facility, message } =
      await request.json();

    console.log("Data Object received: ", {
      email,
      day,
      month,
      year,
      startTime,
      endTime,
      facility,
      message,
    });

    // Create rid
    const rows = await sql`SELECT COUNT(*) AS table_count FROM reservations;`;
    const reservationCount = rows.rows[0].table_count;
    const rid = reservationCount + 1;
    // Get facility id
    const frows =
      await sql`SELECT fid FROM facilities WHERE name = ${facility}`;

    const startDateTime = year + "-" + month + "-" + day + " " + startTime;
    const endDateTime = year + "-" + month + "-" + day + " " + endTime;

    const storageResponse =
      await sql`INSERT INTO reservations (rid, uid, fid, starttime, endtime, location, description)
                                            VALUES (${rid}, ${userId}, )`;

    return NextResponse.json(
      {
        message: "Reserved Facility Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: "failed to add property." });
  }
}
