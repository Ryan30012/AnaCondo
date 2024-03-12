import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const session = await getServerSession();
    var uid = "";
    console.log(session?.user);
    const userID = (await sql`SELECT uid FROM users WHERE email=${session?.user?.email}`).rows[0].uid;
    const data = await request.formData();
    // console.log(data);
    const regKey = parseInt(data.get("regKey")?.toString());
    console.log(regKey)
    // await sql`CREATE TABLE IF NOT EXISTS RegKeys(CompanyID integer primary key, regKey integer)`;
    const isValidRegKey = (await sql`SELECT regKey FROM RegKeys WHERE regKey=${regKey}`).rowCount > 0;
    // const allTable = await sql`SELECT * FROM users`;
    // // console.log(allTable);
    if(isValidRegKey) {
       const makeCondoOwner = await sql`UPDATE users SET accounttype=${'Condo Owner'} WHERE uid=${userID}`;
       const afterOperation = await sql`SELECT * FROM users WHERE uid=${userID}`;
     }
    //redirect('https://www.google.com');
     
  // try {
  //   const { Fname, Lname, username, DOB, Address, Phone, Email, Password } =
  //     await request.json();

  //   console.log({
  //     Fname,
  //     Lname,
  //     username,
  //     DOB,
  //     Address,
  //     Phone,
  //     Email,
  //     Password,
  //   });

  //   const exists =
  //     (await sql`select username from users where username = ${username}`)
  //       .rowCount > 0;
  //   if (!exists) {
  //     try {
  //       await sql`create table if not exists users(uid serial primary key, Fname varchar(255), Lname varchar(255),username varchar(255), DOB DATE, Address varchar(255), Phone varchar(10), Email varchar(319), Password varchar(16), regKey varchar(255));`;
  //       const result =
  //         await sql`insert into users(Fname, Lname, username, Dob, Address, Phone, Email, Password) values (${Fname},${Lname},${username}, ${DOB},${Address},${Phone},${Email},${Password})`;
  //       console.log("Successfully Inserted.");
  //     } catch (error) {
  //       console.log("User not stored.");
  //       console.log(error);
  //     }
  //   }
  // } catch (e) {
  //   console.log({ e });
  // }

  return NextResponse.json({ message: "success" });
}