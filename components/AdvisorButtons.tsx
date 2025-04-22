'use client';

// Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';

// Hooks
import { useState, useEffect } from 'react';
import useSWR from 'swr';

// Actions
import { fetchAdvisorAvailabilityStatusById } from '@/lib/actions/advisor.actions';

// Types
import { type AdvisorAvailabilityStatus } from '@/lib/types';

interface AdvisorButtonsProps {
    advisorId: number;
    initialCallAvailability: number;
    initialChatAvailability: number;
}

export default function AdvisorButtons({ advisorId, initialCallAvailability, initialChatAvailability }: AdvisorButtonsProps) {
    const [isPollingFetchEnabled, setIsPollingFetchEnabled] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPollingFetchEnabled(true);
        }, 30000);

        return () => clearTimeout(timer);
    }, []);

    const initialData = {
        id: advisorId,
        'call-availability': initialCallAvailability,
        'chat-availability': initialChatAvailability,
    };

    const availabilityStatusByIdFetcher = async () => {
        if (!isPollingFetchEnabled) return initialData;
        return await fetchAdvisorAvailabilityStatusById(advisorId)
    };

    const { data, error } = useSWR<AdvisorAvailabilityStatus | null>(
        [`advisor-availability-${advisorId}`],
        availabilityStatusByIdFetcher,
        {
            refreshInterval: 30000,
            dedupingInterval: 15000,
            revalidateOnFocus: false,
        }
    );

    const isCallAvailable = data ? !!data['call-availability'] : !!initialCallAvailability;
    const isChatAvailable = data ? !!data['chat-availability'] : !!initialChatAvailability;

    function handleCallClick() {
        if (isCallAvailable) {
            alert(`Calling to the advisor ${advisorId}`);
        }
    }

    function handleChatClick() {
        if (isChatAvailable) {
            alert(`Writting to the advisor ${advisorId}`);
        }
    }

    if (error) {
        console.log({ error });
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button
                sx={{ color: 'white', minWidth: '135px' }}
                variant="contained"
                color={isCallAvailable ? 'primary' : 'secondary'}
                fullWidth
                startIcon={<CallIcon />}
                disabled={!isCallAvailable}
                onClick={handleCallClick}
            >
                {isCallAvailable ? 'Call now' : 'Call later'}
            </Button>
            <Button
                sx={{ color: 'white', minWidth: '135px' }}
                variant="contained"
                color={isChatAvailable ? 'primary' : 'secondary'}
                fullWidth
                startIcon={<ChatIcon />}
                disabled={!isChatAvailable}
                onClick={handleChatClick}
            >
                {isChatAvailable ? 'Chat now' : 'Chat later'}
            </Button>
        </Box>
    );
}
