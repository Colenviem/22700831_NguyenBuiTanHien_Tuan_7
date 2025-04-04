import React from 'react'
import CardItem from './CardItem'
import overview from '../assets/images/Squares four 1.png'

const Card = ({Card}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-3.5'>
        <img src={overview} alt="" />
        <h1 className='font-poppins text-xl leading-[30px] font-bold text-[#171A1FFF]'>Overview</h1>
      </div>

      <div className='card flex justify-between gap-0.5'>
        {Card.map((cardItem) => {
          return <CardItem key={cardItem.id} CardItem={cardItem}></CardItem>
        })}
      </div>
    </div>
  )
}

export default Card
