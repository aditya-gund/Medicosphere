import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetEventsForUser } from "../../../Data/Domain/Event/Event";
import { setEvents } from "../../Redux/Events/EventsSlice";
import { GetAllVenues } from "../../../Data/Domain/Venue/Venue";


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