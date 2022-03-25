import React from 'react'
import './Card.css'
const Card = ({ children, className }) => {
  const classes = 'card ' + className
  console.log(className)
  return <div className={classes}>{children}</div>
}

export default Card
