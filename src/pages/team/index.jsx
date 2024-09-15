import React from 'react'
import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material'
import Header from '../../components/global/Header'
import { token } from '../../theme/theme';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData'
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';

const Team = () => {

    const theme = useTheme();
    const colors = token(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: 'name-column--cell' },
        { field: "age", headerName: "Age", type: "number", flex: 1, headerAlign: 'left', align: "left" },
        { field: "phone", headerName: "Phone", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        {
            field: "access",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box
                            width={"60%"}
                            m={"0 auto"}
                            p="5px"
                            display={'flex'}
                            justifyContent={'center'}
                            backgroundColor={
                                access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]
                            }
                            borderRadius={'4px'}
                        >
                            {access === 'admin' && <AdminPanelSettingsOutlined />}
                            {access === 'manager' && <SecurityOutlined />}
                            {access === 'user' && <LockOpenOutlined />}
                            <Typography color={colors.gray[100]} sx={{ ml: '5px' }}>
                                {access}
                            </Typography>
                        </Box>
                    </Box>
                )
            }
        },
    ]

    return (
        <Box m='20px'>
            <Header title="TEAM" subtitle={'Manage the Team Member'} />
            <Box m='40px  0 0 0' height={'75vh'} sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-container--top": {
                    backgroundColor: `${colors.blueAccent[700]} !important`,
                    borderBottom: "none",
                },
                "& .css-18alugn-MuiDataGrid-root": {
                    backgroundColor: `${colors.blueAccent[700]} !important`,
                    borderBottom: "none",
                },
                "& .MuiDataGrid-container--top [role=row] ": {
                    backgroundColor: `${colors.blueAccent[700]} !important`,
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },
            }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Team