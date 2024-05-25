import { createSlice } from "@reduxjs/toolkit";

const EventSlice = createSlice({
    name: "events",
    initialState: {value: []},
    reducers: {
        setEvents: (state, action) => {
            state.value = action.payload;
        },
        resetEvents: (state) => {
            state.value = [];
        }
    }
});


export const {setEvents, resetEvents} = EventSlice.actions;
export default EventSlice.reducer;