import {
  createEvent,
  cancelEvent,
  updateEvent,
  getEventsAtVenue,
  getEventById,
  getEventsForUser,
} from "../../Datasource/Event/Event_mock";

export async function CreateEvent(event, venue, attendees) {
  console.log("Logging create event ");
  console.log(venue);
  try {
    const { data } = await createEvent({
      ...event,
      ...venue,
      attendees: attendees,
    });
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function CancelEvent(eventId) {
  try {
    const { status } = await cancelEvent(eventId);
    if (status === 200)
      return { data: eventId + " cancelled successfully", error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function UpdateEvent(eventId, event) {
  try {
    const { data } = await updateEvent(eventId, event);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function GetEventsAtVenue(venueId) {
  try {
    const { data } = await getEventsAtVenue(venueId);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function GetEvent(eventId) {
  try {
    const { data } = await getEventById(eventId);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function GetEventsForUser(email) {
  try {
    const { data } = await getEventsForUser(email);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
