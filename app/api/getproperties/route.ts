import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { name, unitCount, parkingCount, lockerCount, address } =
      await request.json();

    console.log("Successfully retrieved properties.");
    return NextResponse.json(
      { message: "Successfully retrieved properties." },
      { status: 200 }
    );
  } catch (e) {
    console.log({ e });
    return NextResponse.json(
      { message: "failed to retrieve property." },
      { status: 500 }
    );
  }
}
