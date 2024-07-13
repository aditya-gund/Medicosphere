import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { GetEvent } from "../../../Data/Domain/Event/Event";

export function EventDetailsViewHandler()
{
    
    const {eventId} = useParams();
    const [loading, setLoading] = useState(false);
    const [eventDetails, setEventDetails] = useState({});
    const navigate = useNavigate();
    
    const loadEventDetails = useCallback(async (eventId) => {
        setLoading(true);
        const {data, error} = await GetEvent(eventId);
        if(!error)
        {
            setEventDetails(data);
        }
        else
        {
            alert("Oops! looks like an error has occurred while trying to load data for event " + eventId + ". Please check console for more details");
            console.error(error);
            navigate(-1);
        }
        setLoading(false);
    }, [navigate])

    useEffect(() => {
        loadEventDetails(eventId);
    }, [eventId, loadEventDetails])


    return {
        loading,
        event: eventDetails
    }
}