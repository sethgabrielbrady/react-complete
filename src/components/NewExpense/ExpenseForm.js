import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.state)

    // setEnteredTitle({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
    // setUserInput((prevState) =>{
    //   return {...prevState, enteredTitle: event.target.value}
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.state)

    // setEnteredAmount({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.state)

    // setEnteredDate({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });
  }

  return <form>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={userInput.titleChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' onChange={userInput.amountChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2021-01-01' max='2025-12-31' onChange={userInput.dateChangeHandler} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'> Add Expense</button>
    </div>
  </form>
}

export default ExpenseForm;