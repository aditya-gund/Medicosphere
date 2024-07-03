const Events = [
  {
    id: 1,
    eventId: "Event1",
    product: "Test Product 1",
    topic: "Test Topic 1",
    host: {
      firstName: "Abhinov",
      lastName: "Mishra",
      email: "test1@gmail.com",
      role: "ADMIN",
      profilePic: null,
    },
    date: new Date(),
    time: "12:00 AM",
    venue: {
      id: 1,
      address: "BR-09, Ardent House",
      country: "India",
      city: "Bangalore",
      state: "Karnataka",
    },
    attendees: [
      {
        firstName: "Abhinov",
        lastName: "Mishra",
        email: "test1@gmail.com",
        role: "ADMIN",
        profilePic: null,
      },
      {
        firstName: "Aditya",
        lastName: "Gund",
        email: "test2@gmail.com",
        role: "MANAGER",
        profilePic: null,
      },
    ],
  },
  {
    id: 2,
    eventId: "Event2",
    product: "Test Product 2",
    topic: "Test Topic 2",
    host: 2,
    date: new Date(),
    time: "12:00 AM",
    venue: {
      id: 1,
      address: "BR-09, Ardent House",
      country: "India",
      city: "Bangalore",
      state: "Karnataka",
    },
    attendees: [
      {
        firstName: "Abhinov",
        lastName: "Mishra",
        email: "test1@gmail.com",
        role: "ADMIN",
        profilePic: null,
      },
      {
        firstName: "Aditya",
        lastName: "Gund",
        email: "test2@gmail.com",
        role: "MANAGER",
        profilePic: null,
      },
    ],
  },
];

export function createEvent(event) {
  return new Promise((resolve) => {
    setTimeout(resolve({ data: Events[0] }), 1200);
  });
}

export function cancelEvent(eventId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ status: 200 }), 3000);
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
      resolve({ data: Events.filter((event) => event.eventId.startsWith(eventId)) }),
      1200
    );
  });
}
