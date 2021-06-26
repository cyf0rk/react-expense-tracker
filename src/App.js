import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

import './App.css';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 297.38,
    date: new Date(2020, 2, 18),
  },
  {
    id: 'e2',
    title: 'Some other item',
    amount: 120.23,
    date: new Date(2019, 3, 1),
  },
  {
    id: 'e3',
    title: 'Another One',
    amount: 32.23,
    date: new Date(2020, 4, 29),
  },
];

function App() {
  const [expenses, addNewExpense] = useState(INITIAL_EXPENSES);

  const createExpenseHandler = (expense) => {
    addNewExpense((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className='app-container'>
      <NewExpense onSendExpenseData={createExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
