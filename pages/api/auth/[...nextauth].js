import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient()

export const authOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      if (user.merchantId) {
        session.user.merchantId = user.merchantId;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
    //   CredentialsProvider({
    //     // The name to display on the sign in form (e.g. "Sign in with...")
    //     name: "Credentials",
    //     credentials: {
    //       email: { label: "Email", type: "email", placeholder: "jsmith" },
    //       password: { label: "Password", type: "password" }
    //     },
    //     async authorize(credentials, req){
    //         const dbUser = await prisma.user.findUnique({
    //             where: {
    //                 merchant_email: credentials.email,
    //                 merchant_password: credentials.password
    //             }
    //         })
    //         if(dbUser) {
    //           console.log(dbUser.password == credentials.password)
    //           return dbUser;
    //         }
    //         return null;
    //     }
    // })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)