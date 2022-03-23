import Expenses from './components/Expenses'

const App = () => {
  const expenses = [
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
      date: new Date(2022, 4, 2),
    },
    {
      id: 3,
      title: 'Food Shopping',
      amount: 330,
      date: new Date(2022, 0, 15),
    },
  ]

  return (
    <div className='expenses'>
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
