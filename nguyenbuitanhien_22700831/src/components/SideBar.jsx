import React from 'react'
import '../css/Sidebar.css'
import MenuLayout from './Menu'
import Logo from '../assets/images/Image 1858.png'
import Group from '../assets/images/Group.png'

const SideBar = ( {Menu} ) => {
  return (
    <div className='sidebar'>
      <div className="image">
        <img src={Logo} alt="Logo" />
      </div>
      <MenuLayout Menu = {Menu}></MenuLayout>
      <div className="group">
          <img src={Group} alt="" />
      </div>
    </div>
  )
}

export default SideBar
