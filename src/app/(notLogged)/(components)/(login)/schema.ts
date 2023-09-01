import { z } from 'zod';

export const Schema = z.object({
  email: z.string({
    required_error: 'Email is required',
  }),
  password: z.string({
    required_error: 'Password is required',
  }),
});

export type AuthFormSchema = z.infer<typeof Schema>;
