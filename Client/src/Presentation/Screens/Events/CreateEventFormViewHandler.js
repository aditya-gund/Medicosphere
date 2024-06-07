import { useState } from "react";
import { useArrayMap } from "../../Hooks/useArrayMap";
import { CreateEvent } from "../../../Data/Domain/Event/Event";

export function CreateEventFormViewHandler() {
    //5 stages
    //required data:
    //event details
    //location, date and time data
    //attendees
    const [stage, setStage] = useState("event"); //takes values event, venue, attendees, creating, created
    const [eventDetails, setEventDetails] = useState(null);
    const [venueDetails, setVenueDetails] = useState(null);
    const [attendees, attendeesSet, addAttendee, removeAttendee] =
      useArrayMap("email");
    const [createdEvent,setCreatedEvent] = useState(null);
  
    function onEventFormSubmit(e) {
      e.preventDefault();
      let data = new FormData(e.target);
      let obj = {};
      for(let pair of data.entries())
      {
        obj[pair[0]] = pair[1];
      }
      setEventDetails(obj);
      setStage("venue");
    }
  
    function onVenueFormSubmit(e) {
      e.preventDefault();
      let data = new FormData(e.target);
      let obj = {};
      for(let pair of data.entries())
      {
        obj[pair[0]] = pair[1];
      }
      setVenueDetails(obj);
      setStage("attendees");
    }
  
    function onAttendeesListSubmit() {
  
      async function create()
      {
        try {
          const {data} = await CreateEvent(eventDetails, venueDetails, attendees);
          setCreatedEvent(data);
          setStage("created");
        } catch (error) {
          console.error(error);
          alert("An issue was encountered while trying to create event. Please try again later or check console for details.")
        } 
      }
      setStage("loading");
      create();
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
      createdEvent
    };
  }
  