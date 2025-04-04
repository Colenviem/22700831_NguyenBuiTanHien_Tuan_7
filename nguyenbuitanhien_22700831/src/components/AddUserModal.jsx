import React from 'react'

const AddUserModal = ({isOpen,onClose}) => {

    if (!isOpen) return null; 
  return (
    <div className='modal'>
      <div className='modal-overlay'>
        <div><h1>Add user</h1></div>

        <div>
          <h2>Customer name</h2>
          <input type="text" />
        </div>

        <div>
          <h2>Company name</h2>
          <input type="text" />
        </div>

        <div>
          <h2>Order value</h2>
          <input type="text" />
        </div>

        <div>
          <h2>Order date</h2>
          <input type="date" />
        </div>

        <div>
          <h2>Status</h2>
          <select>
            <option value="New">New</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div className='flex justify-end mt-4'>
          <button type='button' className='px-4 py-2 border rounded' onClick={onClose}>Add user</button>
        </div>
      </div>
    </div>
  )
}

export default AddUserModal
