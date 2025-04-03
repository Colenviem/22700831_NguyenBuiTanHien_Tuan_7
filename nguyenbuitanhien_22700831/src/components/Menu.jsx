import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({Menu}) => {
  return (
        <div className="menu">
          {Menu.map((menuItem) => {
            return <MenuItem key={menuItem.id} menuItem={menuItem} />
          })}
        </div>
  )
}

export default Menu
