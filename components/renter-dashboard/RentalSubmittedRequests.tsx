"use server";
import { sql } from "@vercel/postgres";
import { Children } from "react";

interface RequestInfo {
  request_id: number;
  title: string;
  status: string;
}

export default async function RentalSubmittedRequests({
  email,
}: {
  email: string;
}) {
  /**Pull data from "submittedrequests" table */
   /**Check that table exists */
    try {
        await sql`CREATE TABLE IF NOT EXISTS "submittedrequests" (
            request_id int primary key,
            request_type varchar(50),
            user_email varchar(100),
            request_status varchar(30),
            question varchar(500),
            day varchar(2),
            month varchar(20),
            year varchar(4),
            unit_nb varchar(30),
            access_method varchar(10),
            common_room varchar(100),
            violation varchar(100),
            deficiency varchar(300)
        );`;
        console.log("Successfully initialized the SubmittedRequests table");
    } catch (error) {
        throw new Error(`RAN INTO ERROR WITH SUBMITTED_REQUESTS TABLE: ${error}`);
    };
  const submittedrequests =
    await sql`select * from submittedrequests where user_email=${email};`;
  const count = (
    await sql`select count(*) from submittedrequests where user_email=${email};`
  ).rows[0].count;
  const requestInfo = submittedrequests.rows.map((row) => ({
    request_id: row.request_id,
    title: row.request_type,
    status: row.request_status,
  }));

  return (
    <div data-testid="rental-user-submitted-requests" className="px-4 py-4">
      <div className="grid md:grid-cols-4 gap-4">
        <h3 className="font-bold text-lime-700">Identification</h3>
        <h3 className="font-bold text-lime-700">Title</h3>
        <h3 className="font-bold text-lime-700">Updated</h3>
        <h3 className="font-bold text-lime-700">Status</h3>
      </div>
      <hr></hr>
      {requestInfo.map((requestInfo, index) => (
        <>
          <div className="rental-dashboard-request grid md:grid-cols-4 gap-4 py-3">
            <h3 key={requestInfo.request_id} className="text-slate-500">
              {requestInfo.request_id}
            </h3>
            <h3 key={requestInfo.request_id} className="text-slate-500">
              {requestInfo.title}
            </h3>
            <h3 key={requestInfo.request_id} className="text-slate-500">
              8:00 am
            </h3>
            <h3 key={requestInfo.request_id} className="text-slate-500">
              {requestInfo.status}
            </h3>
          </div>
          <hr></hr>
        </>
      ))}
    </div>
  );
}
