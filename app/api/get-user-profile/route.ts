import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET(request: Request) {
  console.log("Fetching user data...");

  const session = await getServerSession();
  var email = "";
  if (session?.user?.email) email = session.user.email;

  const res = await sql`SELECT * FROM users WHERE Email = ${email}`;
  const user = res.rows[0];
  console.log(user.username);
  console.log(user.pictureblob);
  try {
    return NextResponse.json(
      {
        user: user,
        message: "Successfully retrieved user profile.",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log({ e });
    return NextResponse.json(
      { message: "Failed to retrieve user profile." },
      { status: 500 }
    );
  }
}
