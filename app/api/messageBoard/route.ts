import { NextApiRequest } from "next";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    
    const { email, date, message } = await req.json();
    console.log('request body', email, date, message);
    try {
      console.log(1);
      const create = 
        await sql`CREATE TABLE IF NOT EXISTS BMessage(
            id SERIAL PRIMARY KEY,
            date DATE NOT NULL,
            email VARCHAR(255) NOT NULL,
            message TEXT NOT NULL 
          );`;
          console.log(2);
          const result = await sql`INSERT INTO BMessage (date, email, message) VALUES(${date},${email},${message})`;      
          console.log(3);
          console.log("Successfully Inserted.");
        return NextResponse.json({ status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}

export async function GET(req: NextApiRequest) {
    try {
      const result = await sql`SELECT * FROM BMessage`
      return NextResponse.json({data:result})
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 })
    }
  }
  
export async function PUT(req: NextApiRequest) {
  const { id, email, date, message } = req.body
  try {
    await sql`UPDATE BMessage SET email=${email}, date=${date}, message=${message} WHERE id=${id}`
    return NextResponse.json({ message: 'Entry updated' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
  
export async function DELETE(req: NextApiRequest) {
    const { id } = req.body
    try {
      await sql`DELETE FROM BMessage WHERE id=${id}`
      return NextResponse.json({ message: 'Entry deleted' }, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 })
    }
  }