import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        date: new Date(2023, 0, 10),
        title: 'New Book',
        amount: 30.99
    },
    {
        date: new Date(2023, 0, 10),
        title: 'New jeans',
        amount: 99.99
    }
]
const App = () => {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title:'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 5),
            title:'Icecream',
            price: 3.99
        }
    ]

    const addExpensehandler = (expense) => {
        console.log('In App.js')
        console.log(expense)
    }
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpensehandler}></NewExpense>
            <Expenses expenses={DUMMY_EXPENSES}></Expenses>
        </div>
    );
}

export default App;