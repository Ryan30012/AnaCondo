import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
      await sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255) );`;
      await sql`INSERT INTO Pets(Name, Owner) VALUES (${"Jake"},${"Bob"});`;
      const result = await sql`SELECT * FROM Pets;`;
    return response.status(200).json({ result: result.rows });
  } catch (error) {
    return response.status(500).json({ error });
  }
}