import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, AlertCircle, CheckCircle, Clock, Plus } from 'lucide-react';
import { mockListings } from '../data/mockData';

const LandlordDashboard = () => {
  const [properties, setProperties] = useState(mockListings.filter(p => p.owner === 'Ana D.' || p.owner === 'Mark T.')); // Mock landlord properties
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    type: 'boarding',
    price: '',
    photos: [],
    businessPermit: '',
    validId: ''
  });
  const [aiAlert, setAiAlert] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // AI validation for business permit
    if (name === 'businessPermit' && !value) {
      setAiAlert('Please upload a valid business permit before submission.');
    } else if (name === 'businessPermit' && value) {
      setAiAlert('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.businessPermit) {
      setAiAlert('Please upload a valid business permit before submission.');
      return;
    }

    const newProperty = {
      id: properties.length + 1,
      title: formData.name,
      location: formData.address,
      type: formData.type,
      price: parseInt(formData.price),
      verified: false,
      status: 'pending',
      submittedOn: new Date().toISOString().split('T')[0],
      owner: 'Current Landlord'
    };

    setProperties(prev => [...prev, newProperty]);
    setFormData({
      name: '',
      address: '',
      type: 'boarding',
      price: '',
      photos: [],
      businessPermit: '',
      validId: ''
    });
    setShowForm(false);
    setAiAlert('');
  };

  const getStatusChip = (status) => {
    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
            <Clock className="h-4 w-4" />
            Pending Verification
          </span>
        );
      case 'verified':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            <CheckCircle className="h-4 w-4" />
            Verified
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
            <AlertCircle className="h-4 w-4" />
            Rejected
          </span>
        );
      default:
        return null;
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
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">🏘 Landlord Dashboard</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-mountain-green text-white px-4 py-2 rounded-xl hover:bg-mountain-green-light shadow-sm"
        >
          <Plus className="h-5 w-5" />
          Add Property
        </button>
      </div>

      {/* Add Property Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Add New Property</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Property Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                >
                  <option value="boarding">Boarding</option>
                  <option value="transient">Transient</option>
                  <option value="dorm">Dorm</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Price per Month (₱)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Business Permit No.
                </label>
                <input
                  type="text"
                  name="businessPermit"
                  value={formData.businessPermit}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Valid ID Upload
                </label>
                <input
                  type="file"
                  name="validId"
                  onChange={(e) => setFormData(prev => ({ ...prev, validId: e.target.files[0]?.name || '' }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                  accept="image/*,.pdf"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Upload Photos
              </label>
              <input
                type="file"
                multiple
                onChange={(e) => setFormData(prev => ({ ...prev, photos: Array.from(e.target.files).map(f => f.name) }))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mountain-green/40 focus:border-transparent"
                accept="image/*"
              />
            </div>

            {aiAlert && (
              <div className="flex items-center gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                <p className="text-sm text-yellow-800 dark:text-yellow-200">{aiAlert}</p>
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-mountain-green text-white px-6 py-2 rounded-xl hover:bg-mountain-green-light shadow-sm"
              >
                Submit Property
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-xl hover:bg-gray-400 dark:hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Properties List */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">My Properties</h2>
        <div className="space-y-4">
          {properties.map(property => (
            <div key={property.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div className="flex items-center gap-4">
                <Home className="h-8 w-8 text-mountain-green" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">{property.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{property.location}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">₱{property.price}/month • {property.type}</p>
                </div>
              </div>
              <div className="text-right">
                {getStatusChip(property.status || (property.verified ? 'verified' : 'pending'))}
                {property.submittedOn && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Submitted: {property.submittedOn}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LandlordDashboard;
