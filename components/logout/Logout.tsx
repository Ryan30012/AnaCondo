"use client";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      id="loginBtn"
      className="navButton"
      onClick={async () => {
        await signOut({ callbackUrl: "http://localhost:3000/" });
      }}
    >
      Logout
    </button>
  );
}
