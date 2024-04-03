import { NextApiRequest } from "next";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, rentDes, rentAmount, CondoTaxDes, CondoTaxAmount, otherDes, otherAmount } = await req.json();
  console.log("request body", email, rentDes, rentAmount, CondoTaxDes, CondoTaxAmount, otherDes, otherAmount);
  try {
    const create = await sql`CREATE TABLE AnnualFinReport (
        userEmail VARCHAR(255) PRIMARY KEY,  -- Assuming userEmail is unique and you want it as the primary key
        rent_description JSON,
        rent_amount JSON,
        condo_tax_description VARCHAR(255) NOT NULL,
        condo_tax_amount DECIMAL(10, 2) NOT NULL,
        other_descriptions JSON,
        other_amounts JSON
    );`;
    const result =
      await sql`INSERT INTO AnnualFinReport (
        userEmail, 
        rent_description, 
        rent_amount,
        condo_tax_description, 
        condo_tax_amount, 
        other_descriptions, 
        other_amounts
    ) VALUES(
        ${email},
        ${rentDes},
        ${rentAmount},
        ${CondoTaxDes},
        ${CondoTaxAmount},
        ${otherDes},
        ${otherAmount}
        )`;
    console.log("Successfully Inserted.");
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET(req: Request) {
    try {
      const result = await sql`SELECT * FROM AnnualFinReport`;
      return NextResponse.json({ data: result });
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }