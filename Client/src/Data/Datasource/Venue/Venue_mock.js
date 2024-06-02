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

const Availability = [
  "9:00 AM",
  "10:00 AM",
  "1:00 PM",
  "3:00 PM"
]

export function getVenueById(venueId) {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        try {
          const venue = Venues.filter(({ id }) => id === venueId)[0];
          resolve({data: venue})
        } 
        catch (error) {
          resolve({error})
        }
      },
      1200
    );
  });
}

export function getAllVenues() {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        try {
          resolve({data: Venues})
        } 
        catch (error) {
          resolve({error})
        }
      },
      1200
    );
  });
}

export function getAvailability(venueId, date)
{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({data: Availability})
    }, 3000)
  })
}