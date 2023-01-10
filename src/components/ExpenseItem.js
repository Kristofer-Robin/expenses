import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";

function ExpenseItem (props){

    return(
        <div className="expense-item">
            <ExpenseDate date={props.expenseData.data}></ExpenseDate>
            <div>{props.expenseData.date.toString()}</div>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}$</div>
            </div>
        </div>
    )
}

export default ExpenseItem