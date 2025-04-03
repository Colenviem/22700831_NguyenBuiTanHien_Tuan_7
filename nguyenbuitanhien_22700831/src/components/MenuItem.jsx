import React from 'react'

const MenuItem = ( {menuItem} ) => {
  return (
    <div>
        {/* <img src={menuItem.image} alt={menuItem.menuName} /> */}
        <h3>{menuItem.menuName}</h3>
    </div>
  )
}

export default MenuItem
