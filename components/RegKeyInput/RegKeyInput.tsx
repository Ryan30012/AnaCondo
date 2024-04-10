"use client";
import React from "react";
import { SaveButton } from "@/components/SaveButton/saveButton";
import { FormEvent } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

let errorMessage = "";

const RegKeyInput = () => {
  const router = useRouter();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Redirect upon successful registration key submission
    if (response.status == 200) {
      errorMessage = "";
      router.push("/SignIn");
      await signOut();
      return;
    }
    // Show error message for invalid registration key (empty or not existent)
    else if (response.status == 500 || response.status == 501) {
      errorMessage = "Please enter a valid registration key";
      router.refresh();
    }
  }

  const handleCloseRegKeyPopup = () => {
    const overlay = document.getElementById("regKeyOverlay");
    if (overlay) {
      overlay.style.display = "none";
    }
  };

  return (
    <div
      className="flex"
      style={{
        width: "30rem",
        backgroundColor: "var(--light-blue)",
        borderRadius: "0.5rem",
        position: "relative",
      }}
    >
      <div className="p-8 w-full flex flex-col gap-6">
        <div className="flex w-full items-center justify-center">
          <p style={{ fontSize: "1.25rem" }}>Manage Registration Key</p>
        </div>
        <form onSubmit={onSubmit} className="w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p>Enter a Registration Key: </p>
              <input
                name="regKey"
                type="text"
                placeholder="Enter your registration key"
                className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="text-red-600">{errorMessage}</div>
          </div>
          <SaveButton />
        </form>
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            cursor: "pointer",
          }}
          className="hover:text-red-500"
          onClick={handleCloseRegKeyPopup}
        >
          <FontAwesomeIcon
            icon={faXmarkCircle}
            style={{ fontSize: "1.5rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RegKeyInput;
