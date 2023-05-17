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
      if (user.customerId) {
        session.user.customerId = user.customerId;
      }
      if (user.driverId) {
        session.user.driverId = user.driverId;
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
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)