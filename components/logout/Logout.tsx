"use client";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      id="loginBtn"
      className="navButton"
      onClick={async () => {
        await signOut();
      }}
    >
      Logout
    </button>
  );
}
