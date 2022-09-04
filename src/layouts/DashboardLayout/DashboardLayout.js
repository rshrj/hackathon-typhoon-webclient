// react
import { useState } from 'react';
// @mui
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import { Box, Container } from '@mui/system';
// react-router-dom
import { Outlet } from 'react-router-dom';
// icons
import { Icon } from '@iconify-icon/react';

const drawerWidth = 240;

export default function DashboardLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const isPhone = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mx: 2,
          mt: 2
        }}>
        <Typography sx={{ fontWeight: 'bold' }}>Groups</Typography>
        <IconButton>
          <Icon icon='akar-icons:circle-plus' />
        </IconButton>
      </Box>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <Icon icon='mdi-light:alert' />
                ) : (
                  <Icon icon='mdi-light:alert' />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Report'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <Icon icon='mdi-light:alert' />
                ) : (
                  <Icon icon='mdi-light:alert' />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}>
        <Container maxWidth={!isPhone ? 'xl' : false}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, visibility: { sm: 'hidden' } }}>
              <Icon icon='fa6-solid:bars-staggered' />
            </IconButton>
            <Typography variant='h6' noWrap component='div' sx={{}}>
              Logo
            </Typography>
            <div>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={() => {}}
                color='inherit'>
                <Icon icon='bxs:user-circle' />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}>
        <Toolbar />
        <Container maxWidth={!isPhone ? 'xl' : false}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
