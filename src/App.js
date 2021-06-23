import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

function App() {
  const [newExpenseData, addNewExpense] = useState();

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

  const createNewExpense = (expenseData) => {
    addNewExpense(expenseData);
  };

  const testFunc = () => {
    console.log(newExpenseData);
  };

  return (
    <div className='app-container'>
      <h2>Expense Tracker</h2>
      <NewExpense sendData={createNewExpense} />
      <Expenses items={expenses} />
      <button onClick={testFunc}>click me</button>
    </div>
  );
}

export default App;
