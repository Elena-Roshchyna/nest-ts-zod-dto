import { z } from 'zod';

export const CreateCarSchema = z.object({
  brand: z.string().min(2, 'Brand must be at least 2 characters'),
  model: z.string().min(1, 'Model must be at least 1 character'),
  year: z.number().int().min(2000, 'Year must be 2000 or later'),
  price: z.number().positive('Price must be a positive number'),
});

export type CreateCarDto = z.infer<typeof CreateCarSchema>;
