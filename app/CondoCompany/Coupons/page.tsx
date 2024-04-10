import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import React from "react";
import { Pool } from "pg";
import { redirect } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

export default async function CompanyCoupons() {
  /*BREADCRUMB ITEMS*/
  const breadcrumbItems = [
    { text: "Condo Company", url: "/CondoCompany" },
    { text: "Create Condo Discounts", url: "/CondoCompany/Coupons" },
  ];

  // Retrieve user email to use for fetching company id and coupons
  const session = await getServerSession();
  var email = "";
  if (session?.user?.email) email = session.user.email;

  const companyIDQuery =
    await sql`SELECT companyid FROM users WHERE email = ${email};`;
  console.log("this is conosle log:" + companyIDQuery);
  const companyID = 99; //companyIDQuery.rows[0].companyid;
  const coupons =
    await sql`SELECT * FROM companyCoupons WHERE companyID = ${companyID}`;
  //console.log(coupons.rows[0].nid);
  //console.log(JSON.stringify(coupons.rows[1].expirydate));
  //console.log(coupons);

  // let result = [];
  // for (var i in coupons.rows) {
  //   result.push([coupons.rows[i]])
  // }
  // console.log(result)
  // console.log(result[0][0].nid);

  // let coupondictionary = {};
  // coupons.rows

  // const pool = new Pool();
  // console.log("pool:")
  // console.log(pool);
  // const client = await pool.connect();
  // const result = await client.query({
  //   rowMode: 'array',
  //   text:`SELECT * FROM companyCoupons WHERE companyID = ${companyID}`
  // })
  // console.log(result.rows);
  // client.release();

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

  // await sql`DROP table companyCoupons`
  // await sql`CREATE TABLE IF NOT EXISTS companyCoupons(id serial, companyID integer, propertyID integer, discountValue decimal, expiryDate DATE, PRIMARY KEY (id))`
  // await sql`INSERT INTO companyCoupons(companyid, propertyID, discountValue, expiryDate) VALUES (1, 2, 0.25, '2024-07-20')`
  // await sql`INSERT INTO companyCoupons(companyid, propertyID, discountValue, expiryDate) VALUES (2, 3, 0.25, '2024-07-20')`
  // await sql`INSERT INTO companyCoupons(companyid, propertyID, discountValue, expiryDate) VALUES (2, 1, 0.25, '2024-07-20')`
  // await sql`INSERT INTO companyCoupons(companyid, propertyID, discountValue, expiryDate) VALUES (1, 4, 0.25, '2024-07-20')`
  // const result = await sql`SELECT * FROM companyCoupons`;
  // console.log(result.rows)

  // const coupons = (await sql`SELECT * FROM companyCoupons WHERE companyID = ${companyID}`).rows;
  // console.log(coupons);

  return (
    <main className="m-1">
      <div>
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="flex flex-col min-h-dvh w-full items-center justify-center bg-npVeryLightGrayishBlue text-[calc(16rem/16)] text-npDarkGrayishBlue">
        <div>
          <h1 className="font-bold text-xl m-6 text-center">
            All Open Coupons
          </h1>
        </div>
        {/* Container */}
        <div className="flex w-full max-w-[730px] flex-col gap-6 bg-white p-4 md:rounded-2xl md:p-8">
          {/* Top Bar */}
          <div className="flex-between flex items-baseline gap-2">
            <h1 className="text-l font-bold text-npcVeryDarkBlueMain">
              Coupons
            </h1>
            <div
              data-testid="coupon-count"
              className="rounded-full bg-lime-300 px-3 py-0.5 font-bold text-white"
            >
              {coupons.rowCount}
            </div>

            <div data-testid="add-coupon-btn" className="ml-auto">
              <button
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                type="submit"
              >
                <Link
                  href="./Coupons/Add"
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Add Coupon
                </Link>
              </button>
            </div>
          </div>
          {/* Coupons */}

          <div
            ata-testid="coupon-table"
            className="relative overflow-x-auto shadow sm:rounded-lg"
          >
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead
                data-testid="coupon-table-head"
                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Coupon ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Property ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Expiry Date
                  </th>
                </tr>
              </thead>
              <tbody data-testid="coupon-table-body">
                {coupons.rows.map((coupon) => {
                  return (
                    <tr
                      key={coupon.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {coupon.id}
                      </th>
                      <td className="px-6 py-4">{coupon.propertyid}</td>
                      <td className="px-6 py-4">
                        {`${coupon.discountvalue * 100}%`}
                      </td>
                      <td className="px-6 py-4">
                        {`${JSON.stringify(coupon.expirydate)}`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* <div className="flex flex-col gap-3">
        {coupons.rows.map(item => {
          return <div>{item.nid} and {item.description}</div>

        })}
      </div> */}
        </div>
      </div>
    </main>
  );
}
