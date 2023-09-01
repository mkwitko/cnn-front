import { z } from 'zod';

export const Schema = z.object({
  email: z.string({
    required_error: 'Email is required',
  }),
  password: z.string({
    required_error: 'Password is required',
  }),
  name: z.string({
    required_error: 'Name is required',
  }),
  confirmPassword: z.string({
    required_error: 'Confirm Password is required',
  }),
});

export type AuthFormSchema = z.infer<typeof Schema>;
