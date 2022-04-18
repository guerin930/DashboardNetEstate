import React, { useState } from 'react'
import "./featuresList.css"
import { DataGrid } from "@material-ui/data-grid"
import { Link } from 'react-router-dom';
import { Delete } from "@material-ui/icons"
import { featuresRows } from '../../../BaordData';

export default function FeaturesList() {
    const [data, setData] = useState(featuresRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'libelle', headerName: 'Libéllé', width: 130 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/features/"+params.row.id}>
                            <button className='featuresListEdit'> Modifier </button>
                        </Link>
                        <Delete className='featuresListDel' onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        },
    ];

  return (
    <div className='featuresList'>
        <DataGrid
                rows={featuresRows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[1]}
                checkboxSelection
            />
    </div>
  )
}
