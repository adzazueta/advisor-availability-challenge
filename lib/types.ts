import { z } from 'zod';

export const AdvisorSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(1),
    profilePictureUrl: z.string().url(),
    price: z.string(),
    'call-availability': z.number().int().min(0).max(1),
    'chat-availability': z.number().int().min(0).max(1),
});

export const AdvisorListSchema = z.object({
    data: z.array(AdvisorSchema)
});

export const AdvisorAvailabilityStatusSchema = z.object({
    id: z.number().int().positive(),
    'call-availability': z.number().int().min(0).max(1),
    'chat-availability': z.number().int().min(0).max(1),
});

export type Advisor = z.infer<typeof AdvisorSchema>;
export type AdvisorList = z.infer<typeof AdvisorListSchema>;
export type AdvisorAvailabilityStatus = z.infer<typeof AdvisorAvailabilityStatusSchema>;
