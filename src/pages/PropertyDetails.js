import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, Star, Wifi, Car, Utensils, Waves, 
  ArrowLeft, Heart, Share2, Calendar, Shield
} from 'lucide-react';
import { mockListings } from '../data/mockData';
import ImageCarousel from '../components/property/ImageCarousel';
import BlockchainVerification from '../components/property/BlockchainVerification';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = mockListings.find(listing => listing.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('overview');
  const [isSaved, setIsSaved] = useState(false);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Property not found</h2>
        <Link to="/listings" className="text-mountain-green hover:text-mountain-green-light">
          ← Back to Listings
        </Link>
      </div>
    );
  }

  const amenityIcons = {
    'WiFi': Wifi,
    'Parking': Car,
    'Kitchen': Utensils,
    'Full Kitchen': Utensils,
    'Laundry': Waves,
  };

  const handleBookNow = () => {
    alert('Booking feature coming soon! This will integrate with blockchain-based payment system.');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this property: ${property.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Back Button */}
        <Link 
          to="/listings" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-mountain-green dark:hover:text-mountain-green-light mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Listings
        </Link>

        {/* Image Carousel */}
        <div className="mb-8">
          <ImageCarousel images={[property.image, property.image, property.image]} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title and Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`p-2 rounded-full ${
                      isSaved 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    } hover:scale-110 transition-transform`}
                    aria-label={isSaved ? 'Remove from saved' : 'Save property'}
                  >
                    <Heart className="h-5 w-5" fill={isSaved ? 'currentColor' : 'none'} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform"
                    aria-label="Share property"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  <span className="font-semibold text-gray-800 dark:text-white">{property.rating}</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-300">{property.type}</span>
                {property.verified && (
                  <>
                    <span className="text-gray-500 dark:text-gray-400">•</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm font-medium">Verified</span>
                    </div>
                  </>
                )}
              </div>

              <div className="text-3xl font-bold text-mountain-green dark:text-mountain-green-light">
                ₱{property.price.toLocaleString()}<span className="text-lg text-gray-500">/month</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${
                    activeTab === 'overview'
                      ? 'text-mountain-green border-b-2 border-mountain-green'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('amenities')}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${
                    activeTab === 'amenities'
                      ? 'text-mountain-green border-b-2 border-mountain-green'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  Amenities
                </button>
                <button
                  onClick={() => setActiveTab('blockchain')}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${
                    activeTab === 'blockchain'
                      ? 'text-mountain-green border-b-2 border-mountain-green'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  Blockchain
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Description</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {property.description}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Location Details</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        📍 {property.distance || 'Centrally located'}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Available Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {property.amenities?.map((amenity, index) => {
                        const Icon = amenityIcons[amenity] || Wifi;
                        return (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                            <Icon className="h-5 w-5 text-mountain-green" />
                            <span className="text-gray-700 dark:text-gray-200">{amenity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeTab === 'blockchain' && (
                  <BlockchainVerification blockchainData={property.blockchainData} />
                )}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Location</h3>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Map integration (OpenStreetMap/Google Maps)
                  <br />
                  Coordinates: {property.coordinates?.lat}, {property.coordinates?.lng}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
                  ₱{property.price.toLocaleString()}
                </div>
                <div className="text-gray-500 dark:text-gray-400">per month</div>
              </div>

              <button
                onClick={handleBookNow}
                className="w-full bg-mountain-green hover:bg-mountain-green-light text-white font-semibold py-3 px-6 rounded-xl transition-colors mb-3 flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Book Now
              </button>

              <button
                className="w-full border-2 border-mountain-green text-mountain-green hover:bg-mountain-green/10 font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Contact Owner
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Property Highlights</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>✓ {property.verified ? 'Blockchain Verified' : 'Verification Pending'}</li>
                  <li>✓ {property.type} Property</li>
                  <li>✓ {property.amenities?.length || 0} Amenities</li>
                  <li>✓ Available Immediately</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyDetails;
