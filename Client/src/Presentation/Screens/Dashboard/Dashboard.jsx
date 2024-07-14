import Calendar from "../../Components/Calendar/Calendar";
import EventList from "../../Components/EventList/EventList";
import { useEvents } from "../../Redux/Events/EventsSlice";
import "./Dashboard.css";

function DashBoard() {

  const {events} = useEvents();

  return (
    <div className="Dashboard">
      <EventList />
      <Calendar events={events} />
    </div>
  );
}

export default DashBoard;
