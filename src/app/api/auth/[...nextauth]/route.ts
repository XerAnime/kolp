// imports
import NextAuth from "next-auth";

// importing providers
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/user";
import connectMongo from "@/utils/mongoose";

const handler = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await connectMongo();

        const isSavedUser = await User.findOne({ userId: user.id });

        if (!isSavedUser) {
          await User.create({
            userId: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
