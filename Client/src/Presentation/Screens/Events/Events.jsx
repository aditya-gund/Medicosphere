import EventCard from "../../Components/EventCard/EventCard";
import "./Events.css";
import EventsViewHandler, {
  CreateEventFormViewHandler,
} from "./EventsViewHandler";
import { CreateEventUI } from "./CreateEventChain/CreateEventUI";
import { AddVenue } from "./CreateEventChain/AddVenue";
import { EventCreated } from "./CreateEventChain/EventCreated/EventCreated";
import { AddAttendees } from "./CreateEventChain/AddAttendees/AddAttendees";
import { Loading } from "./CreateEventChain/Loading";
import { RedirectNotFound } from "../NotFound/NotFound";
import { useEffect } from "react";

const Events = () => {
  const { mode, setMode, checkAndUpdateEvents, storedEvents, email, venues } =
    EventsViewHandler();

  return (
    <div className="Events">
      {EventOptions(setMode)}
      <div className="EventWindow">
        {options
          .filter((option) => option.mode === mode)
          .map(({ element }) => {
            if (element === AllEvents)
              return (
                <AllEvents
                  checkAndUpdateEvents={checkAndUpdateEvents}
                  eventList={storedEvents}
                />
              );
            if (element === CreateEventForm)
              return <CreateEventForm email={email} venues={venues} />;
            else return element();
          })}
      </div>
    </div>
  );
};

function EventOptions(setMode) {
  return (
    <div className="EventOptions">
      {options.map(({ mode, menu }) => (
        <div onClick={() => setMode(mode)}>{menu}</div>
      ))}
    </div>
  );
}

const options = [
  { mode: "View", menu: "All Events", element: AllEvents },
  { mode: "Create", menu: "Create Event", element: CreateEventForm },
  { mode: "Update", menu: "Update Existing Event", element: UpdateEventForm },
  { mode: "Delete", menu: "Delete Event", element: DeleteEventForm },
];

function AllEvents({ checkAndUpdateEvents, eventList }) {
  useEffect(() => {
    checkAndUpdateEvents();
  }, [checkAndUpdateEvents]);
  return (
    <div className="AllEvents">
      {eventList.map(
        ({ eventId, product, topic, venueId, host, date, time }) => (
          <EventCard
            eventId={eventId}
            product={product}
            topic={topic}
            venueId={venueId}
            host={host}
            date={new Date(date.year, date.month, date.year)}
            time={time}
          />
        )
      )}
    </div>
  );
}

function CreateEventForm({ email, venues }) {
  const {
    stage,
    setStage,
    onEventFormSubmit,
    onVenueFormSubmit,
    onAttendeesListSubmit,
    attendees,
    attendeesSet,
    addAttendee,
    removeAttendee,
    createdEvent
  } = CreateEventFormViewHandler();

  switch (stage) {
    case "event":
      return (
        <CreateEventUI
          onSubmit={onEventFormSubmit}
          email={email}
          venues={venues}
        />
      );
    case "venue":
      return (
        <AddVenue
          venues={venues}
          onSubmit={onVenueFormSubmit}
          onBackPress={() => setStage("event")}
        />
      );
    case "attendees":
      return (
        <AddAttendees
          onSubmit={onAttendeesListSubmit}
          onBackPress={() => setStage("venue")}
          users={attendees}
          userSet={attendeesSet}
          addUser={addAttendee}
          removeUser={removeAttendee}
        />
      );
    case "loading":
      return <Loading />;
    case "created":
      return <EventCreated event={createdEvent} />;
    default:
      return <RedirectNotFound />;
  }
}

function UpdateEventForm() {
  return <form>Update EventForm</form>;
}

function DeleteEventForm() {
  return <form>Delete EventForm</form>;
}

export default Events;
