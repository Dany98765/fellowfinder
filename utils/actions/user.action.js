"use server";

import bcrypt from "bcrypt";
import dbConnect from "../mongoose";
import User from "@/database/user.model";
import { signIn } from "next-auth/react";

export async function createUser(allFormData) {
  const {
    name,
    email,
    password,
    country,
    phoneNumber,
    expertiseFields,
    otherField,
    money,
    selectedButton,
    desc,
  } = allFormData;

  await dbConnect();

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let fields = expertiseFields || [];
    if (otherField?.length > 0) {
      fields.push(otherField);
    }

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      country,
      phoneNumber,
      fields,
      role: selectedButton,
      desc,
      ...(selectedButton === "funder" && { money }),
    });
    console.log(">>>>>>>>>>>>>>>>>>>")
    return {
      success: true,
      data: newUser,
    };
  } catch (error) {
    return { success: false, message: error.message };
  } finally{
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  }
}
