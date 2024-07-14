import "./EventCard.css";
import EventCardViewHandler from "./EventCardViewHandler";

const EventCard = ({
  eventId,
  product,
  topic,
  venue,
  host,
  time,
  date,
  showExpense,
}) => {
  const { bgColor } = EventCardViewHandler({
    eventId,
  });

  return (
    <div className="EventCard">
      <div className="host" style={{ backgroundColor: bgColor }}>
        <span>
          {host.firstName + " " + host.lastName} <br />
        </span>
        <img src={host.profilePic?host.profilePic:"/user.svg"} alt="creater" />
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
        (date.getMonth()+1) +
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
