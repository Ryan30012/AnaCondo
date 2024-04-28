"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { set } from "zod";

export default function Form() {
  const router = useRouter();
  const { data: session, update } = useSession();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("Email"));
    const email = formData.get("Email");

    const response = await signIn("credentials", {
      email: formData.get("Email"),
      password: formData.get("Password"),
      redirect: false,
    });

    // If the response is not succesful (i.e. the credentials are inalid), set the appropriate error message
    if(response?.status != 200) {
      setErrorMessage("Invalid email or password");
      return;
    }


    if (!response?.error) {
      update({
        ...session,
        user: {
          ...session?.user,
          email,
        },
      });

      console.log("On SignIn account type: ", session?.accounttype);
      router.push("/");
      router.refresh();
    }
  };


  return (
    <div
      className="bg-stone-50 loginSignupCtn flex flex-col items-center justify-center"
      style={{ height: "calc(100vh - 90px)" }}
    >
      <div className="loginSignupLogo flex flex-col justify-center align-middle">
        <p className="text-center logoTitle">AnaCondo</p>
        <p className="welcomeBackLogin">Welcome back!</p>
      </div>
      <form className="w-full max-w-xs" onSubmit={handleSubmit}>
        <div className="mb-4 flex w-full">
          <input
            required
            name="Email"
            type="text"
            placeholder="Email"
            className="formGroup"
            style={{ width: "100%" }}
          />
        </div>
        <div className="mb-4 flex">
          <input
            required
            name="Password"
            type="password"
            placeholder="Password"
            className="formGroup"
            style={{ width: "100%" }}
          />
        </div>
        {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}
        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-gray-600">
            Remember me
          </label>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full p-3 signInBtn"
            style={{
              color: "white",
              borderRadius: "0.25rem",
            }}
          >
            Login
          </button>
        </div>
        <div className="text-center text-gray-600">
          Don&apos;t have an account?
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
}
