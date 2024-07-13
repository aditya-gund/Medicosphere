import "./ExpenseDetails.css";
import { ExpenseDetailsViewHandler } from "./ExpenseDetailsViewHandler";

export function ExpenseDetails() {
  const { loading, details, showAddExpensePopup, showUpdateExpensePopup, showDeleteExpensePopup } =
    ExpenseDetailsViewHandler();

  return (
    <div className="ExpenseDetails">
      {loading ? (
        <div className="loader" style={{ alignSelf: "center" }}></div>
      ) : (
        <div className="TableCard">
          <div className="header">
            <h3>Expenses</h3>{" "}
            <button onClick={() => showAddExpensePopup()}>Add Expense</button>{" "}
          </div>
          <table>
            <thead>
              <tr className="headerRow">
                <th>ID</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {details.map(
                ({ id, description, price, quantity, category }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td align="center">{description}</td>
                    <td>{price}</td>
                    <td>{quantity ? quantity : "Not Applicable"}</td>
                    <td>{category.name}</td>
                    <td>
                      <button onClick={() => {showUpdateExpensePopup(id, description, price, quantity, category.id)}} >Edit</button>
                    </td>
                    <td>
                      <button onClick={() => {showDeleteExpensePopup(id)}} >Delete</button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <div>
            <h3>Summary</h3>
            Total:{" "}
            {details.reduce(
              (acc, expense) =>
                (expense.quantity
                  ? expense.quantity * expense.price
                  : expense.price) + acc,
              0
            )}
          </div>
        </div>
      )}
    </div>
  );
}
