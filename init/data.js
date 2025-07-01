const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
  type: "Point",
  coordinates: [-118.788193, 34.031246] // Malibu, United States
},
    categories: ["Beach", "Nature", "Trending"],
    isTrending: true
  },

  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
  type: "Point",
  coordinates: [-73.935242, 40.730610] // New York City, United States
},
    categories: ["Iconic cities", "Luxury", "Trending"],
    isTrending: true
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
  type: "Point",
  coordinates: [-106.817539, 39.191098] // Aspen, United States
},
    categories: ["Mountains", "Nature"],
  isTrending: false
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: {
  type: "Point",
  coordinates: [11.255814, 43.769560] // Florence, Italy
},
    categories: ["Historic", "Luxury"],
  isTrending: false
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: {
  type: "Point",
  coordinates: [-122.676483, 45.523064] // Portland, United States
},
    categories: ["Nature", "Camping"],
  isTrending: false
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: {
  type: "Point",
  coordinates: [-86.851528, 21.161908] // Cancun, Mexico
},
    categories: ["Beach", "Luxury", "Trending"],
  isTrending: true
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
  type: "Point",
  coordinates: [-120.055291, 39.096845] // Lake Tahoe, United States
},
    categories: ["Nature", "Mountains"],
  isTrending: false
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
  type: "Point",
  coordinates: [-118.243685, 34.052234] // Los Angeles, United States
},
    categories: ["Luxury", "Iconic cities", "Trending"],
  isTrending: true
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: {
  type: "Point",
  coordinates: [7.227873, 46.095508] // Verbier, Switzerland
},
    categories: ["Ski", "Mountains", "Luxury"],
  isTrending: false  
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
  type: "Point",
  coordinates: [34.685691, -2.333333] // Serengeti National Park, Tanzania
},
    categories: ["Nature", "Farms"],
  isTrending: false
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
  type: "Point",
  coordinates: [4.904139, 52.367600] // Amsterdam, Netherlands
},
     categories: ["Historic", "Iconic cities"],
  isTrending: false 
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: {
  type: "Point",
  coordinates: [179.1941, -16.5782] // Fiji
},
    categories: ["Island", "Luxury", "Beach", "Trending"],
  isTrending: true
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
  type: "Point",
  coordinates: [-1.8433, 51.8330] // Cotswolds, United Kingdom
},
    categories: ["Historic", "Nature"],
  isTrending: false
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: {
  type: "Point",
  coordinates: [-71.0589, 42.3601] // Boston, United States
},
    categories: ["Historic", "Iconic cities"],
  isTrending: false 
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: {
  type: "Point",
  coordinates: [115.188919, -8.409518] // Bali, Indonesia
},
    categories: ["Beach", "Luxury", "Island", "Trending"],
  isTrending: true
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: {
  type: "Point",
  coordinates: [-115.572645, 51.178363] // Banff, Canada
},
    categories: ["Mountains", "Nature"],
  isTrending: false  
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: {
  type: "Point",
  coordinates: [-80.191790, 25.761680] // Miami, United States
},
    categories: ["Historic", "Beach", "Iconic cities"],
  isTrending: false
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: {
  type: "Point",
  coordinates: [98.398102, 7.880448] // Phuket, Thailand
},
    categories: ["Luxury", "Beach", "Island"],
  isTrending: false
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: {
  type: "Point",
  coordinates: [-4.202646, 56.490671] // Scottish Highlands, United Kingdom
},
     categories: ["Castles", "Historic", "Nature"],
  isTrending: false
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
  type: "Point",
  coordinates: [55.270783, 25.204849] // Dubai, United Arab Emirates
},
   categories: ["Desert", "Luxury", "Trending"],
  isTrending: true
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: {
  type: "Point",
  coordinates: [-110.3626, 46.8797] // Montana, United States
},
    categories: ["Nature", "Mountains", "Camping"],
  isTrending: false  
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: {
  type: "Point",
  coordinates: [25.3562, 37.4467] // Mykonos, Greece
},
    categories: ["Beach", "Island", "Luxury"],
  isTrending: false 
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
  type: "Point",
  coordinates: [-84.0739, 9.7489] // Costa Rica
},
   categories: ["Nature", "Camping"],
  isTrending: false 
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    geometry: {
  type: "Point",
  coordinates: [-79.9311, 32.7765] // Charleston, United States
},
    categories: ["Historic", "Nature"],
  isTrending: false  
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: {
  type: "Point",
  coordinates: [139.6917, 35.6895] // Tokyo, Japan
},
    categories: ["Iconic cities", "Trending"],
  isTrending: false
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    geometry: {
  type: "Point",
  coordinates: [-71.5724, 43.1939] // New Hampshire, United States
},
   categories: ["Nature", "Mountains"],
  isTrending: false 
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: {
  type: "Point",
  coordinates: [73.2207, -0.6140] // Maldives
},
    categories: ["Luxury", "Island", "Beach", "Trending"],
  isTrending: true
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    geometry: {
  type: "Point",
  coordinates: [-106.8175, 39.1911] // Aspen (again), United States
},
    categories: ["Ski", "Mountains", "Luxury"],
  isTrending: false
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
  type: "Point",
  coordinates: [-84.0739, 9.7489] // Costa Rica (again)
},
    categories: ["Beach", "Nature", "Camping"],
  isTrending: false
  },
  {
    title: "Sunset Beach House",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2500,
    location: "Malibu, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },
  {
    title: "Tropical Paradise Villa",
    categories: ["Beach", "Island", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Bali, Indonesia",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Coastal Retreat",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Byron Bay, Australia",
    country: "Australia",
    geometry: { type: "Point", coordinates: [153.6020, -28.6474] }
  },
  {
    title: "Beachfront Bungalow",
    categories: ["Beach", "Trending"],
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Phuket, Thailand",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
  },
  {
    title: "Seaside Escape",
    categories: ["Beach", "Room"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Santorini, Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Palm Cove Villa",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3400,
    location: "Palm Cove, Australia",
    country: "Australia",
    geometry: { type: "Point", coordinates: [145.6709, -16.7445] }
  },
  {
    title: "White Sands Hideaway",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Boracay, Philippines",
    country: "Philippines",
    geometry: { type: "Point", coordinates: [121.9198, 11.9674] }
  },
  {
    title: "Oceanfront Suite",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2900,
    location: "Miami, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
  },
  {
    title: "Lagoon View Cottage",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1500,
    location: "Maui, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-156.3319, 20.7984] }
  },
  {
    title: "Golden Coast House",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "Gold Coast, Australia",
    country: "Australia",
    geometry: { type: "Point", coordinates: [153.4000, -28.0167] }
  },
  {
    title: "Coral Bay Retreat",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2000,
    location: "Coral Bay, Cyprus",
    country: "Cyprus",
    geometry: { type: "Point", coordinates: [32.4000, 35.4000] }
  },
  {
    title: "Azure Shore Villa",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3300,
    location: "Nice, France",
    country: "France",
    geometry: { type: "Point", coordinates: [7.2619, 43.7102] }
  },
  {
    title: "Sunrise Beach Cabin",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1200,
    location: "Goa, India",
    country: "India",
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] }
  },
  {
    title: "Blue Lagoon Bungalow",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "Seashell Cottage",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1300,
    location: "Cornwall, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-5.0737, 50.2660] }
  },
  {
    title: "Palm Beach Villa",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Palm Beach, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-80.0364, 26.7056] }
  },
  {
    title: "Ocean Breeze House",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1900,
    location: "Cape Town, South Africa",
    country: "South Africa",
    geometry: { type: "Point", coordinates: [18.4241, -33.9249] }
  },
  {
    title: "Golden Sands Suite",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3700,
    location: "Dubai, UAE",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Shoreline Haven",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1600,
    location: "Tulum, Mexico",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-87.4653, 20.2110] }
  },
  {
    title: "Pearl Beach Residence",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3900,
    location: "Doha, Qatar",
    country: "Qatar",
    geometry: { type: "Point", coordinates: [51.5310, 25.2854] }
  },
  {
    title: "Sunset Beach House",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2500,
    location: "Malibu, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },
  {
    title: "Tropical Paradise Villa",
    categories: ["Beach", "Island", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Bali, Indonesia",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Coastal Retreat",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Byron Bay, Australia",
    country: "Australia",
    geometry: { type: "Point", coordinates: [153.6020, -28.6474] }
  },
  {
    title: "Beachfront Bungalow",
    categories: ["Beach", "Trending"],
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Phuket, Thailand",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
  },
  {
    title: "Seaside Escape",
    categories: ["Beach", "Room"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Santorini, Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Palm Cove Villa",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3400,
    location: "Palm Cove, Australia",
    country: "Australia",
    geometry: { type: "Point", coordinates: [145.6709, -16.7445] }
  },
  {
    title: "White Sands Hideaway",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Boracay, Philippines",
    country: "Philippines",
    geometry: { type: "Point", coordinates: [121.9198, 11.9674] }
  },
  {
    title: "Oceanfront Suite",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2900,
    location: "Miami, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
  },
  {
    title: "Lagoon View Cottage",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1500,
    location: "Maui, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-156.3319, 20.7984] }
  },
  {
    title: "Golden Coast House",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "Gold Coast, Australia",
    country: "Australia",
    geometry: { type: "Point", coordinates: [153.4000, -28.0167] }
  },
  {
    title: "Coral Bay Retreat",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2000,
    location: "Coral Bay, Cyprus",
    country: "Cyprus",
    geometry: { type: "Point", coordinates: [32.4000, 35.4000] }
  },
  {
    title: "Azure Shore Villa",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3300,
    location: "Nice, France",
    country: "France",
    geometry: { type: "Point", coordinates: [7.2619, 43.7102] }
  },
  {
    title: "Sunrise Beach Cabin",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1200,
    location: "Goa, India",
    country: "India",
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] }
  },
  {
    title: "Blue Lagoon Bungalow",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "Seashell Cottage",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1300,
    location: "Cornwall, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-5.0737, 50.2660] }
  },
  {
    title: "Palm Beach Villa",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Palm Beach, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-80.0364, 26.7056] }
  },
  {
    title: "Ocean Breeze House",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1900,
    location: "Cape Town, South Africa",
    country: "South Africa",
    geometry: { type: "Point", coordinates: [18.4241, -33.9249] }
  },
  {
    title: "Golden Sands Suite",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3700,
    location: "Dubai, UAE",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Shoreline Haven",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1600,
    location: "Tulum, Mexico",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-87.4653, 20.2110] }
  },
  {
    title: "Pearl Beach Residence",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3900,
    location: "Doha, Qatar",
    country: "Qatar",
    geometry: { type: "Point", coordinates: [51.5310, 25.2854] }
  },
  {
    title: "Clarity from Above",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2200,
    location: "Cocoa Beach, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-80.6027, 28.3670] }
  },
  {
    title: "Vacation on Grado Beach",
    categories: ["Beach", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Grado, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [13.3986, 45.7369] }
  },
  {
    title: "Tropical Beach Relaxation",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "Sunset Beach Chairs",
    categories: ["Beach", "Trending"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Barbados",
    country: "Barbados",
    geometry: { type: "Point", coordinates: [-59.5432, 13.1939] }
  },
  {
    title: "Palm Trees and White Sand",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2000,
    location: "Phuket, Thailand",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
  },
  {
    title: "Family Beach Fun",
    categories: ["Beach", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1200,
    location: "Florida, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-81.5158, 27.6648] }
  },
  {
    title: "Romantic Beach Getaway",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Santorini, Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Secluded Beach Cabin",
    categories: ["Beach", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1400,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-83.7534, 9.7489] }
  },
  {
    title: "Luxury Beachfront Resort",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4000,
    location: "Dubai, UAE",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Beachside Yoga Retreat",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1600,
    location: "Bali, Indonesia",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Sun-Kissed Beach House",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3300,
    location: "Miami, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
  },
  {
    title: "Beachfront Family Villa",
    categories: ["Beach", "Family"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2700,
    location: "Cancun, Mexico",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] }
  },
  {
    title: "Ocean Breeze Bungalow",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1900,
    location: "Hawaii, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-155.5828, 19.8968] }
  },
  {
    title: "Beachfront Pool Villa",
    categories: ["Beach", "Luxury", "Amazing Pools"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4500,
    location: "Phuket, Thailand",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
  },
  {
    title: "Sunset Beachfront Deck",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3600,
    location: "Nice, France",
    country: "France",
    geometry: { type: "Point", coordinates: [7.2619, 43.7102] }
  },
  {
    title: "Tropical Beachside Cottage",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Phuket, Thailand",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
  },
  {
    title: "Seaside Hammock Retreat",
    categories: ["Beach", "Nature", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1300,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-83.7534, 9.7489] }
  },
  {
    title: "Coastal Luxury Villa",
    categories: ["Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4200,
    location: "Malibu, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },
  {
    title: "Beachfront Yoga Pavilion",
    categories: ["Beach", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1500,
    location: "Bali, Indonesia",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Alpine Chalet Retreat",
    categories: ["Mountains", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2700,
    location: "Zermatt, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] }
  },
  {
    title: "Rocky Mountain Cabin",
    categories: ["Mountains", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1600,
    location: "Colorado, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-106.4454, 39.5501] }
  },
  {
    title: "Majestic Peaks Lodge",
    categories: ["Mountains", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Banff, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
  },
  {
    title: "Mountain View Hideaway",
    categories: ["Mountains", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Aspen, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] }
  },
  {
    title: "Swiss Alps Chalet",
    categories: ["Mountains", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "St. Moritz, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [9.8380, 46.4983] }
  },
  {
    title: "Mountain Lake Lodge",
    categories: ["Mountains", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Lake Tahoe, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-120.0436, 39.0968] }
  },
  {
    title: "Peakside Cabin",
    categories: ["Mountains", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1200,
    location: "Telluride, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-107.8097, 37.9375] }
  },
  {
    title: "Mountain Sunrise Lodge",
    categories: ["Mountains", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2000,
    location: "Chamonix, France",
    country: "France",
    geometry: { type: "Point", coordinates: [6.8694, 45.9237] }
  },
  {
    title: "Everest Base Camp Tent",
    categories: ["Mountains", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 900,
    location: "Everest Base Camp, Nepal",
    country: "Nepal",
    geometry: { type: "Point", coordinates: [86.8569, 28.0026] }
  },
  {
    title: "Mountain Adventure Cabin",
    categories: ["Mountains", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1500,
    location: "Blue Ridge, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-84.3241, 34.8631] }
  },
  {
    title: "Himalayan Retreat",
    categories: ["Mountains", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3300,
    location: "Ladakh, India",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5833, 34.1526] }
  },
  {
    title: "Patagonian Mountain Lodge",
    categories: ["Mountains", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2200,
    location: "Patagonia, Chile",
    country: "Chile",
    geometry: { type: "Point", coordinates: [-71.5429, -42.8135] }
  },
  {
    title: "Mountain Stream Cabin",
    categories: ["Mountains", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1300,
    location: "Lake District, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-3.0886, 54.4609] }
  },
  {
    title: "Mountain Ridge Retreat",
    categories: ["Mountains", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "Queenstown, New Zealand",
    country: "New Zealand",
    geometry: { type: "Point", coordinates: [168.6626, -45.0312] }
  },
  {
    title: "Mountain Edge Cabin",
    categories: ["Mountains", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1400,
    location: "Pyrenees, Spain",
    country: "Spain",
    geometry: { type: "Point", coordinates: [0.9011, 42.7000] }
  },
  {
    title: "Mountain Lakeview Lodge",
    categories: ["Mountains", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Lake Louise, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-116.2170, 51.4254] }
  },
  {
    title: "Mountain Forest Cabin",
    categories: ["Mountains", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1200,
    location: "Transylvania, Romania",
    country: "Romania",
    geometry: { type: "Point", coordinates: [24.9668, 46.7712] }
  },
  {
    title: "Mountain Panorama Chalet",
    categories: ["Mountains", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3400,
    location: "Cortina d'Ampezzo, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.1357, 46.5405] }
  },
  {
    title: "Mountain Adventure Hut",
    categories: ["Mountains", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1000,
    location: "Dolomites, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.2500, 46.5000] }
  },
  {
    title: "Loire Valley Royal Castle",
    categories: ["Castles", "Luxury", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Loire Valley, France",
    country: "France",
    geometry: { type: "Point", coordinates: [0.9667, 47.3333] }
  },
  {
    title: "Edinburgh Castle Suite",
    categories: ["Castles", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Edinburgh, Scotland",
    country: "UK",
    geometry: { type: "Point", coordinates: [-3.1883, 55.9533] }
  },
  {
    title: "Bavarian Castle Retreat",
    categories: ["Castles", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4000,
    location: "Bavaria, Germany",
    country: "Germany",
    geometry: { type: "Point", coordinates: [10.9347, 48.7904] }
  },
  {
    title: "Irish Castle Experience",
    categories: ["Castles", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "County Clare, Ireland",
    country: "Ireland",
    geometry: { type: "Point", coordinates: [-9.0627, 52.9045] }
  },
  {
    title: "Transylvanian Fortress Stay",
    categories: ["Castles", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2500,
    location: "Transylvania, Romania",
    country: "Romania",
    geometry: { type: "Point", coordinates: [24.9668, 46.7712] }
  },
  {
    title: "French Chateau Escape",
    categories: ["Castles", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3900,
    location: "Bordeaux, France",
    country: "France",
    geometry: { type: "Point", coordinates: [-0.5792, 44.8378] }
  },
  {
    title: "Scottish Highlands Castle",
    categories: ["Castles", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3700,
    location: "Inverness, Scotland",
    country: "UK",
    geometry: { type: "Point", coordinates: [-4.2247, 57.4778] }
  },
  {
    title: "Spanish Castle Getaway",
    categories: ["Castles", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3300,
    location: "Segovia, Spain",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-4.1184, 40.9429] }
  },
  {
    title: "Portuguese Castle Villa",
    categories: ["Castles", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3400,
    location: "Sintra, Portugal",
    country: "Portugal",
    geometry: { type: "Point", coordinates: [-9.3904, 38.8029] }
  },
  {
    title: "Czech Castle Residence",
    categories: ["Castles", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2600,
    location: "Prague, Czech Republic",
    country: "Czech Republic",
    geometry: { type: "Point", coordinates: [14.4378, 50.0755] }
  },
  {
    title: "Austrian Castle Suite",
    categories: ["Castles", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3800,
    location: "Salzburg, Austria",
    country: "Austria",
    geometry: { type: "Point", coordinates: [13.0430, 47.8095] }
  },
  {
    title: "Tuscan Castle Estate",
    categories: ["Castles", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4100,
    location: "Tuscany, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Bohemian Castle Stay",
    categories: ["Castles", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2300,
    location: "Karlštejn, Czech Republic",
    country: "Czech Republic",
    geometry: { type: "Point", coordinates: [14.1875, 49.9395] }
  },
  {
    title: "Belgian Castle Escape",
    categories: ["Castles", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3600,
    location: "Namur, Belgium",
    country: "Belgium",
    geometry: { type: "Point", coordinates: [4.8701, 50.4674] }
  },
  {
    title: "Dutch Castle Mansion",
    categories: ["Castles", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Utrecht, Netherlands",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [5.1214, 52.0907] }
  },
  {
    title: "Hungarian Castle Hotel",
    categories: ["Castles", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3900,
    location: "Budapest, Hungary",
    country: "Hungary",
    geometry: { type: "Point", coordinates: [19.0402, 47.4979] }
  },
  {
    title: "Polish Castle Manor",
    categories: ["Castles", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2500,
    location: "Krakow, Poland",
    country: "Poland",
    geometry: { type: "Point", coordinates: [19.9445, 50.0497] }
  },
  {
    title: "Luxembourg Castle Residence",
    categories: ["Castles", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3600,
    location: "Vianden, Luxembourg",
    country: "Luxembourg",
    geometry: { type: "Point", coordinates: [6.2096, 49.9352] }
  },
  {
    title: "Slovakian Castle Retreat",
    categories: ["Castles", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "Bratislava, Slovakia",
    country: "Slovakia",
    geometry: { type: "Point", coordinates: [17.1077, 48.1486] }
  },
  {
    title: "Norwegian Castle Lodge",
    categories: ["Castles", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3800,
    location: "Oslo, Norway",
    country: "Norway",
    geometry: { type: "Point", coordinates: [10.7522, 59.9139] }
  },
  {
    title: "Opulent Penthouse Suite",
    categories: ["Luxury", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1501183638714-1f0f5c7e3c9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5500,
    location: "New York, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
  },
  {
    title: "Luxury Beachfront Villa",
    categories: ["Luxury", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 7200,
    location: "Malibu, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },
  {
    title: "Exclusive Mountain Chalet",
    categories: ["Luxury", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4800,
    location: "Aspen, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] }
  },
  {
    title: "Luxury Castle Stay",
    categories: ["Luxury", "Castles", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 7500,
    location: "Loire Valley, France",
    country: "France",
    geometry: { type: "Point", coordinates: [0.9667, 47.3333] }
  },
  {
    title: "Luxury Ski Lodge",
    categories: ["Luxury", "Ski", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5200,
    location: "Chamonix, France",
    country: "France",
    geometry: { type: "Point", coordinates: [6.8694, 45.9237] }
  },
  {
    title: "Luxury Island Resort",
    categories: ["Luxury", "Island", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 9000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "Luxury Urban Apartment",
    categories: ["Luxury", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1501183638714-1f0f5c7e3c9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6000,
    location: "London, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-0.1276, 51.5074] }
  },
  {
    title: "Luxury Farm Estate",
    categories: ["Luxury", "Farms"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4500,
    location: "Tuscany, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Luxury Historic Mansion",
    categories: ["Luxury", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6700,
    location: "Vienna, Austria",
    country: "Austria",
    geometry: { type: "Point", coordinates: [16.3738, 48.2082] }
  },
  {
    title: "Luxury Dome Retreat",
    categories: ["Luxury", "Domes", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4800,
    location: "Patagonia, Chile",
    country: "Chile",
    geometry: { type: "Point", coordinates: [-71.5429, -42.8135] }
  },
  {
    title: "Luxury Boat House",
    categories: ["Luxury", "Boats"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5200,
    location: "Venice, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.3155, 45.4408] }
  },
  {
    title: "Luxury Nature Lodge",
    categories: ["Luxury", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4700,
    location: "Lake District, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-3.0886, 54.4609] }
  },
  {
    title: "Luxury Desert Camp",
    categories: ["Luxury", "Desert", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4300,
    location: "Sahara Desert, Morocco",
    country: "Morocco",
    geometry: { type: "Point", coordinates: [-4.8594, 24.2155] }
  },
  {
    title: "Luxury Ski Chalet",
    categories: ["Luxury", "Ski", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6200,
    location: "Whistler, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-122.9574, 50.1163] }
  },
  {
    title: "Luxury Island Overwater Bungalow",
    categories: ["Luxury", "Island", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 8500,
    location: "Bora Bora, French Polynesia",
    country: "French Polynesia",
    geometry: { type: "Point", coordinates: [-151.7415, -16.5004] }
  },
  {
    title: "Luxury Historic Palace",
    categories: ["Luxury", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 7000,
    location: "Vienna, Austria",
    country: "Austria",
    geometry: { type: "Point", coordinates: [16.3738, 48.2082] }
  },
  {
    title: "Luxury Glamping Dome",
    categories: ["Luxury", "Domes", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4900,
    location: "Iceland",
    country: "Iceland",
    geometry: { type: "Point", coordinates: [-19.0208, 64.9631] }
  },
  {
    title: "Luxury Boat Villa",
    categories: ["Luxury", "Boats", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5600,
    location: "Miami, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
  },
  {
    title: "Forest Hideaway Cabin",
    categories: ["Nature", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1200,
    location: "Lake District, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-3.0886, 54.4609] }
  },
  {
    title: "Lakeside Nature Retreat",
    categories: ["Nature", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Lake Tahoe, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-120.0436, 39.0968] }
  },
  {
    title: "Jungle Treehouse",
    categories: ["Nature", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 900,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-83.7534, 9.7489] }
  },
  {
    title: "Riverfront Eco Lodge",
    categories: ["Nature", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Amazon, Brazil",
    country: "Brazil",
    geometry: { type: "Point", coordinates: [-60.0258, -3.4653] }
  },
  {
    title: "Mountain Meadow Cabin",
    categories: ["Nature", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1100,
    location: "Banff, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
  },
  {
    title: "Desert Oasis Nature Lodge",
    categories: ["Nature", "Desert"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1400,
    location: "Sahara, Morocco",
    country: "Morocco",
    geometry: { type: "Point", coordinates: [-4.8594, 24.2155] }
  },
  {
    title: "Rainforest Retreat",
    categories: ["Nature", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2300,
    location: "Borneo, Malaysia",
    country: "Malaysia",
    geometry: { type: "Point", coordinates: [114.2040, 4.2105] }
  },
  {
    title: "Nature Dome Glamping",
    categories: ["Nature", "Domes"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Patagonia, Chile",
    country: "Chile",
    geometry: { type: "Point", coordinates: [-71.5429, -42.8135] }
  },
  {
    title: "Island Nature Bungalow",
    categories: ["Nature", "Island"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2600,
    location: "Bali, Indonesia",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Nature Beach House",
    categories: ["Nature", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2000,
    location: "Tulum, Mexico",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-87.4653, 20.2110] }
  },
  {
    title: "Nature Farm Stay",
    categories: ["Nature", "Farms"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1300,
    location: "Provence, France",
    country: "France",
    geometry: { type: "Point", coordinates: [5.3698, 43.2965] }
  },
  {
    title: "Nature Island Retreat",
    categories: ["Nature", "Island"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2500,
    location: "Santorini, Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Nature Arctic Igloo",
    categories: ["Nature", "Arctic"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3000,
    location: "Lapland, Finland",
    country: "Finland",
    geometry: { type: "Point", coordinates: [25.7482, 67.8558] }
  },
  {
    title: "Nature River Cabin",
    categories: ["Nature", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1100,
    location: "Blue Ridge, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-84.3241, 34.8631] }
  },
  {
    title: "Nature Boathouse",
    categories: ["Nature", "Boats"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Amsterdam, Netherlands",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] }
  },
  {
    title: "Nature Luxury Suite",
    categories: ["Nature", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1501183638714-1f0f5c7e3c9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Queenstown, New Zealand",
    country: "New Zealand",
    geometry: { type: "Point", coordinates: [168.6626, -45.0312] }
  },
  {
    title: "Nature Ski Cabin",
    categories: ["Nature", "Ski"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2200,
    location: "Whistler, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-122.9574, 50.1163] }
  },
  {
    title: "Nature Dome Suite",
    categories: ["Nature", "Domes"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Iceland",
    country: "Iceland",
    geometry: { type: "Point", coordinates: [-19.0208, 64.9631] }
  },
  {
    title: "Nature Camping Retreat",
    categories: ["Nature", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 900,
    location: "Yellowstone, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-110.5885, 44.4280] }
  },
  {
    title: "Sahara Luxury Camp",
    categories: ["Desert", "Luxury", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2800,
    location: "Merzouga, Morocco",
    country: "Morocco",
    geometry: { type: "Point", coordinates: [-3.9789, 31.1000] }
  },
  {
    title: "Joshua Tree Retreat",
    categories: ["Desert", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Joshua Tree, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-116.3131, 34.1347] }
  },
  {
    title: "Dubai Desert Villa",
    categories: ["Desert", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4500,
    location: "Dubai, UAE",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Wadi Rum Bedouin Camp",
    categories: ["Desert", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1100,
    location: "Wadi Rum, Jordan",
    country: "Jordan",
    geometry: { type: "Point", coordinates: [35.4194, 29.5328] }
  },
  {
    title: "Desert Dome Suite",
    categories: ["Desert", "Domes", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Atacama, Chile",
    country: "Chile",
    geometry: { type: "Point", coordinates: [-68.2200, -24.5000] }
  },
  {
    title: "Namib Desert Lodge",
    categories: ["Desert", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2300,
    location: "Namib Desert, Namibia",
    country: "Namibia",
    geometry: { type: "Point", coordinates: [15.4067, -24.7000] }
  },
  {
    title: "Desert Star Camp",
    categories: ["Desert", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 900,
    location: "White Sands, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-106.3446, 32.7791] }
  },
  {
    title: "Luxury Desert Palace",
    categories: ["Desert", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6000,
    location: "Rajasthan, India",
    country: "India",
    geometry: { type: "Point", coordinates: [73.0479, 26.9124] }
  },
  {
    title: "Desert Oasis Villa",
    categories: ["Desert", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4100,
    location: "Palm Springs, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-116.5453, 33.8303] }
  },
  {
    title: "Desert Glamping Tent",
    categories: ["Desert", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1200,
    location: "Sonoran Desert, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-112.3971, 32.2500] }
  },
  {
    title: "Moroccan Desert Riad",
    categories: ["Desert", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Marrakech, Morocco",
    country: "Morocco",
    geometry: { type: "Point", coordinates: [-7.9811, 31.6295] }
  },
  {
    title: "Desert Sunset Camp",
    categories: ["Desert", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 950,
    location: "Gobi Desert, Mongolia",
    country: "Mongolia",
    geometry: { type: "Point", coordinates: [105.0000, 42.5000] }
  },
  {
    title: "Desert Mirage Suite",
    categories: ["Desert", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4700,
    location: "Doha, Qatar",
    country: "Qatar",
    geometry: { type: "Point", coordinates: [51.5310, 25.2854] }
  },
  {
    title: "Desert Edge Lodge",
    categories: ["Desert", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1500,
    location: "Kalahari, Botswana",
    country: "Botswana",
    geometry: { type: "Point", coordinates: [21.0000, -23.5000] }
  },
  {
    title: "Desert Nomad Camp",
    categories: ["Desert", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1100,
    location: "Thar Desert, India",
    country: "India",
    geometry: { type: "Point", coordinates: [71.0000, 27.0000] }
  },
  {
    title: "Desert Cliff Villa",
    categories: ["Desert", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3900,
    location: "Sedona, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-111.7633, 34.8697] }
  },
  {
    title: "Desert Stargazer Dome",
    categories: ["Desert", "Domes"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Nevada, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-116.4194, 38.8026] }
  },
  {
    title: "Desert Art House",
    categories: ["Desert", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Palm Springs, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-116.5453, 33.8303] }
  },
  {
    title: "Desert Family Camp",
    categories: ["Desert", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 950,
    location: "Death Valley, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-116.8258, 36.5054] }
  },
  {
    title: "Maldives Overwater Villa",
    categories: ["Island", "Luxury", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 9000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "Santorini Cliffside Retreat",
    categories: ["Island", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 7000,
    location: "Santorini, Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Bali Jungle Villa",
    categories: ["Island", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3800,
    location: "Bali, Indonesia",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Hawaiian Beach House",
    categories: ["Island", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Maui, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-156.3319, 20.7984] }
  },
  {
    title: "Fiji Private Island Resort",
    categories: ["Island", "Luxury", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 11000,
    location: "Fiji",
    country: "Fiji",
    geometry: { type: "Point", coordinates: [179.4144, -16.5782] }
  },
  {
    title: "Seychelles Beachfront Bungalow",
    categories: ["Island", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6500,
    location: "Mahé, Seychelles",
    country: "Seychelles",
    geometry: { type: "Point", coordinates: [55.491977, -4.679574] }
  },
  {
    title: "Bora Bora Lagoon Villa",
    categories: ["Island", "Luxury", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 12000,
    location: "Bora Bora, French Polynesia",
    country: "French Polynesia",
    geometry: { type: "Point", coordinates: [-151.7415, -16.5004] }
  },
  {
    title: "Ibiza Cliffside Villa",
    categories: ["Island", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 8000,
    location: "Ibiza, Spain",
    country: "Spain",
    geometry: { type: "Point", coordinates: [1.4333, 38.9089] }
  },
  {
    title: "Tahiti Beach Bungalow",
    categories: ["Island", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4200,
    location: "Tahiti, French Polynesia",
    country: "French Polynesia",
    geometry: { type: "Point", coordinates: [-149.4068, -17.6509] }
  },
  {
    title: "Galapagos Eco Lodge",
    categories: ["Island", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5400,
    location: "Santa Cruz, Galapagos",
    country: "Ecuador",
    geometry: { type: "Point", coordinates: [-90.3333, -0.6667] }
  },
  {
    title: "Zanzibar Spice Island Retreat",
    categories: ["Island", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5800,
    location: "Zanzibar, Tanzania",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [39.2083, -6.1659] }
  },
  {
    title: "Corsica Mountain Island Home",
    categories: ["Island", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Corsica, France",
    country: "France",
    geometry: { type: "Point", coordinates: [9.1700, 42.0396] }
  },
  {
    title: "Isle of Skye Cottage",
    categories: ["Island", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2700,
    location: "Isle of Skye, Scotland",
    country: "UK",
    geometry: { type: "Point", coordinates: [-6.2431, 57.5359] }
  },
  {
    title: "Sicilian Island Villa",
    categories: ["Island", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4800,
    location: "Sicily, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [14.0154, 37.5999] }
  },
  {
    title: "Maui Nature Bungalow",
    categories: ["Island", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Maui, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-156.3319, 20.7984] }
  },
  {
    title: "Phuket Cliffside Villa",
    categories: ["Island", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6900,
    location: "Phuket, Thailand",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
  },
  {
    title: "Isla Mujeres Beach House",
    categories: ["Island", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4100,
    location: "Isla Mujeres, Mexico",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.7406, 21.2321] }
  },
  {
    title: "Jamaica Private Island",
    categories: ["Island", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 10500,
    location: "Port Antonio, Jamaica",
    country: "Jamaica",
    geometry: { type: "Point", coordinates: [-76.4587, 18.1792] }
  },
  {
    title: "Andaman Sea Eco Retreat",
    categories: ["Island", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3700,
    location: "Andaman Islands, India",
    country: "India",
    geometry: { type: "Point", coordinates: [92.8952, 11.7401] }
  },
  {
    title: "Lofoten Island Cabin",
    categories: ["Island", "Nature", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Lofoten, Norway",
    country: "Norway",
    geometry: { type: "Point", coordinates: [13.6333, 68.2333] }
  },
  {
    title: "Yosemite Valley Tent",
    categories: ["Camping", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 600,
    location: "Yosemite, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-119.5383, 37.8651] }
  },
  {
    title: "Patagonian Dome Camp",
    categories: ["Camping", "Domes", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 900,
    location: "Patagonia, Chile",
    country: "Chile",
    geometry: { type: "Point", coordinates: [-71.5429, -42.8135] }
  },
  {
    title: "Sahara Desert Camp",
    categories: ["Camping", "Desert"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1000,
    location: "Merzouga, Morocco",
    country: "Morocco",
    geometry: { type: "Point", coordinates: [-3.9789, 31.1000] }
  },
  {
    title: "Alpine Mountain Tent",
    categories: ["Camping", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 700,
    location: "Zermatt, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] }
  },
  {
    title: "Forest River Camp",
    categories: ["Camping", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 650,
    location: "Lake District, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-3.0886, 54.4609] }
  },
  {
    title: "Canadian Lakeside Camp",
    categories: ["Camping", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 800,
    location: "Banff, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
  },
  {
    title: "Icelandic Aurora Camp",
    categories: ["Camping", "Arctic", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1400,
    location: "Reykjavik, Iceland",
    country: "Iceland",
    geometry: { type: "Point", coordinates: [-21.8174, 64.1265] }
  },
  {
    title: "Glamping Safari Tent",
    categories: ["Camping", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Serengeti, Tanzania",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] }
  },
  {
    title: "Beachside Camping",
    categories: ["Camping", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 900,
    location: "Tulum, Mexico",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-87.4653, 20.2110] }
  },
  {
    title: "Amazon Rainforest Camp",
    categories: ["Camping", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1200,
    location: "Amazon, Brazil",
    country: "Brazil",
    geometry: { type: "Point", coordinates: [-60.0258, -3.4653] }
  },
  {
    title: "Australian Outback Camp",
    categories: ["Camping", "Desert"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1100,
    location: "Uluru, Australia",
    country: "Australia",
    geometry: { type: "Point", coordinates: [131.0369, -25.3444] }
  },
  {
    title: "Patagonia Glacier Camp",
    categories: ["Camping", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1300,
    location: "El Chaltén, Argentina",
    country: "Argentina",
    geometry: { type: "Point", coordinates: [-72.8870, -49.3315] }
  },
  {
    title: "Alaskan Wilderness Camp",
    categories: ["Camping", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1500,
    location: "Denali, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-150.1057, 63.1148] }
  },
  {
    title: "Swiss Alps Camping",
    categories: ["Camping", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1300,
    location: "St. Moritz, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [9.8380, 46.4983] }
  },
  {
    title: "Canadian Rockies Camp",
    categories: ["Camping", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1100,
    location: "Jasper, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-118.0800, 52.8734] }
  },
  {
    title: "Nature Island Camp",
    categories: ["Camping", "Island"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 950,
    location: "Andaman Islands, India",
    country: "India",
    geometry: { type: "Point", coordinates: [92.8952, 11.7401] }
  },
  {
    title: "Desert Sky Camp",
    categories: ["Camping", "Desert"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1050,
    location: "Gobi Desert, Mongolia",
    country: "Mongolia",
    geometry: { type: "Point", coordinates: [105.0000, 42.5000] }
  },
  {
    title: "Norwegian Fjord Camp",
    categories: ["Camping", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1450,
    location: "Lofoten, Norway",
    country: "Norway",
    geometry: { type: "Point", coordinates: [13.6333, 68.2333] }
  },
  {
    title: "Family Forest Camp",
    categories: ["Camping", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 700,
    location: "Black Forest, Germany",
    country: "Germany",
    geometry: { type: "Point", coordinates: [8.2415, 48.0646] }
  },
  {
    title: "Tuscan Vineyard Farmhouse",
    categories: ["Farms", "Luxury", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Tuscany, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Provence Lavender Farm",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Provence, France",
    country: "France",
    geometry: { type: "Point", coordinates: [5.3698, 43.2965] }
  },
  {
    title: "Dutch Windmill Farm Stay",
    categories: ["Farms", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1600,
    location: "Kinderdijk, Netherlands",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.6325, 51.8723] }
  },
  {
    title: "English Countryside Farm",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1400,
    location: "Cotswolds, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-1.7782, 51.8330] }
  },
  {
    title: "Vermont Maple Farm",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1200,
    location: "Vermont, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-72.5778, 44.5588] }
  },
  {
    title: "Australian Outback Ranch",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Queensland, Australia",
    country: "Australia",
    geometry: { type: "Point", coordinates: [145.0000, -20.9176] }
  },
  {
    title: "South African Wine Farm",
    categories: ["Farms", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2500,
    location: "Stellenbosch, South Africa",
    country: "South Africa",
    geometry: { type: "Point", coordinates: [18.8559, -33.9366] }
  },
  {
    title: "California Organic Farm",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1900,
    location: "Napa Valley, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-122.2869, 38.5025] }
  },
  {
    title: "Japanese Rice Farm",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1300,
    location: "Niigata, Japan",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.0232, 37.9162] }
  },
  {
    title: "Icelandic Sheep Farm",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1500,
    location: "Akureyri, Iceland",
    country: "Iceland",
    geometry: { type: "Point", coordinates: [-18.1105, 65.6885] }
  },
  {
    title: "Brazilian Coffee Farm",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Minas Gerais, Brazil",
    country: "Brazil",
    geometry: { type: "Point", coordinates: [-44.5550, -18.5122] }
  },
  {
    title: "Swiss Alpine Dairy Farm",
    categories: ["Farms", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Appenzell, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [9.4020, 47.3327] }
  },
  {
    title: "Irish Green Farm",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1600,
    location: "Galway, Ireland",
    country: "Ireland",
    geometry: { type: "Point", coordinates: [-9.0498, 53.2707] }
  },
  {
    title: "German Black Forest Farm",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Baden-Württemberg, Germany",
    country: "Germany",
    geometry: { type: "Point", coordinates: [8.2415, 48.0646] }
  },
  {
    title: "Canadian Maple Farm",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1500,
    location: "Quebec, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-71.2082, 46.8139] }
  },
  {
    title: "New Zealand Sheep Station",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Otago, New Zealand",
    country: "New Zealand",
    geometry: { type: "Point", coordinates: [170.5050, -45.8788] }
  },
  {
    title: "Spanish Olive Farm",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Andalusia, Spain",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-4.7278, 37.5443] }
  },
  {
    title: "Greek Island Farmhouse",
    categories: ["Farms", "Island"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Crete, Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.1596, 35.2401] }
  },
  {
    title: "French Country Farm",
    categories: ["Farms", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Normandy, France",
    country: "France",
    geometry: { type: "Point", coordinates: [0.3708, 49.1829] }
  },
  {
    title: "Lapland Glass Igloo",
    categories: ["Arctic", "Luxury", "Domes"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Lapland, Finland",
    country: "Finland",
    geometry: { type: "Point", coordinates: [25.7482, 67.8558] }
  },
  {
    title: "Svalbard Polar Lodge",
    categories: ["Arctic", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2900,
    location: "Longyearbyen, Svalbard",
    country: "Norway",
    geometry: { type: "Point", coordinates: [15.6401, 78.2232] }
  },
  {
    title: "Arctic Circle Cabin",
    categories: ["Arctic", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Rovaniemi, Finland",
    country: "Finland",
    geometry: { type: "Point", coordinates: [25.7294, 66.5039] }
  },
  {
    title: "Icelandic Aurora Retreat",
    categories: ["Arctic", "Nature", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4200,
    location: "Reykjavik, Iceland",
    country: "Iceland",
    geometry: { type: "Point", coordinates: [-21.8174, 64.1265] }
  },
  {
    title: "Greenland Ice Camp",
    categories: ["Arctic", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1400,
    location: "Ilulissat, Greenland",
    country: "Greenland",
    geometry: { type: "Point", coordinates: [-51.0986, 69.2167] }
  },
  {
    title: "Norwegian Fjord Lodge",
    categories: ["Arctic", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "Tromsø, Norway",
    country: "Norway",
    geometry: { type: "Point", coordinates: [18.9553, 69.6496] }
  },
  {
    title: "Arctic Wilderness Dome",
    categories: ["Arctic", "Domes"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2600,
    location: "Kiruna, Sweden",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [20.2251, 67.8557] }
  },
  {
    title: "Arctic Ice Hotel",
    categories: ["Arctic", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4700,
    location: "Jukkasjärvi, Sweden",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [20.6167, 67.8500] }
  },
  {
    title: "Arctic Expedition Camp",
    categories: ["Arctic", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1600,
    location: "Nunavut, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-96.7266, 70.2998] }
  },
  {
    title: "Alaskan Glacier Cabin",
    categories: ["Arctic", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Anchorage, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-149.9003, 61.2181] }
  },
  {
    title: "Arctic Circle Yurt",
    categories: ["Arctic", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1200,
    location: "Murmansk, Russia",
    country: "Russia",
    geometry: { type: "Point", coordinates: [33.0856, 68.9585] }
  },
  {
    title: "Greenland Iceberg Lodge",
    categories: ["Arctic", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2500,
    location: "Nuuk, Greenland",
    country: "Greenland",
    geometry: { type: "Point", coordinates: [-51.7216, 64.1835] }
  },
  {
    title: "Arctic Aurora Dome",
    categories: ["Arctic", "Domes"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3300,
    location: "Ivalo, Finland",
    country: "Finland",
    geometry: { type: "Point", coordinates: [27.2858, 68.6626] }
  },
  {
    title: "Arctic Explorer's Cabin",
    categories: ["Arctic", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Nome, Alaska, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-165.4064, 64.5011] }
  },
  {
    title: "Arctic Wilderness Lodge",
    categories: ["Arctic", "Nature", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3900,
    location: "Tasiilaq, Greenland",
    country: "Greenland",
    geometry: { type: "Point", coordinates: [-37.6333, 65.6167] }
  },
  {
    title: "Arctic Icefield Camp",
    categories: ["Arctic", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1300,
    location: "Nunavut, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-96.7266, 70.2998] }
  },
  {
    title: "Arctic Night Sky Cabin",
    categories: ["Arctic", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2500,
    location: "Fairbanks, Alaska, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-147.7164, 64.8378] }
  },
  {
    title: "Arctic Lapland Lodge",
    categories: ["Arctic", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2200,
    location: "Lapland, Sweden",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [20.2251, 67.8557] }
  },
  {
    title: "Arctic Iceberg Camp",
    categories: ["Arctic", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1200,
    location: "Qaanaaq, Greenland",
    country: "Greenland",
    geometry: { type: "Point", coordinates: [-69.2222, 77.4833] }
  },
  {
    title: "Patagonia Eco Dome",
    categories: ["Domes", "Nature", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2300,
    location: "Patagonia, Chile",
    country: "Chile",
    geometry: { type: "Point", coordinates: [-71.5429, -42.8135] }
  },
  {
    title: "Lapland Glass Igloo",
    categories: ["Domes", "Arctic", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Lapland, Finland",
    country: "Finland",
    geometry: { type: "Point", coordinates: [25.7482, 67.8558] }
  },
  {
    title: "Desert Stargazer Dome",
    categories: ["Domes", "Desert"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Nevada, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-116.4194, 38.8026] }
  },
  {
    title: "Iceland Aurora Dome",
    categories: ["Domes", "Arctic", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2700,
    location: "Reykjavik, Iceland",
    country: "Iceland",
    geometry: { type: "Point", coordinates: [-21.8174, 64.1265] }
  },
  {
    title: "Forest Dome Retreat",
    categories: ["Domes", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Lake District, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-3.0886, 54.4609] }
  },
  {
    title: "Mountain Dome Glamping",
    categories: ["Domes", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Banff, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
  },
  {
    title: "Nature Island Dome",
    categories: ["Domes", "Island"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Bali, Indonesia",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Luxury Dome Suite",
    categories: ["Domes", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Santorini, Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Jungle Dome Camp",
    categories: ["Domes", "Nature", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1100,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-83.7534, 9.7489] }
  },
  {
    title: "Desert Mirage Dome",
    categories: ["Domes", "Desert", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2600,
    location: "Atacama, Chile",
    country: "Chile",
    geometry: { type: "Point", coordinates: [-68.2200, -24.5000] }
  },
  {
    title: "Alpine Dome Lodge",
    categories: ["Domes", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2200,
    location: "Zermatt, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] }
  },
  {
    title: "Arctic Night Dome",
    categories: ["Domes", "Arctic"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2400,
    location: "Tromsø, Norway",
    country: "Norway",
    geometry: { type: "Point", coordinates: [18.9553, 69.6496] }
  },
  {
    title: "Luxury Beach Dome",
    categories: ["Domes", "Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "Canadian Wilderness Dome",
    categories: ["Domes", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Banff, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
  },
  {
    title: "Swiss Alps Dome",
    categories: ["Domes", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2500,
    location: "St. Moritz, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [9.8380, 46.4983] }
  },
  {
    title: "Rainforest Dome Retreat",
    categories: ["Domes", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Borneo, Malaysia",
    country: "Malaysia",
    geometry: { type: "Point", coordinates: [114.2040, 4.2105] }
  },
  {
    title: "Luxury Island Dome",
    categories: ["Domes", "Island", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Bora Bora, French Polynesia",
    country: "French Polynesia",
    geometry: { type: "Point", coordinates: [-151.7415, -16.5004] }
  },
  {
    title: "Andes Dome Camp",
    categories: ["Domes", "Mountains", "Camping"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1300,
    location: "Mendoza, Argentina",
    country: "Argentina",
    geometry: { type: "Point", coordinates: [-68.8458, -32.8895] }
  },
  {
    title: "Dome on the Lake",
    categories: ["Domes", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1900,
    location: "Lake Tahoe, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-120.0436, 39.0968] }
  },
  {
    title: "Amsterdam Houseboat",
    categories: ["Boats", "Luxury", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Amsterdam, Netherlands",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] }
  },
  {
    title: "Venetian Gondola Suite",
    categories: ["Boats", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2600,
    location: "Venice, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.3155, 45.4408] }
  },
  {
    title: "Sailboat Adventure",
    categories: ["Boats", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Santorini, Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Yacht on the Riviera",
    categories: ["Boats", "Luxury", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5200,
    location: "Nice, France",
    country: "France",
    geometry: { type: "Point", coordinates: [7.2619, 43.7102] }
  },
  {
    title: "Sydney Harbour Cruise",
    categories: ["Boats", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "Sydney, Australia",
    country: "Australia",
    geometry: { type: "Point", coordinates: [151.2093, -33.8688] }
  },
  {
    title: "Maldives Overwater Yacht",
    categories: ["Boats", "Luxury", "Island"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 7800,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "Amazon Riverboat Lodge",
    categories: ["Boats", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2200,
    location: "Amazon, Brazil",
    country: "Brazil",
    geometry: { type: "Point", coordinates: [-60.0258, -3.4653] }
  },
  {
    title: "Norwegian Fjord Cruise",
    categories: ["Boats", "Nature", "Arctic"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4300,
    location: "Bergen, Norway",
    country: "Norway",
    geometry: { type: "Point", coordinates: [5.3221, 60.39299] }
  },
  {
    title: "Caribbean Catamaran",
    categories: ["Boats", "Luxury", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5400,
    location: "Barbados",
    country: "Barbados",
    geometry: { type: "Point", coordinates: [-59.5432, 13.1939] }
  },
  {
    title: "Lake Como Boat House",
    categories: ["Boats", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3900,
    location: "Lake Como, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [9.2572, 45.9900] }
  },
  {
    title: "Fiji Sailing Retreat",
    categories: ["Boats", "Island", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6500,
    location: "Fiji",
    country: "Fiji",
    geometry: { type: "Point", coordinates: [179.4144, -16.5782] }
  },
  {
    title: "Greek Island Yacht",
    categories: ["Boats", "Island", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 7200,
    location: "Mykonos, Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.3450, 37.4467] }
  },
  {
    title: "Bangkok River Barge",
    categories: ["Boats", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1700,
    location: "Bangkok, Thailand",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [100.5018, 13.7563] }
  },
  {
    title: "London Thames Houseboat",
    categories: ["Boats", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2500,
    location: "London, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-0.1276, 51.5074] }
  },
  {
    title: "Canadian Wilderness Canoe",
    categories: ["Boats", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1200,
    location: "Algonquin, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-78.3611, 45.8372] }
  },
  {
    title: "Amazon Jungle Boat Camp",
    categories: ["Boats", "Camping", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1300,
    location: "Leticia, Colombia",
    country: "Colombia",
    geometry: { type: "Point", coordinates: [-69.9406, -4.2153] }
  },
  {
    title: "Stockholm Archipelago Houseboat",
    categories: ["Boats", "Island", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "Stockholm, Sweden",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [18.0686, 59.3293] }
  },
  {
    title: "Hong Kong Junk Boat",
    categories: ["Boats", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3700,
    location: "Hong Kong",
    country: "Hong Kong",
    geometry: { type: "Point", coordinates: [114.1694, 22.3193] }
  },
  {
    title: "Venetian Lagoon Yacht",
    categories: ["Boats", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5200,
    location: "Venice, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.3155, 45.4408] }
  },
  {
    title: "Rome Ancient Apartment",
    categories: ["Historic", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2200,
    location: "Rome, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.4964, 41.9028] }
  },
  {
    title: "Edinburgh Castle Suite",
    categories: ["Historic", "Castles"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "Edinburgh, Scotland",
    country: "UK",
    geometry: { type: "Point", coordinates: [-3.1883, 55.9533] }
  },
  {
    title: "Parisian Heritage Flat",
    categories: ["Historic", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2500,
    location: "Paris, France",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },
  {
    title: "Prague Old Town Loft",
    categories: ["Historic", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 1800,
    location: "Prague, Czech Republic",
    country: "Czech Republic",
    geometry: { type: "Point", coordinates: [14.4378, 50.0755] }
  },
  {
    title: "Vienna Imperial Palace",
    categories: ["Historic", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4200,
    location: "Vienna, Austria",
    country: "Austria",
    geometry: { type: "Point", coordinates: [16.3738, 48.2082] }
  },
  {
    title: "Istanbul Ottoman Mansion",
    categories: ["Historic", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3400,
    location: "Istanbul, Turkey",
    country: "Turkey",
    geometry: { type: "Point", coordinates: [28.9784, 41.0082] }
  },
  {
    title: "London Tudor House",
    categories: ["Historic", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3700,
    location: "London, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-0.1276, 51.5074] }
  },
  {
    title: "Transylvanian Castle",
    categories: ["Historic", "Castles"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2800,
    location: "Bran, Romania",
    country: "Romania",
    geometry: { type: "Point", coordinates: [25.3670, 45.5156] }
  },
  {
    title: "Lisbon Alfama Residence",
    categories: ["Historic", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2100,
    location: "Lisbon, Portugal",
    country: "Portugal",
    geometry: { type: "Point", coordinates: [-9.1333, 38.7167] }
  },
  {
    title: "Budapest Danube View",
    categories: ["Historic", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2400,
    location: "Budapest, Hungary",
    country: "Hungary",
    geometry: { type: "Point", coordinates: [19.0402, 47.4979] }
  },
  {
    title: "Athens Acropolis Flat",
    categories: ["Historic", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2600,
    location: "Athens, Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [23.7275, 37.9838] }
  },
  {
    title: "Berlin Wall Loft",
    categories: ["Historic", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2000,
    location: "Berlin, Germany",
    country: "Germany",
    geometry: { type: "Point", coordinates: [13.4050, 52.5200] }
  },
  {
    title: "Prague Castle Residence",
    categories: ["Historic", "Castles"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Prague, Czech Republic",
    country: "Czech Republic",
    geometry: { type: "Point", coordinates: [14.4006, 50.0906] }
  },
  {
    title: "Vienna Baroque Palace",
    categories: ["Historic", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4300,
    location: "Vienna, Austria",
    country: "Austria",
    geometry: { type: "Point", coordinates: [16.3738, 48.2082] }
  },
  {
    title: "Florence Renaissance Loft",
    categories: ["Historic", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2700,
    location: "Florence, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Cotswolds Country Manor",
    categories: ["Historic", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3900,
    location: "Cotswolds, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-1.7782, 51.8330] }
  },
  {
    title: "Bruges Medieval Townhouse",
    categories: ["Historic", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2000,
    location: "Bruges, Belgium",
    country: "Belgium",
    geometry: { type: "Point", coordinates: [3.2247, 51.2093] }
  },
  {
    title: "Seville Moorish Palace",
    categories: ["Historic", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4100,
    location: "Seville, Spain",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-5.9845, 37.3891] }
  },
  {
    title: "Dubrovnik Old City Loft",
    categories: ["Historic", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2300,
    location: "Dubrovnik, Croatia",
    country: "Croatia",
    geometry: { type: "Point", coordinates: [18.0944, 42.6507] }
  },
  {
    title: "Aspen Ski Chalet",
    categories: ["Ski", "Luxury", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4500,
    location: "Aspen, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] }
  },
  {
    title: "Chamonix Ski Lodge",
    categories: ["Ski", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3800,
    location: "Chamonix, France",
    country: "France",
    geometry: { type: "Point", coordinates: [6.8694, 45.9237] }
  },
  {
    title: "Whistler Ski Cabin",
    categories: ["Ski", "Camping", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Whistler, Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-122.9574, 50.1163] }
  },
  {
    title: "Zermatt Luxury Ski Chalet",
    categories: ["Ski", "Luxury", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5200,
    location: "Zermatt, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] }
  },
  {
    title: "St. Moritz Ski Lodge",
    categories: ["Ski", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4800,
    location: "St. Moritz, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [9.8380, 46.4983] }
  },
  {
    title: "Jackson Hole Ski Cabin",
    categories: ["Ski", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Jackson Hole, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-110.5885, 43.4799] }
  },
  {
    title: "Cortina d'Ampezzo Ski Chalet",
    categories: ["Ski", "Luxury", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4600,
    location: "Cortina d'Ampezzo, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.1357, 46.5405] }
  },
  {
    title: "Big Sky Ski Lodge",
    categories: ["Ski", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3000,
    location: "Big Sky, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-111.4014, 45.2840] }
  },
  {
    title: "Niseko Ski Chalet",
    categories: ["Ski", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4000,
    location: "Niseko, Japan",
    country: "Japan",
    geometry: { type: "Point", coordinates: [140.6874, 42.8048] }
  },
  {
    title: "Verbier Ski Lodge",
    categories: ["Ski", "Luxury", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4800,
    location: "Verbier, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2261, 46.0965] }
  },
  {
    title: "Telluride Ski Cabin",
    categories: ["Ski", "Camping", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Telluride, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-107.8097, 37.9375] }
  },
  {
    title: "Lake Tahoe Ski Lodge",
    categories: ["Ski", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Lake Tahoe, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-120.0436, 39.0968] }
  },
  {
    title: "Stowe Ski Chalet",
    categories: ["Ski", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3900,
    location: "Stowe, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-72.6874, 44.4654] }
  },
  {
    title: "Kitzbühel Ski Lodge",
    categories: ["Ski", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4200,
    location: "Kitzbühel, Austria",
    country: "Austria",
    geometry: { type: "Point", coordinates: [12.3874, 47.4469] }
  },
  {
    title: "Park City Ski Villa",
    categories: ["Ski", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4700,
    location: "Park City, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-111.4980, 40.6461] }
  },
  {
    title: "Cervinia Ski Chalet",
    categories: ["Ski", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3600,
    location: "Cervinia, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [7.6294, 45.9369] }
  },
  {
    title: "Val d'Isère Ski Lodge",
    categories: ["Ski", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4800,
    location: "Val d'Isère, France",
    country: "France",
    geometry: { type: "Point", coordinates: [6.9769, 45.4482] }
  },
  {
    title: "Infinity Pool Villa Bali",
    categories: ["Amazing Pools", "Luxury", "Island"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5200,
    location: "Bali, Indonesia",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Santorini Cliffside Pool",
    categories: ["Amazing Pools", "Luxury", "Island"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6800,
    location: "Santorini, Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Maldives Overwater Pool",
    categories: ["Amazing Pools", "Luxury", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 9000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "Dubai Sky Pool Suite",
    categories: ["Amazing Pools", "Luxury", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 8500,
    location: "Dubai, UAE",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Tulum Jungle Pool",
    categories: ["Amazing Pools", "Nature", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4200,
    location: "Tulum, Mexico",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-87.4653, 20.2110] }
  },
  {
    title: "French Riviera Pool Villa",
    categories: ["Amazing Pools", "Luxury", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 7700,
    location: "Nice, France",
    country: "France",
    geometry: { type: "Point", coordinates: [7.2619, 43.7102] }
  },
  {
    title: "Los Angeles Rooftop Pool",
    categories: ["Amazing Pools", "Luxury", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6900,
    location: "Los Angeles, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] }
  },
  {
    title: "Swiss Alps Heated Pool",
    categories: ["Amazing Pools", "Luxury", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 8000,
    location: "St. Moritz, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [9.8380, 46.4983] }
  },
  {
    title: "Ibiza Pool Party Villa",
    categories: ["Amazing Pools", "Luxury", "Island"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 7200,
    location: "Ibiza, Spain",
    country: "Spain",
    geometry: { type: "Point", coordinates: [1.4333, 38.9089] }
  },
  {
    title: "Phuket Oceanview Pool",
    categories: ["Amazing Pools", "Luxury", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6500,
    location: "Phuket, Thailand",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
  },
  {
    title: "Lake Como Pool Villa",
    categories: ["Amazing Pools", "Luxury", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 8100,
    location: "Lake Como, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [9.2572, 45.9900] }
  },
  {
    title: "Miami Beach Pool House",
    categories: ["Amazing Pools", "Luxury", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 7000,
    location: "Miami, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
  },
  {
    title: "Tuscany Vineyard Pool",
    categories: ["Amazing Pools", "Luxury", "Farms"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6500,
    location: "Tuscany, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Dubai Desert Pool Villa",
    categories: ["Amazing Pools", "Luxury", "Desert"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 9200,
    location: "Dubai, UAE",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Sydney Harbour Pool Penthouse",
    categories: ["Amazing Pools", "Luxury", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 8300,
    location: "Sydney, Australia",
    country: "Australia",
    geometry: { type: "Point", coordinates: [151.2093, -33.8688] }
  },
  {
    title: "Lake Tahoe Infinity Pool",
    categories: ["Amazing Pools", "Luxury", "Mountains"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 7800,
    location: "Lake Tahoe, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-120.0436, 39.0968] }
  },
  {
    title: "Costa Rica Rainforest Pool",
    categories: ["Amazing Pools", "Nature", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5900,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-83.7534, 9.7489] }
  },
  {
    title: "Ibiza Sunset Pool Villa",
    categories: ["Amazing Pools", "Luxury", "Island"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 7400,
    location: "Ibiza, Spain",
    country: "Spain",
    geometry: { type: "Point", coordinates: [1.4333, 38.9089] }
  },
  {
    title: "Parisian Penthouse",
    categories: ["Iconic cities", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4800,
    location: "Paris, France",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },
  {
    title: "New York City Loft",
    categories: ["Iconic cities", "Room"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "New York, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
  },
  {
    title: "Tokyo Tower View Suite",
    categories: ["Iconic cities", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4200,
    location: "Tokyo, Japan",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
  },
  {
    title: "London Thames Apartment",
    categories: ["Iconic cities", "Room"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "London, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-0.1276, 51.5074] }
  },
  {
    title: "Dubai Skyline Suite",
    categories: ["Iconic cities", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5200,
    location: "Dubai, UAE",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Sydney Opera House View",
    categories: ["Iconic cities", "Luxury", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4400,
    location: "Sydney, Australia",
    country: "Australia",
    geometry: { type: "Point", coordinates: [151.2093, -33.8688] }
  },
  {
    title: "Hong Kong Harbor Loft",
    categories: ["Iconic cities", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3900,
    location: "Hong Kong",
    country: "Hong Kong",
    geometry: { type: "Point", coordinates: [114.1694, 22.3193] }
  },
  {
    title: "Rome Historic Apartment",
    categories: ["Iconic cities", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "Rome, Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.4964, 41.9028] }
  },
  {
    title: "Barcelona Gaudí Loft",
    categories: ["Iconic cities", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3700,
    location: "Barcelona, Spain",
    country: "Spain",
    geometry: { type: "Point", coordinates: [2.1734, 41.3851] }
  },
  {
    title: "Berlin Wall View Studio",
    categories: ["Iconic cities", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "Berlin, Germany",
    country: "Germany",
    geometry: { type: "Point", coordinates: [13.4050, 52.5200] }
  },
  {
    title: "Prague Old Town Loft",
    categories: ["Iconic cities", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3400,
    location: "Prague, Czech Republic",
    country: "Czech Republic",
    geometry: { type: "Point", coordinates: [14.4378, 50.0755] }
  },
  {
    title: "Lisbon Alfama Flat",
    categories: ["Iconic cities", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2800,
    location: "Lisbon, Portugal",
    country: "Portugal",
    geometry: { type: "Point", coordinates: [-9.1333, 38.7167] }
  },
  {
    title: "Vienna Imperial Residence",
    categories: ["Iconic cities", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4300,
    location: "Vienna, Austria",
    country: "Austria",
    geometry: { type: "Point", coordinates: [16.3738, 48.2082] }
  },
  {
    title: "Budapest Danube Loft",
    categories: ["Iconic cities", "Historic"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "Budapest, Hungary",
    country: "Hungary",
    geometry: { type: "Point", coordinates: [19.0402, 47.4979] }
  },
  {
    title: "Shanghai Skyline Suite",
    categories: ["Iconic cities", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5200,
    location: "Shanghai, China",
    country: "China",
    geometry: { type: "Point", coordinates: [121.4737, 31.2304] }
  },
  {
    title: "San Francisco Bay Loft",
    categories: ["Iconic cities", "Room"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3400,
    location: "San Francisco, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-122.4194, 37.7749] }
  },
  {
    title: "Seoul City View Suite",
    categories: ["Iconic cities", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4000,
    location: "Seoul, South Korea",
    country: "South Korea",
    geometry: { type: "Point", coordinates: [126.9780, 37.5665] }
  },
  {
    title: "Cairo Nile View Apartment",
    categories: ["Iconic cities", "Room"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2600,
    location: "Cairo, Egypt",
    country: "Egypt",
    geometry: { type: "Point", coordinates: [31.2357, 30.0444] }
  },
  {
    title: "Urban Jungle Loft",
    categories: ["Trending", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3200,
    location: "New York, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
  },
  {
    title: "Santorini White Villa",
    categories: ["Trending", "Luxury", "Island"],
    image: {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5400,
    location: "Santorini, Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Tokyo Tower View Suite",
    categories: ["Trending", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4100,
    location: "Tokyo, Japan",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
  },
  {
    title: "Dubai Marina Penthouse",
    categories: ["Trending", "Luxury", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6000,
    location: "Dubai, UAE",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Malibu Beach House",
    categories: ["Trending", "Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 7500,
    location: "Malibu, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },
  {
    title: "Swiss Alps Chalet",
    categories: ["Trending", "Mountains", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5300,
    location: "Zermatt, Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] }
  },
  {
    title: "Bali Jungle Villa",
    categories: ["Trending", "Nature", "Island"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4100,
    location: "Bali, Indonesia",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Parisian Rooftop Flat",
    categories: ["Trending", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3500,
    location: "Paris, France",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },
  {
    title: "Sydney Opera House View",
    categories: ["Trending", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4200,
    location: "Sydney, Australia",
    country: "Australia",
    geometry: { type: "Point", coordinates: [151.2093, -33.8688] }
  },
  {
    title: "Hong Kong Harbor Suite",
    categories: ["Trending", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4400,
    location: "Hong Kong",
    country: "Hong Kong",
    geometry: { type: "Point", coordinates: [114.1694, 22.3193] }
  },
  {
    title: "Barcelona Gaudí Loft",
    categories: ["Trending", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3600,
    location: "Barcelona, Spain",
    country: "Spain",
    geometry: { type: "Point", coordinates: [2.1734, 41.3851] }
  },
  {
    title: "Lake Tahoe A-Frame",
    categories: ["Trending", "Mountains", "Nature"],
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3100,
    location: "Lake Tahoe, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-120.0436, 39.0968] }
  },
  {
    title: "Dubai Desert Oasis",
    categories: ["Trending", "Desert", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 5700,
    location: "Dubai, UAE",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Ibiza Pool Party Villa",
    categories: ["Trending", "Island", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 6200,
    location: "Ibiza, Spain",
    country: "Spain",
    geometry: { type: "Point", coordinates: [1.4333, 38.9089] }
  },
  {
    title: "Miami Beachfront Penthouse",
    categories: ["Trending", "Beach", "Luxury"],
    image: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 8000,
    location: "Miami, USA",
    country: "USA",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
  },
  {
    title: "London Thames View Flat",
    categories: ["Trending", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 3700,
    location: "London, UK",
    country: "UK",
    geometry: { type: "Point", coordinates: [-0.1276, 51.5074] }
  },
  {
    title: "Bangkok River Loft",
    categories: ["Trending", "Iconic cities"],
    image: {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 2900,
    location: "Bangkok, Thailand",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [100.5018, 13.7563] }
  },
  {
    title: "Cape Town Ocean View",
    categories: ["Trending", "Nature", "Beach"],
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: ""
    },
    price: 4300,
    location: "Cape Town, South Africa",
    country: "South Africa",
    geometry: { type: "Point", coordinates: [18.4241, -33.9249] }
  }

];

module.exports = { data: sampleListings };