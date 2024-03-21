"use client";
import "/styles/global.css";
import { useSession } from "next-auth/react";

const Homepage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  //if (!session) return <p>Not signed in</p>;
  return (
    <div className="grid place-items-center h-screen">
      <h1 className="font-bold text-3xl text-center">
        Welcome, {session.user.email}!
      </h1>
      <h1>Home Page</h1>
    </div>
  );
};

export default Homepage;
