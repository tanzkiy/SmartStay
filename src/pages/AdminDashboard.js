import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users, FileText, CheckCircle, XCircle, TrendingUp,
  BarChart3, Shield, MapPin, DollarSign, Home, Upload, AlertCircle, Send,
  Bell, Activity, PieChart
} from 'lucide-react';
import { mockAdminData, mockListings, smartLeases, notifications, insightDashData } from '../data/mockData';

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

  // Mock verification queue with different statuses
  const verificationQueue = mockListings.filter(p => p.status !== 'verified').map(p => ({
    ...p,
    submittedOn: p.submittedOn || '2023-10-15',
    owner: p.owner || 'Unknown Owner'
  }));

  const [queue, setQueue] = useState(verificationQueue);

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
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">🏛 LGU / University Dashboard (InsightDash)</h1>
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
            onClick={() => setActiveTab('verification')}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === 'verification'
                ? 'text-mountain-green border-b-2 border-mountain-green'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            Verification Queue
          </button>
          <button
            onClick={() => setActiveTab('smartleases')}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === 'smartleases'
                ? 'text-mountain-green border-b-2 border-mountain-green'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            SmartLeases
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === 'analytics'
                ? 'text-mountain-green border-b-2 border-mountain-green'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            InsightDash
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === 'notifications'
                ? 'text-mountain-green border-b-2 border-mountain-green'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            Notifications
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-r from-mountain-green to-mountain-green-light rounded-xl p-4 text-white">
                  <Home className="h-8 w-8 mb-2 opacity-80" />
                  <p className="text-2xl font-bold">{insightDashData.overview.totalProperties}</p>
                  <p className="text-sm opacity-90">Total Properties</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                  <CheckCircle className="h-8 w-8 mb-2 opacity-80" />
                  <p className="text-2xl font-bold">{insightDashData.overview.verifiedProperties}</p>
                  <p className="text-sm opacity-90">Verified</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                  <FileText className="h-8 w-8 mb-2 opacity-80" />
                  <p className="text-2xl font-bold">{insightDashData.overview.activeLeases}</p>
                  <p className="text-sm opacity-90">Active Leases</p>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white">
                  <Bell className="h-8 w-8 mb-2 opacity-80" />
                  <p className="text-2xl font-bold">{notifications.filter(n => !n.read && n.role === 'admin').length}</p>
                  <p className="text-sm opacity-90">New Notifications</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-mountain-green" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {notifications.filter(n => n.role === 'admin').slice(0, 5).map(notification => (
                    <div key={notification.id} className={`p-4 rounded-xl border-l-4 ${
                      notification.read ? 'bg-gray-50 dark:bg-gray-700 border-gray-300' : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                    }`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-white">{notification.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{notification.message}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {new Date(notification.timestamp).toLocaleString()}
                          </p>
                        </div>
                        {!notification.read && (
                          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'verification' && (
            <div className="space-y-6">
              {/* Batch Upload Button */}
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Property Verification Queue</h3>
                <button className="flex items-center gap-2 bg-mountain-green text-white px-4 py-2 rounded-xl hover:bg-mountain-green-light shadow-sm">
                  <Upload className="h-4 w-4" />
                  Batch Upload (.csv/.xlsx)
                </button>
              </div>

              {/* Verification Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Property</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Owner</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Submitted On</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {queue.map(property => (
                      <tr key={property.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{property.title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">{property.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{property.owner}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 capitalize">{property.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{property.submittedOn}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            property.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                            property.status === 'sent_to_lgu' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                            property.status === 'rejected' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                          }`}>
                            {property.status === 'pending' ? 'Pending' :
                             property.status === 'sent_to_lgu' ? 'Sent to LGU' :
                             property.status === 'rejected' ? 'Rejected' :
                             property.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {property.status === 'pending' && (
                            <>
                              <button
                                onClick={() => {
                                  setQueue(prev => prev.map(p =>
                                    p.id === property.id ? { ...p, status: 'sent_to_lgu' } : p
                                  ));
                                  alert(`Listing forwarded to LGU for verification.`);
                                }}
                                className="text-blue-600 hover:text-blue-900 mr-3"
                              >
                                <Send className="h-5 w-5 inline mr-1" />
                                Forward to LGU
                              </button>
                              <button
                                onClick={() => {
                                  setQueue(prev => prev.filter(p => p.id !== property.id));
                                  alert('Property rejected. Notification sent to landlord.');
                                }}
                                className="text-red-600 hover:text-red-900 mr-3"
                              >
                                <XCircle className="h-5 w-5 inline mr-1" />
                                Reject
                              </button>
                            </>
                          )}
                          {property.status === 'sent_to_lgu' && (
                            <span className="text-gray-500">Awaiting LGU verification</span>
                          )}
                          {property.status === 'rejected' && (
                            <span className="text-red-600">Rejected by LGU</span>
                          )}
                          <button className="text-blue-600 hover:text-blue-900 ml-3">
                            <AlertCircle className="h-5 w-5 inline mr-1" />
                            Request Info
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'smartleases' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">SmartLease Management</h3>
                <button className="flex items-center gap-2 bg-mountain-green text-white px-4 py-2 rounded-xl hover:bg-mountain-green-light">
                  <FileText className="h-4 w-4" />
                  Create SmartLease
                </button>
              </div>

              {/* SmartLease Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active Leases</p>
                  <p className="text-2xl font-bold text-green-600">{smartLeases.filter(l => l.status === 'active').length}</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Pending Verification</p>
                  <p className="text-2xl font-bold text-yellow-600">{smartLeases.filter(l => l.status === 'pending_verification').length}</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-blue-600">₱{insightDashData.overview.monthlyRevenue.toLocaleString()}</p>
                </div>
              </div>

              {/* SmartLease Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Property</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Tenant</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Monthly Rent</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Blockchain</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {smartLeases.map(lease => {
                      const property = mockListings.find(p => p.id === lease.propertyId);
                      return (
                        <tr key={lease.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            {property?.title || 'Unknown Property'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            Tenant #{lease.tenantId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            ₱{lease.monthlyRent.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              lease.status === 'active' ? 'bg-green-100 text-green-800' :
                              lease.status === 'pending_verification' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {lease.status.replace('_', ' ').toUpperCase()}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {lease.blockchainVerified ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-500" />
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-mountain-green hover:text-mountain-green-light mr-3">View</button>
                            <button className="text-blue-600 hover:text-blue-900">Edit</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* InsightDash Analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Property Trends */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-mountain-green" />
                    Property Registration Trends
                  </h3>
                  <div className="space-y-3">
                    {insightDashData.trends.propertyRegistrations.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-200">{item.month}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div
                              className="bg-mountain-green h-2 rounded-full"
                              style={{ width: `${(item.count / Math.max(...insightDashData.trends.propertyRegistrations.map(i => i.count))) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-800 dark:text-white">{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Property Type Distribution */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-mountain-green" />
                    Property Types
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(insightDashData.demographics.propertyTypes).map(([type, count]) => (
                      <div key={type} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-200">{type}</span>
                        <span className="text-sm font-medium text-gray-800 dark:text-white">{count} properties</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl">
                  <p className="text-sm opacity-90">Average Verification Time</p>
                  <p className="text-2xl font-bold">{insightDashData.performance.averageVerificationTime}</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl">
                  <p className="text-sm opacity-90">Landlord Satisfaction</p>
                  <p className="text-2xl font-bold">{insightDashData.performance.landlordSatisfaction}/5.0</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl">
                  <p className="text-sm opacity-90">Blockchain Uptime</p>
                  <p className="text-2xl font-bold">{insightDashData.performance.blockchainUptime}%</p>
                </div>
              </div>

              {/* Average Rent by Area */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-mountain-green" />
                  Average Rent by Area
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <span className="text-gray-700 dark:text-gray-200">Session Road Area</span>
                    <span className="font-bold text-gray-800 dark:text-white">₱7,500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <span className="text-gray-700 dark:text-gray-200">Upper Session Road</span>
                    <span className="font-bold text-gray-800 dark:text-white">₱8,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                    <span className="text-gray-700 dark:text-gray-200">Bonifacio Street</span>
                    <span className="font-bold text-gray-800 dark:text-white">₱5,000</span>
                  </div>
                </div>
              </div>

              {/* Active SmartLeases Stat Card */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Active SmartLeases</h3>
                <div className="p-6 bg-gradient-to-r from-mountain-green to-mountain-green-light rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-4xl font-bold">47</p>
                      <p className="text-mountain-green-light">Active Leases</p>
                    </div>
                    <Shield className="h-16 w-16 opacity-80" />
                  </div>
                  <p className="text-sm mt-4 opacity-90">
                    Blockchain-verified rental agreements currently active in the system.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Notification Center</h3>
                <button className="flex items-center gap-2 bg-mountain-green text-white px-4 py-2 rounded-xl hover:bg-mountain-green-light">
                  <Bell className="h-4 w-4" />
                  Mark All Read
                </button>
              </div>

              {/* Notification Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-gray-400">High Priority</p>
                  <p className="text-2xl font-bold text-red-600">
                    {notifications.filter(n => n.role === 'admin' && n.priority === 'high' && !n.read).length}
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Medium Priority</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {notifications.filter(n => n.role === 'admin' && n.priority === 'medium' && !n.read).length}
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Unread</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {notifications.filter(n => n.role === 'admin' && !n.read).length}
                  </p>
                </div>
              </div>

              {/* Notifications List */}
              <div className="space-y-3">
                {notifications.filter(n => n.role === 'admin').map(notification => (
                  <div key={notification.id} className={`p-4 rounded-xl border-l-4 ${
                    notification.read ? 'bg-gray-50 dark:bg-gray-700 border-gray-300' :
                    notification.priority === 'high' ? 'bg-red-50 dark:bg-red-900/20 border-red-500' :
                    notification.priority === 'medium' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500' :
                    'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                  }`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-gray-800 dark:text-white">{notification.title}</h4>
                          {!notification.read && (
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              notification.priority === 'high' ? 'bg-red-100 text-red-800' :
                              notification.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {notification.priority}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{notification.message}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                          <span>{new Date(notification.timestamp).toLocaleString()}</span>
                          {notification.actionRequired && (
                            <span className="text-red-600 dark:text-red-400 font-medium">Action Required</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        {!notification.read && (
                          <button className="text-mountain-green hover:text-mountain-green-light text-sm">
                            Mark Read
                          </button>
                        )}
                        {notification.actionRequired && (
                          <button className="text-blue-600 hover:text-blue-900 text-sm">
                            Take Action
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
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
