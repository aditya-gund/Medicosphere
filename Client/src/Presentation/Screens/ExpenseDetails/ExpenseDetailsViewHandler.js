import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AddExpense,
  DeleteExpense,
  GetCategories,
  GetExpenseForEvent,
  UpdateExpense,
} from "../../../Data/Domain/Expense/Expense";
import { useModal } from "../../Context/ModalContext";

export function ExpenseDetailsViewHandler() {
  const { eventId } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);
  const [categories, setCategories] = useState([]);
  const { showPopup, hidePopup } = useModal();

  const loadExpenseDetails = useCallback(async () => {
    setLoading(true);
    const { data, error } = await GetExpenseForEvent(eventId);
    if (!error) {
      setDetails(data);
    } else {
      alert(
        "Oops! Looks like there was an error while trying to find the details for expenses for event " +
          eventId +
          ". Please check console for details."
      );
      console.error(error);
    }
    setLoading(false);
  }, [eventId]);

  useEffect(() => {
    loadExpenseDetails();
  }, [eventId, loadExpenseDetails]);

  useEffect(() => {
    async function loadCategories() {
      const { data, error } = await GetCategories();
      if (!error) {
        setCategories(data);
      } else {
        alert(
          "Oops! Something went wrong while trying to get categories. Please check console for more details."
        );
        console.error(error);
      }
    }

    loadCategories();
  }, []);

  const addExpense = useCallback(
    async (e) => {
      e.preventDefault();
      function get(i) {
        return e.target[i].value;
      }
      const { error } = await AddExpense(
        eventId,
        get(0),
        get(1),
        get(2),
        get(3)
      );
      hidePopup();
      if (!error) {
        alert("Expense added successfully");
        loadExpenseDetails();
      } else {
        alert(
          "Oops! An error occurred while trying to add expense. Please check console for more details."
        );
        console.error(error);
      }
    },
    [hidePopup, eventId, loadExpenseDetails]
  );

  const showAddExpensePopup = useCallback(() => {
    showPopup("ExpenseModal", {
      categories,
      onSubmit: addExpense,
      mode: "Add Expense",
    });
  }, [showPopup, addExpense, categories]);

  const editExpense = useCallback(
    async (e, expenseId) => {
      e.preventDefault();
      function get(i) {
        return e.target[i].value;
      }
      const { error } = await UpdateExpense(
        expenseId,
        get(0),
        get(1),
        get(2),
        get(3)
      );
      hidePopup();
      if (!error) {
        alert("Expense updated successfully");
        loadExpenseDetails();
      } else {
        alert(
          "Oops! An error occurred while trying to update expense. Please check console for more details."
        );
        console.error(error);
      }
    },
    [hidePopup, loadExpenseDetails]
  );

  const showUpdateExpensePopup = useCallback(
    (expenseId, description, price, quantity, category) => {
      showPopup("ExpenseModal", {
        categories,
        onSubmit: editExpense,
        mode: "Edit Expense",
        expenseId,
        defaultDescription: description,
        defaultPrice: price,
        defaultQuantity: quantity,
        defaultCategory: category,
      });
    },
    [showPopup, editExpense, categories]
  );

  const deleteExpense = useCallback(
    async (expenseId) => {
      const { data, error } = await DeleteExpense(expenseId);
      if (!error) {
        if (data) alert("Expense deleted successfully.");
        else alert("Expense could not be deleted.");
      } else {
        alert("Oops! we encountered an issue while trying to delete expense");
      }
      hidePopup();
      loadExpenseDetails();
    },
    [hidePopup, loadExpenseDetails]
  );

  const showDeleteExpensePopup = useCallback(
    (expenseId) => {
      showPopup("DeleteExpenseModal", {
        onDelete: deleteExpense,
        expenseId,
      });
    },
    [showPopup, deleteExpense]
  );

  return {
    loading,
    details,
    showAddExpensePopup,
    showUpdateExpensePopup,
    showDeleteExpensePopup,
  };
}
