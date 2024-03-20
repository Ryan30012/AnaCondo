import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const bid = searchParams.get("bid") || "";
    const { rows } =
      await sql`SELECT json_build_object('bid', bid, 'name', name, 
                        'unitcount', unitCount, 'parkingcount', parkingCount, 'lockercount', lockerCount,
                         'address', address, 'propertyfile', propertyfile, 'propertyimage', propertyimage) as property 
                         FROM buildings WHERE bid = ${bid}`;
    console.log("rows:");
    console.log(rows);
    const property = rows.map((row) => row.property);

    console.log("Successfully retrieved property.");
    return NextResponse.json(
      {
        message: "Successfully retrieved property " + bid,
        property: property,
      },
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
