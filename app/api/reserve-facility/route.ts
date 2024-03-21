import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
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

    const startDateTime = year + "-" + month + "-" + day + " " + startTime;
    const endDateTime = year + "-" + month + "-" + day + " " + endTime;

    const storageResponse = await sql`INSERT INTO Facilities ()`;

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
