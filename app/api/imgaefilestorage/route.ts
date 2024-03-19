import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const blobUrl = searchParams.get("bloburl") || "";
  const session = await getServerSession();
  const email = session?.user?.email;
  console.log("Request side url: " + blobUrl);
  console.log("email: " + email);

  try {
    console.log("Inserting...");
    const result =
      await sql`UPDATE users SET PictureBlob = ${blobUrl} WHERE Email = ${email}`;
    console.log("Successfully store the blob in DB.");

    return NextResponse.json({ blobUrl });
  } catch (e: any) {
    return NextResponse.json({ message: "Failed to insert blob into DB." });
  }
}
