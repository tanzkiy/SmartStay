# SmartStay Cordillera - User Manual

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Navigation Guide](#navigation-guide)
4. [Features Walkthrough](#features-walkthrough)
5. [Accessibility Features](#accessibility-features)
6. [Troubleshooting](#troubleshooting)
7. [FAQ](#faq)

---

## Introduction

### What is SmartStay Cordillera?

SmartStay Cordillera is an AI-powered, blockchain-verified housing and boarding finder platform designed to help students, workers, and tourists find safe, affordable, and verified rental properties in the Cordillera Administrative Region, Philippines.

### Key Features
- 🤖 **AI-Powered Recommendations** - Personalized property suggestions
- 🔐 **Blockchain Verification** - Government-verified property listings
- 📱 **Progressive Web App (PWA)** - Install on any device, works offline
- ♿ **Fully Accessible** - WCAG 2.2 AA compliant
- 🌙 **Dark Mode** - Easy on the eyes
- 🌐 **Multi-Language** - English, Filipino, Ilocano

---

## Getting Started

### Accessing the Platform

#### Web Browser
1. Open your web browser (Chrome, Firefox, Safari, Edge)
2. Navigate to: `https://smartstay-cordillera.com` (or your deployment URL)
3. The homepage will load automatically

#### Installing as an App (PWA)

**On Desktop:**
1. Look for the "Install App" button in the top-right corner of the header
2. Click "Install App"
3. Confirm the installation prompt
4. The app will be added to your desktop/applications

**On Mobile:**
1. Open the website in your mobile browser
2. Tap the menu button (three dots)
3. Select "Add to Home Screen" or "Install App"
4. Confirm and the app icon will appear on your home screen

**Benefits of Installing:**
- ✅ Works offline
- ✅ Faster loading
- ✅ Native app experience
- ✅ Push notifications (coming soon)

---

## Navigation Guide

### Header Navigation

The header is always visible at the top of the page and contains:

```
┌─────────────────────────────────────────────────────────────┐
│ SmartStay Cordillera | Home Listings Dashboard Admin | 🌐 ◐ ☾ 📥 ☰ │
└────────────��────────────────────────────────────────────────┘
```

**Navigation Links:**
- **Home** - Main landing page with search and featured properties
- **Listings** - Browse all available properties
- **Dashboard** - Your personal dashboard (saved listings, applications)
- **Admin** - Government/admin access (restricted)

**Action Buttons:**
- 🌐 **Language Selector** - Switch between EN/FIL/ILO
- ◐ **High Contrast** - Toggle high contrast mode for better visibility
- ☾ **Dark Mode** - Toggle between light and dark themes
- 📥 **Install App** - Install the PWA (appears when available)
- ☰ **Menu** - Mobile menu (on small screens)

### Footer Navigation

Located at the bottom of every page:

**Quick Links:**
- Home, Listings, Dashboard

**Resources:**
- Help Center
- Blockchain Verification Info
- AI Recommendations Info

**Legal:**
- Privacy Policy
- Terms of Service
- Accessibility Statement

**Language Selector:**
- Dropdown to change language preference

---

## Features Walkthrough

### 1. Home Page

#### 🎯 Hero Section with Search

**Location:**
Top of the home page with a green gradient background.

**Walkthrough:**
1. **Enter Location**
   - Click the location input field (has a 📍 pin icon)
   - Type your desired location (e.g., "Baguio City", "Session Road")
   - Press Enter or continue to next field

2. **Select Property Type**
   - Click the property type dropdown (has a ���� house icon)
   - Choose from:
     - Apartment
     - House
     - Dormitory
     - Studio
   - Or leave blank to see all types

3. **Choose Price Range**
   - Click the price range dropdown (has a 💵 dollar icon)
   - Select:
     - Below ₱5,000
     - ₱5,000 - ₱10,000
     - Above ₱10,000
   - Or leave blank for all prices

4. **Search**
   - Click the 🔍 search button
   - You'll be redirected to the Listings page with your filters applied

**Tips:**
- You can search with just one filter (e.g., only location)
- All filters are optional
- The search is case-insensitive

#### 🏆 Featured Properties

**Location:**
Below the search bar.

**What You'll See:**
- 3 highlighted properties
- Each card shows:
  - Property image
  - Verification badge (if verified)
  - AI Recommended badge (if applicable)
  - Title and location
  - Star rating
  - Price per month

**Walkthrough:**
1. Scroll down to view featured properties
2. Click any property card to view full details
3. Look for the green "Verified" badge for blockchain-verified properties
4. Purple "✨ AI Recommended" badge indicates AI-suggested properties

#### ✨ AI Smart Suggestions

**Location:**
Bottom section of the home page.

**What It Does:**
Shows personalized property recommendations based on:
- Your browsing history (future feature)
- Popular properties
- Highly-rated listings
- Properties marked as AI-recommended

**Walkthrough:**
1. Scroll to the "AI Smart Suggestions" section
2. Scroll horizontally to see all recommendations
3. Click any property to view details
4. These are specifically curated for you

---

### 2. Listings Page

#### 🔍 Browse All Properties

**Location:**
Accessible via "Listings" in the header.

**Page Layout:**
```
┌─────────────────────────────────────────────┐
│ Available Properties in Cordillera          │
├──────────────┬──────────────────────────────┤
│              │  [Sort] [Results Count]      │
│   Filters    │  ┌────┐ ┌────┐ ┌────┐       │
│   Sidebar    │  │Card│ │Card│ │Card│       │
│              │  └────┘ └────┘ └────┘       │
│              │  ┌────┐ ┌────┐ ┌────┐       │
│              │  │Card│ │Card│ │Card│       │
│              │  └────┘ └────┘ └────┘       │
│              │  [Pagination]                │
└──────────────┴──────────────────────────────┘
```

#### 📊 Filter Sidebar

**Walkthrough:**

1. **Location Filter**
   - Type or select a location
   - Filters properties in that area

2. **Property Type**
   - Check boxes for:
     - ☐ Studio
     - ☐ 1-Bedroom
     - ☐ 2-Bedroom
     - ☐ Dormitory
     - ☐ Boarding House
   - Multiple selections allowed

3. **Price Range**
   - Enter minimum price
   - Enter maximum price
   - Leave blank for no limit

4. **Near School**
   - Select a university/school
   - Shows properties within walking distance

5. **Verified Only**
   - ☐ Check to show only blockchain-verified properties

6. **AI Recommended**
   - ☐ Check to show only AI-suggested properties

**Tips:**
- Filters apply automatically as you change them
- Combine multiple filters for precise results
- Click "Reset Filters" if no results found

#### 🔄 Sorting Options

**Location:**
Top-right of the listings grid.

**Options:**
1. **Recommended** (Default)
   - AI-recommended properties first
   - Then by rating

2. **Price: Low to High**
   - Cheapest properties first
   - Good for budget searches

3. **Price: High to Low**
   - Most expensive first
   - For premium properties

4. **Highest Rated**
   - Best-reviewed properties first
   - Based on user ratings

**Walkthrough:**
1. Click the sort dropdown
2. Select your preferred sorting method
3. Results update immediately

#### 📄 Pagination

**Location:**
Bottom of the listings grid.

**Walkthrough:**
1. View 8 properties per page
2. Click page numbers to navigate
3. Use ◀ and ▶ arrows for previous/next
4. Current page is highlighted in green
5. "..." indicates skipped pages

---

### 3. Property Details Page

#### 🏠 Viewing Property Information

**Walkthrough:**

**Step 1: Access Property Details**
1. Click any property card from Home or Listings
2. The property details page loads

**Step 2: View Image Gallery**
- Large image carousel at the top
- Click left/right arrows to navigate images
- Click dots below to jump to specific images

**Step 3: Property Header**
```
┌─────────────────────────────────────────────┐
│ Property Title                    ❤️ 🔗     │
│ 📍 Location                                 │
│ ⭐ 4.5 • Studio • ✓ Verified               │
│ ₱5,000/month                                │
└────────────────────────���────────────────────┘
```

**Actions:**
- ❤️ **Save** - Add to your saved listings
- 🔗 **Share** - Share via social media or copy link

**Step 4: Tabbed Information**

**Overview Tab:**
- Full property description
- Location details
- Distance to landmarks

**Amenities Tab:**
- Grid of available amenities
- Icons for each amenity:
  - 📶 WiFi
  - 🚗 Parking
  - 🍳 Kitchen
  - 🌊 Laundry
  - And more...

**Blockchain Tab:**
- ✅ Verification status
- 🔐 Smart contract hash
- 📅 Verification date
- 👤 Verified by (City Government)
- 📜 Transaction history with:
  - Transaction type
  - Date
  - Block number
  - Transaction hash

**Step 5: Location Map**
- Interactive map showing property location
- Coordinates displayed
- (Map integration placeholder)

**Step 6: Booking Sidebar**

**Walkthrough:**
1. Review the monthly price
2. Click "📅 Book Now" to initiate booking
   - Opens booking confirmation dialog
   - (Future: Payment integration)
3. Or click "Contact Owner" to message directly

**Property Highlights:**
- ✓ Verification status
- ✓ Property type
- ✓ Number of amenities
- ✓ Availability status

---

### 4. User Dashboard

#### 👤 Personal Dashboard

**Access:**
Click "Dashboard" in the header navigation.

**Walkthrough:**

**Section 1: Profile Information**
```
┌─────────────────────────────────────────────┐
│ My Profile                    🛡️ KYC Verified│
│ 👤 Name: John Doe                           │
│ ✉️ Email: john.doe@example.com             │
└─────────────────────────────────────────────┘
```

**KYC Verified Badge:**
- Green badge indicates verified identity
- Required for booking properties
- Provides trust and security

**Section 2: Blockchain Wallet**
```
┌─────────────────────────────────────────────┐
│ 💰 Blockchain Wallet                        │
├───────────────┬───────────────┬─────────────┤
│ Token Balance │ Verified Txns │ Wallet Addr │
│   250 SST     │      12       │ 0x742d...   │
└───────────────┴───────────────┴─────────────┘
```

**Wallet Features:**
- **SST Tokens** - SmartStay Tokens for transactions
- **Verified Transactions** - Count of blockchain-verified bookings
- **Wallet Address** - Your unique blockchain address
- Click "View on Explorer" to see blockchain details

**Section 3: AI Recommendations for You**
- Personalized property suggestions
- Based on your preferences and history
- Updated regularly
- Click any card to view details

**Section 4: Saved Listings**
- Properties you've saved with ❤️
- Quick access to favorites
- Click to view full details
- Remove by clicking ❤️ again on property page

**Section 5: Application History**
```
┌─────────────────────────────────────────────┐
│ Application for Listing ID: 2               │
│ Status: pending - 2023-10-20                │
│                              [pending]       │
└─────────────────────────────────────────────┘
```

**Status Indicators:**
- 🟡 **Pending** - Application under review
- 🟢 **Approved** - Application accepted
- 🔴 **Rejected** - Application declined

---

### 5. Admin Dashboard

#### 🏛️ Government Access Panel

**Access:**
Click "Admin" in the header (restricted access).

**Walkthrough:**

**Section 1: Statistics Overview**
```
┌──────────┬─────���────┬──────────┬──────────┐
│ Total    │ Verified │ Pending  │ Avg Rent │
│ Listings │ Props    │ Verify   │          │
│    6     │    4     │    2     │ ₱6,583   │
└──────────┴──────────┴──────────┴──────────┘
```

**Metrics:**
- 🏠 Total Listings - All properties in system
- ✅ Verified Properties - Blockchain-verified
- ⏳ Pending Verification - Awaiting approval
- 💵 Average Monthly Rent - Market average

**Section 2: Tabbed Interface**

**Overview Tab:**
- List of all properties with verification status
- Each property shows:
  - Title and type
  - Verification badge (Verified/Pending)
- Quick view of what needs attention

**AI Analytics Tab:**

1. **Property Distribution by Type**
   - Visual progress bars
   - Shows percentage of each property type
   - Helps understand market composition

2. **Price Trends**
   - Lowest price in market
   - Average price
   - Highest price
   - Color-coded cards for easy reading

3. **AI Recommendations Performance**
   - Count of AI-recommended properties
   - Performance metrics
   - Helps evaluate AI effectiveness

**Blockchain Records Tab:**

1. **Recent Blockchain Transactions**
   - Last 5 transactions
   - Shows:
     - Transaction type (Verification/Registration)
     - Date
     - Block number
     - Transaction hash
   - Verify authenticity on blockchain

2. **Verification Summary**
   - Total verified count
   - Percentage of verified listings
   - Pending review count
   - Visual indicators

**Users Tab:**
- User management table
- Shows:
  - Name
  - Email
  - Role (admin/user)
- Actions:
  - Edit user details
  - Delete user account

---

### 6. AI Chatbot Assistant

#### 💬 Getting Help from AI

**Location:**
Floating chat button in bottom-right corner of every page.

**Walkthrough:**

**Step 1: Open Chat**
1. Click the 💬 message icon in bottom-right
2. Chat window opens with greeting message

**Step 2: Quick Suggestions**
When you first open, you'll see quick reply buttons:
- "Find dorms near SLU under ₱5000"
- "Show verified listings"
- "Apartments with WiFi"
- "Properties near Session Road"

Click any suggestion for instant results.

**Step 3: Ask Questions**

**Example Queries:**

1. **Location-Based:**
   - "Show me properties near Session Road"
   - "Dorms near SLU"
   - "Apartments in downtown Baguio"

2. **Price-Based:**
   - "Properties under ₱5000"
   - "What's my budget range?"
   - "Affordable dorms"

3. **Amenity-Based:**
   - "Properties with WiFi"
   - "Apartments with parking"
   - "Places with kitchen"

4. **Verification:**
   - "Show verified listings"
   - "Blockchain verified properties"
   - "Government approved rentals"

**Step 4: Interact**
1. Type your question in the input field
2. Press Enter or click Send ➤
3. AI responds within 1 second
4. Continue conversation naturally

**Step 5: Close Chat**
- Click the ✕ button to close
- Chat history is preserved during your session

**Tips:**
- Be specific for better results
- Ask follow-up questions
- Use natural language
- AI understands context

---

## Accessibility Features

### ♿ Making SmartStay Accessible to Everyone

#### High Contrast Mode

**Purpose:**
Enhances visibility for users with visual impairments.

**How to Enable:**
1. Click the ◐ contrast icon in the header
2. Page switches to high contrast mode
3. Features:
   - Black background
   - White text
   - Yellow buttons (high visibility)
   - Enhanced borders
   - Underlined links

**How to Disable:**
- Click the ◐ icon again

**Persists:**
- Your preference is saved
- Applies across all pages
- Remains after closing browser

#### Dark Mode

**Purpose:**
Reduces eye strain in low-light conditions.

**How to Enable:**
1. Click the ☾ moon icon in header
2. Page switches to dark theme
3. Features:
   - Dark gray backgrounds
   - Light text
   - Adjusted colors for readability

**How to Disable:**
- Click the ☀️ sun icon (appears when dark mode is on)

#### Multi-Language Support

**Supported Languages:**
- 🇬🇧 English (EN)
- 🇵🇭 Filipino (FIL)
- 🇵🇭 Ilocano (ILO)

**How to Change Language:**

**Desktop:**
1. Click the language dropdown in header (shows current: EN/FIL/ILO)
2. Select your preferred language
3. Page content updates immediately

**Mobile:**
1. Open menu (☰)
2. Scroll to "Language" section
3. Select from dropdown
4. Close menu

**Note:** Language preference is saved and persists.

#### Keyboard Navigation

**Full keyboard support for users who cannot use a mouse.**

**Key Commands:**
- **Tab** - Move to next interactive element
- **Shift + Tab** - Move to previous element
- **Enter** - Activate buttons/links
- **Space** - Toggle checkboxes
- **Arrow Keys** - Navigate dropdowns/carousels
- **Esc** - Close modals/menus

**Focus Indicators:**
- All interactive elements show a green outline when focused
- Clear visual feedback for current position

#### Screen Reader Support

**Compatible with:**
- JAWS
- NVDA
- VoiceOver (Mac/iOS)
- TalkBack (Android)

**Features:**
- All images have descriptive alt text
- ARIA labels on all interactive elements
- Proper heading hierarchy
- Semantic HTML structure
- Form labels properly associated

**Navigation Landmarks:**
- Header
- Main content
- Navigation
- Footer
- Search
- Complementary content

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: Page Not Loading

**Symptoms:**
- Blank white screen
- Loading spinner doesn't stop

**Solutions:**
1. **Check Internet Connection**
   - Ensure you're connected to internet
   - Try opening another website

2. **Clear Browser Cache**
   - Chrome: Ctrl+Shift+Delete → Clear cache
   - Firefox: Ctrl+Shift+Delete → Clear cache
   - Safari: Cmd+Option+E

3. **Try Different Browser**
   - Switch to Chrome, Firefox, or Edge
   - Update browser to latest version

4. **Disable Browser Extensions**
   - Ad blockers may interfere
   - Temporarily disable extensions

#### Issue 2: Search Not Working

**Symptoms:**
- No results appear
- Search button doesn't respond

**Solutions:**
1. **Check Filters**
   - Too many filters may return no results
   - Click "Reset Filters" on Listings page

2. **Verify Input**
   - Check spelling of location
   - Try broader search terms

3. **Refresh Page**
   - Press F5 or Ctrl+R
   - Try search again

#### Issue 3: Images Not Displaying

**Symptoms:**
- Broken image icons
- Gray boxes instead of photos

**Solutions:**
1. **Check Internet Speed**
   - Slow connection may delay loading
   - Wait a few seconds

2. **Disable Data Saver**
   - Some browsers compress images
   - Turn off data saver mode

3. **Clear Cache**
   - Old cached images may be corrupted
   - Clear browser cache and reload

#### Issue 4: Can't Install PWA

**Symptoms:**
- "Install App" button doesn't appear
- Installation fails

**Solutions:**
1. **Check Browser Compatibility**
   - Use Chrome, Edge, or Safari
   - Update to latest version

2. **Check HTTPS**
   - PWA requires secure connection
   - Ensure URL starts with https://

3. **Check Storage**
   - Ensure device has free space
   - Need at least 50MB free

4. **Try Manual Installation**
   - Chrome: Menu → Install SmartStay
   - Safari: Share → Add to Home Screen

#### Issue 5: Chatbot Not Responding

**Symptoms:**
- Messages don't send
- No AI responses

**Solutions:**
1. **Refresh Page**
   - Close and reopen chat
   - Refresh browser

2. **Check JavaScript**
   - Ensure JavaScript is enabled
   - Check browser console for errors

3. **Try Different Query**
   - Rephrase your question
   - Use simpler terms

#### Issue 6: Dark Mode Not Working

**Symptoms:**
- Toggle doesn't change theme
- Stuck in one mode

**Solutions:**
1. **Clear LocalStorage**
   - Open browser console (F12)
   - Type: `localStorage.clear()`
   - Refresh page

2. **Check Browser Settings**
   - Some browsers override themes
   - Check system dark mode settings

3. **Try Different Browser**
   - Test in another browser
   - May be browser-specific issue

---

## FAQ

### General Questions

**Q: Is SmartStay Cordillera free to use?**
A: Yes, browsing and searching properties is completely free. Booking fees may apply in the future.

**Q: Do I need to create an account?**
A: Currently, you can browse without an account. Account creation will be required for booking and saving properties (coming soon).

**Q: What areas does SmartStay cover?**
A: Currently focused on Cordillera Administrative Region, with plans to expand to other Philippine cities.

**Q: How often are listings updated?**
A: Listings are updated in real-time as property owners add or modify their properties.

### Verification Questions

**Q: What does "Verified by Blockchain" mean?**
A: Properties with this badge have been verified by the City Government and recorded on the blockchain for transparency and authenticity.

**Q: Can I trust non-verified properties?**
A: Non-verified properties are pending review. We recommend prioritizing verified listings for safety.

**Q: How long does verification take?**
A: Typically 3-5 business days after property owner submits required documents.

### Booking Questions

**Q: How do I book a property?**
A: Click "Book Now" on the property details page. Full booking system coming soon.

**Q: Can I cancel a booking?**
A: Cancellation policies vary by property. Check with the property owner.

**Q: What payment methods are accepted?**
A: Payment integration coming soon. Currently, arrange payment directly with property owner.

### Technical Questions

**Q: What browsers are supported?**
A: Chrome, Firefox, Safari, Edge (latest versions). Mobile browsers also supported.

**Q: Does it work offline?**
A: Yes, if installed as PWA. Last viewed properties are cached for offline access.

**Q: Is my data secure?**
A: Yes, we use industry-standard encryption. Blockchain verification adds extra security layer.

**Q: Can I use it on my phone?**
A: Yes! Fully responsive and works on all devices. Install as PWA for best mobile experience.

### AI Questions

**Q: How does AI recommendation work?**
A: AI analyzes property features, your preferences, ratings, and location to suggest best matches.

**Q: Can I trust AI suggestions?**
A: AI suggestions are based on data analysis. Always review property details yourself.

**Q: Does the chatbot understand Filipino?**
A: Currently English only. Multi-language chatbot coming soon.

### Accessibility Questions

**Q: Is SmartStay accessible for screen readers?**
A: Yes, fully compatible with JAWS, NVDA, VoiceOver, and TalkBack.

**Q: Can I navigate without a mouse?**
A: Yes, full keyboard navigation support with Tab, Enter, and Arrow keys.

**Q: What accessibility standards do you follow?**
A: WCAG 2.2 Level AA compliant.

---

## Contact Support

### Need More Help?

**Email:** support@smartstay-cordillera.com
**Phone:** +63 (74) 123-4567
**Hours:** Monday-Friday, 8:00 AM - 5:00 PM (PHT)

**Government Office:**
City Housing Department
Baguio City Hall, Cordillera Administrative Region

**Online:**
- Use the AI Chatbot for instant help
- Check our Help Center (link in footer)
- Follow us on social media for updates

---

## Quick Reference Card

### Essential Shortcuts

| Action | Desktop | Mobile |
|--------|---------|--------|
| Search | Type in search bar | Tap search bar |
| Filter | Use sidebar | Tap filter icon |
| Save Property | Click ❤️ | Tap ❤️ |
| Open Chat | Click 💬 | Tap 💬 |
| Dark Mode | Click ☾ | Tap ☾ |
| Menu | - | Tap ☰ |
| Back to Top | Scroll or click ↑ | Scroll or tap ↑ |

### Property Card Icons

| Icon | Meaning |
|------|---------|
| ✓ Verified | Blockchain verified |
| ✨ AI Recommended | AI suggested |
| ⭐ | Star rating |
| 📍 | Location |
| 💵 | Price per month |

### Status Colors

| Color | Meaning |
|-------|---------|
| 🟢 Green | Verified/Approved |
| 🟡 Yellow | Pending |
| 🔴 Red | Rejected/Error |
| 🟣 Purple | AI Recommended |

---


## New Features and User Interface Updates

### User Authentication (Login & Signup)
- **Accessing the Platform**: You can now create an account or log in using the dedicated Login and Signup pages. These are accessible via the navigation bar.
- **Role-Based Access**: Depending on your account type (e.g., regular user or administrator), you will have access to different dashboards and features.
- **Dynamic Navigation**: The navigation bar will automatically adjust to show relevant links based on whether you are logged in and what your role is. For example, you will see a "Dashboard" link if you are a regular user, an "Admin" link if you are an administrator, and a "Login" link if you are not logged in.
- **Logout**: A "Logout" button will appear in the navigation bar when you are logged in, allowing you to securely end your session.

### Enhanced User Interface
- **Login & Signup Pages**: These pages have been redesigned for a more intuitive and visually appealing experience.
- **Home Page**: The homepage now features a more engaging design with a background image in the hero section and improved layouts for featured properties and AI smart suggestions. Icons have been added to highlight key sections.

**Version:** 1.0.0  
**Last Updated:** 2024  
**Platform:** SmartStay Cordillera  
**Support:** support@smartstay-cordillera.com
