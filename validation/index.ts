import * as z from "zod";

export const SignupSchema = z
  .object({
    fullName: z.string().min(1, {
      message: "Full name is required",
    }),
    email: z.string().email({
      message: "Email is required",
    }),
    phoneno: z.string().min(1, {
      message: "Phone no is required",
    }),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the Terms of Service and Privacy Policy",
    }),
    fieldOfInterest: z.string().nullable(),
    password: z
      .string()
      .min(8, {
        message: "Minimum of 8 characters required",
      })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W_]{8,}$/,
        {
          message:
            "Password must contain at least one uppercase, one lowercase, one number, and one special character",
        }
      ),
    confirmPassword: z.string().min(8, {
      message: "Minimum of 8 characters required",
    }),
  })
  .refine(
    (data) => {
      if (data.confirmPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  )
  .refine(
    (data) => {
      if (data.password && !data.confirmPassword) {
        return false;
      }

      return true;
    },
    {
      message: "You need to confirm your password!",
      path: ["confirmPassword"],
    }
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
