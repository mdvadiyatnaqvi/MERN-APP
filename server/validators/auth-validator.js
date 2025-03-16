const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required!" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long!" })
    .max(50, { message: "Name must be at most 50 characters long!" }),
  email: z
    .string({ required_error: "Email is required!" })
    .trim()
    .min(3, { message: "Email must be at least 3 characters long!" })
    .max(50, { message: "Email must be at most 50 characters long!" })
    .email({ message: "Invalid email address!" }),
  phone: z
    .string({ required_error: "Phone is required!" })
    .trim()
    .min(10, { message: "Phone must be at least 10 characters long!" })
    .max(15, { message: "Phone must be at most 15 characters long!" }),
  password: z
    .string({ required_error: "Password is required!" })
    .tri()
    .min(8, { message: "Phone must be at most 8 characters long!" })
    .max(30, { message: "Phone must be at most 30 characters long!" }),
});

module.exports = signupSchema;
