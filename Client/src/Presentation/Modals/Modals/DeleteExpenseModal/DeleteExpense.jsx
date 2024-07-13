import "./DeleteExpense.css";
import { useState } from "react";

export function DeleteExpenseModal({onDelete, expenseId}) {
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  async function onFormSubmit(e) {
    e.preventDefault();
    setProcessing(true);

    if (e.target[0].value.trim() === "") {
      setError("");
    } else if (e.target[0].value === "Delete Expense " + expenseId) {
      await onDelete(expenseId);
    } else {
      setError("Input value does not match required value");
    }
    setProcessing(false);
  }
  return (
    <div className="DeleteExpenseModal" onClick={(e) => e.stopPropagation()}>
      <h2>Delete Expense {expenseId}</h2>
      To confirm deleting expense type "Delete Expense {expenseId}"
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input
          type="text"
          placeholder={"Delete Expense " + expenseId}
          className={processing ? "disabled-text" : ""}
          disabled={processing}
        />
        <input
          type="submit"
          value={"Delete"}
          className={processing ? "disabled-submit" : ""}
          disabled={processing}
        />
      </form>
      <span>{error}</span>
    </div>
  );
}
