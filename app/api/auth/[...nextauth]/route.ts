import { sql } from "@vercel/postgres";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    uid: number;
    username: string;
    accounttype: string;
  }
  interface Session {
    uid: number;
    username: string;
    accounttype: string;
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        console.log("Authorizing...");
        const response =
          await sql`SELECT * FROM users WHERE Email = ${credentials?.email}`;

        const user = response.rows[0];
        console.log(user.password);
        console.log(credentials?.password);

        const passwordMatch = user.password == credentials?.password;
        if (passwordMatch) {
          console.log("Found Match!");
          console.log("User: ");
          console.log(user);
          return {
            id: user.id,
            name: user.accounttype,
            email: user.email,
            username: user.username,
            accounttype: user.accounttype,
            uid: user.uid,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log(user);
        token.username = user.username;
        token.accounttype = user.accounttype;
        token.uid = user.uid;
      }
      return token;
    },

    session({ session, token }) {
      console.log("session callback: ");
      console.log(token);
      session.accounttype = token.accounttype as string;
      session.username = token.username as string;
      session.uid = token.uid as number;
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          accounttype: token.accounttype,
          uid: token.uid,
        },
      };
    },
  },
});

export { handler as GET, handler as POST };
