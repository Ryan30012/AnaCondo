import { sql } from "@vercel/postgres";
import { stat } from "fs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // EXPECTED INPUTS: building ID (bid), condo unit ID (cUid), condo fee, parking ID (pid), parking fee.
  // EXPECTED OUTPUT: Success message or error message.

  // This POST request works if the condo unit exists in the database already.
  // --> If the user tries to set a condo unit/parking fee for a condo unit that does not exist, the request will fail.

  // For parking, the parking fee can be null if the condo unit does not have a parking spot or if the condo owner doesn't want/have one.
  // If the parking spot ID (pid) is -1, then the condo unit does not have a parking spot. Request will still succeed.
  // --> Set pid to -1 if the condo unit does not have/want a parking spot.

  const { bid, cuid, condoFee, pid, parkingFee } = await request.json();
  console.log({ bid, cuid, condoFee, pid, parkingFee });

  if (!bid || !cuid || !condoFee) {
    return NextResponse.json(
      {
        message: "Failed to set condo unit cost. Missing required fields.",
      },
      { status: 500 }
    );
  }

  try {
    // Check if the condo unit exists and return a failure if it doesn't
    const { rows } = await sql`SELECT * FROM condounits WHERE cuid = ${cuid}`;
    if (rows.length === 0) {
      return NextResponse.json(
        {
          message:
            "Failed to set condo unit cost. Condo unit not found. If the condo unit exists, please add it in the system.",
        },
        { status: 404 }
      );
    }

    // Insert condo fee into database
    await sql`UPDATE condounits SET fee = ${condoFee} WHERE bid = ${bid} AND cuid = ${cuid}`;

    // Insert parking fee in database if the parking fee is not null
    if (pid === -1) {
      // No parking spot for this condo unit
      console.log("No parking spot for this condo unit.");
    } else if (Number.isNaN(Number(parkingFee))) {
      // Invalid parking fee
      return NextResponse.json(
        { message: "Parking fee is invalid." },
        { status: 400 }
      );
    } else {
      // Update parking fee
      await sql`UPDATE parking SET fee = ${parkingFee} WHERE bid = ${bid} AND pid = ${pid}`;
    }

    return NextResponse.json(
      {
        message: "Successfully set condo unit cost.",
      },
      { status: 200 }
    );
  } catch (e) {
    console.log({ e });
    return NextResponse.json(
      {
        message: "Failed to set condo unit cost. Something went wrong.",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request){
  try {
    // Fetch condo fee
    const condoResult = await sql`SELECT * FROM condounits`;
    const result = condoResult.rows[0];

    return NextResponse.json(
      {
        message: "Successfully retrieved condo unit costs.",
        body: result,

      },
      { status: 200 }
    );
  } catch (e) {
    console.log({ e });
    return NextResponse.json(
      { message: "Something went wrong when fetching condo unit costs." },
      { status: 500 }
    );
  }
}

/** 
export async function GET(request: Request) {

  const { bid, cuid } = await request.json();

  if (!bid || !cuid) {
    return NextResponse.json(
      { message: "Missing required fields for fetching condo costs." },
      { status: 400 }
    );
  }

  try {
    // Fetch condo fee
    const condoResult = await sql`SELECT * FROM condounits WHERE bid = ${bid} AND cuid = ${cuid}`;
    
    if (condoResult.rowCount === 0) {
      return NextResponse.json(
        { message: "Condo unit not found." },
        { status: 404 }
      );
    }
    
    const condoFee = condoResult.rows[0].fee;
    const pid = condoResult.rows[0].pid;

    // Initialize parking fee as null, indicating no parking by default
    let parkingFee = null;

    // If pid is provided and not -1, fetch parking fee
    if (pid && pid !== "-1") {
      const parkingResult = await sql`SELECT * FROM parking WHERE bid = ${bid} AND pid = ${pid}`;
      parkingFee = parkingResult.rowCount > 0 ? parkingResult.rows[0].fee : null;
    }

    return NextResponse.json(
      {
        message: "Successfully retrieved condo unit costs.",
        condoFee: condoFee,
        parkingFee: parkingFee
      },
      { status: 200 }
    );
  } catch (e) {
    console.log({ e });
    return NextResponse.json(
      { message: "Something went wrong when fetching condo unit costs." },
      { status: 500 }
    );
  }
  
}
*/