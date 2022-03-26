import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = ({ expense }) => {
  const [title, setTitle] = useState(expense.title)

  const handleClick = (e) => {
    e.preventDefault()
    setTitle('New Title')
    console.log('clicked')
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={expense.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price '>£{expense.amount}</div>
      </div>
      <button onClick={handleClick}>change Title</button>
    </Card>
  )
}

export default ExpenseItem
