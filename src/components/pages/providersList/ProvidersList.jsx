import React, { useState } from 'react';
import { DataGrid } from "@material-ui/data-grid";
import "./providersList.css";
import { Delete } from "@material-ui/icons"
import { providersRows } from "../../../BaordData";
import { Link } from 'react-router-dom';

export default function ProvidersList() {

    const [data, setData] = useState(providersRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
                return (
                    <div className='providersListProviders'>
                        <img src={params.row.avatar} alt='' className='providersListImg' />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'firstName', headerName: 'First name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'password', headerName: 'Password', width: 90 },
        { field: 'tel', headerName: 'Tel', width: 120, type: "number" },
        { field: 'cni', headerName: 'CNI', width: 130, type: "number" },
        { field: 'role', headerName: 'Role', width: 130 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/provider/"+params.row.id}>
                            <button className='providersListEdit'> Modifier </button>
                        </Link>
                        <Delete className='providersListDel' onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        },

    ];


    return (
        <div className='providersList'>
            <DataGrid
                rows={providersRows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[8]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
