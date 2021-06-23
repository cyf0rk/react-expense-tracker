import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

import './NewExpense.css';

function NewExpense(props) {
  return (
    <Card className='new-expense'>
      <ExpenseForm onAddExpense={props.sendData} />
    </Card>
  );
}

export default NewExpense;
