const Venues = [
  {
    id: 1,
    address: "BR-09, Ardent House",
    country: "India",
    city: "Bangalore",
    state: "Karnataka",
  },
  {
    id: 2,
    address: "PB-01, JPYG Mall",
    country: "India",
    city: "Mumbai",
    state: "Maharashtra",
  },
];

export function getVenueById(venueId) {
  return new Promise((resolve) => {
    setTimeout(
      resolve({ data: Venues.filter(({ id }) => id === venueId) }[0]),
      1200
    );
  });
}
