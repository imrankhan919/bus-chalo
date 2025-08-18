import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Input from '../components/UI/Input';

const BusListing = () => {
  const buses = [
    {
      id: 1,
      name: "Express Traveler",
      route: "New York → Boston",
      departure: "08:00 AM",
      arrival: "12:30 PM",
      duration: "4h 30m",
      price: "$45",
      amenities: ["WiFi", "AC", "Charging Port"]
    },
    {
      id: 2,
      name: "Comfort Plus",
      route: "New York → Boston", 
      departure: "02:00 PM",
      arrival: "06:30 PM",
      duration: "4h 30m",
      price: "$50",
      amenities: ["WiFi", "AC", "Charging Port", "Meals"]
    },
    {
      id: 3,
      name: "Night Rider",
      route: "New York → Boston",
      departure: "11:00 PM",
      arrival: "03:30 AM",
      duration: "4h 30m",
      price: "$40",
      amenities: ["WiFi", "AC", "Reclining Seats"]
    }
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Search Results Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Available Buses</h1>
          <p className="text-gray-600">New York → Boston • Today • 3 buses found</p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              label="Departure Time"
              type="select"
              placeholder="Any time"
            />
            <Input
              label="Price Range"
              placeholder="Max price"
            />
            <Input
              label="Bus Type"
              placeholder="All types"
            />
            <div className="md:self-end">
              <Button variant="outline" className="w-full">
                Apply Filters
              </Button>
            </div>
          </div>
        </Card>

        {/* Bus List */}
        <div className="space-y-4">
          {buses.map((bus) => (
            <Card key={bus.id} className="hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                {/* Bus Info */}
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold mb-2">{bus.name}</h3>
                  <p className="text-gray-600 mb-2">{bus.route}</p>
                  <div className="flex flex-wrap gap-2">
                    {bus.amenities.map((amenity, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timing */}
                <div className="text-center">
                  <div className="text-lg font-semibold">{bus.departure}</div>
                  <div className="text-sm text-gray-600 my-2">{bus.duration}</div>
                  <div className="text-lg font-semibold">{bus.arrival}</div>
                </div>

                {/* Price & Book */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-3">{bus.price}</div>
                  <Link to="/booking">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">Load More Buses</Button>
        </div>
      </div>
    </div>
  );
};

export default BusListing;