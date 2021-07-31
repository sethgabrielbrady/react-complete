import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "./Card"

function Expenses(props) {
  const expenses = props.expenses
  return (
    <Card className="expenses">
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
  )
}

export default Expenses;