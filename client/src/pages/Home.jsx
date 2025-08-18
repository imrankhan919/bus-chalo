import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import Card from '../components/UI/Card';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Book Your Bus Easily
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50">
            Travel comfortably and safely to your destination
          </p>
          <Link to="/buses">
            <Button size="lg" variant="secondary">
              Start Booking Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Find Your Bus</h2>
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input
                label="From"
                placeholder="Select departure city"
              />
              <Input
                label="To"
                placeholder="Select destination"
              />
              <Input
                label="Date"
                type="date"
              />
              <div className="md:self-end">
                <Button className="w-full" size="lg">
                  Search Buses
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Featured Routes */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Popular Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { route: "New York → Boston", price: "$45", duration: "4h 30m" },
              { route: "Los Angeles → San Francisco", price: "$65", duration: "6h 45m" },
              { route: "Chicago → Detroit", price: "$35", duration: "3h 15m" },
              { route: "Miami → Orlando", price: "$25", duration: "2h 45m" },
              { route: "Seattle → Portland", price: "$30", duration: "3h 30m" },
              { route: "Dallas → Austin", price: "$40", duration: "4h 15m" },
            ].map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg">{route.route}</h3>
                  <span className="text-2xl font-bold text-blue-500">{route.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration: {route.duration}</span>
                  <Link to="/buses">
                    <Button size="sm">Book Now</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Choose BusBook?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comfortable Buses</h3>
              <p className="text-gray-600">Modern fleet with comfortable seating and air conditioning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Your safety is our priority with experienced drivers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Quick and hassle-free online booking process</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;