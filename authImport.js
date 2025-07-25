import { getServerSession } from "next-auth";
import authOptions from "@/auth"; // your above config file

export async function auth() {
  return await getServerSession(authOptions);
}
