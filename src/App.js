import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {title: "Car Insurance",
    amount: 589.71,
    date: new Date(2021, 6, 6)
    },
    {title: "Food",
    amount: 189.41,
    date: new Date(2021, 3, 6)
    },
    {title: "Clothes",
    amount: 50.71,
    date: new Date(2021, 4, 4)
    },
    {title: "Gas",
    amount: 89.21,
    date: new Date(2021, 6, 3)
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
     <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
