import React, {useState} from 'react'

import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2020');
  const expenses = props.expenses
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  };
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {expenses.map(function(_expense, index){
          return (
            <ExpenseItem
              title={expenses[index].title}
              amount={expenses[index].amount}
              date={expenses[index].date}
            />
          );
      })}
      </Card>
    </div>
  )
}

export default Expenses;