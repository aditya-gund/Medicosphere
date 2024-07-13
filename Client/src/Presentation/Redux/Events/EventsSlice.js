import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useUser } from "../User/UserSlice";
import { useCallback } from "react";
import { GetEventsForUser } from "../../../Data/Domain/Event/Event";

const EventSlice = createSlice({
  name: "events",
  initialState: { value: [] },
  reducers: {
    setEvents: (state, action) => {
      state.value = action.payload;
    },
    resetEvents: (state) => {
      state.value = [];
    },
  },
});

export const { setEvents, resetEvents } = EventSlice.actions;
export default EventSlice.reducer;

export function useEvents() {
  const events = useSelector((state) => state.events.value);
  const dispatch = useDispatch();

  const {
    user: { email },
  } = useUser();

  const updateEvents = useCallback(async () => {
    const { data, error } = await GetEventsForUser(email);

    if (error == null) {
      const storedEventIds = events.map((event) => event.eventId);
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
  }, [dispatch, events, email]);

  return {
    events,
    updateEvents,
  };
}
