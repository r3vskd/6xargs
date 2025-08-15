import { db } from "~/utils/db.server";
import bcrypt from "bcryptjs";
import { createUserSession } from "~/utils/db.server";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return { error: "All fields are required" };
  }

  const user = await db.hacker.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return { error: "Invalid credentials" };
  }

  return createUserSession(user.id, "/dashboard");
}
