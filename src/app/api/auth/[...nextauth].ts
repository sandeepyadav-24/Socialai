import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "ef2590b03461d5b15173",
      clientSecret: "5de9d557424515460102617a905b6c78756a6362",
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
