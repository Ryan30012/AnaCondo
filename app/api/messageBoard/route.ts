import { NextApiRequest } from "next";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export default async function handler(req: NextApiRequest) {
    if (req.method === 'POST') {
      return createEntry(req)
    } else if (req.method === 'GET') {
      return getEntries(req)
    } else if (req.method === 'PUT') {
      return updateEntry(req)
    } else if (req.method === 'DELETE') {
      return deleteEntry(req)
    } else {
      // Handle other HTTP methods (if any)
      return NextResponse.json({ error: 'Method not allowed' }, {status: 500})
    }
}

async function createEntry(req: NextApiRequest){
    const { email, date, message } = req.body;
    try {
        const create = 
        await sql`create table if not exists BMessage(
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            message TEXT NOT NULL
          );`;
        const result = await sql`INSERT INTO entries(name, date, message) VALUES(${email},${date},${message},) RETURNING *`
        console.log("Successfully Inserted.");
        return NextResponse.json({ status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}

async function getEntries(req: NextApiRequest) {
    try {
      const result = await sql`SELECT * FROM BMessage`
      return NextResponse.json({data:result})
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 })
    }
  }
  
  async function updateEntry(req: NextApiRequest) {
    const { id, email, date, message } = req.body
    try {
      await sql`UPDATE BMessage SET email=${email}, date=${date}, message=${message} WHERE id=${id}`
      return NextResponse.json({ message: 'Entry updated' }, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 })
    }
  }
  
  async function deleteEntry(req: NextApiRequest) {
    const { id } = req.body
    try {
      await sql`DELETE FROM BMessage WHERE id=${id}`
      return NextResponse.json({ message: 'Entry deleted' }, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 })
    }
  }