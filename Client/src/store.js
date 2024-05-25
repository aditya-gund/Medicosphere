import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "./Presentation/Redux/User/UserSlice";
import EventsReducer from "./Presentation/Redux/Events/EventsSlice";
export default configureStore({
    reducer:{
        user: UserReducer,
        events: EventsReducer
    }
});