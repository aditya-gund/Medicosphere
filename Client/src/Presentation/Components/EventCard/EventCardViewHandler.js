import { useMemo } from "react";
import { GetVenueById } from "../../../Data/Domain/Venue/Venue";
import { GetNameByEmail } from "../../../Data/Domain/User/User";

const EventCardViewHandler = ({venueId, host}) => {

    const venue = useMemo(() => {
        return GetVenueById(venueId);
    }, [venueId])

    const hostname = useMemo(() => {
        return GetNameByEmail(host);
    }, [host])

    return {
        venue,
        hostname
    }
}

export default EventCardViewHandler;