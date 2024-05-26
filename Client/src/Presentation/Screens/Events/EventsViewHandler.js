import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetEventsForUser } from "../../../Data/Domain/Event/Event";
import { setEvents } from "../../Redux/Events/EventsSlice";

function EventsViewHandler() {
  const [mode, setMode] = useState("View");
  const storedEvents = useSelector((state) => state.events.value);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const checkAndUpdateEvents = useCallback( async () => {
    const { data, error } = await GetEventsForUser(email);

    if (error == null) {
      const storedEventIds = storedEvents.map((event) => event.eventId);
      const receivedEventIds = data.map((event) => event.eventId);
      storedEventIds.sort();
      receivedEventIds.sort();
      let same = true;
      if (storedEventIds.length !== receivedEventIds.length) 
      {
        same = false;
      } 
      else 
      {
        for (let i = 0; i < storedEventIds.length; i++) {
          if (storedEventIds[i] !== receivedEventIds[i]) same = false;
        }
      }
      if(!same)
      {
        const serializable = data.map((val) => ({
          ...val,
          date: {date: val.date.getDate(), month: val.date.getMonth(), year: val.date.getFullYear()}
        }))
        dispatch(setEvents(serializable));
      }
    }
  }
, [dispatch, storedEvents, email]);

  return {
    mode,
    setMode,
    checkAndUpdateEvents,
    storedEvents,
  };
}

export default EventsViewHandler;
