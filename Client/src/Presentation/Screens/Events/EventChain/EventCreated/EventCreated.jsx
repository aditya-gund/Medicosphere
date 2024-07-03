import "./EventCreated.css";
import { Fragment } from "react";

/**
Cards:
user
venue
event
attendees
 */
export function EventCreated({
  event: {
    product,
    topic,
    time,
    date,
    venue: { address, city, state, country },
    host: { firstName, lastName, email, role, profilePic },
    eventId,
    attendees,
  },
}) {
  return (
    <div className="EventCreated">
      <HostCard
        firstName={firstName}
        lastName={lastName}
        email={email}
        role={role}
        profilePic={profilePic}
      />
      <EventCard
        product={product}
        topic={topic}
        date={date}
        time={time}
        eventId={eventId}
      />
      <VenueCard
        address={address}
        city={city}
        country={country}
        state={state}
      />
      <AttendeesCard attendeesList={attendees} />
    </div>
  );
}

function EventCard({ product, topic, date, time, eventId }) {
  return (
    <div className="eventCard">
      <div>
        <h2>{product}</h2>
        <h2>{topic}</h2>
      </div>
      <div className="eventDetails">
        <div>Event ID: </div><div>{eventId}                                                          </div>
        <div>Date:     </div><div>{date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()}</div>
        <div>Time:     </div><div> {time}                                                            </div>
      </div>
    </div>
  );
}

function VenueCard({ address, city, state, country }) {
  return (
    <div className="venueCard">
      <div>
        <div>Location:</div><div>{address}</div>
        <div>City:    </div><div>{city}</div>
      </div>
      <div>
        <div>State:  </div><div>{state}</div>
        <div>Country:</div><div>{country}</div>
      </div>
    </div>
  );
}

function AttendeesCard({ attendeesList }) {
  return (
    <div className="attendeesList">
      <div>Person</div><div>Email</div><div>Role</div>
      {attendeesList.map(({ firstName, lastName, email, role, profilePic }) => (
        <Fragment key={email}>
          <div><img src={profilePic?profilePic:"/user.svg"} alt="profile" />{firstName + " " + lastName}</div>
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