import type { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ profile }) {
      // whitelisting of username
      return profile?.login === "bobmacneal"
    },
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  basePath: "/api/auth",
  secret: process.env.NEXTAUTH_SECRET,
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
