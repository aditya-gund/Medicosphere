import "./EventCard.css";
import EventCardViewHandler from "./EventCardViewHandler";

const EventCard = ({eventId, product, topic, venueId, hostEmail, date, time}) => {

    const {venue, host} = EventCardViewHandler({venueId,hostEmail});

    return (
        <div className="EventCard">
            <div className="host" style={{backgroundColor: `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`}} >
                <span>{host.firstName +" " + host.lastName} <br/></span>
                <img src="/user.svg" alt="creater"/>
            </div>
            <h4>
                {product}<br/>
                {topic}
            </h4>
            <div>
                Location: {venue.address + ", " + venue.state + ", " + venue.country}<br/><br/>
                Date: {date.getDate() + " " + date.getMonth() + " " + date.getFullYear() + " " + time}<br/>
            </div>
            eventId: {eventId}<br></br>
        </div>
    )
};


export default EventCard;