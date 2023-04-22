<<<<<<< HEAD
import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm((prevShowForm) => !prevShowForm);
  }

  function showFormClickHandler() {
    setShowForm((prevShowForm) => !prevShowForm);
  }

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={showFormClickHandler}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={showFormClickHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
=======
import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm((prevShowForm) => !prevShowForm);
  }

  function showFormClickHandler() {
    setShowForm((prevShowForm) => !prevShowForm);
  }

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={showFormClickHandler}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={showFormClickHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
>>>>>>> 88434f7 (first commit)
