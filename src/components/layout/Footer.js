import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-10 pb-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap">
          {/* Logo and Description */}
          <div className="w-full md:w-4/12 px-4 mb-8">
            <h4 className="text-xl font-bold text-mountain-green dark:text-white mb-2">
              SmartStay<span className="text-mountain-green-light"> </span>
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              AI-powered housing and boarding finder platform .
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Supported by:</span>
              <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200">Lorem Ipsum</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-2/12 px-4 mb-8">
            <h5 className="text-lg font-semibold text-gray-700 dark:text-white mb-3">Quick Links</h5>
            <ul className="list-none">
              <li className="py-1">
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-mountain-green dark:hover:text-mountain-green-light text-sm">
                  Home
                </Link>
              </li>
              <li className="py-1">
                <Link to="/listings" className="text-gray-600 dark:text-gray-300 hover:text-mountain-green dark:hover:text-mountain-green-light text-sm">
                  Listings
                </Link>
              </li>
              <li className="py-1">
                <Link to="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-mountain-green dark:hover:text-mountain-green-light text-sm">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full md:w-2/12 px-4 mb-8">
            <h5 className="text-lg font-semibold text-gray-700 dark:text-white mb-3">Resources</h5>
            <ul className="list-none">
              <li className="py-1">
                <Link to="/help" className="text-gray-600 dark:text-gray-300 hover:text-mountain-green dark:hover:text-mountain-green-light text-sm">
                  Help Center
                </Link>
              </li>
              <li className="py-1">
                <Link to="/blockchain" className="text-gray-600 dark:text-gray-300 hover:text-mountain-green dark:hover:text-mountain-green-light text-sm">
                  Blockchain Verification
                </Link>
              </li>
              <li className="py-1">
                <Link to="/ai" className="text-gray-600 dark:text-gray-300 hover:text-mountain-green dark:hover:text-mountain-green-light text-sm">
                  AI Recommendations
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full md:w-4/12 px-4 mb-8">
            <h5 className="text-lg font-semibold text-gray-700 dark:text-white mb-3">Legal</h5>
            <ul className="list-none">
              <li className="py-1">
                <Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-mountain-green dark:hover:text-mountain-green-light text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li className="py-1">
                <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-mountain-green dark:hover:text-mountain-green-light text-sm">
                  Terms of Service
                </Link>
              </li>
              <li className="py-1">
                <Link to="/accessibility" className="text-gray-600 dark:text-gray-300 hover:text-mountain-green dark:hover:text-mountain-green-light text-sm">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex flex-wrap items-center md:justify-between justify-center mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center md:text-left">
            <div className="flex items-center">
              <label htmlFor="language-select" className="text-sm text-gray-600 dark:text-gray-300 mr-2">
                Language:
              </label>
              <select 
                id="language-select"
                className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white text-sm rounded-lg focus:ring-mountain-green focus:border-mountain-green block p-1"
                aria-label="Select language"
              >
                <option value="en">English</option>
                <option value="fil">Filipino</option>
                <option value="ilo">Ilocano</option>
              </select>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="w-full md:w-8/12 px-4 mx-auto text-center md:text-right">
            <div className="text-sm text-gray-600 dark:text-gray-400 py-1">
              © {new Date().getFullYear()} SmartStay . All rights reserved.
              <span className="block md:inline md:ml-2">Supported by Lorem Ipsum.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;