import "/styles/global.css";
import Navbar from "@/components/navbar/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
