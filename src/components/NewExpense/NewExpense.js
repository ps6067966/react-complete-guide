import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [IsAddNewExpenseButtonVisible, setIsAddNewExpenseButtonVisible] =
    useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
    setIsAddNewExpenseButtonVisible(true);
  };

  const startEditingHandler = () => {
    setIsAddNewExpenseButtonVisible(false);
  };

  const stopEditingHandler = () => {
    setIsAddNewExpenseButtonVisible(true);
  };

  return (
    <div className="new-expense">
      {IsAddNewExpenseButtonVisible && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {!IsAddNewExpenseButtonVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
