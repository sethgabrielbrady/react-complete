import React, {useState} from 'react';
import  ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "../UI/Card"

const ExpenseItem = (props) => {
 const [title, setTitle] = useState(props.title);
  //the first element ("title") points to the value in props.title
  //setTitle points to a function that will set the value of title (hence "setTitle")
  // this is the convention
  //both names are up to the user

  const clickHandler = () => {
    setTitle("Updated");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{ title }</h2>
        <div className="expense-item__price">${ props.amount }</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
