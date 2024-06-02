import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CreateEvent, GetEventsForUser } from "../../../Data/Domain/Event/Event";
import { setEvents } from "../../Redux/Events/EventsSlice";
import { GetAllVenues } from "../../../Data/Domain/Venue/Venue";
import { useArrayMap } from "../../Hooks/useArrayMap";

function EventsViewHandler() {
  const [mode, setMode] = useState("View");
  const storedEvents = useSelector((state) => state.events.value);
  const email = useSelector((state) => state.user.email);
  const [venues, setVenues] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getVenues() {
      const { data } = await GetAllVenues();
      setVenues(data);
    }
    getVenues();
  }, []);

  const checkAndUpdateEvents = useCallback(async () => {
    const { data, error } = await GetEventsForUser(email);

    if (error == null) {
      const storedEventIds = storedEvents.map((event) => event.eventId);
      const receivedEventIds = data.map((event) => event.eventId);
      storedEventIds.sort();
      receivedEventIds.sort();
      let same = true;
      if (storedEventIds.length !== receivedEventIds.length) {
        same = false;
      } else {
        for (let i = 0; i < storedEventIds.length; i++) {
          if (storedEventIds[i] !== receivedEventIds[i]) same = false;
        }
      }
      if (!same) {
        const serializable = data.map((val) => ({
          ...val,
          date: {
            date: val.date.getDate(),
            month: val.date.getMonth(),
            year: val.date.getFullYear(),
          },
        }));
        dispatch(setEvents(serializable));
      }
    }
  }, [dispatch, storedEvents, email]);

  return {
    mode,
    setMode,
    checkAndUpdateEvents,
    storedEvents,
    email,
    venues,
  };
}

export default EventsViewHandler;

export function CreateEventFormViewHandler() {
  //5 stages
  //required data:
  //event details
  //location, date and time data
  //attendees
  const [stage, setStage] = useState("event"); //takes values event, venue, attendees, creating, created
  const [eventDetails, setEventDetails] = useState(null);
  const [venueDetails, setVenueDetails] = useState(null);
  const [attendees, attendeesSet, addAttendee, removeAttendee] =
    useArrayMap("email");
  const [createdEvent,setCreatedEvent] = useState(null);

  function onEventFormSubmit(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    let obj = {};
    for(let pair of data.entries())
    {
      obj[pair[0]] = pair[1];
    }
    setEventDetails(obj);
    setStage("venue");
  }

  function onVenueFormSubmit(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    let obj = {};
    for(let pair of data.entries())
    {
      obj[pair[0]] = pair[1];
    }
    setVenueDetails(obj);
    setStage("attendees");
  }

  function onAttendeesListSubmit() {

    async function create()
    {
      try {
        const {data} = await CreateEvent(eventDetails, venueDetails, attendees);
        setCreatedEvent(data);
        setStage("created");
      } catch (error) {
        console.error(error);
        alert("An issue was encountered while trying to create event. Please try again later or check console for details.")
      } 
    }
    setStage("loading");
    create();
  }

  return {
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
  };
}
