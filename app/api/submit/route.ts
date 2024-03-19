import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    // Fetch user data
    const session = await getServerSession();
    var uid = "";
    const userID = (await sql`SELECT uid FROM users WHERE email=${session?.user?.email}`).rows[0].uid;
    const data = await request.formData();

    // Send error response if regKey is empty
    if(isNaN(parseInt(data.get("regKey")))) return NextResponse.json({ error: 'Invalid Post Request' }, { status: 500 });

    // Handle registration key validaton
    const regKey = parseInt(data.get("regKey")?.toString());
    const isValidRegKey = (await sql`SELECT regKey FROM RegKeys WHERE regKey=${regKey}`).rowCount > 0;
    if(isValidRegKey) {
       const makeCondoOwner = await sql`UPDATE users SET accounttype=${'Condo Owner'} WHERE uid=${userID}`;
       const afterOperation = await sql`SELECT * FROM users WHERE uid=${userID}`;
     }
     else {
      return NextResponse.json({ error: 'Invalid Registration Key' }, { status: 501 });
     }
  return NextResponse.json({ message: "success" });
}