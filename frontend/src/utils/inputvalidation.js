import { z } from "zod";

export const register_user_schema = z

    .object({
        email: z
            .string()
            .email("Invalid email address"),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .refine((val) => /[A-Z]/.test(val), {
                message: "Must include an uppercase letter",
            })
            .refine((val) => /[0-9]/.test(val), {
                message: "Must include a number",
            })
            .refine((val) => /[!@#$%^&*]/.test(val), {
                message: "Must include a special character",
            }),
        confirm_password: z
            .string()
    })

    .refine((data) => data.password === data.confirm_password, {
        message: "Password don't match",
        path: ["confirm_password"],
    });

export const login_schema = z

    .object({
        email: z
            .string()
            .email(),
        password: z
            .string()
    })