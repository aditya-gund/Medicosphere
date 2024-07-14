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
      profilePic: "https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1707422532886/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w",
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
        profilePic: "https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1707422532886/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w",
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
    host: {
      firstName: "Aditya",
      lastName: "Gund",
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
        profilePic: "https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1707422532886/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w",
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
  return new Promise((resolve, reject) => {
    const data = Events.filter((event) => event.eventId === eventId);
    setTimeout(
      () => {
        if(data.length > 0)
          resolve({ data:  data[0]})
        else
          reject(new Error("Event not found."));
      },
      1200
    );
  });
}
