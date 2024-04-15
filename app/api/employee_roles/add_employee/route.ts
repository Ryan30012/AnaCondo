import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

//EXTRA NOT REQUIRED
export async function POST(request: Request) {
  try {
    const { uname, 
        role, 
        Fname,
        Lname,
        username,
        DOB,
        Address,
        Phone,
        Email,
        Password,
        AccountType, } = await request.json();   
    const employee = await sql`SELECT COUNT(*) AS table_count FROM employees`;
    const employee_count = employee.rows[0].table_count + 1;
    const result1 = await sql`INSERT INTO employees (eid, u_name, role) VALUES (${employee_count}, ${uname}, ${role})`;
    const result2 =await sql`insert into users(Fname, Lname, username, Dob, Address, Phone, Email, Password, AccountType) values 
                (${Fname}, ${Lname}, ${username}, ${DOB}, ${Address}, ${Phone}, ${Email}, ${Password}, ${AccountType})`;

    return NextResponse.json({ message: 'Employee added successfully' });
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}