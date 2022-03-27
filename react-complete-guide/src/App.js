import { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 2,
      title: 'Car Fuel',
      amount: 150,
      date: new Date(2021, 4, 2),
    },
    {
      id: 3,
      title: 'Food Shopping',
      amount: 330,
      date: new Date(2022, 0, 15),
    },
    {
      id: 4,
      title: 'Spoons',
      amount: 40,
      date: new Date(2019, 0, 15),
    },
  ])

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [...prevState, expense])
  }

  const filterExpenses = (year) => {
    const filteredExpenses = expenses.filter((expense) => {
      return expense.date.getFullYear() == year
    })

    setExpenses(filteredExpenses)
  }

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} filterExpenses={filterExpenses} />
    </div>
  )
}

export default App
