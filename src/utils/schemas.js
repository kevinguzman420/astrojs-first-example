import { z } from "zod";

export const userSchema = z
  .object({
    name: z.string().min(1, { message: "Ingrese un nombre" }),
    job: z.string().min(1, { message: "Ingrese un trabajo" }),
    email: z
      .string()
      .min(1, { message: "Ingrese un email" })
      .email({ message: "Ingrese un email válido" }),
  })
  .required();
