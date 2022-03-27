import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ addExpenseHandler }) => {
  const onSaveExpense = (expense) => {
    const expenseData = {
      ...expense,
      date: new Date(expense.date),
      id: Math.random().toString(),
    }
    // console.log(expenseData)
    addExpenseHandler(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={onSaveExpense} />
    </div>
  )
}

export default NewExpense
