"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log("Trigerred handleSubmit...");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Fetching response...");
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        Fname: formData.get("Fname"),
        Lname: formData.get("Lname"),
        username: formData.get("username"),
        DOB: formData.get("DOB"),
        Address: formData.get("Address"),
        Phone: formData.get("Phone"),
        Email: formData.get("Email"),
        Password: formData.get("Password"),
      }),
    });
    if (response.ok) {
      router.push("/SignIn");
      router.refresh();
    }
  };

  return (
    <div className="bg-stone-50 flex flex-col items-center justify-center h-screen">
      <form className="bg-stone 50 w-full max-w-md" onSubmit={handleSubmit}>
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
            required
            pattern="[a-z]{1,15}"
            title="Please enter a valid username (no symbols)"
            name="username"
            type="text"
            placeholder="Username"
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
            required
            name="Email"
            type="email"
            placeholder="Email"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            required
            maxLength={255}
            name="Password"
            type="password"
            id="Password"
            placeholder="Password"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            required
            name="Confirmpass"
            type="password"
            id="Confirmpass"
            placeholder="Confirm Password"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full text-black bg-blue-500 py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
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
    </div>
  );
}
