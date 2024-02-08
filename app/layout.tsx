"use client";

import Navbar from "@/components/navbar/Navbar";
import "/styles/global.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        />
      </head>
      <body>
        {pathname !== "/signin" && pathname !== "/signup" && (
          <Navbar authenticatedUser={false} />
        )}
        {children}
      </body>
    </html>
  );
}
