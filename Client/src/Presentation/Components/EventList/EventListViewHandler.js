import { useCallback, useEffect } from "react";
import { useEvents } from "../../Redux/Events/EventsSlice";
import { useNavigate } from "react-router-dom";

export function EventListViewHandler() {
  const { events, updateEvents } = useEvents();
  const navigate = useNavigate();

  useEffect(() => {
    updateEvents();
  }, [updateEvents]);

  const viewEvent = useCallback((eventId) => {
    navigate(`/Home/event-details/${eventId}`);
  }, [navigate]);

  return {
    events,
    viewEvent
  };
}
