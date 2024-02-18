import React, { FormEvent } from "react";
import Form from "./form";

let errors = {
  FormUname: "",
  FormEmail: "",
  FormPassword: "",
  FormConfirmPass: "",
};
// async function signup(formData: FormData) {
//   "use server";
//   const Fname = formData.get("Fname")?.toString();
//   const Lname = formData.get("Lname")?.toString();
//   const username = formData.get("username")?.toString();
//   const DOB = formData.get("DOB")?.toString();
//   const Address = formData.get("Address")?.toString();
//   const Phone = formData.get("Phone")?.toString();
//   const Email = formData.get("Email")?.toString();
//   const Password = formData.get("Password")?.toString();

//   const exists =
//     (await sql`select username from users2 where username = ${username}`)
//       .rowCount > 0;
//   if (!exists) {
//     try {
//       await sql`create table if not exists users2(uid serial primary key, Fname varchar(255), Lname varchar(255),username varchar(255), DOB DATE, Address varchar(255), Phone varchar(10), Email varchar(319), Password varchar(16), regKey varchar(255));`;
//       const result =
//         await sql`insert into users2(Fname, Lname, username, Dob, Address, Phone, Email, Password) values (${Fname},${Lname},${username}, ${DOB},${Address},${Phone},${Email},${Password})`;
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     console.log("redirecting...");
//     redirect("/");
//   }

export default async function SignUp() {
  return <Form />;
}
