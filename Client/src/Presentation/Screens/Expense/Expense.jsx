import "./Expense.css";
import ExpenseViewHandler from "./ExpenseViewHandler";
import EventCard from "../../Components/EventExpenseCard/EventCard";

export function Expense() {
  const { events, showExpense } = ExpenseViewHandler();

  return (
    <div className="Expense">
      {events.map(
        ({ eventId, product, topic, venue, host, date, time }) => (
          <EventCard
            key={eventId}
            eventId={eventId}
            product={product}
            topic={topic}
            venue={venue}
            host={host}
            date={new Date(date.year, date.month, date.date)}
            time={time}
            showExpense={() => showExpense(eventId)}
          />
        )
      )}
    </div>
  );
}
