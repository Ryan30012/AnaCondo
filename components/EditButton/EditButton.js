'use client';
import { useRouter } from "next/navigation";
export function EditButton() {
    const router = useRouter();
    const handleClick = () => {
        router.push("./editProfile");
        router.refresh();
    }
  return (
    <button
        onClick={handleClick}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
        Manage Registration Key
        </button>
  );
}