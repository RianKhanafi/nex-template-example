import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const secret = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "181322828265-rdippsosi4nkl6qv50g8eo9s5stao9br.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  secret,
  callbacks: {
    async jwt({ token }) {
      console.log("run auth jwt", token);

      token.userRole = "user";
      token.picture = "";
      return token;
    },
  },
  pages: {
    signIn: "/",
    error: "/api/auth/error",
  },
};

export default NextAuth(authOptions);
