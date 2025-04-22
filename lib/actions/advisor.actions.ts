'use server';

// Types
import {
    AdvisorListSchema,
    AdvisorAvailabilityStatusSchema,
    type Advisor,
    type AdvisorAvailabilityStatus,
} from '@/lib/types';

export async function fetchAdvisorList(): Promise<Advisor[]> {
    try {
        const response = await fetch(`${process.env.ADVISOR_BASE_URL}/advisor-listings`, {
            next: { revalidate: 300 }
        });

        if (!response.ok) {
            throw new Error(`API fetch failed with status ${response.status}`);
        }

        const data = await response.json();
        const validationResult = AdvisorListSchema.safeParse(data);
        
        if (!validationResult.success) {
            throw new Error('Failed to validate advisor data from API.');
        }

        return validationResult.data.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Server Action failed: ${error.message}`);
        }
        throw new Error("An unknown error occurred in the server action.");
    }
}

export async function fetchAdvisorAvailabilityStatusById(id: number): Promise<AdvisorAvailabilityStatus> {
    try {
        const response = await fetch(`${process.env.ADVISOR_BASE_URL}/advisor-availability?id=${id}`, {
            cache: 'no-store'
        });

        console.log(response);

        if (!response.ok) {
            throw new Error(`API fetch failed with status ${response.status}`);
        }

        const data = await response.json();
        const validationResult = AdvisorAvailabilityStatusSchema.safeParse(data);
        
        if (!validationResult.success) {
            throw new Error('Failed to validate advisor data from API.');
        }

        return validationResult.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Server Action failed: ${error.message}`);
        }
        throw new Error("An unknown error occurred in the server action.");
    }
}
