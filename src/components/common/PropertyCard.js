import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck } from 'lucide-react';

const PropertyCard = ({ property }) => {
  const isVerified = property?.verified || property?.blockchainData?.verified;

  return (
    <Link to={`/property/${property.id}`} className="block">
      <div className="card overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative">
          <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
          <div className="absolute top-2 left-2 right-2 flex flex-col gap-2">
            {isVerified && (
              <div className="flex items-center bg-green-600/90 text-white text-xs font-medium px-2 py-1 rounded-full shadow w-fit">
                <ShieldCheck className="h-3 w-3 mr-1" />
                <span className="whitespace-nowrap">Verified</span>
              </div>
            )}
            {property.aiRecommended && (
              <div className="flex items-center bg-purple-600/90 text-white text-xs font-medium px-2 py-1 rounded-full shadow w-fit">
                <span className="whitespace-nowrap">✨ AI Recommended</span>
              </div>
            )}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 line-clamp-1">{property.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-1">{property.location}</p>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
              <span className="text-gray-700 dark:text-gray-200 text-sm">{property.rating}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">{property.type}</span>
          </div>
          <p className="text-mountain-green dark:text-mountain-green-light text-lg font-bold">₱{property.price.toLocaleString()}/month</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
