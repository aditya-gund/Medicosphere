import "./EventCard.css";
import EventCardViewHandler from "./EventCardViewHandler";

const EventCard = ({eventId, product, topic, venueId, hostEmail, date, time}) => {

    const {venue, host, bgColor, loading} = EventCardViewHandler({venueId,hostEmail, eventId});
    if(loading)
        return (
            <div className="EventCard Placeholder">
                <div className="host" style={{backgroundColor: "#d4dbe5"}} >
                    <span> &nbsp; </span><br/>
                    <div className="img-placeholder" alt=""/>
                </div>
                <h4>
                    <span className="x-size">&nbsp;</span> <br/>
                    <span className="x-size">&nbsp;</span>
                </h4>
                <span className="h-fill">&nbsp;</span> <br/>
                <span>&nbsp;</span> <br/><br/>
                <span>&nbsp;</span><br/>
                <span>&nbsp;</span> <br></br>
            </div>
        )
    else
        return (
            <div className="EventCard">
                <div className="host" style={{backgroundColor: bgColor}} >
                    <span>{host.firstName +" " + host.lastName} <br/></span>
                    <img src="/user.svg" alt="creater"/>
                </div>
                <h4>
                    {product}<br/>
                    {topic}
                </h4>
                Location: {venue.address + ", " + venue.state + ", " + venue.country}<br/><br/>
                Date: {(date.getDate() + " " + date.getMonth() + " " + date.getFullYear()).replaceAll(" ", "/") + " " + time}<br/>
                eventId: {eventId}<br></br>
            </div>
        )
};


export default EventCard;