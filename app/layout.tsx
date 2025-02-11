"use server";

import GuestNavbar from "@/components/guestnavbar/GuestNavbar";
import "/styles/global.css";
import Navbar from "@/components/navbar/Navbar";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import Footer from "@/components/footer/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  console.log(session?.user);

  // Set the user.email variable in the SessionProvider component
  const sessionWithEmail = {
    ...session,
    user: {
      ...session?.user,
      email: session?.user?.email,
    },
  };
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        />
      </head>
      <body>
        <SessionProvider session={session}>
          {session && <Navbar />}
          {!session && <GuestNavbar />}
          {children}
          {<Footer />}
        </SessionProvider>
      </body>
    </html>
  );
}
