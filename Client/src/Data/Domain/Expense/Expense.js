import {
  addExpense,
  deleteExpense,
  getCategories,
  getExpensesForEvent,
  updateExpense,
} from "../../Datasource/Expense/Expense_mock";

export async function GetExpenseForEvent(eventId) {
  try {
    const { data } = await getExpensesForEvent(eventId);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function GetCategories() {
  try {
    const { data } = await getCategories();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function AddExpense(
  eventId,
  description,
  price,
  quantity,
  category
) {
  try {
    const { data } = await addExpense(
      eventId,
      description,
      price,
      quantity,
      category
    );
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function UpdateExpense(
  expenseId,
  description,
  price,
  quantity,
  category
) {
  try {
    const { data } = await updateExpense(
      expenseId,
      description,
      price,
      quantity,
      category
    );
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function DeleteExpense(expenseId) {
  try {
    const { status } = await deleteExpense(expenseId);
    if (status == 204) return { data: true, error: null };
    else return { data: false, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
