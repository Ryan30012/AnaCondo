import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const Signin = () => {
  var notExists = " ";

  async function signin(formData: FormData) {
    "use server";

    const email = formData.get("Email")?.toString();
    const password = formData.get("Password")?.toString();

    const result =
      await sql`select Email, Password from users where  Email = ${email} AND Password = ${password}`;
    const exists =
      (
        await sql`select Email, Password from users where Email = ${email} AND Password = ${password}`
      ).rowCount > 0;

    if (exists) {
      console.log("USER FOUND!");
      cookies().set("Email", email == undefined ? "" : email);
      redirect("/");
    } else {
      console.log("User Not Found.");
      notExists = "Incorrect Email or Password";
    }
  }

  console.log(`Not exists is ${notExists}`);
  return (
    <div className="bg-stone-50 flex flex-col items-center justify-center h-screen loginSignupCtn">
      <div className="loginSignupLogo flex flex-col justify-center align-middle">
        <p className="text-center logoTitle">AnaCondo</p>
        <p className="welcomeBackLogin">Welcome back!</p>
      </div>

      <form className="w-full max-w-xs" action={signin}>
        <div className="mb-4">
          <input
            name="Email"
            type="text"
            placeholder="Username"
            className="w-full border-b-2 text-black border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            name="Password"
            type="password"
            placeholder="Password"
            className="w-full border-b-2 text-black border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>{notExists}</div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-gray-600">
            Remember me
          </label>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          >
            Login
          </button>
        </div>
        <div className="text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <span className="text-blue-500 cursor-pointer">
            <Link href="../SignUp">Sign Up</Link>
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

export default Signin;
