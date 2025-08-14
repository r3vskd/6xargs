import { ActionFunction, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { z } from "zod";
import { db } from "~/utils/db.server";
/*import { PrismaClient } from '@prisma/client'; */

// Esquema de validación con Zod
const schema = z.object({
  email: z.string().email("Invalid email"),
  nickname: z.string().min(3, "Nickname too short"),
  password: z.string().min(6, "Password too short"),
});

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const data = {
    email: formData.get("email"),
    nickname: formData.get("nickname"),
    password: formData.get("password"),
  };

  const result = schema.safeParse(data);

  if (!result.success) {
    return json({ errors: result.error.flatten().fieldErrors });
  }

  const { email, nickname, password } = result.data;

  // Aquí deberías cifrar la contraseña con bcrypt antes de guardar
  // const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.hackers.create({
      data: {
        email,
        nickname,
        password, // 🔒 en pruebas puedes dejarla plana, pero NO en producción
      },
    });
    return json({ success: true });
  } catch (error) {
    return json({ errors: { email: ["Email already in use or DB error"] } });
  }
};

export default function RegisterPage() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="register-page">
      <h1>Register as a Hacker</h1>
      <Form method="post">
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        {actionData?.errors?.email && <p>{actionData.errors.email[0]}</p>}

        <label>
          Nickname:
          <input type="text" name="nickname" required />
        </label>
        {actionData?.errors?.nickname && <p>{actionData.errors.nickname[0]}</p>}

        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        {actionData?.errors?.password && <p>{actionData.errors.password[0]}</p>}

        <button type="submit">Register</button>
      </Form>

      {actionData?.success && <p>🎉 Registration successful!</p>}
    </div>
  );
}
