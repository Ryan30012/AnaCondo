import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Fetch all employees from the database
    const data = await sql`SELECT E.eid, E.u_name, U.fname, U.lname, E.role FROM employees AS E JOIN users AS U ON U.username = E.u_name;`;
    const employees = data.rows;

    return NextResponse.json({ 
      employees
    });
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}
