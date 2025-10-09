import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Heart, Clock, Shield, Wallet, TrendingUp, Sparkles } from 'lucide-react';
import { mockUserProfile, mockListings } from '../data/mockData';
import PropertyCard from '../components/common/PropertyCard';

const UserDashboard = () => {
  const user = mockUserProfile;
  const savedListings = mockListings.filter(listing => user.savedListings.includes(listing.id));
  const applicationHistory = user.applicationHistory;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">User Dashboard</h1>
      
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

      {/* Saved Listings Section */}
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

      {/* Application History Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Application History</h2>
        {applicationHistory.length > 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            {applicationHistory.map(app => (
              <div key={app.id} className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-3 last:border-b-0">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Application for Listing ID: {app.listingId}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Status: {app.status} - {app.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  app.status === 'approved' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center">
            <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300">No application history found.</p>
          </div>
        )}
      </section>
    </motion.div>
  );
};

export default UserDashboard;