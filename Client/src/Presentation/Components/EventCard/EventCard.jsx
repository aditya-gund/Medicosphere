import "./EventCard.css";
import EventCardViewHandler from "./EventCardViewHandler";

const EventCard = ({eventId, product, topic, venueId, host, date, time}) => {

    const {venue, hostname} = EventCardViewHandler({venueId, host});

    return (
        <div className="EventCard">
            eventId: {eventId}
            product: {product}
            topic: {topic}
            host: {hostname}
            venue: {venue.address + ", " + venue.country + ", " + venue.country}
            date: {date + " " + time}
        </div>
    )
};


export default EventCard;