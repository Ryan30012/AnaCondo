"use server";

import GuestNavbar from "@/components/guestnavbar/GuestNavbar";
import "/styles/global.css";
import Navbar from "@/components/navbar/Navbar";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        />
      </head>
      <body>
        {session && <Navbar />}
        {!session && <GuestNavbar />}
        {children}
      </body>
    </html>
  );
}
