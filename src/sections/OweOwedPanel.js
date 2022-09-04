// @mui
import {
  Avatar,
  AvatarGroup,
  Card,
  CardContent,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';
import { Box } from '@mui/system';
// icons
import { Icon } from '@iconify-icon/react';

export default function OweOwedPanel() {
  const isPhone = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Stack direction={isPhone ? 'column' : 'row'} spacing={4}>
      <Card variant='outlined'>
        <>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              You owe
            </Typography>
            <Typography variant='h3' sx={{ color: 'error.main', py: 1 }}>
              $195
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              to others
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2
              }}>
              <AvatarGroup>
                <Avatar
                  alt='Remy Sharp'
                  src='https://picsum.photos/300/300'
                  sx={{ width: 30, height: 30 }}
                />
              </AvatarGroup>
              <Icon
                icon='bi:arrow-right'
                style={{
                  fontSize: '2em',
                  marginLeft: '10px',
                  marginRight: '10px'
                }}
              />
              <AvatarGroup max={3}>
                <Avatar
                  alt='Remy Sharp'
                  src='https://picsum.photos/300/300'
                  sx={{ width: 30, height: 30 }}
                />
                <Avatar
                  alt='Travis Howard'
                  src='https://picsum.photos/300/300'
                  sx={{ width: 30, height: 30 }}
                />
                <Avatar
                  alt='Agnes Walker'
                  src='https://picsum.photos/300/300'
                  sx={{ width: 30, height: 30 }}
                />
                <Avatar
                  alt='Trevor Henderson'
                  src='https://picsum.photos/300/300'
                  sx={{ width: 30, height: 30 }}
                />
              </AvatarGroup>
            </Box>
          </CardContent>
        </>
      </Card>
      <Card variant='outlined'>
        <>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              Others owe
            </Typography>
            <Typography variant='h3' sx={{ color: 'success.main', py: 1 }}>
              $741
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              to you
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2
              }}>
              <AvatarGroup max={3}>
                <Avatar
                  alt='Remy Sharp'
                  src='https://picsum.photos/300/300'
                  sx={{ width: 30, height: 30 }}
                />
                <Avatar
                  alt='Travis Howard'
                  src='https://picsum.photos/300/300'
                  sx={{ width: 30, height: 30 }}
                />
                <Avatar
                  alt='Agnes Walker'
                  src='https://picsum.photos/300/300'
                  sx={{ width: 30, height: 30 }}
                />
                <Avatar
                  alt='Trevor Henderson'
                  src='https://picsum.photos/300/300'
                  sx={{ width: 30, height: 30 }}
                />
              </AvatarGroup>
              <Icon
                icon='bi:arrow-right'
                style={{
                  fontSize: '2em',
                  marginLeft: '10px',
                  marginRight: '10px'
                }}
              />
              <AvatarGroup>
                <Avatar
                  alt='Remy Sharp'
                  src='https://picsum.photos/300/300'
                  sx={{ width: 30, height: 30 }}
                />
              </AvatarGroup>
            </Box>
          </CardContent>
        </>
      </Card>
    </Stack>
  );
}
