import z from "zod";

export const loginSchema = z.object({
  username: z.string().min(6, "Invalid username"),
  password: z.string().min(6, "Min 6 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const initialValue = { email: "", password: "" };
