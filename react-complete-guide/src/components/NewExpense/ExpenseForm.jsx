import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
  })

  const { title, amount, date } = formData

  const onMutate = (e) => {
    let boolean = null
    if (e.target.value === 'true') {
      boolean = true
    }

    if (e.target.value === 'false') {
      boolean = false
    }

    // Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }))
    }

    // Date
    if (e.target.id === 'date') {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
    }

    // Text/Booleans/Numbers
    if (!e.target.files && e.target.id !== 'date') {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      title: '',
      amount: '',
      date: '',
    })
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            onChange={onMutate}
            value={title}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            id='amount'
            name='amount'
            min='0.01'
            step='0.01'
            onChange={onMutate}
            value={amount}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            id='date'
            name='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={onMutate}
            value={date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
