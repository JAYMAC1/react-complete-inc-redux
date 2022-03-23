import React from 'react'

const ExpenseDate = ({ day, month, year }) => {
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  )
}

export default ExpenseDate
