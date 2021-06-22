import Card from '../UI/Card';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const dateObj = {
    month: props.date.toLocaleString('en-US', { month: 'long' }),
    day: props.date.toLocaleString('en-US', { day: '2-digit' }),
    year: props.date.getFullYear(),
  };

  return (
    <Card className='expense-date'>
      <div className='expense-date__month'>{dateObj.month}</div>
      <div className='expense-date__year'>{dateObj.year}</div>
      <div className='expense-date__day'>{dateObj.day}</div>
    </Card>
  );
}

export default ExpenseDate;
