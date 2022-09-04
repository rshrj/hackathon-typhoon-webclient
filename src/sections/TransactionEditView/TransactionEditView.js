// react
import { useState } from 'react';
// @mui
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
// icons
import { Icon } from '@iconify-icon/react';

export default function TransactionEditView({ edit = false, current }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [age, setAge] = useState('EXPENSE');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Button
        variant='outlined'
        onClick={handleClickOpen}
        startIcon={<Icon icon='akar-icons:circle-plus' />}>
        Add Transaction
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            p: 2,
            px: 3,
            width: 300,
            display: 'flex',
            alignItems: 'center'
          }}>
          <Typography variant='h6' sx={{ mr: 2 }}>
            New
          </Typography>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={age}
            label='Age'
            onChange={handleChange}
            variant='outlined'
            defaultValue='EXPENSE'
            autoWidth>
            <MenuItem value={'EXPENSE'}>
              <Typography variant='h6' sx={{ mr: 2 }}>
                Expense
              </Typography>
            </MenuItem>
            <MenuItem value={'INCOME'}>
              <Typography variant='h6' sx={{ mr: 2 }}>
                Income
              </Typography>
            </MenuItem>
            <MenuItem value={'TRANSFER'}>
              <Typography variant='h6' sx={{ mr: 2 }}>
                Transfer
              </Typography>
            </MenuItem>
          </Select>
        </Box>

        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
