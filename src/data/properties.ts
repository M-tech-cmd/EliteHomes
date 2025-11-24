export interface Property {
  id: string;
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  description: string;
  features: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    image: "/src/assets/property-1.jpg",
    title: "Modern Downtown Apartment",
    price: "$850,000",
    location: "Downtown, Metropolitan City",
    beds: 3,
    baths: 2,
    sqft: "2,100 sqft",
    type: "Apartment",
    description: "Stunning modern apartment in the heart of downtown with breathtaking city views. Features floor-to-ceiling windows and contemporary finishes throughout.",
    features: ["City Views", "Gym Access", "24/7 Security", "Underground Parking", "Rooftop Terrace"]
  },
  {
    id: "2",
    image: "/src/assets/property-2.jpg",
    title: "Luxury Mediterranean Villa",
    price: "$2,450,000",
    location: "Coastal Hills, Seaside",
    beds: 5,
    baths: 4,
    sqft: "4,800 sqft",
    type: "Villa",
    description: "Exquisite Mediterranean-style villa with infinity pool and panoramic ocean views. Perfect for luxury living and entertaining.",
    features: ["Infinity Pool", "Ocean Views", "Wine Cellar", "Home Theater", "Guest House"]
  },
  {
    id: "3",
    image: "/src/assets/property-3.jpg",
    title: "Penthouse Suite",
    price: "$1,750,000",
    location: "Skyline District, Urban Center",
    beds: 4,
    baths: 3,
    sqft: "3,200 sqft",
    type: "Penthouse",
    description: "Exclusive penthouse with 360-degree city views. Premium finishes and state-of-the-art smart home technology.",
    features: ["Smart Home", "Private Elevator", "Sky Lounge", "Spa Bathroom", "Chef's Kitchen"]
  },
  {
    id: "4",
    image: "/src/assets/property-4.jpg",
    title: "Suburban Family Home",
    price: "$625,000",
    location: "Green Valley, Suburbs",
    beds: 4,
    baths: 2.5,
    sqft: "2,800 sqft",
    type: "House",
    description: "Perfect family home in quiet neighborhood with excellent schools. Large backyard and modern updates throughout.",
    features: ["Large Yard", "Top Schools", "Updated Kitchen", "Home Office", "Two-Car Garage"]
  },
  {
    id: "5",
    image: "/src/assets/property-5.jpg",
    title: "Beachfront Paradise",
    price: "$3,200,000",
    location: "Ocean Drive, Beach Town",
    beds: 6,
    baths: 5,
    sqft: "5,500 sqft",
    type: "Beach House",
    description: "Stunning beachfront property with direct beach access. Open floor plan designed for coastal living and entertainment.",
    features: ["Beach Access", "Ocean Views", "Outdoor Kitchen", "Multiple Decks", "Boat Dock"]
  },
  {
    id: "6",
    image: "/src/assets/property-6.jpg",
    title: "Urban Townhouse",
    price: "$975,000",
    location: "Historic District, City Center",
    beds: 3,
    baths: 2.5,
    sqft: "2,400 sqft",
    type: "Townhouse",
    description: "Beautifully renovated townhouse blending historic charm with modern amenities. Walk to restaurants and shops.",
    features: ["Historic Charm", "Rooftop Deck", "Walking Distance", "Private Patio", "Updated Systems"]
  }
];
