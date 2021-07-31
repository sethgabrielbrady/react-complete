import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {
  const expenses = props.expenses
  return (
    <div className="expenses">
    {expenses.map(function(expense, index){
      return (
        <ExpenseItem
          title={expenses[index].title}
          amount={expenses[index].amount}
          date={expenses[index].date}
        />
      );
     })}
    </div>
  )
}

export default Expenses;