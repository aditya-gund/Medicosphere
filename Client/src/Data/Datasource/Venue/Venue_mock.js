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
      3000
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

export function getCountries()
{
  return Countries;
}

export function unlistVenue()
{
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({status: 200});
    }, 3000);
  });
}

export function updateVenue(venue)
{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({status: 200});
    }, 3000);
  })
}

const Venues = [
  {
    id: 1,
    address: "BR-09, Ardent House",
    country: "India",
    city: "Bengaluru",
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

const Countries = [
  {
    "country": "India",
    "states": [
      {
        "state": "Gujarat",
        "cities": ["Ahmedabad", "Surat", "Bharuch", "Ankleshwar", "Vadodara"]
      },
      {
        "state": "Maharashtra",
        "cities": ["Mumbai", "Navi Mumbai", "Pune"]
      },
      {
        "state": "Uttar Pradesh",
        "cities": ["Agra", "Kanpur", "Varanasi", "Lucknow", "Noida"]
      },
      {
        "state": "Karnataka",
        "cities": ["Bengaluru", "Mangaluru", "Udupi"]
      }
    ]
  },
  {
    "country": "United States",
    "states": [
      {
        "state": "California",
        "cities": ["Los Angeles", "San Francisco", "San Diego", "Sacramento"]
      },
      {
        "state": "Texas",
        "cities": ["Houston", "Dallas", "Austin", "San Antonio"]
      },
      {
        "state": "New York",
        "cities": ["New York City", "Buffalo", "Rochester", "Albany"]
      },
      {
        "state": "Florida",
        "cities": ["Miami", "Orlando", "Tampa", "Jacksonville"]
      }
    ]
  },
  {
    "country": "Canada",
    "states": [
      {
        "state": "Ontario",
        "cities": ["Toronto", "Ottawa", "Mississauga", "Brampton"]
      },
      {
        "state": "Quebec",
        "cities": ["Montreal", "Quebec City", "Laval", "Gatineau"]
      },
      {
        "state": "British Columbia",
        "cities": ["Vancouver", "Victoria", "Surrey", "Burnaby"]
      },
      {
        "state": "Alberta",
        "cities": ["Calgary", "Edmonton", "Red Deer", "Lethbridge"]
      }
    ]
  },
  {
    "country": "Australia",
    "states": [
      {
        "state": "New South Wales",
        "cities": ["Sydney", "Newcastle", "Wollongong", "Coffs Harbour"]
      },
      {
        "state": "Victoria",
        "cities": ["Melbourne", "Geelong", "Ballarat", "Bendigo"]
      },
      {
        "state": "Queensland",
        "cities": ["Brisbane", "Gold Coast", "Cairns", "Townsville"]
      },
      {
        "state": "Western Australia",
        "cities": ["Perth", "Fremantle", "Bunbury", "Albany"]
      }
    ]
  },
  {
    "country": "United Kingdom",
    "states": [
      {
        "state": "England",
        "cities": ["London", "Manchester", "Birmingham", "Liverpool"]
      },
      {
        "state": "Scotland",
        "cities": ["Edinburgh", "Glasgow", "Aberdeen", "Dundee"]
      },
      {
        "state": "Wales",
        "cities": ["Cardiff", "Swansea", "Newport", "Bangor"]
      },
      {
        "state": "Northern Ireland",
        "cities": ["Belfast", "Derry", "Lisburn", "Newry"]
      }
    ]
  },
  {
    "country": "Germany",
    "states": [
      {
        "state": "Bavaria",
        "cities": ["Munich", "Nuremberg", "Augsburg", "Regensburg"]
      },
      {
        "state": "North Rhine-Westphalia",
        "cities": ["Cologne", "Düsseldorf", "Dortmund", "Essen"]
      },
      {
        "state": "Baden-Württemberg",
        "cities": ["Stuttgart", "Mannheim", "Karlsruhe", "Freiburg"]
      },
      {
        "state": "Hesse",
        "cities": ["Frankfurt", "Wiesbaden", "Kassel", "Darmstadt"]
      }
    ]
  }
]