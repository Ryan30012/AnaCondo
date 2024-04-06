
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const {aid, eid} = await request.json();
    const result = await sql`UPDATE assignment SET eid = ${eid} WHERE aid = ${aid}`;
    await sql`UPDATE assignment SET status = 'in progress' WHERE aid = ${aid}`;

    return NextResponse.json({message:'Employee assigned successfully'});
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}
