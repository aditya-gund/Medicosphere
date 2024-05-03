import Calendar from "../../Components/Calendar/Calendar";
import EventList from "../../Components/EventList/EventList";
import "./Dashboard.css";

function DashBoard() {
  return (
    <div className="Dashboard">
      <EventList />
      <Calendar events={mockEvents} />
    </div>
  );
}

const mockEvents = [
  {
    title: "one",
    date: new Date(),
  },
  {
    title: "four",
    date: new Date(),
  },
  {
    title: "three",
    date: new Date(),
  },
];

export default DashBoard;
