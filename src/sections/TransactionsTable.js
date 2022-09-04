// react
import { useMemo } from 'react';
// @mui
import { Box } from '@mui/system';
import { Avatar, AvatarGroup, Typography } from '@mui/material';
// @mui/x-data-grid
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
// icons
import { Icon } from '@iconify-icon/react';
// date-fns
import { format } from 'date-fns';
// components
import { NoRowsOverlay } from '../components/NoRowsOverlay';

const data = [
  {
    id: '1',
    category: 'Medical',
    description: 'Paracetamol',
    amount: '2.99',
    by: 'fjald',
    for: ['fasd', 'asd', 'gasd'],
    createdAt: new Date()
  }
];

export default function TransactionsTable() {
  const columns = useMemo(() => {
    const handleEdit = (id) => (e) => {
      // navigate(`/dashboard/edit/${id}`);
    };
    const handleDelete = (id) => (e) => {
      // openDialogBoxHandler(id);
    };

    const fieldCategory = {
      field: 'category',
      headerName: 'Category',
      description: 'Transaction category',
      type: 'string',
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center'
          }}>
          <Icon icon='ant-design:plus-square-outlined' />
          <Typography
            color='text.primary'
            variant='body1'
            sx={{ fontWeight: 'bold', marginLeft: 2 }}>
            {params.value}
          </Typography>
        </Box>
      )
    };

    const fieldBy = {
      field: 'by',
      headerName: 'By',
      description: 'Transacted by user',
      flex: 0.5,
      type: 'string',
      renderCell: (params) =>
        params.value !== null ? (
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center'
            }}>
            <AvatarGroup>
              <Avatar alt='Remy Sharp' src='https://picsum.photos/300/300' />
            </AvatarGroup>
          </Box>
        ) : (
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ marginLeft: 3 }}>
            Deleted
          </Typography>
        )
    };

    const fieldCreatedAt = {
      field: 'createdAt',
      headerName: 'At',
      description: 'Time of transaction',
      flex: 0.6,
      renderCell: (params) => (
        <Typography>{format(new Date(params.value), 'MMM dd, yy')}</Typography>
      )
    };

    const fieldDescription = {
      field: 'description',
      header: 'Description',
      description: 'Description of the transaction',
      flex: 1,
      renderCell: (params) => (
        <Typography variant='caption' color='text.secondary'>
          {params.value}
        </Typography>
      )
    };

    const fieldAmount = {
      field: 'amount',
      header: 'Amount',
      description: 'Amount of the transaction',
      flex: 0.8,
      renderCell: (params) => (
        <Typography variant='button'>${params.value}</Typography>
      )
    };

    const fieldFor = {
      field: 'for',
      headerName: 'For',
      description: 'Transacted for users',
      flex: 1,
      type: 'array',
      renderCell: (params) =>
        params.value !== null && params.value.length > 0 ? (
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center'
            }}>
            <AvatarGroup max={3}>
              <Avatar alt='Remy Sharp' src='https://picsum.photos/300/300' />
              <Avatar alt='Remy Sharp' src='https://picsum.photos/300/300' />
              <Avatar alt='Remy Sharp' src='https://picsum.photos/300/300' />
              <Avatar alt='Remy Sharp' src='https://picsum.photos/300/300' />
            </AvatarGroup>
          </Box>
        ) : (
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ marginLeft: 3 }}>
            Error
          </Typography>
        )
    };

    const fieldActions = {
      field: 'actions',
      type: 'actions',
      flex: 1,
      headerName: 'Actions',
      description: 'Edit, Delete buttons',
      getActions: (params) => {
        const actionEdit = (
          <GridActionsCellItem
            icon={<Icon icon='fa-regular:edit' />}
            label='Edit'
            onClick={handleEdit(params.id)}
            showInMenu
          />
        );
        const actionDelete = (
          <GridActionsCellItem
            icon={<Icon icon='fa-regular:trash-alt' />}
            label='Delete'
            color='error'
            showInMenu
            onClick={handleDelete(params.id)}
          />
        );

        return [actionEdit, actionDelete];
      }
    };

    return [
      fieldCategory,
      fieldDescription,
      fieldAmount,
      fieldBy,
      fieldFor,
      fieldCreatedAt,
      fieldActions
    ];
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        height: 600,
        width: { xs: '100vw', sm: '600px', md: '780px' }
        // overflowX: { xs: 'scroll', md: 'scroll' }
      }}>
      <Box sx={{ flexGrow: 1 }}>
        <DataGrid
          columns={columns}
          rows={data}
          components={{
            NoRowsOverlay
          }}
          sx={{
            '& .MuiDataGrid-iconSeparator': {
              visibility: 'hidden'
            },
            border: 'none',
            width: 800
          }}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50, 100]}
          pagination
        />
      </Box>
    </Box>
  );
}
