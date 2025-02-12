import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      Fname,
      Lname,
      username,
      DOB,
      Address,
      Phone,
      Email,
      Password,
      AccountType,
    } = await request.json();

    console.log({
      Fname,
      Lname,
      username,
      DOB,
      Address,
      Phone,
      Email,
      Password,
      AccountType,
    });

    const exists =
      (await sql`select username from users where username = ${username}`)
        .rowCount > 0;
    if (!exists) {
      try {
        await sql`create table if not exists users(uid serial primary key, Fname varchar(255), Lname varchar(255),username varchar(255), 
                      DOB DATE, Address varchar(255), Phone varchar(12), Email varchar(319), Password varchar(16), regKey varchar(255), AccountType varchar(50));`;
        const result =
          await sql`insert into users(Fname, Lname, username, Dob, Address, Phone, Email, Password, AccountType) values 
                      (${Fname}, ${Lname}, ${username}, ${DOB}, ${Address}, ${Phone}, ${Email}, ${Password}, ${AccountType})`;
        console.log("Successfully Inserted.");
      } catch (error) {
        console.log("User not stored.");
        console.log(error);
      }
    }
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}
