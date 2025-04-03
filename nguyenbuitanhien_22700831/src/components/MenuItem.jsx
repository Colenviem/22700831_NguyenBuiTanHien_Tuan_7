import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuItem = ( {menuItem} ) => {
  return (
    <NavLink 
      to={menuItem.path}
      className={({ isActive }) => isActive ? "menuItem active" : "menuItem"}
    >
        <i className={menuItem.icon}></i>
        <p>{menuItem.menuName}</p>
    </NavLink>
  )
}

export default MenuItem
