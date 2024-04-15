import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { name, unitCount, parkingCount, lockerCount, address } =
      await request.json();
    const buildings = await sql`SELECT COUNT(*) AS table_count FROM buildings;`;

    const buildingCount = buildings.rows[0].table_count;

    const newBID = buildingCount + 1;
    const result =
      await sql`insert into buildings (bid, name, unitcount, parkingcount, lockercount, address) values (${newBID}, ${name}, ${unitCount}, ${parkingCount}, ${lockerCount}, ${address})`;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "This is a POST request." });
}
