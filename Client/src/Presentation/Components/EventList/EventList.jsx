import { EventRow } from "../EventRow/EventRow";
import "./EventList.css";
import { EventListViewHandler } from "./EventListViewHandler";

function EventList() {
  const { events, viewEvent } = EventListViewHandler();

  return (
    <div className="EventList">
        <h2>All Events</h2>
      <div>
        {events.map(
          ({
            topic,
            product,
            id,
            eventId,
            host: { firstName, lastName, profilePic },
            date,
          }) => (
            <EventRow
              topic={topic}
              product={product}
              key={id}
              username={firstName + " " + lastName}
              userImg={profilePic}
              date={date}
              onView={() => viewEvent(eventId)}
            />
          )
        )}
      </div>
    </div>
  );
}

export default EventList;
