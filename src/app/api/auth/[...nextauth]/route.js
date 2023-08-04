import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
})