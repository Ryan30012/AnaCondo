import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  const session = await getServerSession();

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

    const userId = session?.uid;

    // Create rid
    const rows = await sql`SELECT COUNT(*) AS table_count FROM reservations;`;
    const reservationCount = rows.rows[0].table_count;
    const rid = parseInt(reservationCount) + 1;
    const fid = parseInt(facility);
    const startDateTime = year + "-" + month + "-" + day + " " + startTime;
    const endDateTime = year + "-" + month + "-" + day + " " + endTime;

    const storageResponse =
      await sql`INSERT INTO reservations (rid, uid, fid, starttime, endtime, message)
        VALUES (${rid}, ${userId}, ${fid}, ${startDateTime}, ${endDateTime}, ${message})`;

    return NextResponse.json(
      {
        message: "Your reservation has been successfully placed.",
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
