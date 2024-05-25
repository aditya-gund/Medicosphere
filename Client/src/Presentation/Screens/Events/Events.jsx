import "./Events.css";
import EventsViewHandler from "./EventsViewHandler";

const Events = () => {
  const { mode, setMode, checkAndUpdateEvents, storedEvents } = EventsViewHandler();

  return (
    <div className="Events">
      {EventOptions(setMode)}
      <div className="EventWindow">
        {options
          .filter((option) => option.mode === mode)
          .map(({ element }) => {
            if (element === AllEvents) return AllEvents(checkAndUpdateEvents, storedEvents);
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

function AllEvents(checkAndUpdateEvents, eventList) {
  checkAndUpdateEvents();
  console.log(eventList);
  return (
    <div className="AllEvents">
      I want to display all the events here for a particular user that is logged
      in
    </div>
  );
}

function CreateEventForm() {
  return <form>Create EventForm</form>;
}

function UpdateEventForm() {
  return <form>Update EventForm</form>;
}

function DeleteEventForm() {
  return <form>Delete EventForm</form>;
}

export default Events;
