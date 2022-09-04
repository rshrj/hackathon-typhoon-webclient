// react
import { useState } from 'react';
// @mui
import { Card, CardContent, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
// @sections
import TransactionsTable from './TransactionsTable';
import DebtsTable from './DebtsTable';
import MembersTable from './MembersTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function GroupTable() {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <Card variant='outlined' sx={{ mt: 10 }}>
      <CardContent>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={tab}
              onChange={handleChange}
              aria-label='basic tabs example'>
              <Tab label='Transactions' />
              <Tab label='Debts' />
              <Tab label='Members' />
            </Tabs>
          </Box>
          <TabPanel value={tab} index={0}>
            <TransactionsTable />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <DebtsTable />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <MembersTable />
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
}
