import React from 'react'
import DataTable from 'react-data-table-component'

const DetailReport = ({Customers}) => {

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
    }
  ]
  
  return (
    <div>
      <DataTable 
        columns={columns}
        data={Customers}
        selectableRows
      >  
      </DataTable>
    </div>
  )
}

export default DetailReport
