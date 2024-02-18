import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const result =
      //await sql`CREATE TABLE IF NOT EXISTS Users (uid serial primary key, Fname varchar(255), Lname varchar(255), DOB DATE, Address varchar(255), Phone varchar(10), Email varchar(319), Password varchar(16), uType varchar(6), PRIMARY KEY (uid));`;
      await sql`create table if not exists users(uid serial primary key, Fname varchar(255), Lname varchar(255),username varchar(255), DOB DATE, Address varchar(255), Phone varchar(10), Email varchar(319), Password varchar(255), regKey varchar(255));`;
    return response.status(200).json({ result: result.rows });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
