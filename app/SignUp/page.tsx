import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";

const SignUp = () => {
  async function signup(formData: FormData) {
    "use server";
    console.log(formData);
    const Fname = formData.get("Fname")?.toString();
    const Lname = formData.get("Lname")?.toString();
    const DOB = formData.get("DOB")?.toString();
    const Address = formData.get("Address")?.toString();
    const Phone = formData.get("Phone")?.toString();
    const Email = formData.get("Email")?.toString();
    const Password = formData.get("Password")?.toString();
    const uType = formData.get("uType")?.toString();

    const exists =
      (await sql`select Fname from users where Fname = ${Fname}`).rowCount > 0;

    console.log("exists: " + exists);

    if (!exists) {
      try {
        const result =
          await sql`insert into users(Fname, Lname, Dob, Address, Phone, Email, Password, Utype) values (${Fname},${Lname},${DOB},${Address},${Phone},${Email},${Password},${uType})`;

        redirect("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("redirecting...");
      redirect("/");
    }
  }

  return (
    <div className="bg-stone-50 flex flex-col items-center justify-center h-screen">
      <div className="loginSignupLogo flex flex-col justify-center align- mb-6">
        <p className="text-center logoTitle">AnaCondo</p>
        <p className="welcomeBackLogin text-center">Welcome!</p>
      </div>
      <form className="bg-stone 50 w-full max-w-md" action={signup}>
        <div className="mb-4">
          <input
            name="Fname"
            type="text"
            placeholder="First Name"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            name="Lname"
            type="text"
            placeholder="Last Name"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            name="DOB"
            type="text"
            placeholder="Date of Birth"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            name="Address"
            type="text"
            placeholder="Address"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            name="Phone"
            type="text"
            placeholder="Phone"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            name="Email"
            type="email"
            placeholder="Email"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            name="Password"
            type="password"
            placeholder="Password"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            name="Confirmpass"
            type="password"
            placeholder="Confirm Password"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-black flex space-x-2 items-center justify-center mb-4">
          <input type="radio" id="Renter" name="uType" value="Renter" />
          <label htmlFor="Renter">Renter</label>
          <input type="radio" id="Owner" name="uType" value="Owner" />
          <label htmlFor="Owner">Owner</label>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full text-black bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          >
            Sign Up
          </button>
        </div>
        <div className="text-center text-gray-600">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer">
            <Link href="../SignIn"> Login </Link>
          </span>
        </div>
      </form>
      <div>
        <Link className="underline text-blue-500" href="/">
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
