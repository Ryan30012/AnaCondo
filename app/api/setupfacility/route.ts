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
