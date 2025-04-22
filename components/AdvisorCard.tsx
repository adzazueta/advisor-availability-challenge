// Components
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AdvisorButtons from '@/components/AdvisorButtons';

// Types
import { type Advisor } from '@/lib/types';

interface AdvisorCardProps {
    advisor: Advisor;
}

export default function AdvisorCard({ advisor }: AdvisorCardProps) {
    const [rate, time] = advisor.price.split('/');

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                <Avatar
                    sx={{ width: 100, height: 100 }}
                    src={advisor.profilePictureUrl}
                    alt={advisor.name}
                />
                <Typography variant="subtitle1" component="p" color="primary">{advisor.name}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }}>
                <Typography variant="subtitle1" component="p">
                    {rate}
                    <Typography variant="body2" component="span">{`/${time}`}</Typography>
                </Typography>
                <AdvisorButtons
                    advisorId={advisor.id}
                    initialCallAvailability={advisor['call-availability']}
                    initialChatAvailability={advisor['chat-availability']}
                />
            </Box>
        </Box>
    );
}