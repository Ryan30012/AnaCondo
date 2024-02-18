import { sql } from "@vercel/postgres";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        console.log("Authorizing...");
        const response =
          await sql`SELECT * FROM users WHERE Email = ${credentials?.email}`;

        const user = response.rows[0];
        console.log(user.password);
        console.log(credentials?.password);

        const passwordMatch = user.password == credentials?.password;
        if (passwordMatch) {
          console.log("Found Match!");
          return {
            id: user.id,
            email: user.email,
            username: user.username,
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
