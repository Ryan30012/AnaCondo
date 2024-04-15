import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">

      <main className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
          
          <Link href="CondoCompany/Properties">
            <button  className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-75">
                Property Information
            </button>
          </Link>
          

          <button className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-75">
            Upload File
          </button>

          <button className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-75">
            Send Registration Keys
          </button>
        </div>
      </main>

      <footer className="p-4">
        <button className="w-full py-2 bg-black text-white rounded hover:bg-opacity-75">
          Sign Out
        </button>
      </footer>
    </div>
  );
};

export default Homepage;