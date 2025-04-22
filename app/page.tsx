// Components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AdvisorCard from '@/components/AdvisorCard';

// Actions
import { fetchAdvisorList } from '@/lib/actions/advisor.actions';

export default async function Home() {
  const advisors = await fetchAdvisorList();

  return (
    <Container maxWidth="lg" sx={{ py: 4, px: 2 }}>
      {advisors.length > 0 
        ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }} className="flex flex-col">
            {advisors.map((advisor) => (
              <AdvisorCard key={`${advisor.id}-${advisor.name}`} advisor={advisor} />
            ))}
          </Box>
        ) 
        : (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body1" component="p">No advisors available at the moment. Please check back later.</Typography>
          </Box>
        )
      }
    </Container>
  );
}
