// import { NextApiRequest, NextApiResponse } from 'next';
// import { sql } from '@vercel/postgres';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     if (req.method === 'GET') {
//       // Fetch all employees from the database
//       const employees = await sql`SELECT * FROM employees`;
//       res.status(200).json(employees);
//     } else if (req.method === 'POST') {
//       // Update employee role based on request body
//       const { eid, role } = req.body;
//       await sql`UPDATE employees SET role = ${role} WHERE eid = ${eid}`;
//       res.status(200).json({ message: 'Employee role updated successfully' });
//     } else {
//       res.status(405).json({ message: 'Method Not Allowed' });
//     }
//   } catch (error) {
//     console.error('Error processing request:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

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
