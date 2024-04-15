"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
        AccountType: formData.get("accountType"),
      }),
    });
    if (response.ok) {
      router.push("/SignIn");
      router.refresh();
    }
  };

  return (
    <div
      className="bg-stone-50 flex flex-col items-center justify-center gap-8"
      style={{ height: "calc(100vh - 82px)" }}
    >
      <div id="welcomeSignUp">
        <p style={{ fontSize: "1.75rem" }}>Welcome to Anacondo</p>
      </div>
      <form
        className="bg-stone 50 w-full max-w-md flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full gap-2">
          <div className="flex flex-col w-1/2">
            {/* <label htmlFor="fName">First Name</label> */}
            <input
              id="fName"
              name="Fname"
              type="text"
              className="formGroup"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col w-1/2">
            {/* <label htmlFor="lName">Last Name</label> */}
            <input
              id="lName"
              name="Lname"
              type="text"
              className="formGroup"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex w-full gap-2">
          <div className="flex flex-col w-1/2">
            {/* <label htmlFor="username">Username</label> */}
            <input
              id="username"
              required
              pattern="[a-z]{1,15}"
              title="Please enter a valid username (no symbols)"
              name="username"
              type="text"
              placeholder="Username"
              className="formGroup"
            />
          </div>
          <div className="flex flex-col w-1/2">
            {/* <label htmlFor="address">Address</label> */}
            <input
              id="address"
              name="Address"
              type="text"
              className="formGroup"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="flex w-full gap-2">
          <div className="flex flex-col w-1/2">
            {/* <label htmlFor="dob">Date of Birth</label> */}
            <input
              id="dob"
              name="DOB"
              type="text"
              className="formGroup"
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div className="flex flex-col w-1/2">
            {/* <label htmlFor="phone">Phone No.</label> */}
            <input
              id="phone"
              name="Phone"
              type="text"
              className="formGroup"
              placeholder="###-###-####"
            />
          </div>
        </div>
        <div className="flex flex-col">
          {/* <label htmlFor="Email">Email</label> */}
          <input
            required
            name="Email"
            type="email"
            id="Email"
            className="formGroup"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col">
          {/* <label htmlFor="Password">Password</label> */}
          <input
            required
            maxLength={255}
            name="Password"
            type="password"
            id="Password"
            placeholder="Password"
            className="formGroup"
          />
        </div>
        <div className="flex flex-col">
          {/* <label htmlFor="Confirmpass">Confirm Password</label> */}
          <input
            required
            name="Confirmpass"
            type="password"
            id="Confirmpass"
            placeholder="Confirm Password"
            className="formGroup"
          />
        </div>
        <div className="mb-4">
          {/* <label htmlFor="accountType">Account Type</label> */}
          <div
            className="flex"
            style={{ alignItems: "center", position: "relative" }}
          >
            <select
              required
              id="accountType"
              name="accountType"
              className="formGroup"
              style={{ width: "100%" }}
            >
              <option value="" disabled selected>
                Select an Account Type
              </option>
              <option value="CONDO_MANAGEMENT_COMPANY">
                Condo Management Company
              </option>
              <option value="PUBLIC_USER">Public User</option>
              <option value="EMPLOYEE">Employee</option>
            </select>
            <div className="dropdownIcon">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="w-full p-3 signInBtn"
            style={{
              color: "white",
              borderRadius: "0.25rem",
            }}
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
