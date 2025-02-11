import { sql } from "@vercel/postgres";
import { stat } from "fs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const {operationID, budget, cost, unitID, ownerID} = await request.json();

    if (!operationID || !cost || !budget) {
        return NextResponse.json(
          {
            message: "Failed to set operations costs. Missing required fields.",
          },
          { status: 500 }
        );
      }
    try {
        // Check if the condo unit exists and return a failure if it doesn't
        const { rows } = await sql`SELECT * FROM condounits WHERE cuid = ${unitID}`;
        if (rows.length === 0) {
          return NextResponse.json(
            {
              message:
                "Failed to set operations costs. Condo unit not found. If the condo unit exists, please add it in the system.",
            },
            { status: 404 }
          );
        }

        await sql`UPDATE condounits SET cost = ${cost} AND budget = ${budget} WHERE oid = ${operationID}`;
        return NextResponse.json(
            {
              message: "Successfully set operation costs.",
            },
            { status: 200 }
          );
    }
    catch (e) {
        console.log({ e });
        return NextResponse.json(
          {
            message: "Failed to set operation costs. Something went wrong.",
          },
          { status: 500 }
        );
      }           
}