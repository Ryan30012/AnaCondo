import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(req: Request){
    try {
        const { user } = await req.json();
        const result = await sql`SELECT * FROM notifications where user=${user}`;
        return NextResponse.json({ data: result.rows });
    } catch (error) {
        return NextResponse.json({ error: error });
    }
}

export async function POST(req: Request){
    const { user, message } = await req.json();
    try {
        await sql`
          CREATE TABLE IF NOT EXISTS notifications (
            id SERIAL PRIMARY KEY,
            user VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
        );`;
      const result = await sql`INSERT INTO notifications (user, message) VALUES (${user},${message})`;
      return NextResponse.json({ status:200 });
    } catch (error) {
        return NextResponse.json({ error: error });
    }
}