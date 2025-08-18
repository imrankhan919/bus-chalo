import { Link } from 'react-router-dom';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'buses', name: 'Buses', icon: '🚌' },
    { id: 'bookings', name: 'Bookings', icon: '🎫' },
    { id: 'users', name: 'Users', icon: '👥' },
    { id: 'routes', name: 'Routes', icon: '🗺️' },
    { id: 'reports', name: 'Reports', icon: '📈' },
  ];

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="text-xl font-bold">BusBook Admin</span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeItem === item.id
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-0 w-64 p-6 border-t border-gray-800">
        <Link
          to="/"
          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
        >
          <span className="text-lg">🚪</span>
          <span>Back to Site</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;