import React, { useState } from 'react'
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { usersRows } from '../../../BaordData';
import { Link } from 'react-router-dom';
import { Delete } from "@material-ui/icons"

export default function UserList() {
    const [data, setData] = useState(usersRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'password', headerName: 'Password', width: 130, type: 'password' },
        { field: 'role', headerName: 'Role', width: 130 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button className='usersListEdit'> Modifier </button>
                        </Link>
                        <Delete className='usersListDel' onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        },
        
    ];

    

   

    return (
        <div className='userList'>
            <DataGrid
                rows={usersRows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
