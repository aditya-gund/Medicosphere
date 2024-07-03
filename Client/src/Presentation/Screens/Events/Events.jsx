import "./Events.css";
import EventsViewHandler from "./EventsViewHandler";
import { CreateEventFormViewHandler } from "./CreateEventFormViewHandler";
import { CreateEventUI } from "./EventChain/CreateEventUI";
import { AddVenue } from "./EventChain/AddVenue";
import { EventCreated } from "./EventChain/EventCreated/EventCreated";
import { AddAttendees } from "./EventChain/AddAttendees/AddAttendees";
import { Loading } from "./EventChain/Loading";
import { RedirectNotFound } from "../NotFound/NotFound";
import { useEffect } from "react";
import UpdateEventViewHandler from "./UpdateEventViewHandler";
import SelectEvent from "./EventChain/SelectEvent";

const Events = ({ searchParam }) => {
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
                  searchParam={searchParam}
                  email={email}
                  venues={venues}
                  key="AllElements"
                />
              );
            if (element === CreateEvent)
              return <CreateEvent email={email} venues={venues} key="CreateElement" />;
            else return <RedirectNotFound />;
          })}
      </div>
    </div>
  );
};

function EventOptions(setMode) {
  return (
    <div className="EventOptions">
      {options.map(({ mode, menu }) => (
        <div key={mode} onClick={() => setMode(mode)}>{menu}</div>
      ))}
    </div>
  );
}

const options = [
  { mode: "View", menu: "View Events", element: AllEvents },
  { mode: "Create", menu: "Create Event", element: CreateEvent },
];

function AllEvents({
  checkAndUpdateEvents,
  eventList,
  searchParam,
  email,
  venues,
}) {
  useEffect(() => {
    checkAndUpdateEvents();
  }, [checkAndUpdateEvents]);

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
    createdEvent,
    filteredEventList,
    onUpdate,
    eventDetails,
    venueDetails
  } = UpdateEventViewHandler({ searchParam, eventList });

  switch (stage) {
    case "select":
      return (
        <SelectEvent
          onUpdate={onUpdate}
          eventList={filteredEventList}
          checkAndUpdateEvents={checkAndUpdateEvents}
        />
      );
    case "event":
      return (
        <CreateEventUI
          onSubmit={onEventFormSubmit}
          email={email}
          venues={venues}
          defaultProduct={eventDetails.product}
          defaultTopic={eventDetails.topic}
        />
      );
    case "venue":
      return (
        <AddVenue
          venues={venues}
          onSubmit={onVenueFormSubmit}
          onBackPress={() => setStage("event")}
          defaultDate={venueDetails.date}
          defaultTime={venueDetails.time}
          defaultVenue={venueDetails.venue}
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

function CreateEvent({ email, venues }) {
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
    createdEvent,
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

export default Events;
