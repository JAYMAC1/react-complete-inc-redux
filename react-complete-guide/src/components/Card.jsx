import React from 'react'
import './Card.css'
const Card = ({ children, className }) => {
  const classes = 'card ' + className
  console.log(classes)
  return <div className={classes}>{children}</div>
}

export default Card
