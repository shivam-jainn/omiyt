import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../../../prisma/db"

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    advanced:{
        useSecureCookies: true
    },
    emailAndPassword: {  
        enabled: false
    },
    socialProviders: { 
       google: {
         prompt : "select_account",
         clientId: process.env.GOOGLE_CLIENT_ID as string,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
         scope: ["profile", "email","openid","https://www.googleapis.com/auth/youtube"],
       }
    }, 
});