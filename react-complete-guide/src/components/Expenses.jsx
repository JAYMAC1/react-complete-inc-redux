import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  return (
    <div>
      {expenses.length > 0 &&
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
    </div>
  )
}

export default Expenses
