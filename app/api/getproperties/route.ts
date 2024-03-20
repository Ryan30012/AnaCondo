import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    //const { bid, name, unitCount, parkingCount, lockerCount, address, propertyfile, image } = null;
    const { rows } =
      await sql`SELECT json_build_object('bid', bid, 'name', name, 
                        'unitcount', unitCount, 'parkingcount', parkingCount, 'lockercount', lockerCount,
                         'address', address, 'propertyfile', propertyfile, 'propertyimage', propertyimage) as properties FROM buildings`;
    console.log("rows:");
    console.log(rows);
    console.log("better JSON: ");
    console.log(rows.map((row) => row.properties));
    const properties = rows.map((row) => row.properties);

    console.log("Successfully retrieved properties.");
    return NextResponse.json(
      {
        message: "Successfully retrieved properties.",
        properties: properties,
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
