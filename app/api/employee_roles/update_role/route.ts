import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {eid, role} = await request.json();
    const result = await sql`UPDATE employees SET role = ${role} WHERE eid = ${eid}`;

    return NextResponse.json({message:'Employee role updated successfully'});
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}
