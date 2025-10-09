import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import FilterSidebar from '../components/listings/FilterSidebar';
import PropertyCard from '../components/common/PropertyCard';
import { mockListings } from '../data/mockData';

const Listings = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('recommended');
  const listingsPerPage = 8;
  
  // Initialize filters from URL parameters
  const [filters, setFilters] = useState({
    location: '',
    propertyType: [],
    minPrice: '',
    maxPrice: '',
    nearSchool: '',
    verified: false,
    aiRecommended: false
  });
  
  // Parse URL query parameters on initial load
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    
    const newFilters = { 
      location: queryParams.get('location') || '',
      propertyType: queryParams.has('type') ? [queryParams.get('type')] : [],
      minPrice: '',
      maxPrice: '',
      nearSchool: '',
      verified: queryParams.get('verified') === 'true',
      aiRecommended: false
    };
    
    if (queryParams.has('price')) {
      const priceRange = queryParams.get('price').split('-');
      if (priceRange.length === 2) {
        newFilters.minPrice = priceRange[0];
        newFilters.maxPrice = priceRange[1];
      }
    }
    
    setFilters(newFilters);
  }, [location.search]);
  
  // Filter listings based on current filters
  const filteredListings = mockListings.filter(listing => {
    // Filter by location
    if (filters.location && !listing.location.includes(filters.location)) {
      return false;
    }
    
    // Filter by property type
    if (filters.propertyType.length > 0 && !filters.propertyType.includes(listing.type)) {
      return false;
    }
    
    // Filter by price range
    if (filters.minPrice && listing.price < parseInt(filters.minPrice)) {
      return false;
    }
    
    if (filters.maxPrice && listing.price > parseInt(filters.maxPrice)) {
      return false;
    }
    
    // Filter by nearby school
    if (filters.nearSchool && !listing.nearbySchools.includes(filters.nearSchool)) {
      return false;
    }
    
    // Filter by verification status
    if (filters.verified && !listing.verified) {
      return false;
    }
    
    // Filter by AI recommendation
    if (filters.aiRecommended && !listing.aiRecommended) {
      return false;
    }
    
    return true;
  });
  
  // Sort listings based on selected option
  const sortedListings = [...filteredListings].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default: // recommended
        return b.aiRecommended - a.aiRecommended;
    }
  });
  
  // Pagination
  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = sortedListings.slice(indexOfFirstListing, indexOfLastListing);
  const totalPages = Math.ceil(sortedListings.length / listingsPerPage);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
      >
        Available Properties in Baguio City
      </motion.h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>
        
        {/* Listings */}
        <div className="lg:w-3/4">
          {/* Sort and Results Count */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-0">
              <span className="font-medium">{filteredListings.length}</span> properties found
            </p>
            
            <div className="flex items-center">
              <ArrowUpDown className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
              <label htmlFor="sort" className="sr-only">Sort by</label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-mountain-green"
                aria-label="Sort listings"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          
          {/* Listings Grid */}
          {currentListings.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {currentListings.map(listing => (
                <motion.div key={listing.id} variants={itemVariants}>
                  <PropertyCard property={listing} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">No properties match your current filters.</p>
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
                className="py-2 px-4 bg-mountain-green text-white hover:bg-mountain-green-light rounded-xl transition-colors"
                aria-label="Reset all filters"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <nav className="flex items-center" aria-label="Pagination">
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-l-xl border ${
                    currentPage === 1
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  } border-gray-300 dark:border-gray-600`}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  // Show current page, first page, last page, and one page before and after current
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`px-4 py-2 border ${
                          currentPage === pageNumber
                            ? 'bg-mountain-green text-white'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        } border-gray-300 dark:border-gray-600`}
                        aria-label={`Page ${pageNumber}`}
                        aria-current={currentPage === pageNumber ? 'page' : undefined}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    (pageNumber === 2 && currentPage > 3) ||
                    (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                  ) {
                    return (
                      <span
                        key={pageNumber}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
                
                <button
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-r-xl border ${
                    currentPage === totalPages
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  } border-gray-300 dark:border-gray-600`}
                  aria-label="Next page"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listings;