// Mock data for SmartStay Cordillera

// Properties data
export const properties = [
  {
    id: 1,
    title: "Cozy Studio near SLU",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    price: 5000,
    location: "Bonifacio St, Cordillera Administrative Region",
    type: "Studio",
    verified: true,
    aiRecommended: true,
    distance: "5 min to SLU",
    rating: 4.5,
    amenities: ["WiFi", "Study Area", "Kitchen", "Laundry"],
    description: "Perfect for students! This cozy studio apartment is just a 5-minute walk from Saint Louis University. Fully furnished with a study area, kitchenette, and high-speed internet.",
    blockchainData: {
      verified: true,
      hash: "0x7d8f3e29b7e284f3e3b1f9c6b4d5a6c7b8a9f0e1d2c3b4a5",
      timestamp: "2023-10-15T08:30:45Z",
      verifiedBy: "City Housing Department",
      transactions: [
        { id: "tx1", date: "2023-10-15", type: "Verification", blockNumber: 1523456, hash: "0x7d8f3e29b7e284f3e3b1f9c6b4d5a6c7b8a9f0e1d2c3b4a5" },
        { id: "tx2", date: "2023-09-30", type: "Registration", blockNumber: 1520123, hash: "0x3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6" }
      ]
    },
    coordinates: {
      lat: 16.4023,
      lng: 120.5960
    }
  },
  {
    id: 2,
    title: "Mountain View Apartment",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    price: 8000,
    location: "Upper Session Road, Cordillera Administrative Region",
    type: "1-Bedroom",
    verified: true,
    aiRecommended: false,
    distance: "10 min to SM Cordillera",
    rating: 4.8,
    amenities: ["WiFi", "Balcony", "Full Kitchen", "Parking", "Security"],
    description: "Enjoy breathtaking mountain views from this modern 1-bedroom apartment. Located near Session Road with easy access to shopping, dining, and entertainment.",
    blockchainData: {
      verified: true,
      hash: "0x3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6",
      timestamp: "2023-10-10T14:22:33Z",
      verifiedBy: "City Housing Department",
      transactions: [
        { id: "tx3", date: "2023-10-10", type: "Verification", blockNumber: 1522890, hash: "0x3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6" },
        { id: "tx4", date: "2023-09-25", type: "Registration", blockNumber: 1519456, hash: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3" }
      ]
    },
    coordinates: {
      lat: 16.4123,
      lng: 120.5960
    }
  },
  {
    id: 3,
    title: "UP Cordillera Student Dormitory",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 3500,
    location: "Gov. Pack Road, Cordillera Administrative Region",
    type: "Dormitory",
    verified: false,
    aiRecommended: true,
    distance: "2 min to UP Cordillera",
    rating: 4.2,
    amenities: ["WiFi", "Study Hall", "Shared Kitchen", "Laundry"],
    description: "Budget-friendly dormitory for UP Cordillera students. Features shared rooms with individual study spaces, common areas, and 24/7 security. Perfect for students looking for affordable accommodation near campus.",
    blockchainData: {
      verified: false,
      hash: "",
      timestamp: "",
      verifiedBy: "",
      transactions: []
    },
    coordinates: {
      lat: 16.4023,
      lng: 120.6060
    }
  },
  {
    id: 4,
    title: "Luxury Condo with City View",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    price: 12000,
    location: "Leonard Wood Road, Cordillera Administrative Region",
    type: "2-Bedroom",
    verified: true,
    aiRecommended: true,
    distance: "15 min to Burnham Park",
    rating: 4.9,
    amenities: ["WiFi", "Balcony", "Full Kitchen", "Parking", "Gym", "Security"],
    description: "Luxurious 2-bedroom condominium with panoramic views of Cordillera Administrative Region. This premium property features high-end finishes, a fully equipped kitchen, and building amenities including a gym and function room.",
    blockchainData: {
      verified: true,
      hash: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3",
      timestamp: "2023-10-05T09:15:20Z",
      verifiedBy: "City Housing Department",
      transactions: [
        { id: "tx5", date: "2023-10-05", type: "Verification", blockNumber: 1521234, hash: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3" },
        { id: "tx6", date: "2023-09-20", type: "Registration", blockNumber: 1518789, hash: "0x9f8e7d6c5b4a3e2d1c0b9a8f7e6d5c4b3a2e1d0" }
      ]
    },
    coordinates: {
      lat: 16.4223,
      lng: 120.5860
    }
  },
  {
    id: 5,
    title: "Traditional Cordillera Boarding House",
    image: "https://files01.pna.gov.ph/ograph/2018/12/17/bgo-sagada-art-hub-2.jpg",
    price: 4000,
    location: "Naguilian Road, Cordillera Administrative Region",
    type: "Boarding House",
    verified: false,
    aiRecommended: false,
    distance: "15 min to City Proper",
    rating: 3.9,
    amenities: ["Shared Rooms", "Common Bath", "Meals Included"],
    description: "Experience traditional Cordillera living in this cozy boarding house. Affordable rates with meals included, ideal for students or budget travelers.",
    blockchainData: {
      verified: false,
      hash: "",
      timestamp: "",
      verifiedBy: "",
      transactions: []
    },
    coordinates: {
      lat: 16.4023,
      lng: 120.5760
    }
  },
  {
    id: 6,
    title: "Modern 1BR near Session Road",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 7000,
    location: "Session Road, Cordillera Administrative Region",
    type: "1-Bedroom",
    verified: true,
    aiRecommended: false,
    distance: "3 min to SM Cordillera",
    rating: 4.6,
    amenities: ["WiFi", "Kitchen", "Parking", "Security"],
    description: "Modern 1-bedroom apartment right on Session Road. Walking distance to shops, restaurants, and public transport. Ideal for young professionals.",
    blockchainData: {
      verified: true,
      hash: "0x9f8e7d6c5b4a3e2d1c0b9a8f7e6d5c4b3a2e1d0",
      timestamp: "2023-10-12T11:05:10Z",
      verifiedBy: "City Housing Department",
      transactions: [
        { id: "tx7", date: "2023-10-12", type: "Verification", blockNumber: 1523001, hash: "0x9f8e7d6c5b4a3e2d1c0b9a8f7e6d5c4b3a2e1d0" },
        { id: "tx8", date: "2023-09-28", type: "Registration", blockNumber: 1519890, hash: "0x7d8f3e29b7e284f3e3b1f9c6b4d5a6c7b8a9f0e1d2c3b4a5" }
      ]
    },
    coordinates: {
      lat: 16.4150,
      lng: 120.5930
    }
  },

  {
    id: 7,
    title: "Modern Studio Type Apartment",
    image: "https://cdn.home-designing.com/wp-content/uploads/2014/06/white-modern-studio-design.jpeg",
    price: 6500,
    location: "Tabuk, Cordillera Administrative Region",
    type: "2-Bedroom",
    verified: true,
    aiRecommended: true,
    distance: "5 min to Lorem Ipsum",
    rating: 4.6,
    amenities: ["WiFi", "Kitchen", "Parking", "Security"],
    description: "Modern 2-bedroom apartment right on Session Road. Walking distance to shops, restaurants, and public transport. Ideal for young professionals.",
    blockchainData: {
      verified: true,
      hash: "0x9f8e7d6c5b4a3e2d1c0b9a8f7e6d5c4b3a283jnfge3",
      timestamp: "2023-10-12T11:05:10Z",
      verifiedBy: "Tabuk City Housing Department",
      transactions: [
        { id: "tx7", date: "2023-10-12", type: "Verification", blockNumber: 1523001, hash: "0x9f8e7d6c5b4a3e2d1c0b9a8f7e6d5c4b3a2e1d0" },
        { id: "tx8", date: "2023-09-28", type: "Registration", blockNumber: 1519890, hash: "0x7d8f3e29b7e284f3e3b1f9c6b4d5a6c7b8a9f0e1d2c3b4a5" }
      ]
    },
    coordinates: {
      lat: 16.4150,
      lng: 120.5930
    }
  }
];

export const landmarks = [
  {
    id: 1,
    name: "Burnham Park",
    location: "Jose Abad Santos Dr, Cordillera Administrative Region",
    type: "Park",
    description: "A historic urban park in the heart of Cordillera Administrative Region, famous for its man-made lake, boating, and recreational activities.",
    image: "https://images.unsplash.com/photo-1595877244574-e90ce41a1adb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9hcmRpbmclMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 16.4000,
      lng: 120.5900
    }
  },
  {
    id: 2,
    name: "Mines View Park",
    location: "Mines View, Cordillera Administrative Region",
    type: "Park",
    description: "Offers a stunning panoramic view of the Cordillera mountains and the mining town of Itogon. A popular tourist destination in Cordillera.",
    image: "https://images.unsplash.com/photo-1595877244574-e90ce41a1adb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9hcmRpbmclMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 16.4200,
      lng: 120.6200
    }
  },
  {
    id: 3,
    name: "The Mansion",
    location: "Romulo Dr, Cordillera Administrative Region",
    type: "Historical Landmark",
    description: "The official summer residence of the President of the Philippines, featuring a grand main gate and well-maintained gardens.",
    image: "https://images.unsplash.com/photo-1595877244574-e90ce41a1adb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9hcmRpbmclMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 16.4100,
      lng: 120.6100
    }
  },
  {
    id: 4,
    name: "Camp John Hay",
    location: "Ordonio Dr, Cordillera Administrative Region",
    type: "Recreational Area",
    description: "A former American military recreation facility, now a popular resort complex with hotels, restaurants, and recreational activities in Cordillera.",
    image: "https://images.unsplash.com/photo-1595877244574-e90ce41a1adb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9hcmRpbmclMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 16.3900,
      lng: 120.6100
    }
  }
];
export const schools = [
 {
    id: 1,
    name: "Saint Louis University Cordillera",
    location: "A. Bonifacio St, Cordillera Administrative Region",
    type: "University",
    programs: ["Engineering", "IT", "Nursing"],
    distance: "0.5 km from city center",
    image: "https://images.unsplash.com/photo-1627556704302-bc7b8d071d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "One of the largest universities in Cordillera, known for its strong programs in engineering, information technology, and health sciences.",
    coordinates: {
      lat: 16.4139,
      lng: 120.5960
    }
  },
  {
    id: 2,
    name: "University of the Cordilleras",
    location: "Governor Pack Rd, Cordillera Administrative Region",
    type: "University",
    programs: ["Criminology", "Law", "Teacher Education"],
    distance: "1.2 km from city center",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "A prominent university in Cordillera, offering a wide range of undergraduate and postgraduate programs, particularly strong in criminology and law.",
    coordinates: {
      lat: 16.4023,
      lng: 120.6060
    }
  },
  {
    id: 3,
    name: "University of Cordillera",
    location: "General Luna Rd, Cordillera Administrative Region",
    type: "University",
    programs: ["Business", "Dentistry", "Computer Science"],
    distance: "0.8 km from city center",
    image: "https://images.unsplash.com/photo-1577563908411-ce47e4e1957e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    description: "Known for its business, dentistry, and computer science programs, the University of Cordillera is a key educational institution in the region.",
    coordinates: {
      lat: 16.4100,
      lng: 120.5900
    }
  },
  {
    id: 4,
    name: "Cordillera Central University",
    location: "Magsaysay Ave, Cordillera Administrative Region",
    type: "University",
    programs: ["Education", "Criminal Justice", "Hotel & Restaurant Management"],
    distance: "1.5 km from city center",
    image: "https://images.unsplash.com/photo-1543269664-76bc3997932c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDE2fHx1bml2ZXJzaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Offers diverse programs with a focus on education, criminal justice, and hospitality management, serving a broad student population in Cordillera.",
    coordinates: {
      lat: 16.4150,
      lng: 120.6000
    }
  }

];

export const mockListings = properties;

export const mockUsers = [
  { email: "admin@example.com", password: "adminpass", role: "admin" },
  { email: "user@example.com", password: "userpass", role: "user" },
];

export const mockAdminData = {
  users: [
    { id: 1, name: "Alice Smith", email: "alice@example.com", role: "admin" },
    { id: 2, name: "Bob Johnson", email: "bob@example.com", role: "user" },
  ],
  reports: [
    { id: 1, title: "Monthly Performance", date: "2023-10-31" },
    { id: 2, title: "User Engagement", date: "2023-10-25" },
  ],
};

export const mockUserProfile = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  savedListings: [1, 4],
  applicationHistory: [
    { id: 101, listingId: 2, status: "pending", date: "2023-10-20" },
  ],
};

 
