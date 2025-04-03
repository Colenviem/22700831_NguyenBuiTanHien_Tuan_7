import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import edit from '../assets/images/create.png'
import Pagination from "@mui/material/Pagination";

const DetailReport = ({Customers}) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const columns = [
    {
      name: "CUSTOMER NAME",
      // selector: row => row.customerName,
      cell: (row) => (
        <div className="flex items-center gap-3">
          <img src={row.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <span>{row.customerName}</span>
        </div>
      )
    },
    {
      name: "COMPANY",
      selector: row => row.companyName
    },
    {
      name: "ORDER VALUE",
      selector: row => row.orderValue
    },
    {
      name: "ORDER DATE",
      selector: row => row.orderDate
    },
    {
      name: "STATUS",
      selector: row => row.status
    },
    {
      cell: () => (
        <button>
          <img src={edit} alt={edit} />
        </button>
      )
    }
  ]

  const paginatedData = Customers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  
  return (
    <div>
      <DataTable 
        columns={columns}
        data={paginatedData}
        selectableRows
        highlightOnHover
        responsive
      >  
      </DataTable>

      
      <div className='flex justify-between items-center mt-5'>
        <p><span>{Customers.length}</span> result</p>

        <Pagination
          count={Math.ceil(Customers.length / rowsPerPage)}
          page={page}
          onChange={handleChange}
        ></Pagination>
      </div>
    </div>
  )
}

export default DetailReport
