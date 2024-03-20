import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, unitCount, parkingCount, lockerCount, address } =
      await request.json();

    const buildings = await sql`SELECT COUNT(*) AS table_count FROM buildings;`;

    const buildingCount = buildings.rows[0].table_count;

    const newBID = parseInt(buildingCount) + 1;
    const result =
      await sql`insert into buildings (bid, name, unitcount, parkingcount, lockercount, address) values 
          (${newBID}, ${name}, ${unitCount}, ${parkingCount}, ${lockerCount}, ${address})`;

    console.log("Successfully Inserted Property.");
    return NextResponse.json(name);
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: "failed to add property." });
  }
}
