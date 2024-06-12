import { useMemo, useState } from "react";
import { useArrayMap } from "../../Hooks/useArrayMap";
import { CreateEvent } from "../../../Data/Domain/Event/Event";

function pad(arg){
  if((arg+"").length < 2) arg = "0"+arg;
  return arg;
}

function UpdateEventViewHandler({ searchParam, eventList }) {
  //6 stages
  //required data:
  //event details
  //location, date and time data
  //attendees
  const [stage, setStage] = useState("select"); //takes values select, event, venue, attendees, creating, created
  const [eventDetails, setEventDetails] = useState(null);
  const [venueDetails, setVenueDetails] = useState(null);
  const [attendees, attendeesSet, addAttendee, removeAttendee] =
    useArrayMap("email");
  const [createdEvent, setCreatedEvent] = useState(null);

  const filteredEventList = useMemo(() => {
    if (searchParam === "") return eventList;
    else
      return eventList.filter(({ eventId }) => eventId.startsWith(searchParam));
  }, [searchParam, eventList]);

  function onEventFormSubmit(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    let obj = {};
    for (let pair of data.entries()) {
      obj[pair[0]] = pair[1];
    }
    setEventDetails(obj);
    setStage("venue");
  }

  function onVenueFormSubmit(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    let obj = {};
    for (let pair of data.entries()) {
      obj[pair[0]] = pair[1];
    }
    setVenueDetails(obj);
    setStage("attendees");
  }

  function onAttendeesListSubmit() {
    async function create() {
      try {
        const { data } = await CreateEvent(
          eventDetails,
          venueDetails,
          attendees
        );
        setCreatedEvent(data);
        setStage("created");
      } catch (error) {
        console.error(error);
        alert(
          "An issue was encountered while trying to create event. Please try again later or check console for details."
        );
      }
    }
    setStage("loading");
    create();
  }

  function onUpdate(event) {
    setStage("event");
    console.log(event);
    const attendees = event.attendees;
    const details = { topic: event.topic, product: event.product };
    
    console.log("Formed date");
    const date = {...event.date};
    const venue = {
      date: date.year+"-"+pad(date.month)+"-"+pad(date.date),
      time: event.time,
      venue: event.venue,
    };
    setEventDetails(details);
    setVenueDetails(venue);
    for (let attendee of attendees) {
      addAttendee(attendee);
    }
  }

  return {
    stage,
    setStage,
    onEventFormSubmit,
    onVenueFormSubmit,
    onAttendeesListSubmit,
    attendees,
    attendeesSet,
    addAttendee,
    removeAttendee,
    createdEvent,
    filteredEventList,
    onUpdate,
    eventDetails,
    venueDetails,
  };
}

export default UpdateEventViewHandler;
