import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, FileText, CheckCircle, XCircle, TrendingUp, 
  BarChart3, Shield, MapPin, DollarSign, Home
} from 'lucide-react';
import { mockAdminData, mockListings } from '../data/mockData';

const AdminDashboard = () => {
  const { users, reports } = mockAdminData;
  const [activeTab, setActiveTab] = useState('overview');

  // Calculate statistics
  const verifiedListings = mockListings.filter(p => p.verified).length;
  const unverifiedListings = mockListings.length - verifiedListings;
  const totalListings = mockListings.length;
  const avgPrice = Math.round(mockListings.reduce((sum, p) => sum + p.price, 0) / mockListings.length);

  // Property type distribution
  const propertyTypes = mockListings.reduce((acc, p) => {
    acc[p.type] = (acc[p.type] || 0) + 1;
    return acc;
  }, {});

  // Blockchain transactions
  const blockchainTransactions = mockListings
    .filter(p => p.blockchainData?.verified)
    .flatMap(p => p.blockchainData.transactions || [])
    .slice(0, 5);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
        <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">
          <Shield className="h-4 w-4" />
          <span className="text-sm font-medium">Government Access</span>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <Home className="h-8 w-8 text-mountain-green" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">{totalListings}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">Total Listings</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">{verifiedListings}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">Verified Properties</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <XCircle className="h-8 w-8 text-yellow-500" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">{unverifiedListings}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">Pending Verification</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">₱{avgPrice.toLocaleString()}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">Avg. Monthly Rent</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md mb-8">
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
            onClick={() => setActiveTab('analytics')}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === 'analytics'
                ? 'text-mountain-green border-b-2 border-mountain-green'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            AI Analytics
          </button>
          <button
            onClick={() => setActiveTab('blockchain')}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === 'blockchain'
                ? 'text-mountain-green border-b-2 border-mountain-green'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            Blockchain Records
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === 'users'
                ? 'text-mountain-green border-b-2 border-mountain-green'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            Users
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Verification Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockListings.map(listing => (
                    <div key={listing.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">{listing.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{listing.type}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        listing.verified 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {listing.verified ? 'Verified' : 'Pending'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-mountain-green" />
                  Property Distribution by Type
                </h3>
                <div className="space-y-3">
                  {Object.entries(propertyTypes).map(([type, count]) => (
                    <div key={type}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-200">{type}</span>
                        <span className="font-medium text-gray-800 dark:text-white">{count} properties</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-mountain-green h-2 rounded-full"
                          style={{ width: `${(count / totalListings) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-mountain-green" />
                  Price Trends
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Lowest Price</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                      ₱{Math.min(...mockListings.map(p => p.price)).toLocaleString()}
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Average Price</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">₱{avgPrice.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Highest Price</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                      ₱{Math.max(...mockListings.map(p => p.price)).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-mountain-green" />
                  AI Recommendations Performance
                </h3>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <p className="text-gray-700 dark:text-gray-200 mb-2">
                    AI-recommended properties: <span className="font-bold">{mockListings.filter(p => p.aiRecommended).length}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    These properties match user preferences based on location, price, and amenities.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'blockchain' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-mountain-green" />
                  Recent Blockchain Transactions
                </h3>
                <div className="space-y-3">
                  {blockchainTransactions.length > 0 ? (
                    blockchainTransactions.map((tx, index) => (
                      <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium text-gray-800 dark:text-white">{tx.type}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{tx.date}</p>
                          </div>
                          <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                            Block #{tx.blockNumber || 'N/A'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-mono break-all">
                          Hash: {tx.hash || 'N/A'}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">No blockchain transactions recorded yet.</p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Verification Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Verified</p>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">{verifiedListings}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {((verifiedListings / totalListings) * 100).toFixed(1)}% of all listings
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pending Review</p>
                    <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{unverifiedListings}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Awaiting blockchain verification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">User Management</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {users.map(user => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{user.role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-mountain-green hover:text-mountain-green-light mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
