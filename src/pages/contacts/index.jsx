import React from 'react'
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material'
import Header from '../../components/global/Header'
import { token } from '../../theme/theme';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockData'

const Contacts = () => {

    const theme = useTheme();
    const colors = token(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar Id", flex: 0.5 },
        { field: "name", headerName: "Name", flex: 1, cellClassName: 'name-column--cell' },
        { field: "age", headerName: "Age", type: "number", flex: 1, headerAlign: 'left', align: "left" },
        { field: "phone", headerName: "Phone", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "address", headerName: "Address", flex: 1 },
        { field: "city", headerName: "city", flex: 1 },
        { field: "zipCode", headerName: "Zip Code", flex: 1 },
    ]

    return (
        <Box m='20px'>
            <Header title="CONTACT" subtitle={'List of Contacts for Future Reference'} />
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
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.gray[100]} !important`,
                },
            }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    slots={{
                        toolbar: GridToolbar,
                    }}
                />
            </Box>
        </Box>
    )
}

export default Contacts