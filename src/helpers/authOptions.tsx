import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.password || !credentials.email) {
          console.error("Email or Password is missing");
          return null;
        }

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );
          
          if (!res?.ok) {
            console.error("User Login Failed", await res.text());
            return null;
          }

          const result = await res.json();
          console.log("✅ Backend response JSON:", result);

          const user = result?.data;

          if (user?.id) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.picture || "",
            };
          }
          console.error("❌ No user in response");
          return null;
        } catch (error) {
          console.error("❌ Authorize error:", error);
          return null;
        }
      },
    }),
  ],
  
  callbacks: {
    async signIn({ user, account }) {
      // ✅ Handle Google OAuth
      if (account?.provider === "google") {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/auth/google`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: user.name,
                email: user.email,
                picture: user.image,
                phone: "",
              }),
            }
          );

          if (!res.ok) {
            console.error("Failed to save Google user to DB");
            return false;
          }

          const result = await res.json();
          
          // ✅ Store the backend user ID
          if (result?.data?.id) {
            user.id = result.data.id;
          }

          return true;
        } catch (error) {
          console.error("Google signIn error:", error);
          return false;
        }
      }
      
      return true;
    },

    async jwt({ token, user }) {
      // ✅ On first sign in, add user info to token
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },

    async session({ session, token }) {
      // ✅ Add user info to session
      if (session?.user && token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.picture as string;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  secret: process.env.AUTH_SECRET,
  
  pages: {
    signIn: "/login",
    error: "/login",
  },

  debug: process.env.NODE_ENV === "development",
};