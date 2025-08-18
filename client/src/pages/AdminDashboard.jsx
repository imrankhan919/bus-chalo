import { useState } from 'react';
import Sidebar from '../components/Admin/Sidebar';
import Navbar from '../components/Admin/Navbar';
import Card from '../components/UI/Card';
import Table from '../components/Admin/Table';
import Button from '../components/UI/Button';

const AdminDashboard = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const dashboardStats = [
    { title: 'Total Buses', value: '24', icon: '🚌', color: 'bg-blue-500' },
    { title: 'Total Bookings', value: '1,248', icon: '🎫', color: 'bg-green-500' },
    { title: 'Total Users', value: '3,456', icon: '👥', color: 'bg-purple-500' },
    { title: 'Revenue', value: '$45,890', icon: '💰', color: 'bg-yellow-500' },
  ];

  const busData = [
    { name: 'Express Traveler', route: 'New York - Boston', price: '$45', status: 'Active' },
    { name: 'Comfort Plus', route: 'New York - Boston', price: '$50', status: 'Active' },
    { name: 'Night Rider', route: 'New York - Boston', price: '$40', status: 'Maintenance' },
    { name: 'City Express', route: 'LA - San Francisco', price: '$65', status: 'Active' },
  ];

  const bookingData = [
    { id: '#1001', passenger: 'John Doe', route: 'New York - Boston', date: '2024-01-15', status: 'Confirmed' },
    { id: '#1002', passenger: 'Jane Smith', route: 'LA - San Francisco', date: '2024-01-15', status: 'Pending' },
    { id: '#1003', passenger: 'Mike Johnson', route: 'Chicago - Detroit', date: '2024-01-14', status: 'Cancelled' },
  ];

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardStats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white text-xl">{stat.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-gray-600">{stat.title}</p>
                </Card>
              ))}
            </div>

            <Card>
              <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
              <Table
                headers={['Booking ID', 'Passenger', 'Route', 'Date', 'Status']}
                data={bookingData}
                actions={false}
              />
            </Card>
          </div>
        );

      case 'buses':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Bus Management</h2>
              <Button>Add New Bus</Button>
            </div>
            <Card>
              <Table
                headers={['Bus Name', 'Route', 'Price', 'Status']}
                data={busData}
              />
            </Card>
          </div>
        );

      case 'bookings':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Booking Management</h2>
              <Button variant="outline">Export Data</Button>
            </div>
            <Card>
              <Table
                headers={['Booking ID', 'Passenger', 'Route', 'Date', 'Status']}
                data={bookingData}
              />
            </Card>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">User Management</h2>
              <Button variant="outline">Export Users</Button>
            </div>
            <Card>
              <Table
                headers={['Name', 'Email', 'Bookings', 'Joined', 'Status']}
                data={[
                  { name: 'John Doe', email: 'john@example.com', bookings: '5', joined: '2023-12-01', status: 'Active' },
                  { name: 'Jane Smith', email: 'jane@example.com', bookings: '12', joined: '2023-11-15', status: 'Active' },
                  { name: 'Mike Johnson', email: 'mike@example.com', bookings: '3', joined: '2024-01-10', status: 'Inactive' },
                ]}
              />
            </Card>
          </div>
        );

      default:
        return (
          <Card>
            <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600">This section is under development.</p>
          </Card>
        );
    }
  };

  const getTitle = () => {
    const titles = {
      dashboard: 'Dashboard',
      buses: 'Bus Management',
      bookings: 'Booking Management',
      users: 'User Management',
      routes: 'Route Management',
      reports: 'Reports',
    };
    return titles[activeItem] || 'Dashboard';
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1">
        <Navbar title={getTitle()} />
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;