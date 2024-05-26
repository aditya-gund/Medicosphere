import { GetVenueById } from "../../../Data/Domain/Venue/Venue";
import { GetNameByEmail, GetUserByEmail } from "../../../Data/Domain/User/User";
import { useEffect, useState } from "react";

const EventCardViewHandler = ({venueId, hostEmail}) => {

    const [venue, setVenue] = useState("");
    const [host, setHost] = useState("");

    useEffect(() => {
        
        async function updateVenueFromId()
        {
            const {data, error} = await GetVenueById(venueId);
            if(!error)
            {
                setVenue(data);
            }
            else
            {
                alert("An error occurred while getching venue details.");
                console.error(error);
            }
        }
        
        updateVenueFromId();

    }, [venueId])

    useEffect(() => {
        async function updateHostFromEmail()
        {
            const {data, error} = await GetUserByEmail(hostEmail);
            if(!error)
            {
                setHost(data);
            }
            else
            {
                alert("An error occurred while trying to fetch host information.");
                console.log(error);
            }
        }
        
        updateHostFromEmail();
    }, [hostEmail])

    return {
        venue,
        host
    }
}

export default EventCardViewHandler;