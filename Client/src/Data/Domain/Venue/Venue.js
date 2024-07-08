import {
  getAllVenues,
  getAvailability,
  getCountries,
  getVenueById,
  registerVenue,
  unlistVenue,
  updateVenue,
} from "../../Datasource/Venue/Venue_mock";

export async function GetVenueById(venueId) {
  try {
    const { data } = await getVenueById(venueId);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function GetAllVenues() {
  try {
    const { data } = await getAllVenues();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function GetAvailability(venueId, date) {
  try {
    const { data } = await getAvailability(venueId, date);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export function GetCountries() {
  return getCountries();
}

export async function UnlistVenue(venueId) {
  try {
    const { status } = await unlistVenue(venueId);
    if (status === 200) return true;
    return false;
  } catch (error) {
    return { data: null, error };
  }
}

export async function UpdateVenue(venueId, address, state, city, country) {
  try {
    const { status } = await updateVenue({
      id: venueId,
      address,
      state,
      city,
      country,
    });
    if (status === 200) return { data: true, error: null };
    else return { data: false, error: "Server disallowed request" };
  } catch (error) {
    return { data: false, error };
  }
}

export async function RegisterVenue(address, city, state, country) {
  try {
    const { data } = await registerVenue({ address, state, city, country });
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
