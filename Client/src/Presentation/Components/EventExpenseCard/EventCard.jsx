import "./EventCard.css";
import EventCardViewHandler from "./EventCardViewHandler";

const EventCard = ({
  eventId,
  product,
  topic,
  venue,
  hostEmail,
  date,
  time,
  showExpense,
}) => {
  const { host, bgColor } = EventCardViewHandler({
    hostEmail,
    eventId,
  });

  return (
    <div className="EventCard">
      <div className="host" style={{ backgroundColor: bgColor }}>
        <span>
          {host.firstName + " " + host.lastName} <br />
        </span>
        <img src="/user.svg" alt="creater" />
      </div>
      <h4>
        {product}
        <br />
        {topic}
      </h4>
      Location:{" "}
      {venue ? venue.address + ", " + venue.state + ", " + venue.country : ""}
      <br />
      <br />
      Date:{" "}
      {(
        date.getDate() +
        " " +
        date.getMonth() +
        " " +
        date.getFullYear()
      ).replaceAll(" ", "/") +
        " " +
        time}
      <br />
      Event ID: {eventId}
      <br></br>
      <div className="buttons">
        <button onClick={() => showExpense()} style={{ color: "red" }}>
          View Expense
        </button>
      </div>
    </div>
  );
};

export default EventCard;
