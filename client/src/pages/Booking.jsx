import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Input from '../components/UI/Input';

const Booking = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Complete Your Booking</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Passenger Details */}
            <Card>
              <h2 className="text-xl font-semibold mb-6">Passenger Details</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    required
                  />
                  <Input
                    label="Age"
                    type="number"
                    placeholder="Enter age"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500">
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter email address"
                  required
                />
              </form>
            </Card>

            {/* Seat Selection */}
            <Card>
              <h2 className="text-xl font-semibold mb-6">Select Your Seat</h2>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Driver</span>
                  <div className="flex space-x-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                      Available
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                      Occupied
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-primary-500 rounded mr-2"></div>
                      Selected
                    </div>
                  </div>
                </div>
                
                {/* Seat Layout */}
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
                    {Array.from({ length: 32 }, (_, i) => (
                      <button
                        key={i + 1}
                        className={`w-8 h-8 rounded text-xs font-medium ${
                          [5, 12, 18, 25].includes(i + 1)
                            ? 'bg-red-500 text-white cursor-not-allowed'
                            : i + 1 === 15
                            ? 'bg-primary-500 text-white'
                            : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                        disabled={[5, 12, 18, 25].includes(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-600">Selected Seat: <strong>15</strong></span>
                </div>
              </div>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <Card>
              <h2 className="text-xl font-semibold mb-6">Trip Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-lg">Express Traveler</h3>
                  <p className="text-gray-600">New York → Boston</p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">Today</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Departure:</span>
                    <span className="font-medium">08:00 AM</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Arrival:</span>
                    <span className="font-medium">12:30 PM</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Seat:</span>
                    <span className="font-medium">15</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Bus Fare:</span>
                    <span>$45.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Service Tax:</span>
                    <span>$2.25</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span className="text-blue-500">$47.25</span>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Proceed to Pay
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;