"use client";
import { useRouter } from "next/navigation";


export function SaveButton() {
    const handleClick = () => {
    }
  return (
    <button
        onClick={handleClick}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
        Save
        </button>
  );
}