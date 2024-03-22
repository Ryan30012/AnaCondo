import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET(request: Request) {
  //const session = await getServerSession();
  //const userId = session?.uid;
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("uid");
  try {
    const rows = await sql`SELECT bid FROM condounits WHERE owner = ${userId}`;
    const buildingIds = rows.rows.map((row) => row.bid);
    console.log("Building Ids: ", buildingIds);
    const buildingIdsString = buildingIds.join(",");
    console.log("Building Ids String: ", buildingIdsString);
    const buildingIdsPrimitive = buildingIds as any as number[];
    const buildingRows =
      await sql`SELECT * FROM buildings WHERE bid = ANY (${buildingIdsPrimitive})`;
    const buildings = buildingRows.rows.map((row) => row);

    return NextResponse.json(
      {
        buildings: buildings,
        message: "Retrieved all condo owner properties.",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: "failed to get buildings." });
  }
}
