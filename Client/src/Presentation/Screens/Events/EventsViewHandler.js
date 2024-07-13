import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useEvents } from "../../Redux/Events/EventsSlice";
import { GetAllVenues } from "../../../Data/Domain/Venue/Venue";


function EventsViewHandler() {
  const [mode, setMode] = useState("View");
  const storedEvents = useSelector((state) => state.events.value);
  const email = useSelector((state) => state.user.email);
  const [venues, setVenues] = useState([]);
  const {updateEvents} = useEvents();

  useEffect(() => {
    async function getVenues() {
      const { data } = await GetAllVenues();
      setVenues(data);
    }
    getVenues();
  }, []);

  return {
    mode,
    setMode,
    checkAndUpdateEvents: updateEvents,
    storedEvents,
    email,
    venues,
  };
}

export default EventsViewHandler;