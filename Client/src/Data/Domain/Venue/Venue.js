import { getAllVenues, getAvailability, getVenueById } from "../../Datasource/Venue/Venue_mock";

export async function GetVenueById(venueId) {
  try {
    const { data } = await getVenueById(venueId);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function GetAllVenues()
{
  try {
    const {data} = await getAllVenues();
    return {data, error: null};
  } catch (error) {
    return {data: null, error};
  }
}

export async function GetAvailability(venueId, date)
{
  try{
    const {data} = await getAvailability(venueId, date);
    return {data, error: null};
  }
  catch(error)
  {
    return {data: null, error};
  }
}
