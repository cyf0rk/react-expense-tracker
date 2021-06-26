import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

import { useState } from 'react';

import './NewExpense.css';

function NewExpense(props) {
  const [expenseFormState, toggleExpenseForm] = useState(false);

  const createNewExpense = (expenseData) => {
    props.onSendExpenseData(expenseData);
  };

  const startExpenseFormEditing = () => {
    toggleExpenseForm(true);
  };

  const stopExpenseFormEditing = () => {
    toggleExpenseForm(false);
  };

  return (
    <Card className='new-expense'>
      {!expenseFormState && (
        <div className='new-expense__actions'>
          <button onClick={startExpenseFormEditing}>Add New Expense</button>
        </div>
      )}
      {expenseFormState && (
        <ExpenseForm
          onAddExpense={createNewExpense}
          onCancel={stopExpenseFormEditing}
        />
      )}
    </Card>
  );
}

export default NewExpense;
