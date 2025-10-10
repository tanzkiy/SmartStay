import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';

import './App.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Chatbot from './components/common/Chatbot';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/common/ProtectedRoute';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PropertyDetails from './pages/PropertyDetails';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // Handle dark mode, contrast, and language preferences
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const isHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    setDarkMode(isDarkMode);
    setHighContrast(isHighContrast);
    setLanguage(savedLanguage);
    
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('high-contrast', isHighContrast);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  const toggleHighContrast = () => {
    const newHighContrast = !highContrast;
    setHighContrast(newHighContrast);
    localStorage.setItem('highContrast', newHighContrast);
    document.documentElement.classList.toggle('high-contrast', newHighContrast);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Handle PWA install prompt
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    });
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          highContrast={highContrast}
          toggleHighContrast={toggleHighContrast}
          language={language}
          changeLanguage={changeLanguage}
          showInstallPrompt={showInstallPrompt}
          handleInstallClick={handleInstallClick}
        />

        <main className="flex-grow">
          <Routes>
            {/* 👇 Default route now shows Login first */}
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected User Routes */}
            <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
              <Route path="/dashboard" element={<UserDashboard />} />
            </Route>

            {/* Protected Admin Routes */}
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <ScrollToTop />
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
