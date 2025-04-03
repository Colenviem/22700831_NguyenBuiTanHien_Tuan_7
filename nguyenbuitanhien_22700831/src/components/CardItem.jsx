import React from 'react'

const CardItem = ({CardItem}) => {
  return (
    <div className='card-item w-[32%] border border-gray-300 rounded-2xl p-4'>
      <h4>{CardItem.title}</h4>
      <h1>{CardItem.value}</h1>
      <p><span>{CardItem.percentageChange}</span> period of change</p>
    </div>
  )
}

export default CardItem
