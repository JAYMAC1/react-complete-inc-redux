import { useState, useEffect } from 'react'
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
  const [filteredExpenses, setFilteredExpenses] = useState([])

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [...prevState, expense])
  }

  const filterExpenses = (year) => {
    if (year === 'ALL') {
      console.log(year)
      setFilteredExpenses(expenses)
    } else {
      console.log(year)
      const filterExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear() == year
      })

      setFilteredExpenses(filterExpenses)
    }
  }

  useEffect(() => {
    setFilteredExpenses(expenses)
  }, [expenses])

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses expenses={filteredExpenses} filterExpenses={filterExpenses} />
    </div>
  )
}

export default App
