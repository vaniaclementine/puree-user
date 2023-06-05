import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const authOptions = () => {
  // adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
    // ...add more providers here
  ],
};

export default authOptions(req, res, authOptions);