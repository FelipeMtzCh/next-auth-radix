import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "Email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials: any, req) {
        const { email, password } = credentials;

        const userFound = await prisma.user.findUnique({ where: { email } });

        if (!userFound) throw new Error("Inavlid email or password");

        const isPasswordValid = await bcrypt.compare(
          password,
          userFound.password
        );

        if (!isPasswordValid) throw new Error("Inavlid email or password");

        console.log(userFound);

        return {
          id: userFound.id + ``,
          name: userFound.username,
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
