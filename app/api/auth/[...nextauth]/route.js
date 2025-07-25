import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { connectToDB } from "@/lib/db";
// import { findUser, createUser } from "@/lib/userService";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,

//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         await connectToDB();

//         // 👇 Your own validation logic
//         const user = await findUser(credentials.email, credentials.password);
//         if (!user) return null;

//         return { id: user._id, email: user.email, name: user.name };
//       }
//     })
//   ],

//   session: {
//     strategy: "jwt"
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       session.user.id = token.id;
//       return session;
//     }
//   },

//   // ✅ This is the key part — runs after successful sign in
//   events: {
//     async signIn({ user }) {
//       await connectToDB();

//       const exists = await findUser(user.email);
//       if (!exists) {
//         await createUser({ name: user.name, email: user.email });
//       }
//     }
//   }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
