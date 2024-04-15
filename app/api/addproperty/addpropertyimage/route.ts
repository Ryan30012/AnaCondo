import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { blobUrl, name } = await request.json();

    console.log("In addpropertyimage route");
    console.log("blobUrl: " + blobUrl);
    console.log("name: " + name);

    const result =
      await sql`UPDATE Buildings SET propertyimage = ${blobUrl} WHERE name = ${name}`;

    console.log("Successfully Inserted Property Image.");
    return NextResponse.json({
      message: "Successfully Inserted Property Image.",
    });
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: "failed to add property." });
  }
}
