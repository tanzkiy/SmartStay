// Mock data for SmartStay Cordillera

// SmartLease data
export const smartLeases = [
  {
    id: 1,
    propertyId: 1,
    tenantId: 1,
    landlordId: 1,
    startDate: "2023-11-01",
    endDate: "2024-10-31",
    monthlyRent: 5000,
    securityDeposit: 15000,
    status: "active",
    blockchainVerified: true,
    blockchainHash: "0x7d8f3e29b7e284f3e3b1f9c6b4d5a6c7b8a9f0e1d2c3b4a5",
    verificationDate: "2023-10-25T10:30:00Z",
    terms: {
      utilities: "included",
      maintenance: "landlord_responsible",
      pets: "not_allowed",
      smoking: "not_allowed"
    },
    payments: [
      { month: "2023-11", amount: 5000, status: "paid", date: "2023-11-01" },
      { month: "2023-12", amount: 5000, status: "paid", date: "2023-12-01" },
      { month: "2024-01", amount: 5000, status: "pending", date: null }
    ]
  },
  {
    id: 2,
    propertyId: 2,
    tenantId: 2,
    landlordId: 2,
    startDate: "2023-10-15",
    endDate: "2024-10-14",
    monthlyRent: 8000,
    securityDeposit: 24000,
    status: "active",
    blockchainVerified: true,
    blockchainHash: "0x3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6",
    verificationDate: "2023-10-10T14:45:00Z",
    terms: {
      utilities: "tenant_responsible",
      maintenance: "shared",
      pets: "allowed_with_deposit",
      smoking: "designated_areas"
    },
    payments: [
      { month: "2023-10", amount: 8000, status: "paid", date: "2023-10-15" },
      { month: "2023-11", amount: 8000, status: "paid", date: "2023-11-15" },
      { month: "2023-12", amount: 8000, status: "pending", date: null }
    ]
  },
  {
    id: 3,
    propertyId: 4,
    tenantId: 3,
    landlordId: 3,
    startDate: "2023-12-01",
    endDate: "2024-11-30",
    monthlyRent: 12000,
    securityDeposit: 36000,
    status: "pending_verification",
    blockchainVerified: false,
    blockchainHash: "",
    verificationDate: null,
    terms: {
      utilities: "included",
      maintenance: "landlord_responsible",
      pets: "allowed",
      smoking: "not_allowed"
    },
    payments: []
  }
];

// Documents data
export const documents = [
  {
    id: 1,
    propertyId: 1,
    landlordId: 1,
    type: "business_permit",
    fileName: "business_permit_ana_d.pdf",
    uploadDate: "2023-09-15T08:30:00Z",
    verified: true,
    verifiedBy: "admin",
    verifiedAt: "2023-09-16T10:15:00Z",
    expiryDate: "2024-09-15",
    status: "active"
  },
  {
    id: 2,
    propertyId: 1,
    landlordId: 1,
    type: "valid_id",
    fileName: "valid_id_ana_d.pdf",
    uploadDate: "2023-09-15T08:35:00Z",
    verified: true,
    verifiedBy: "admin",
    verifiedAt: "2023-09-16T10:20:00Z",
    expiryDate: "2028-09-15",
    status: "active"
  },
  {
    id: 3,
    propertyId: 2,
    landlordId: 2,
    type: "business_permit",
    fileName: "business_permit_mark_t.pdf",
    uploadDate: "2023-08-20T14:20:00Z",
    verified: true,
    verifiedBy: "partner",
    verifiedAt: "2023-08-25T09:30:00Z",
    expiryDate: "2024-08-20",
    status: "active"
  },
  {
    id: 4,
    propertyId: 3,
    landlordId: 3,
    type: "business_permit",
    fileName: "business_permit_maria_l.pdf",
    uploadDate: "2023-10-01T11:45:00Z",
    verified: false,
    verifiedBy: null,
    verifiedAt: null,
    expiryDate: "2024-10-01",
    status: "pending_verification"
  }
];

// Blockchain Records data
export const blockchainRecords = [
  {
    id: 1,
    propertyId: 1,
    transactionType: "property_verification",
    hash: "0x7d8f3e29b7e284f3e3b1f9c6b4d5a6c7b8a9f0e1d2c3b4a5",
    blockNumber: 1523456,
    timestamp: "2023-10-15T08:30:45Z",
    verifiedBy: "City Housing Department",
    status: "confirmed",
    gasUsed: 21000,
    network: "BlockVerify"
  },
  {
    id: 2,
    propertyId: 2,
    transactionType: "property_verification",
    hash: "0x3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6",
    blockNumber: 1522890,
    timestamp: "2023-10-10T14:22:33Z",
    verifiedBy: "City Housing Department",
    status: "confirmed",
    gasUsed: 21000,
    network: "BlockVerify"
  },
  {
    id: 3,
    propertyId: 1,
    transactionType: "lease_agreement",
    hash: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3",
    blockNumber: 1524000,
    timestamp: "2023-10-25T10:30:00Z",
    verifiedBy: "SmartStay Admin",
    status: "confirmed",
    gasUsed: 45000,
    network: "BlockVerify"
  },
  {
    id: 4,
    propertyId: 4,
    transactionType: "property_verification",
    hash: "0x9f8e7d6c5b4a3e2d1c0b9a8f7e6d5c4b3a2e1d0",
    blockNumber: 1523001,
    timestamp: "2023-10-12T11:05:10Z",
    verifiedBy: "City Housing Department",
    status: "confirmed",
    gasUsed: 21000,
    network: "BlockVerify"
  }
];

// InsightDash Analytics data
export const insightDashData = {
  overview: {
    totalProperties: 10,
    verifiedProperties: 7,
    activeLeases: 2,
    pendingVerifications: 3,
    monthlyRevenue: 66000,
    occupancyRate: 85.7
  },
  trends: {
    propertyRegistrations: [
      { month: "Aug 2023", count: 2 },
      { month: "Sep 2023", count: 1 },
      { month: "Oct 2023", count: 3 },
      { month: "Nov 2023", count: 1 }
    ],
    verifications: [
      { month: "Aug 2023", count: 2 },
      { month: "Sep 2023", count: 1 },
      { month: "Oct 2023", count: 2 },
      { month: "Nov 2023", count: 0 }
    ],
    leaseSignings: [
      { month: "Sep 2023", count: 1 },
      { month: "Oct 2023", count: 1 },
      { month: "Nov 2023", count: 1 },
      { month: "Dec 2023", count: 0 }
    ]
  },
  demographics: {
    propertyTypes: {
      "Studio": 2,
      "1-Bedroom": 3,
      "2-Bedroom": 2,
      "3-Bedroom": 1,
      "Dormitory": 1,
      "Boarding House": 1
    },
    priceRanges: {
      "Under ₱5,000": 3,
      "₱5,000 - ₱8,000": 3,
      "₱8,000 - ₱12,000": 1,
      "Over ₱12,000": 3
    },
    locations: {
      "Burnham Park Area": 1,
      "Session Road": 1,
      "Camp John Hay": 1,
      "Mines View Park": 1,
      "Sagada": 1,
      "Banaue": 1,
      "Tabuk": 1
    }
  },
  performance: {
    averageVerificationTime: "3.2 days",
    landlordSatisfaction: 4.6,
    tenantSatisfaction: 4.4,
    blockchainUptime: 99.9
  }
};

// Notifications data
export const notifications = [
  {
    id: 1,
    userId: 1,
    role: "admin",
    type: "property_submitted",
    title: "New Property Submitted",
    message: "Ana D. has submitted a new property for verification: 'Cozy Studio near SLU'",
    timestamp: "2023-10-15T08:30:00Z",
    read: false,
    priority: "high",
    actionRequired: true,
    relatedId: 1
  },
  {
    id: 2,
    userId: 1,
    role: "admin",
    type: "verification_completed",
    title: "Property Verified",
    message: "Property 'Mountain View Apartment' has been verified by LGU Partner",
    timestamp: "2023-10-10T14:45:00Z",
    read: true,
    priority: "medium",
    actionRequired: false,
    relatedId: 2
  },
  {
    id: 3,
    userId: 2,
    role: "partner",
    type: "verification_request",
    title: "Verification Request",
    message: "New property verification request from Admin: 'UP Cordillera Student Dormitory'",
    timestamp: "2023-10-01T11:45:00Z",
    read: false,
    priority: "high",
    actionRequired: true,
    relatedId: 3
  },
  {
    id: 4,
    userId: 3,
    role: "landlord",
    type: "property_approved",
    title: "Property Approved",
    message: "Your property 'Luxury Condo with City View' has been approved and is now live!",
    timestamp: "2023-10-05T09:15:20Z",
    read: true,
    priority: "high",
    actionRequired: false,
    relatedId: 4
  },
  {
    id: 5,
    userId: 3,
    role: "landlord",
    type: "verification_rejected",
    title: "Document Verification Failed",
    message: "Your business permit for 'Traditional Cordillera Boarding House' was rejected. Please upload a valid document.",
    timestamp: "2023-09-28T16:20:00Z",
    read: false,
    priority: "high",
    actionRequired: true,
    relatedId: 5
  },
  {
    id: 6,
    userId: 4,
    role: "renter",
    type: "lease_signed",
    title: "Lease Agreement Signed",
    message: "Your lease for 'Cozy Studio near SLU' has been signed and blockchain verified!",
    timestamp: "2023-10-25T10:30:00Z",
    read: false,
    priority: "high",
    actionRequired: false,
    relatedId: 1
  },
  {
    id: 7,
    userId: 4,
    role: "renter",
    type: "payment_due",
    title: "Rent Payment Due",
    message: "Your rent payment of ₱5,000 for January 2024 is due in 3 days.",
    timestamp: "2023-12-28T09:00:00Z",
    read: false,
    priority: "medium",
    actionRequired: true,
    relatedId: 1
  }
];

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
    title: "Mountain Retreat in Sagada",
    image: "https://cdn.home-designing.com/wp-content/uploads/2014/06/white-modern-studio-design.jpeg",
    price: 6500,
    location: "Sagada, Mountain Province",
    type: "2-Bedroom",
    verified: true,
    aiRecommended: true,
    distance: "5 min to Sagada Town Center",
    rating: 4.6,
    amenities: ["WiFi", "Kitchen", "Parking", "Security"],
    description: "Modern 2-bedroom apartment in the heart of Sagada. Experience the cool mountain climate while enjoying modern amenities. Perfect for nature lovers and adventurers.",
    blockchainData: {
      verified: true,
      hash: "0x9f8e7d6c5b4a3e2d1c0b9a8f7e6d5c4b3a283jnfge3",
      timestamp: "2023-10-12T11:05:10Z",
      verifiedBy: "Sagada LGU",
      transactions: [
        { id: "tx7", date: "2023-10-12", type: "Verification", blockNumber: 1523001, hash: "0x9f8e7d6c5b4a3e2d1c0b9a8f7e6d5c4b3a2e1d0" },
        { id: "tx8", date: "2023-09-28", type: "Registration", blockNumber: 1519890, hash: "0x7d8f3e29b7e284f3e3b1f9c6b4d5a6c7b8a9f0e1d2c3b4a5" }
      ]
    },
    coordinates: {
      lat: 17.0833,
      lng: 120.9000
    }
  },
  {
    id: 8,
    title: "Banaue Rice Terraces View Lodge",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    price: 5500,
    location: "Banaue, Ifugao",
    type: "1-Bedroom",
    verified: true,
    aiRecommended: true,
    distance: "2 min to Rice Terraces",
    rating: 4.7,
    amenities: ["WiFi", "Mountain View", "Traditional Architecture", "Cultural Tours"],
    description: "Stay in a lodge overlooking the UNESCO World Heritage Banaue Rice Terraces. Experience traditional Ifugao culture while enjoying modern comforts.",
    blockchainData: {
      verified: true,
      hash: "0x8e7d6c5b4a3e2d1c0b9a8f7e6d5c4b3a2e1d0c9b8a7f6",
      timestamp: "2023-10-08T09:30:15Z",
      verifiedBy: "Banaue LGU",
      transactions: [
        { id: "tx9", date: "2023-10-08", type: "Verification", blockNumber: 1522500, hash: "0x8e7d6c5b4a3e2d1c0b9a8f7e6d5c4b3a2e1d0c9b8a7f6" },
        { id: "tx10", date: "2023-09-22", type: "Registration", blockNumber: 1519200, hash: "0x6e5d4c3b2a1e0d9c8b7a6f5e4d3c2b1a0e9d8c7b6a5" }
      ]
    },
    coordinates: {
      lat: 16.9167,
      lng: 121.0667
    }
  },
  {
    id: 9,
    title: "Strawberry Farm Cottage",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    price: 4800,
    location: "La Trinidad, Benguet",
    type: "Studio",
    verified: true,
    aiRecommended: false,
    distance: "3 min to Strawberry Farms",
    rating: 4.3,
    amenities: ["WiFi", "Garden", "Fresh Produce", "Mountain Views"],
    description: "Charming cottage near the famous strawberry farms of La Trinidad. Pick your own strawberries and enjoy the cool mountain air.",
    blockchainData: {
      verified: true,
      hash: "0x7f6e5d4c3b2a1e0d9c8b7a6f5e4d3c2b1a0e9d8c7b6",
      timestamp: "2023-10-20T11:45:30Z",
      verifiedBy: "La Trinidad LGU",
      transactions: [
        { id: "tx11", date: "2023-10-20", type: "Verification", blockNumber: 1523800, hash: "0x7f6e5d4c3b2a1e0d9c8b7a6f5e4d3c2b1a0e9d8c7b6" },
        { id: "tx12", date: "2023-10-05", type: "Registration", blockNumber: 1521100, hash: "0x5e4d3c2b1a0e9d8c7b6a5f4e3d2c1b0a9e8d7c6b5a4" }
      ]
    },
    coordinates: {
      lat: 16.4500,
      lng: 120.5833
    }
  },
  {
    id: 10,
    title: "Camp John Hay Resort Villa",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    price: 15000,
    location: "Camp John Hay, Baguio City",
    type: "3-Bedroom",
    verified: true,
    aiRecommended: true,
    distance: "On-site at Camp John Hay",
    rating: 4.9,
    amenities: ["WiFi", "Pool", "Golf Course", "Fine Dining", "Spa"],
    description: "Luxurious villa at the prestigious Camp John Hay resort. Enjoy world-class amenities, golf, and the cool Baguio climate.",
    blockchainData: {
      verified: true,
      hash: "0x6f5e4d3c2b1a0e9d8c7b6a5f4e3d2c1b0a9e8d7c6b5",
      timestamp: "2023-10-18T14:20:45Z",
      verifiedBy: "Baguio City LGU",
      transactions: [
        { id: "tx13", date: "2023-10-18", type: "Verification", blockNumber: 1523600, hash: "0x6f5e4d3c2b1a0e9d8c7b6a5f4e3d2c1b0a9e8d7c6b5" },
        { id: "tx14", date: "2023-10-01", type: "Registration", blockNumber: 1520500, hash: "0x4e3d2c1b0a9e8d7c6b5a4f3e2d1c0b9a8e7d6c5b4a3" }
      ]
    },
    coordinates: {
      lat: 16.3900,
      lng: 120.6100
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
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
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
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
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
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
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
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
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

export const mockListings = properties.map(property => ({
  ...property,
  status: property.verified ? 'verified' : property.id % 3 === 0 ? 'sent_to_lgu' : property.id % 4 === 0 ? 'rejected' : 'pending',
  submittedOn: property.blockchainData?.timestamp ? new Date(property.blockchainData.timestamp).toISOString().split('T')[0] : '2023-10-15',
  owner: property.id === 1 ? 'Ana D.' : property.id === 2 ? 'Mark T.' : property.id === 3 ? 'Maria L.' : property.id === 4 ? 'Carlos R.' : property.id === 5 ? 'Elena S.' : property.id === 6 ? 'Roberto M.' : 'Unknown Owner',
  lguVerified: property.verified,
  blockchainVerified: property.verified,
  lguVerifiedBy: property.verified ? 'Baguio City LGU' : null,
  lguVerifiedAt: property.verified ? new Date(property.blockchainData?.timestamp || '2023-10-15').toISOString() : null
}));

export const mockUsers = [
  { email: "admin@example.com", password: "adminpass", role: "admin" },
  { email: "partner@example.com", password: "partnerpass", role: "partner" },
  { email: "landlord@example.com", password: "landlordpass", role: "landlord" },
  { email: "renter@example.com", password: "renterpass", role: "renter" },
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

export const mockLandlordProfile = {
  id: 1,
  name: "Ana D.",
  email: "landlord@example.com",
  properties: [1, 2, 3], // Property IDs owned by this landlord
  verificationStatus: "verified",
  businessPermit: "BP-2023-001",
  validId: "ID-123456789"
};

 
