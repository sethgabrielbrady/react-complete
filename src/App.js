import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense.js'

const App = () => {
  const expenses = [
    {title: 'Car Insurance',
    amount: 589.71,
    date: new Date(2021, 6, 6)
    },
    {title: 'Food',
    amount: 189.41,
    date: new Date(2021, 3, 6)
    },
    {title: 'Clothes',
    amount: 50.71,
    date: new Date(2021, 4, 4)
    },
    {title: 'Gas',
    amount: 89.21,
    date: new Date(2021, 6, 3)
    }
  ];

  const addExpenseHandler = expense => {
    console.log("App.js", expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}  />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
