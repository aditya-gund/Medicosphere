import "./EventDetails.css";
import { Fragment } from "react";
import { EventDetailsViewHandler } from "./EventDetailsViewHandler";

export function EventDetails() {

  const {loading, event} = EventDetailsViewHandler();
  
  if(!loading && JSON.stringify(event) !== JSON.stringify({}))
  return (
    <div className="EventDetails">
      <HostCard
        firstName={event.host.firstName}
        lastName={event.host.lastName}
        email={event.host.email}
        role={event.host.role}
        profilePic={event.host.profilePic}
      />
      <EventCard
        product={event.product}
        topic={event.topic}
        date={event.date}
        time={event.time}
        eventId={event.eventId}
      />
      <VenueCard
        address={event.venue.address}
        city={event.venue.city}
        country={event.venue.country}
        state={event.venue.state}
      />
      <AttendeesCard attendeesList={event.attendees} />
    </div>
  );
  else if(loading)
  {
    return <div className="loader"></div>
  }
  else
  {
    return <></>
  }
}

function EventCard({ product, topic, date, time, eventId }) {
  return (
    <div className="eventCard">
      <div>
        <h2>{product}</h2>
        <h2>{topic}</h2>
      </div>
      <div className="eventDetails">
        <div>Event ID: </div>
        <div>{eventId} </div>
        <div>Date: </div>
        <div>
          {date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()}
        </div>
        <div>Time: </div>
        <div> {time} </div>
      </div>
    </div>
  );
}

function VenueCard({ address, city, state, country }) {
  return (
    <div className="venueCard">
      <div>
        <div>Location:</div>
        <div>{address}</div>
        <div>City: </div>
        <div>{city}</div>
      </div>
      <div>
        <div>State: </div>
        <div>{state}</div>
        <div>Country:</div>
        <div>{country}</div>
      </div>
    </div>
  );
}

function AttendeesCard({ attendeesList }) {
  return (
    <div className="attendeesList">
      <div>Person</div>
      <div>Email</div>
      <div>Role</div>
      {attendeesList.map(({ firstName, lastName, email, role, profilePic }) => (
        <Fragment key={email}>
          <div>
            <img src={profilePic ? profilePic : "/user.svg"} alt="profile" />
            {firstName + " " + lastName}
          </div>
          <div>{email}</div>
          <div>{role}</div>
        </Fragment>
      ))}
    </div>
  );
}

function HostCard({ firstName, lastName, email, role, profilePic }) {
  return (
    <div className="hostCard">
      <img src={profilePic ? profilePic : "/user.svg"} alt="host profile" />
      <div>
        <div>Host:</div>
        <div>{firstName + " " + lastName}</div>
        <div>Email:</div>
        <div>{email}</div>
        <div>Role:</div>
        <div>{role}</div>
      </div>
    </div>
  );
}
