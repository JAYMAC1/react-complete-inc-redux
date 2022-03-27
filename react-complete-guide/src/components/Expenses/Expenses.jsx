import Card from '../UI/Card'
import ExpensesFilter from './EpensesFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = ({ expenses, filterExpenses }) => {
  const onSelectYear = (year) => {
    filterExpenses(year)
  }
  return (
    <Card className='expenses'>
      <ExpensesFilter onSelectYear={onSelectYear} />
      {expenses.length > 0 &&
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
    </Card>
  )
}

export default Expenses
