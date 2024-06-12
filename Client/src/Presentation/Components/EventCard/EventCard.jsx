import "./EventCard.css";
import EventCardViewHandler from "./EventCardViewHandler";

const EventCard = ({eventId, product, topic, venue, hostEmail, date, time, checkAndUpdateEvents, updateClickHandler}) => {

    const {host, bgColor, loading, ShowCancelMenu} = EventCardViewHandler({hostEmail, eventId, checkAndUpdateEvents});
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
                Location: {venue? venue.address + ", " + venue.state + ", " + venue.country : ""}<br/><br/>
                Date: {(date.getDate() + " " + date.getMonth() + " " + date.getFullYear()).replaceAll(" ", "/") + " " + time}<br/>
                eventId: {eventId}<br></br>
                <div className="buttons">
                    <button onClick={() => ShowCancelMenu()} style={{color: "red"}} >
                        Cancel Event
                    </button>
                    <button onClick={() => updateClickHandler()}>
                        Update Event
                    </button>
                </div>
            </div>
        )
};


export default EventCard;