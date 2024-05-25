import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetEventsForUser } from "../../../Data/Domain/Event/Event";
import { setEvents } from "../../Redux/Events/EventsSlice";

function EventsViewHandler() {
  const [mode, setMode] = useState("View");
  const storedEvents = useSelector((state) => state.events.value);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  async function checkAndUpdateEvents() {
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
      if(same)
        dispatch(setEvents(data));
    } else {
      console.log("Error occurred while trying to fetch events for user: ");
      console.log(error);
      if (storedEvents.length === 0)
        alert(
          "An error occurred while trying to fetch users. Check console for more details."
        );
    }
  }

  return {
    mode,
    setMode,
    checkAndUpdateEvents,
    storedEvents,
  };
}

export default EventsViewHandler;
