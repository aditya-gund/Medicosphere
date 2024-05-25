import {
  createEvent,
  deleteEvent,
  updateEvent,
  getEventsAtVenue,
  getEventById,
  getEventsForUser,
} from "../../Datasource/Event/Event_mock";

export async function CreateEvent(event) {
  try {
    const { data } = await createEvent(event);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function DeleteEvent(eventId) {
  try {
    const { status } = await deleteEvent(eventId);
    if (status === 204)
      return { data: "Event deleted successfully", error: null };
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
