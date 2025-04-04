import React, { useState, useMemo, useContext } from 'react';
import DataTable from 'react-data-table-component';
import edit from '../assets/images/create.png';
import Pagination from '@mui/material/Pagination';
import addUser from '../assets/images/Move up.png';
import exportIcon from '../assets/images/Download.png';
import detailedReport from '../assets/images/File text 1.png';
import EditModal from './EditModal';
import { CustomersContext } from '../App';
import AddUserModal from './AddUserModal';

const DetailReport = () => {
  const [open, setOpen] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const rowsPerPage = 6;

  const { customers, setCustomers } = useContext(CustomersContext); // Dùng context

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleEdit = (row) => {
    setOpen(true);
    setSelectedRow(row);
  };

  const handleUpdate = (updatedCustomer) => {
    // Chỉ cập nhật phần tử tương ứng
    const updatedList = customers.map((cust) =>
      cust.id === updatedCustomer.id ? updatedCustomer : cust
    );
    setCustomers(updatedList); // Giao diện sẽ tự render lại
  };
  
  // Memoize dữ liệu phân trang để tránh tính toán lại mỗi khi render
  const paginatedData = useMemo(() => {
    return customers.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  }, [customers, page]); // Đảm bảo chỉ tính toán lại khi `customers` thay đổi
  


  const columns = [
    {
      name: 'CUSTOMER NAME',
      cell: (row) => (
        <div className="flex items-center gap-3">
          <img src={row.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <span>{row.customerName}</span>
        </div>
      ),
    },
    {
      name: 'COMPANY',
      selector: (row) => row.companyName,
    },
    {
      name: 'ORDER VALUE',
      selector: (row) => row.orderValue,
    },
    {
      name: 'ORDER DATE',
      selector: (row) => row.orderDate,
    },
    {
      name: 'STATUS',
      selector: (row) => row.status,
    },
    {
      cell: (row) => (
        <button type='button' onClick={() => handleEdit(row)}>
          <img src={edit} alt="edit" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={detailedReport} alt="" />
          <h1 className="font-poppins text-xl leading-[30px] font-bold text-[#171A1FFF]">Detailed report</h1>
        </div>

        <div className="flex gap-3.5">
          <button className="btn btn-add-user" onClick={() => setOpenAddUser(true)}>
            <img src={addUser} alt="" />
            Add user
          </button>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={paginatedData}
        selectableRows
        highlightOnHover
        responsive
      />

      <div className="flex justify-between items-center mt-5">
        <p>
          <span>{customers.length}</span> result
        </p>

        <Pagination
          count={Math.ceil(customers.length / rowsPerPage)}
          page={page}
          onChange={handleChange}
        />
      </div>

      <EditModal 
        isOpen={open} 
        onClose={() => setOpen(false)} 
        selectedRow={selectedRow} 
        onUpdate={handleUpdate} 
      />

      <AddUserModal
        isOpen={openAddUser}
        onClose={() => setOpenAddUser(false)}
      />
    </div>
  );
};

export default DetailReport;
