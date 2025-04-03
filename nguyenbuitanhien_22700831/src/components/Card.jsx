import React from 'react'
import CardItem from './CardItem'

const Card = ({Card}) => {
  return (
    <div className='card flex justify-between gap-0.5'>
      {Card.map((cardItem) => {
        return <CardItem key={cardItem.id} CardItem={cardItem}></CardItem>
      })}
    </div>
  )
}

export default Card
