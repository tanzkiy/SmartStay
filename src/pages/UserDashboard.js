import  { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Heart, Shield, Wallet, Sparkles, Search, MapPin, DollarSign, Calendar, MessageCircle, Bell, Settings, Home, Bed, Wifi, Car, AlertCircle, Check, X, Upload } from 'lucide-react';
import { mockUserProfile, mockListings } from '../data/mockData';
import PropertyCard from '../components/common/PropertyCard';

const UserDashboard = () => {
  const user = mockUserProfile;
  const savedListings = mockListings.filter(listing => user.savedListings.includes(listing.id));
  //const applicationHistory = user.applicationHistory;

  // Search and filter state
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    priceRange: '',
    propertyType: '',
    duration: ''
  });
  const [searchResults, setSearchResults] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi! Looking for a boarding house near SLU or UC?", sender: 'bot' }
  ]);

  // New state for additional sections
  const [activeTab, setActiveTab] = useState('listings');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [showSmartLeaseModal, setShowSmartLeaseModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'LGU Safety Alert', message: 'Inspection scheduled for Oct 25 in Session Road area', type: 'alert', read: false, date: '2024-10-20' },
    { id: 2, title: 'Lease Status Update', message: 'Your SmartLease for Pine Breeze Dorm has been confirmed', type: 'update', read: false, date: '2024-10-19' },
    { id: 3, title: 'New Verified Properties', message: '3 new LGU-verified properties added near UC', type: 'info', read: true, date: '2024-10-18' }
  ]);
  const [bookings] = useState([
    { id: 1, propertyName: 'Pine Breeze Dorm', bookingDate: '2024-10-15', price: 3500, status: 'active', blockchainId: 'CAR-BG-2025-0045' },
    { id: 2, propertyName: 'Camp Allen Transient', bookingDate: '2024-09-20', price: 2000, status: 'completed', blockchainId: 'CAR-BG-2025-0032' }
  ]);
  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    phone: '+63 912 345 6789',
    role: 'Student',
    document: null
  });

  const handleSearch = () => {
    const filtered = mockListings.filter(listing => {
      const matchesLocation = !searchFilters.location || listing.location.toLowerCase().includes(searchFilters.location.toLowerCase());
      const matchesType = !searchFilters.propertyType || listing.type.toLowerCase() === searchFilters.propertyType.toLowerCase();
      const matchesPrice = !searchFilters.priceRange || (
        (searchFilters.priceRange === '0-5000' && listing.price <= 5000) ||
        (searchFilters.priceRange === '5000-8000' && listing.price > 5000 && listing.price <= 8000) ||
        (searchFilters.priceRange === '8000+' && listing.price > 8000)
      );
      return matchesLocation && matchesType && matchesPrice && listing.lguVerified && listing.blockchainVerified;
    });
    setSearchResults(filtered);
  };

  const handleBookProperty = (propertyId) => {
    alert(`SmartLease created successfully for property ${propertyId}! Blockchain transaction recorded.`);
  };

  const sendChatMessage = (message) => {
    setChatMessages(prev => [...prev, { id: Date.now(), text: message, sender: 'user' }]);
    // Simulate bot response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "I found some great options near SLU! Check out the search results below.",
        sender: 'bot'
      }]);
    }, 1000);
  };

  // const handleViewProperty = (property) => {
  //   setSelectedProperty(property);
  //   setShowPropertyModal(true);
  // };

  const handleStartSmartLease = (property) => {
    setSelectedProperty(property);
    setShowSmartLeaseModal(true);
  };

  const handleConfirmSmartLease = () => {
    alert(`SmartLease created successfully! Blockchain ID: CAR-BG-2025-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`);
    setShowSmartLeaseModal(false);
  };

  const markNotificationAsRead = (id) => {
    setNotifications(prev => prev.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const handleProfileUpdate = () => {
    alert('Profile updated successfully!');
    setShowProfileSettings(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">👤 Renter Dashboard</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 bg-mountain-green text-white rounded-full hover:bg-mountain-green-light transition-colors"
          >
            <Bell className="h-5 w-5" />
            {notifications.filter(n => !n.read).length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications.filter(n => !n.read).length}
              </span>
            )}
          </button>
          <button
            onClick={() => setShowProfileSettings(true)}
            className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 mb-8 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
        {[
          { id: 'listings', label: 'Listings', icon: Home },
          { id: 'bookings', label: 'My Bookings', icon: Calendar },
          { id: 'saved', label: 'Saved', icon: Heart }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              activeTab === tab.id
                ? 'bg-white dark:bg-gray-700 text-mountain-green shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Conditional Content Based on Active Tab */}
      {activeTab === 'listings' && (
        <>
          {/* Property Search Section */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <Search className="h-6 w-6 text-mountain-green" />
              Find Your Perfect Property
            </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
            <input
              type="text"
              placeholder="e.g., Session Road"
              value={searchFilters.location}
              onChange={(e) => setSearchFilters(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price Range</label>
            <select
              value={searchFilters.priceRange}
              onChange={(e) => setSearchFilters(prev => ({ ...prev, priceRange: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
            >
              <option value="">Any Price</option>
              <option value="0-5000">₱0 - ₱5,000</option>
              <option value="5000-8000">₱5,000 - ₱8,000</option>
              <option value="8000+">₱8,000+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Property Type</label>
            <select
              value={searchFilters.propertyType}
              onChange={(e) => setSearchFilters(prev => ({ ...prev, propertyType: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
            >
              <option value="">Any Type</option>
              <option value="boarding">Boarding House</option>
              <option value="transient">Transient</option>
              <option value="dorm">Dormitory</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-mountain-green text-white px-4 py-2 rounded-lg hover:bg-mountain-green-light shadow-sm"
            >
              Search
            </button>
          </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Search Results ({searchResults.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map(listing => (
                <div key={listing.id} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <img src={listing.image} alt={listing.title} className="w-full h-32 object-cover rounded-lg mb-3" />
                  <h4 className="font-medium text-gray-800 dark:text-white">{listing.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{listing.location}</p>
                  <p className="text-lg font-bold text-mountain-green">₱{listing.price}/month</p>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-green-600 font-medium">LGU-Verified</span>
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-xs text-blue-600 font-medium">Blockchain Verified</span>
                  </div>
                  <button
                    onClick={() => handleBookProperty(listing.id)}
                    className="w-full mt-3 bg-mountain-green text-white px-4 py-2 rounded-lg hover:bg-mountain-green-light shadow-sm flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Book SmartLease
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
          </section>

          {/* User Profile Section */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">My Profile</h2>
              <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">KYC Verified</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <User className="h-6 w-6 text-mountain-green mr-3" />
                <p className="text-lg text-gray-700 dark:text-gray-200">Name: {user.name}</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-mountain-green mr-3" />
                <p className="text-lg text-gray-700 dark:text-gray-200">Email: {user.email}</p>
              </div>
            </div>
          </section>

          {/* Blockchain Wallet Section */}
          <section className="bg-gradient-to-br from-mountain-green to-mountain-green-light rounded-2xl shadow-md p-6 mb-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <Wallet className="h-6 w-6" />
              <h2 className="text-2xl font-semibold">Blockchain Wallet</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <p className="text-sm opacity-90 mb-1">Token Balance</p>
                <p className="text-2xl font-bold">250 SST</p>
                <p className="text-xs opacity-75 mt-1">SmartStay Tokens</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <p className="text-sm opacity-90 mb-1">Verified Transactions</p>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs opacity-75 mt-1">On blockchain</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <p className="text-sm opacity-90 mb-1">Wallet Address</p>
                <p className="text-xs font-mono mt-1 break-all">0x742d...9f3a</p>
                <button className="text-xs underline mt-2 hover:opacity-80">View on Explorer</button>
              </div>
            </div>
          </section>

          {/* AI Recommendations Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-mountain-green" />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">AI Recommendations for You</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockListings.filter(p => p.aiRecommended).slice(0, 3).map(listing => (
                <PropertyCard key={listing.id} property={listing} />
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === 'bookings' && (
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">My Bookings</h2>
          <div className="space-y-4">
            {bookings.map(booking => (
              <div key={booking.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{booking.propertyName}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Booked on: {booking.bookingDate}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Blockchain ID: {booking.blockchainId}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    booking.status === 'active' ? 'bg-green-100 text-green-800' :
                    booking.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-mountain-green">₱{booking.price}/month</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                      View Details
                    </button>
                    {booking.status === 'active' && (
                      <button className="px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200">
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'saved' && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Saved Listings</h2>
          {savedListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedListings.map(listing => (
                <PropertyCard key={listing.id} property={listing} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center">
              <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-300">You haven't saved any listings yet.</p>
            </div>
          )}
        </section>
      )}

      {/* AI Chat Assistant */}
      <section className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="bg-mountain-green text-white p-4 rounded-full shadow-lg hover:bg-mountain-green-light transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </button>

        {showChatbot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute bottom-16 right-0 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-800 dark:text-white">AI Property Assistant</h3>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {chatMessages.map(message => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-mountain-green text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <input
                type="text"
                placeholder="Ask about properties..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim()) {
                    sendChatMessage(e.target.value);
                    e.target.value = '';
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
              />
            </div>
          </motion.div>
        )}
      </section>

      {/* Notifications Panel */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Notifications</h3>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map(notification => (
                <div key={notification.id} className={`p-4 border-b border-gray-100 dark:border-gray-700 ${!notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${
                      notification.type === 'alert' ? 'bg-red-100 text-red-600' :
                      notification.type === 'update' ? 'bg-green-100 text-green-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {notification.type === 'alert' ? <AlertCircle className="h-4 w-4" /> :
                       notification.type === 'update' ? <Check className="h-4 w-4" /> :
                       <Bell className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 dark:text-white">{notification.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{notification.date}</p>
                    </div>
                    {!notification.read && (
                      <button
                        onClick={() => markNotificationAsRead(notification.id)}
                        className="text-xs text-mountain-green hover:text-mountain-green-light"
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Profile Settings Modal */}
      {showProfileSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Profile Settings</h3>
                <button
                  onClick={() => setShowProfileSettings(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Role</label>
                <select
                  value={profileData.role}
                  onChange={(e) => setProfileData(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                >
                  <option value="Student">Student</option>
                  <option value="Tourist">Tourist</option>
                  <option value="Worker">Worker</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Verification Document</label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  onChange={(e) => setProfileData(prev => ({ ...prev, document: e.target.files[0] }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleProfileUpdate}
                className="w-full bg-mountain-green text-white px-4 py-2 rounded-lg hover:bg-mountain-green-light transition-colors"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Property Details Modal */}
      {showPropertyModal && selectedProperty && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{selectedProperty.title}</h3>
                <button
                  onClick={() => setShowPropertyModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img src={selectedProperty.image} alt={selectedProperty.title} className="w-full h-64 object-cover rounded-xl" />
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">{selectedProperty.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="text-lg font-bold text-mountain-green">₱{selectedProperty.price}/month</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{selectedProperty.beds} beds</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wifi className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">WiFi</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Parking</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Description</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProperty.description}</p>
                  <div className="flex gap-2 mb-4">
                    {selectedProperty.verified && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        LGU Verified
                      </span>
                    )}
                    {selectedProperty.blockchainVerified && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        Blockchain Verified
                      </span>
                    )}
                  </div>
                  <div className="space-y-3">
                    <button
                      onClick={() => handleStartSmartLease(selectedProperty)}
                      className="w-full bg-mountain-green text-white px-4 py-2 rounded-lg hover:bg-mountain-green-light transition-colors"
                    >
                      Start SmartLease
                    </button>
                    <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                      Contact Landlord
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SmartLease Portal Modal */}
      {showSmartLeaseModal && selectedProperty && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">SmartLease Portal</h3>
                <button
                  onClick={() => setShowSmartLeaseModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Property Details</h4>
                <p className="text-gray-600 dark:text-gray-300">{selectedProperty.title}</p>
                <p className="text-gray-600 dark:text-gray-300">{selectedProperty.location}</p>
                <p className="text-lg font-bold text-mountain-green mt-2">₱{selectedProperty.price}/month</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Lease Duration (months)</label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent">
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                    <option value="18">18 months</option>
                    <option value="24">24 months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Move-in Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="rounded" />
                  <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">
                    I agree to the SmartLease terms and blockchain verification
                  </label>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-800 dark:text-blue-200">Blockchain Secured</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-300">
                      Your lease agreement will be recorded on the blockchain for immutable verification.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleConfirmSmartLease}
                className="w-full bg-mountain-green text-white px-6 py-3 rounded-lg hover:bg-mountain-green-light transition-colors font-semibold"
              >
                Confirm SmartLease & Pay Deposit
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default UserDashboard;