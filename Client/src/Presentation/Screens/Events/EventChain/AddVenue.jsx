import { useEffect, useState } from "react";
import { GetAvailability } from "../../../../Data/Domain/Venue/Venue";

export function AddVenue({
  venues,
  onSubmit,
  onBackPress,
  defaultVenue,
  defaultDate,
  defaultTime,
}) {
  const {
    venue,
    setVenue,
    date,
    setDate,
    timeSlot,
    slotLoading,
    time,
    setTime,
  } = AddVenueViewHandler({
    defaultVenue: defaultVenue,
    defaultDate: defaultDate,
    defaultTime: defaultTime,
  });

  return (
    <form
      className="createEventForm"
      onSubmit={(e) => onSubmit(e)}
      key="AddVenue"
    >
      <div
        className="loader"
        style={slotLoading ? { opacity: "1" } : { opacity: "0" }}
      ></div>
      <select
        name="venue"
        value={JSON.stringify(venue)}
        required
        onChange={(e) => {
          setVenue(JSON.parse(e.target.value));
          setDate("");
          setTime("");
        }}
      >
        <option hidden value={{ id: -1 }}>
          -- select venue --
        </option>
        {venues.map((venue) => (
          <option key={JSON.stringify(venue)} value={JSON.stringify(venue)}>
            {venue.address + ", " + venue.state + ", " + venue.country}
          </option>
        ))}
      </select>

      <input
        type="date"
        name="date"
        required
        disabled={
          venue && JSON.stringify(venue) !== JSON.stringify({ id: -1 })
            ? false
            : true
        }
        onChange={(e) => {
          setDate(e.target.value);
          setTime("");
        }}
        value={date}
      />

      <select
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        disabled={date && date !== "" ? false : true}
      >
        <option hidden value="">
          -- select time slot --
        </option>
        {timeSlot.map((slot) => (
          <option key={slot} value={slot}> {slot} </option>
        ))}
      </select>
      <input type="submit" value="Add Attendees" />
      <input type="button" value="Back" onClick={() => onBackPress()} />
    </form>
  );
}

function AddVenueViewHandler({ defaultVenue, defaultDate, defaultTime }) {
  const [venue, setVenue] = useState({ id: -1 });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [timeSlot, setSlot] = useState([]);
  const [slotLoading, setSlotLoading] = useState(false);

  useEffect(() => {
    async function setTimeSlot() {
      const { data } = await GetAvailability(venue, date);
      if (defaultTime === undefined) setSlot(data);
      else {
        setSlot([...data, defaultTime]);
        setTime(defaultTime);
      }
      setSlotLoading(false);
    }
    if (venue && venue !== "" && date && date !== "") {
      setSlotLoading(true);
      setTimeSlot();
    }
  }, [venue, date, defaultTime]);

  useEffect(() => {
    if (defaultVenue !== undefined) {
      setVenue(defaultVenue);
    }
    if (defaultDate !== undefined) {
      setDate(defaultDate);
    }
  }, [defaultDate, defaultVenue]);

  return {
    venue,
    setVenue,
    date,
    setDate,
    timeSlot,
    slotLoading,
    time,
    setTime,
  };
}
