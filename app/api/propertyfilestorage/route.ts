import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const blob = searchParams.get("bloburl") || "";
    const bid = searchParams.get("bid") || "";

    if (blob) {
      await sql`UPDATE buildings SET propertyfile = ${blob} WHERE bid = ${bid}`;
      console.log("Successfully stored file in propertyfilestorage.");
    }

    return NextResponse.json({
      message: "Successfully stored file in propertyfilestorage.",
      blobUrl: blob,
    });
  } catch (e) {
    return NextResponse.json({ message: "No file name." });
  }
}
