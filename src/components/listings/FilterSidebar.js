import React from 'react';
import { Sliders, MapPin, Building, DollarSign, Star, Shield, School } from 'lucide-react';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 md:p-6">
      <div className="flex items-center mb-6">
        <Sliders className="h-5 w-5 text-mountain-green mr-2" />
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Filters</h2>
      </div>
      
      {/* Location Filter */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
          <h3 className="font-medium text-gray-700 dark:text-gray-300">Location</h3>
        </div>
        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-mountain-green"
          aria-label="Filter by location"
        >
          <option value="">All Locations</option>
          <option value="Session Road">Session Road</option>
          <option value="Burnham Park">Burnham Park</option>
          <option value="Mines View">Mines View</option>
          <option value="Camp John Hay">Camp John Hay</option>
          <option value="Baguio Cathedral">Baguio Cathedral</option>
        </select>
      </div>
      
      {/* Property Type Filter */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Building className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
          <h3 className="font-medium text-gray-700 dark:text-gray-300">Property Type</h3>
        </div>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="propertyType"
              value="Studio"
              checked={filters.propertyType.includes('Studio')}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilters(prev => ({
                    ...prev,
                    propertyType: [...prev.propertyType, 'Studio']
                  }));
                } else {
                  setFilters(prev => ({
                    ...prev,
                    propertyType: prev.propertyType.filter(type => type !== 'Studio')
                  }));
                }
              }}
              className="rounded text-mountain-green focus:ring-mountain-green"
              aria-label="Filter by Studio apartments"
            />
            <span className="ml-2 text-gray-700 dark:text-gray-300">Studio</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="propertyType"
              value="1-Bedroom"
              checked={filters.propertyType.includes('1-Bedroom')}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilters(prev => ({
                    ...prev,
                    propertyType: [...prev.propertyType, '1-Bedroom']
                  }));
                } else {
                  setFilters(prev => ({
                    ...prev,
                    propertyType: prev.propertyType.filter(type => type !== '1-Bedroom')
                  }));
                }
              }}
              className="rounded text-mountain-green focus:ring-mountain-green"
              aria-label="Filter by 1-Bedroom apartments"
            />
            <span className="ml-2 text-gray-700 dark:text-gray-300">1-Bedroom</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="propertyType"
              value="2-Bedroom"
              checked={filters.propertyType.includes('2-Bedroom')}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilters(prev => ({
                    ...prev,
                    propertyType: [...prev.propertyType, '2-Bedroom']
                  }));
                } else {
                  setFilters(prev => ({
                    ...prev,
                    propertyType: prev.propertyType.filter(type => type !== '2-Bedroom')
                  }));
                }
              }}
              className="rounded text-mountain-green focus:ring-mountain-green"
              aria-label="Filter by 2-Bedroom apartments"
            />
            <span className="ml-2 text-gray-700 dark:text-gray-300">2-Bedroom</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="propertyType"
              value="Dormitory"
              checked={filters.propertyType.includes('Dormitory')}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilters(prev => ({
                    ...prev,
                    propertyType: [...prev.propertyType, 'Dormitory']
                  }));
                } else {
                  setFilters(prev => ({
                    ...prev,
                    propertyType: prev.propertyType.filter(type => type !== 'Dormitory')
                  }));
                }
              }}
              className="rounded text-mountain-green focus:ring-mountain-green"
              aria-label="Filter by Dormitory"
            />
            <span className="ml-2 text-gray-700 dark:text-gray-300">Dormitory</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="propertyType"
              value="Boarding House"
              checked={filters.propertyType.includes('Boarding House')}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilters(prev => ({
                    ...prev,
                    propertyType: [...prev.propertyType, 'Boarding House']
                  }));
                } else {
                  setFilters(prev => ({
                    ...prev,
                    propertyType: prev.propertyType.filter(type => type !== 'Boarding House')
                  }));
                }
              }}
              className="rounded text-mountain-green focus:ring-mountain-green"
              aria-label="Filter by Boarding House"
            />
            <span className="ml-2 text-gray-700 dark:text-gray-300">Boarding House</span>
          </label>
        </div>
      </div>
      
      {/* Price Range Filter */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <DollarSign className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
          <h3 className="font-medium text-gray-700 dark:text-gray-300">Price Range</h3>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="Min"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-mountain-green"
            aria-label="Minimum price"
          />
          <span className="text-gray-500 dark:text-gray-400">to</span>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="Max"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-mountain-green"
            aria-label="Maximum price"
          />
        </div>
      </div>
      
      {/* Near Schools Filter */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <School className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
          <h3 className="font-medium text-gray-700 dark:text-gray-300">Near Schools</h3>
        </div>
        <select
          name="nearSchool"
          value={filters.nearSchool}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-mountain-green"
          aria-label="Filter by nearby school"
        >
          <option value="">Any</option>
          <option value="Saint Louis University">Saint Louis University</option>
          <option value="University of Baguio">University of Baguio</option>
          <option value="University of the Cordilleras">University of the Cordilleras</option>
          <option value="Baguio Central University">Baguio Central University</option>
        </select>
      </div>
      
      {/* Special Filters */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Special Filters</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="verified"
              checked={filters.verified}
              onChange={handleChange}
              className="rounded text-mountain-green focus:ring-mountain-green"
              aria-label="Show only blockchain verified properties"
            />
            <div className="ml-2 flex items-center">
              <Shield className="h-4 w-4 text-mountain-green mr-1" />
              <span className="text-gray-700 dark:text-gray-300">Blockchain Verified</span>
            </div>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="aiRecommended"
              checked={filters.aiRecommended}
              onChange={handleChange}
              className="rounded text-mountain-green focus:ring-mountain-green"
              aria-label="Show only AI recommended properties"
            />
            <div className="ml-2 flex items-center">
              <Star className="h-4 w-4 text-mountain-green mr-1" />
              <span className="text-gray-700 dark:text-gray-300">AI Recommended</span>
            </div>
          </label>
        </div>
      </div>
      
      {/* Reset Filters Button */}
      <button
        onClick={() => setFilters({
          location: '',
          propertyType: [],
          minPrice: '',
          maxPrice: '',
          nearSchool: '',
          verified: false,
          aiRecommended: false
        })}
        className="w-full py-2 px-4 border border-mountain-green text-mountain-green hover:bg-mountain-green hover:text-white rounded-xl transition-colors"
        aria-label="Reset all filters"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;