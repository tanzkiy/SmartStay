import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Home as HomeIcon, DollarSign, Sparkles, Star, Lightbulb } from 'lucide-react';
import PropertyCard from '../components/common/PropertyCard';
import { mockListings } from '../data/mockData';

const Home = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (location) queryParams.append('location', location);
    if (propertyType) queryParams.append('type', propertyType);
    if (priceRange) queryParams.append('price', priceRange);
    navigate(`/listings?${queryParams.toString()}`);
  };

  // Featured and AI recommendations
  const featuredListings = mockListings.slice(0, 3);
  const aiRecommended = mockListings.filter(p => p.aiRecommended);
  const recommendedListings = aiRecommended.length ? aiRecommended : [...mockListings].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[60vh] flex items-center justify-center text-white p-4 overflow-hidden"
        style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzNXx8cmVhbCUyMGVzdGF0ZXxlbnwwfDB8fHwxNzE1Njc2NjQyfDA&ixlib=rb-4.0.3&q=80&w=1080\')', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
          <p className="text-xl mb-8">Discover homes, apartments, and dorms for rent.</p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-full shadow-lg max-w-3xl mx-auto p-3 md:p-2">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_auto] gap-2 md:gap-0 items-stretch">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 md:border-0 md:rounded-full">
                <MapPin className="text-gray-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Location (e.g., Baguio City)"
                  className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  aria-label="Location"
                />
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 md:border-0 md:border-l md:border-gray-200 md:dark:border-gray-700 md:rounded-none">
                <HomeIcon className="text-gray-400 shrink-0" />
                <select
                  className="w-auto bg-transparent outline-none text-gray-800 dark:text-white"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  aria-label="Property Type"
                >
                  <option value="">Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Dormitory">Dormitory</option>
                  <option value="Studio">Studio</option>
                </select>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 md:border-0 md:border-l md:border-gray-200 md:dark:border-gray-700 md:rounded-none">
                <DollarSign className="text-gray-400 shrink-0" />
                <select
                  className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  aria-label="Price Range"
                >
                  <option value="">Price Range</option>
                  <option value="0-5000">Below ₱5,000</option>
                  <option value="5000-10000">₱5,000 - ₱10,000</option>
                  <option value="10000-max">Above ₱10,000</option>
                </select>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-mountain-green hover:bg-mountain-green-light text-white rounded-xl md:rounded-full px-4 py-2 md:px-3 md:py-1.5"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
                <span className="font-medium md:hidden">Search</span>
              </button>
            </div>
          </form>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </motion.section>

      {/* Featured Listings */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Star className="h-6 w-6 text-mountain-green" />
          <h2 className="text-3xl font-bold text-center">Featured Properties</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* AI Smart Suggestions */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Lightbulb className="h-6 w-6 text-mountain-green" />
            <h2 className="text-3xl font-bold text-center">AI Smart Suggestions</h2>
          </div>
          {recommendedListings.length > 0 ? (
            <div className="flex gap-6 overflow-x-auto pr-4 pb-0">
              {recommendedListings.map(property => (
                <div key={property.id} className="min-w-[260px] p-2">
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>

          ) : (
            <p className="text-center text-gray-600 dark:text-gray-300">No recommendations available right now.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;