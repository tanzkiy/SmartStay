import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, Shield, AlertCircle, FileText, BarChart3, TrendingUp, Bell } from 'lucide-react';
import { mockListings, insightDashData, notifications, blockchainRecords } from '../data/mockData';

const PartnerDashboard = () => {
  const [assignedListings, setAssignedListings] = useState(
    mockListings.filter(listing => listing.status === 'sent_to_lgu')
  );
  const [activeTab, setActiveTab] = useState('verification');

  const handleVerify = (listingId) => {
    setAssignedListings(prev =>
      prev.map(listing =>
        listing.id === listingId
          ? { ...listing, status: 'verified', lguVerified: true, lguVerifiedBy: 'Baguio City LGU', lguVerifiedAt: new Date().toISOString() }
          : listing
      )
    );
    // Show success toast
    alert('Property verified by Baguio City LGU and recorded on blockchain!');
  };

  const handleReject = (listingId) => {
    setAssignedListings(prev =>
      prev.map(listing =>
        listing.id === listingId
          ? { ...listing, status: 'rejected' }
          : listing
      )
    );
    // Show rejection toast
    alert('Property rejected. Notification sent to landlord.');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return 'text-green-600 bg-green-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      default: return 'text-yellow-600 bg-yellow-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified': return <CheckCircle className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">LGU Partner Dashboard</h1>
        <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">
          <Shield className="h-4 w-4" />
          <span className="text-sm font-medium">Baguio City LGU</span>
        </div>
      </div>

      {/* Assigned Listings Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Assigned Listings for Verification</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Review property legitimacy, permits, and ownership documents</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Property
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Owner
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Submitted
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {assignedListings.map((listing) => (
                <tr key={listing.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-lg object-cover" src={listing.image} alt={listing.title} />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{listing.title}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-300">{listing.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {listing.owner}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {listing.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {listing.submittedOn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
                      {getStatusIcon(listing.status)}
                      {listing.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {listing.status === 'sent_to_lgu' && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleVerify(listing.id)}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 hover:bg-green-200 rounded-lg text-sm font-medium transition-colors"
                        >
                          <CheckCircle className="h-4 w-4" />
                          Verify
                        </button>
                        <button
                          onClick={() => handleReject(listing.id)}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg text-sm font-medium transition-colors"
                        >
                          <XCircle className="h-4 w-4" />
                          Reject
                        </button>
                      </div>
                    )}
                    {listing.status === 'verified' && (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm">Verified</span>
                      </div>
                    )}
                    {listing.status === 'rejected' && (
                      <div className="flex items-center gap-2 text-red-600">
                        <XCircle className="h-4 w-4" />
                        <span className="text-sm">Rejected</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {assignedListings.length === 0 && (
          <div className="px-6 py-12 text-center">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300">No listings assigned for verification</p>
          </div>
        )}
      </div>

      {/* Tabs for additional sections */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
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
          {activeTab === 'verification' && (
            <div className="space-y-6">
              {/* Property Records Management */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-mountain-green" />
                  Property Records Management
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Property</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Verification Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Blockchain Hash</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {blockchainRecords.filter(record => record.transactionType === 'property_verification').map(record => {
                        const property = mockListings.find(p => p.id === record.propertyId);
                        return (
                          <tr key={record.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                              {property?.title || 'Unknown Property'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                              {new Date(record.timestamp).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                              {record.hash.substring(0, 10)}...
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                record.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {record.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="text-mountain-green hover:text-mountain-green-light mr-3">View</button>
                              <button className="text-blue-600 hover:text-blue-900">Download</button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* InsightDash Analytics for LGU */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Verification Trends */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-mountain-green" />
                    Verification Trends
                  </h3>
                  <div className="space-y-3">
                    {insightDashData.trends.verifications.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-200">{item.month}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div
                              className="bg-mountain-green h-2 rounded-full"
                              style={{ width: `${(item.count / Math.max(...insightDashData.trends.verifications.map(i => i.count))) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-800 dark:text-white">{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-mountain-green" />
                    LGU Performance
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl">
                      <p className="text-sm opacity-90">Properties Verified</p>
                      <p className="text-2xl font-bold">{insightDashData.overview.verifiedProperties}</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl">
                      <p className="text-sm opacity-90">Avg. Verification Time</p>
                      <p className="text-2xl font-bold">{insightDashData.performance.averageVerificationTime}</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl">
                      <p className="text-sm opacity-90">Blockchain Uptime</p>
                      <p className="text-2xl font-bold">{insightDashData.performance.blockchainUptime}%</p>
                    </div>
                  </div>
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

              {/* Notifications List */}
              <div className="space-y-3">
                {notifications.filter(n => n.role === 'partner').map(notification => (
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
        </div>
      </div>

      {/* Verification Guidelines */}
      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-6 w-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Verification Guidelines</h3>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Check business permit validity and authenticity</li>
              <li>• Verify property ownership documents</li>
              <li>• Confirm property address and boundaries</li>
              <li>• Ensure compliance with local housing regulations</li>
              <li>• All verifications are recorded on the BlockVerify blockchain</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerDashboard;
