import EventCard from "../../../Components/EventCard/EventCard";

function SelectEvent({ eventList, checkAndUpdateEvents, onUpdate }) {
  return (
    <div className="AllEvents">
      {eventList.map(
        ({ eventId, product, topic, venue, host, date, time, attendees }) => (
          <EventCard
            key={eventId}
            eventId={eventId}
            product={product}
            topic={topic}
            venue={venue}
            host={host}
            date={new Date(date.year, date.month, date.year)}
            time={time}
            checkAndUpdateEvents={checkAndUpdateEvents}
            updateClickHandler={() =>
              onUpdate({
                eventId: eventId,
                product: product,
                topic: topic,
                venue: venue,
                host: host,
                date: date,
                time: time,
                attendees: attendees,
              })
            }
          />
        )
      )}
    </div>
  );
}

export default SelectEvent;
