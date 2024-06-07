import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "./Presentation/Redux/User/UserSlice";
import EventsReducer from "./Presentation/Redux/Events/EventsSlice";
import ModalReducer from "./Presentation/Redux/Modal/ModalSlice";
export default configureStore({
    reducer:{
        user: UserReducer,
        events: EventsReducer,
        modal: ModalReducer
    }
});