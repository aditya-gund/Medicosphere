const Events = [
  {
    id: 1,
    eventId: "Event1",
    product: "Test Product 1",
    topic: "Test Topic 1",
    host: 1,
    date: new Date(),
    time: new Date().getHours() + ":" + new Date().getMinutes() + " AM",
    venueId: 1,
  },
  {
    id: 2,
    eventId: "Event2",
    product: "Test Product 2",
    topic: "Test Topic 2",
    host: 2,
    date: new Date(),
    time: new Date().getHours() + ":" + new Date().getMinutes() + " PM",
    venueId: 2,
  },
];

export function createEvent(event) {
  return new Promise((resolve) => {
    setTimeout(resolve({ data: event }), 1200);
  });
}

export function deleteEvent(eventId) {
  return new Promise((resolve) => {
    setTimeout(resolve({ status: 204 }), 1200);
  });
}

export function updateEvent(eventId, event) {
  return new Promise((resolve) => {
    setTimeout(
      resolve({
        data: {
          ...event,
          id: eventId,
          eventId: "EventTest",
        },
      }),
      1200
    );
  });
}

export function getEventsForUser(email) {
  return new Promise((resolve) => {
    setTimeout(resolve({ data: Events }), 1200);
  });
}

export function getEventsAtVenue(venueId) {
  return new Promise((resolve) => {
    setTimeout(
      resolve({ data: Events.filter((event) => event.venueId === venueId) }),
      1200
    );
  });
}

export function getEventById(eventId) {
  return new Promise((resolve) => {
    setTimeout(
      resolve({ data: Events.filter((event) => event.eventId === eventId) }),
      1200
    );
  });
}
