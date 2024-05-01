import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET(request: Request) {
  //const session = await getServerSession();
  //const userId = session?.uid;
  const { searchParams } = new URL(request.url);
  const bid = searchParams.get("bid");
  const { rows } = await sql`SELECT json_build_object('fid', fid, 'bid', bid, 
                    'count', count, 'name', name, 'location', location,
                     'accesscard', accesscard, 'description', description) as facilities FROM facilities ORDER BY fid;`;
  console.log("rows:");
  console.log(rows);
  console.log("better JSON: ");
  console.log(rows.map((row) => row.facilities));
  const facilities = rows.map((row) => row.facilities);
  try {
    return NextResponse.json(
      {
        facilities: facilities,
        message: "Retrieved all building facilities.",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log({ e });
    return NextResponse.json(
      { message: "failed to get building facilities." },
      { status: 500 }
    );
  }
}
