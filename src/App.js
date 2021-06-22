import ExpenseItem from './components/Expenses/ExpenseItem';

function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 297.38,
      date: new Date(),
    },
    {
      title: 'Some other item',
      amount: 120.23,
      date: new Date(),
    },
    {
      title: 'Another One',
      amount: 32.23,
      date: new Date(),
    },
  ];

  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
