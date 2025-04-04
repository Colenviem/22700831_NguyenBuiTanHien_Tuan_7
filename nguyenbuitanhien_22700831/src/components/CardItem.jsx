import React from 'react'

const CardItem = ({CardItem}) => {
  return (
    <div className='card-item'>
      <h4 className='font-poppins text-base leading-6 font-bold text-[#171A1F]'>{CardItem.title}</h4>
      <h1 className='font-poppins text-2xl leading-[48px] font-bold text-[#171A1F]'>{CardItem.value}</h1>
      <p className='font-manrope text-sm leading-5 font-normal mt-3.5'><span className='font-bold text-[#117B34]'>{CardItem.percentageChange}</span> period of change</p>
      <img src={CardItem.icon} alt={CardItem.title} />
    </div>
  )
}

export default CardItem
