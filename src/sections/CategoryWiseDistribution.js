import { Card, CardContent, Typography, Box } from '@mui/material';
import { JLinearProgress } from '../components/JLinearProgress';

const summary = {
  medicines: {
    name: 'Medicines',
    amount: 124
  },
  investment: {
    name: 'Investment',
    amount: 142
  },
  entertainment: {
    name: 'Entertainment',
    amount: 415
  }
};

export default function CategoryWiseDistribution() {
  return (
    <Card variant='outlined' sx={{ p: 1 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontWeight: 'bold', py: 2 }}>
          Summary of expenses
        </Typography>
        {Object.keys(summary).map((category) => (
          <Box key={category} sx={{ mb: 1 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              <Typography variant='subtitle2'>
                {summary[category].name}
              </Typography>
              <Typography variant='button' color='text.secondary'>
                ${summary[category].amount}
              </Typography>
            </Box>
            <Box sx={{ minWidth: 200 }}>
              <JLinearProgress
                progress={
                  (summary[category].amount * 100) /
                  Object.keys(summary)
                    .map((c) => summary[c].amount)
                    .reduce((a, b) => a + b, 0)
                }
              />
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
