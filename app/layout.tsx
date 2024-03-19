"use server";

import GuestNavbar from "@/components/guestnavbar/GuestNavbar";
import "/styles/global.css";
import Navbar from "@/components/navbar/Navbar";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  console.log(session?.user);

  // Check if the code is running in a testing environment
  const isTesting = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <head>
        {!isTesting &&
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        />}
      </head>
      <body>
        <SessionProvider>
          {session && <Navbar />}
          {!session && <GuestNavbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
