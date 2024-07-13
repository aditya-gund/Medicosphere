import { useCallback, useState } from "react";
import "./ExpenseModal.css";

export function ExpenseModal({
  categories,
  defaultDescription,
  defaultPrice,
  defaultQuantity,
  defaultCategory,
  onSubmit,
  mode,
  expenseId,
}) {
  const [loading, setLoading] = useState();
  const submit = useCallback(
    async (e) => {
      setLoading(true);
      if (!expenseId) await onSubmit(e);
      else await onSubmit(e, expenseId);
      setLoading(false);
    },
    [onSubmit, expenseId]
  );

  return (
    <form
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="expense-form"
      onSubmit={(e) => submit(e)}
    >
      <h2>{mode}</h2>
      <input
        type="text"
        placeholder="Description"
        defaultValue={defaultDescription ? defaultDescription : null}
        name="description"
        required
      />
      <input
        type="number"
        min="1"
        step="any"
        placeholder="Price"
        defaultValue={defaultPrice ? defaultPrice : null}
        name="price"
        required
      />
      <input
        type="number"
        min="1"
        step="1"
        placeholder="Quantity"
        defaultValue={defaultQuantity ? defaultQuantity : null}
        name="quantity"
      />
      <select defaultValue={defaultCategory ? defaultCategory : ""} required>
        <option hidden value="">
          --select category--
        </option>
        {categories.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      {loading ? (
        <div className="loader" />
      ) : (
        <input type="submit" value={mode} />
      )}
    </form>
  );
}
