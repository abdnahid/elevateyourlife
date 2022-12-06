import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "../../../config/dbConnect";
import clientPromise from "./lib/mongodb";
import Student from "../../../models/studentModels";
import User from "../../../models/userModels";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "yoga",
  }),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ account, profile }) {
      console.log(profile, account);
      dbConnect();
      const student = await Student.findOne({ email: profile.email });
      if (student) {
        return true;
      }

      const { _id } = await User.findOne({ email: profile.email });
      const newStudent = new Student({
        name: profile.name,
        email: profile.email,
        loginMethod: account.provider,
        userName: profile.email.split("@")[0],
        photo: profile.image,
        userId: _id,
      });
      await newStudent.save();
      return true;
    },
  },
});
