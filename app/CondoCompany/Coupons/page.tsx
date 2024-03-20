import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import React from "react";
import { Pool } from 'pg';

export default async function CompanyCoupons() {
    // Retrieve user email to use for fetching company id and coupons
    const session = await getServerSession();
    var email = "";
    if (session?.user?.email) email = session.user.email;

    const companyIDQuery = await sql`SELECT companyid FROM users WHERE email = ${email};`;
    const companyID = companyIDQuery.rows[0].companyid;

    const pool = new Pool();
    const client = await pool.connect();
    const result = await client.query({
      rowMode: 'array',
      text:`SELECT * FROM companyCoupons WHERE companyID = ${companyID}`
    })
    console.log(result.rows);

    // const allTable = await sql`SELECT * FROM users WHERE username = ${'estoylocomanager'}`;
    // console.log(allTable.rows);
    // await sql`INSERT INTO users(Fname, Lname, username, DOB, address, phone, email, password, regKey, accounttype, companyID) VALUES('Estoy Loco', 'Heights', 'estoylocomanager','12-12-12', '321 Estoy Loco Street',1238000, 'elheights@loco.com', 'elheights100', NULL, 'Condo Manager', 2);`
    // await sql`CREATE TABLE IF NOT EXISTS condo_company(company_id serial primary key, company_name varchar(200));`
    // await sql`INSERT INTO condo_company(company_name) VALUES ('Ritz Condos'), ('Estoy Loco Heights');`
    // await sql`ALTER TABLE users ADD companyID integer;`
    // const result = await sql`CREATE TABLE IF NOT EXISTS companyCoupons(nID serial, companyID integer, description text, PRIMARY KEY(nID, companyID));`;
    // await sql`INSERT INTO companyCoupons(companyID, description) VALUES (1,'Condo #453 is discounted at 50%')`;
    // await sql`INSERT INTO companyCoupons(companyID, description) VALUES (1,'Condo #454 is discounted at 25%')`;
    // await sql`INSERT INTO companyCoupons(companyID, description) VALUES (2,'Condo #52 is discounted at 25%')`;
    // const condo_company = await sql`SELECT * FROM condo_company;`;
    // console.log(condo_company.rows);
    // const coupons = await sql`SELECT * FROM companyCoupons;`;
    // console.log(coupons.rows);



    // const coupons = (await sql`SELECT * FROM companyCoupons WHERE companyID = ${companyID}`).rows;
    // console.log(coupons);

  return (
    <main
    className= "flex min-h-dvh w-full items-center justify-center bg-npVeryLightGrayishBlue text-[calc(16rem/16)] text-npDarkGrayishBlue">
    {/* Container */}
    <div className="flex w-full max-w-[730px] flex-col gap-6 bg-white p-4 md:rounded-2xl md:p-8">
      {/* Top Bar */}
      <div className="flex-between flex items-baseline gap-2">
        <h1 className="text-xl font-bold text-npcVeryDarkBlueMain">
          Coupons
        </h1>
        <div className="rounded-lg bg-blue-500 px-3 py-0.5 font-bold text-white">
          3
        </div>
        <div className="rounded-lg ml-auto text-sm text-gray-500 hover:text-blue-500 px-3 py-0.5">
          Add Coupon
        </div>
      </div>
      {/* Coupons */}
      <div className="flex flex-col gap-3">
      </div>
    </div>
  </main>
  );
};