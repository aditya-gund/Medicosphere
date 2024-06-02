import { useEffect, useState } from "react";
import { GetAvailability } from "../../../../Data/Domain/Venue/Venue";

export function AddVenue({ venues, onSubmit, onBackPress }) {
  const { venue, setVenue, date, setDate, timeSlot, slotLoading } = AddVenueViewHandler();

  return (
    <form
      className="createEventForm"
      onSubmit={(e) => onSubmit(e)}
      key="AddVenue"
    >
        <div className="loader" style={slotLoading?{opacity: "1"}:{opacity: "0"}} ></div>
      <select name="venue" value={venue} required onChange={(e) => setVenue(e.target.value)}>
        <option disabled selected value="">
          -- select venue --
        </option>
        {venues.map((venue) => (
          <option value={venue.id}>
            {venue.address + ", " + venue.state + ", " + venue.country}
          </option>
        ))}
      </select>

      <input
        type="date"
        name="date"
        required
        disabled={venue&&venue!=="" ? false : true}
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <select name="time" required disabled={date&&date!=="" ? false : true}>
        <option disabled selected value="">
          -- select time slot --
        </option>
        {timeSlot.map((slot) => (
          <option value={slot}> {slot} </option>
        ))}
      </select>
      <input type="submit" value="Add Attendees" />
      <input type="button" value="Back" onClick={() => onBackPress()} />
    </form>
  );
}

function AddVenueViewHandler() {
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setSlot] = useState([]);
  const [slotLoading, setSlotLoading] = useState(false);

  useEffect(() => {
    async function setTimeSlot()
    {
        const {data} = await GetAvailability(venue, date);
        setSlot(data);
        setSlotLoading(false);
    }
    if(venue && venue !== "" && date && date !== "")
    {
        setSlotLoading(true);
        setTimeSlot();    
    }
    
  }, [venue, date]);

  return {
    venue,
    setVenue,
    date,
    setDate,
    timeSlot,
    slotLoading
  };
}

const time_slots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];
