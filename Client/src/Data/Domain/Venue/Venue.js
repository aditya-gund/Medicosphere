import { getVenueById } from "../../Datasource/Venue/Venue_mock";

export async function GetVenueById(venueId) {
  try {
    const { data } = await getVenueById(venueId);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
