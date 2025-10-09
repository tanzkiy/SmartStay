# SmartStay Cordillera - Developer Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [Development Environment Setup](#development-environment-setup)
3. [Project Structure](#project-structure)
4. [Development Workflow](#development-workflow)
5. [Component Development](#component-development)
6. [State Management](#state-management)
7. [Styling Guide](#styling-guide)
8. [Testing](#testing)
9. [Best Practices](#best-practices)
10. [Contributing](#contributing)

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (v2.30.0 or higher)
- **Code Editor** (VS Code recommended)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/your-org/smartstay-cordillera.git

# Navigate to project directory
cd smartstay-cordillera

# Install dependencies
npm install

# Start development server
npm start

# Open browser to http://localhost:3000
```

---

## Development Environment Setup

### Step-by-Step Installation Walkthrough

#### Step 1: Install Node.js

**Windows:**
1. Download Node.js from https://nodejs.org/
2. Run the installer (.msi file)
3. Follow installation wizard
4. Verify installation:
   ```bash
   node --version  # Should show v18.x.x or higher
   npm --version   # Should show v9.x.x or higher
   ```

**macOS:**
```bash
# Using Homebrew
brew install node

# Verify
node --version
npm --version
```

**Linux (Ubuntu/Debian):**
```bash
# Using NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify
node --version
npm --version
```

#### Step 2: Install Git

**Windows:**
1. Download from https://git-scm.com/download/win
2. Run installer
3. Use default settings
4. Verify: `git --version`

**macOS:**
```bash
# Using Homebrew
brew install git

# Verify
git --version
```

**Linux:**
```bash
sudo apt-get install git

# Verify
git --version
```

#### Step 3: Clone Repository

```bash
# Using HTTPS
git clone https://github.com/your-org/smartstay-cordillera.git

# Or using SSH (if configured)
git clone git@github.com:your-org/smartstay-cordillera.git

# Navigate to directory
cd smartstay-cordillera
```

#### Step 4: Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install

# This will install all packages listed in package.json
# Takes 2-5 minutes depending on internet speed
```

**What gets installed:**
- React and React DOM
- React Router
- TailwindCSS
- Framer Motion
- Lucide React (icons)
- And all other dependencies

#### Step 5: Configure Environment

```bash
# Create environment file
cp .env.example .env.local

# Edit .env.local with your settings
# (Use your preferred text editor)
```

**Example .env.local:**
```env
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_ENVIRONMENT=development
REACT_APP_ENABLE_ANALYTICS=false
```

#### Step 6: Start Development Server

```bash
npm start
```

**What happens:**
1. Webpack compiles the application
2. Development server starts on port 3000
3. Browser opens automatically
4. Hot Module Replacement (HMR) enabled
5. Console shows compilation status

**Expected output:**
```
Compiled successfully!

You can now view smartstay-cordillera in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.100:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

#### Step 7: Verify Installation

**Checklist:**
- [ ] Browser opens to http://localhost:3000
- [ ] Home page loads without errors
- [ ] Navigation works (click Listings, Dashboard, etc.)
- [ ] Search bar is functional
- [ ] Property cards display correctly
- [ ] Dark mode toggle works
- [ ] Chatbot opens and responds
- [ ] No console errors (F12 to check)

---

## Project Structure

### Directory Layout

```
smartstay-cordillera/
├── public/                      # Static files
│   ├── index.html              # HTML template
│   ├── manifest.json           # PWA manifest
│   ├── favicon.ico             # Favicon
│   ├── logo192.png             # PWA icon (192x192)
│   ├── logo512.png             # PWA icon (512x512)
│   └── robots.txt              # SEO robots file
│
├── src/                        # Source code
│   ├── components/             # React components
│   │   ├── common/            # Reusable components
│   │   │   ├── PropertyCard.js
│   │   │   ├── Chatbot.js
│   │   │   └── ScrollToTop.js
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── property/          # Property-specific
│   │   │   ├── ImageCarousel.js
│   │   │   └── BlockchainVerification.js
│   │   └── listings/          # Listing components
│   │       └── FilterSidebar.js
│   │
│   ├── pages/                 # Page components
│   │   ├── Home.js
│   │   ├── Listings.js
│   │   ├── PropertyDetails.js
│   │   ├── UserDashboard.js
│   │   ├── AdminDashboard.js
│   │   └── NotFound.js
│   │
│   ├── data/                  # Data layer
│   │   └── mockData.js        # Mock database
│   │
│   ├── App.js                 # Root component
│   ├── App.css                # Global styles
│   ├── index.js               # Entry point
│   ├── index.css              # Tailwind imports
│   ├── service-worker.js      # PWA service worker
│   └── serviceWorkerRegistration.js
│
├── docs/                      # Documentation
│   ├── USER_MANUAL.md
│   ├── SYSTEM_DOCUMENTATION.md
│   └── DEVELOPER_GUIDE.md
│
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # Project readme
```

### File Naming Conventions

**Components:**
- PascalCase: `PropertyCard.js`, `UserDashboard.js`
- One component per file
- Export default at bottom

**Utilities:**
- camelCase: `formatPrice.js`, `validateEmail.js`
- Named exports

**Constants:**
- UPPER_SNAKE_CASE: `API_ENDPOINTS.js`, `ERROR_MESSAGES.js`

**Styles:**
- kebab-case: `custom-styles.css`
- Or match component name: `PropertyCard.css`

---

## Development Workflow

### Daily Development Cycle

#### 1. Start Your Day

```bash
# Pull latest changes
git pull origin main

# Check for dependency updates
npm outdated

# Start development server
npm start
```

#### 2. Create Feature Branch

```bash
# Create and switch to new branch
git checkout -b feature/property-reviews

# Branch naming convention:
# feature/   - New features
# bugfix/    - Bug fixes
# hotfix/    - Urgent fixes
# refactor/  - Code refactoring
# docs/      - Documentation updates
```

#### 3. Develop Feature

```bash
# Make changes to code
# Save files (auto-reload in browser)
# Test in browser
# Check console for errors
```

#### 4. Test Changes

```bash
# Run tests
npm test

# Run linter
npm run lint

# Check build
npm run build
```

#### 5. Commit Changes

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: Add property review system"

# Commit message format:
# feat:     New feature
# fix:      Bug fix
# docs:     Documentation
# style:    Formatting
# refactor: Code restructuring
# test:     Adding tests
# chore:    Maintenance
```

#### 6. Push and Create PR

```bash
# Push to remote
git push origin feature/property-reviews

# Create Pull Request on GitHub
# Request code review
# Address feedback
# Merge when approved
```

### Git Workflow

```
main (production)
  ↓
develop (staging)
  ↓
feature/your-feature (your work)
```

**Branch Protection Rules:**
- `main` - Protected, requires PR and review
- `develop` - Protected, requires PR
- `feature/*` - Open for development

---

## Component Development

### Creating a New Component

#### Step-by-Step Walkthrough

**Step 1: Create Component File**

```bash
# Create file in appropriate directory
touch src/components/common/ReviewCard.js
```

**Step 2: Basic Component Structure**

```javascript
import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      {/* Component content */}
    </div>
  );
};

export default ReviewCard;
```

**Step 3: Add PropTypes (Optional but Recommended)**

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <h3>{review.title}</h3>
      <p>{review.content}</p>
      <span>Rating: {review.rating}/5</span>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewCard;
```

**Step 4: Add Styling**

```javascript
const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {review.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {review.content}
      </p>
      <div className="flex items-center">
        <span className="text-yellow-400">★</span>
        <span className="ml-1 text-gray-700 dark:text-gray-200">
          {review.rating}/5
        </span>
      </div>
    </div>
  );
};
```

**Step 5: Add State (if needed)**

```javascript
import React, { useState } from 'react';

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="review-card">
      <h3>{review.title}</h3>
      <p className={isExpanded ? '' : 'line-clamp-3'}>
        {review.content}
      </p>
      <button onClick={toggleExpand}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};
```

**Step 6: Add Effects (if needed)**

```javascript
import React, { useState, useEffect } from 'react';

const ReviewCard = ({ review }) => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Fetch likes count
    fetchLikes(review.id).then(count => setLikes(count));
  }, [review.id]);

  return (
    <div className="review-card">
      {/* ... */}
      <span>{likes} likes</span>
    </div>
  );
};
```

**Step 7: Use Component**

```javascript
// In parent component
import ReviewCard from '../components/common/ReviewCard';

const PropertyDetails = () => {
  const reviews = [
    { id: 1, title: 'Great place!', content: '...', rating: 5 },
    { id: 2, title: 'Good value', content: '...', rating: 4 },
  ];

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};
```

### Component Best Practices

#### 1. Keep Components Small

**Bad:**
```javascript
// 500+ lines component doing everything
const PropertyDetails = () => {
  // Too much logic here
};
```

**Good:**
```javascript
// Split into smaller components
const PropertyDetails = () => {
  return (
    <>
      <PropertyHeader />
      <PropertyGallery />
      <PropertyInfo />
      <PropertyReviews />
      <BookingForm />
    </>
  );
};
```

#### 2. Use Descriptive Names

**Bad:**
```javascript
const Card = () => { };
const Item = () => { };
const Thing = () => { };
```

**Good:**
```javascript
const PropertyCard = () => { };
const ReviewItem = () => { };
const BookingConfirmation = () => { };
```

#### 3. Extract Reusable Logic

**Bad:**
```javascript
// Duplicated logic in multiple components
const ComponentA = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData);
  }, []);
};

const ComponentB = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData);
  }, []);
};
```

**Good:**
```javascript
// Custom hook
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading };
};

// Use in components
const ComponentA = () => {
  const { data, loading } = useFetchData('/api/data');
  if (loading) return <Loading />;
  return <div>{data}</div>;
};
```

#### 4. Memoize Expensive Computations

```javascript
import { useMemo } from 'react';

const PropertyList = ({ properties }) => {
  // Expensive calculation
  const sortedProperties = useMemo(() => {
    return properties
      .sort((a, b) => b.rating - a.rating)
      .filter(p => p.verified);
  }, [properties]);

  return (
    <div>
      {sortedProperties.map(p => <PropertyCard key={p.id} property={p} />)}
    </div>
  );
};
```

#### 5. Use React.memo for Pure Components

```javascript
import React, { memo } from 'react';

const PropertyCard = memo(({ property }) => {
  return (
    <div className="card">
      <h3>{property.title}</h3>
      <p>{property.price}</p>
    </div>
  );
});

export default PropertyCard;
```

---

## State Management

### Local State (useState)

**When to use:**
- Component-specific state
- UI state (modals, dropdowns)
- Form inputs

**Example:**
```javascript
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
```

### Lifting State Up

**When to use:**
- Multiple components need same state
- Parent needs to control child state

**Example:**
```javascript
// Parent component
const PropertyPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <>
      <PropertyList onSelect={setSelectedProperty} />
      <PropertyDetails property={selectedProperty} />
    </>
  );
};

// Child components
const PropertyList = ({ onSelect }) => {
  return (
    <div>
      {properties.map(p => (
        <button onClick={() => onSelect(p)}>
          {p.title}
        </button>
      ))}
    </div>
  );
};
```

### Context API (Future)

**When to use:**
- Global state (user, theme, language)
- Avoid prop drilling

**Example:**
```javascript
// Create context
const UserContext = createContext();

// Provider
const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes />
    </UserContext.Provider>
  );
};

// Consumer
const Profile = () => {
  const { user } = useContext(UserContext);
  return <div>{user.name}</div>;
};
```

---

## Styling Guide

### TailwindCSS Basics

#### Utility Classes

```javascript
// Layout
<div className="flex items-center justify-between">
<div className="grid grid-cols-3 gap-4">
<div className="container mx-auto px-4">

// Spacing
<div className="p-4">        // padding: 1rem
<div className="mt-8">       // margin-top: 2rem
<div className="space-y-4">  // gap between children

// Typography
<h1 className="text-3xl font-bold">
<p className="text-gray-600 dark:text-gray-300">

// Colors
<div className="bg-white dark:bg-gray-800">
<div className="text-mountain-green">

// Borders & Shadows
<div className="rounded-2xl shadow-md">
<div className="border border-gray-200">

// Responsive
<div className="hidden md:block">      // Hidden on mobile, visible on desktop
<div className="grid-cols-1 md:grid-cols-3">  // 1 col mobile, 3 cols desktop
```

#### Custom Colors

**tailwind.config.js:**
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'mountain-green': '#2D5F3F',
        'mountain-green-light': '#4A8B5C',
        'fog-gray': '#E8EEF2',
      },
    },
  },
};
```

**Usage:**
```javascript
<div className="bg-mountain-green text-white">
<button className="hover:bg-mountain-green-light">
```

#### Dark Mode

```javascript
// Automatic dark mode classes
<div className="bg-white dark:bg-gray-900">
<p className="text-gray-800 dark:text-white">
<button className="bg-blue-500 dark:bg-blue-700">
```

### Custom CSS (When Needed)

**index.css:**
```css
@layer components {
  .btn-primary {
    @apply bg-mountain-green hover:bg-mountain-green-light text-white font-medium py-2 px-4 rounded-2xl transition-colors;
  }
  
  .card {
    @apply bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 transition-all hover:shadow-lg;
  }
}
```

**Usage:**
```javascript
<button className="btn-primary">Click Me</button>
<div className="card">Content</div>
```

---

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test PropertyCard.test.js
```

### Writing Tests

**Component Test Example:**

```javascript
// PropertyCard.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropertyCard from './PropertyCard';

const mockProperty = {
  id: 1,
  title: 'Test Property',
  price: 5000,
  location: 'Baguio City',
  type: 'Studio',
  rating: 4.5,
  verified: true,
  aiRecommended: false,
  image: 'test.jpg',
};

describe('PropertyCard', () => {
  test('renders property title', () => {
    render(
      <BrowserRouter>
        <PropertyCard property={mockProperty} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Test Property')).toBeInTheDocument();
  });

  test('displays verified badge when verified', () => {
    render(
      <BrowserRouter>
        <PropertyCard property={mockProperty} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Verified')).toBeInTheDocument();
  });

  test('formats price correctly', () => {
    render(
      <BrowserRouter>
        <PropertyCard property={mockProperty} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('₱5,000/month')).toBeInTheDocument();
  });
});
```

### Test Coverage Goals

- **Statements:** > 80%
- **Branches:** > 75%
- **Functions:** > 80%
- **Lines:** > 80%

---

## Best Practices

### Code Quality

#### 1. Use ESLint

```bash
# Install ESLint
npm install --save-dev eslint

# Initialize configuration
npx eslint --init

# Run linter
npm run lint

# Auto-fix issues
npm run lint -- --fix
```

#### 2. Use Prettier

```bash
# Install Prettier
npm install --save-dev prettier

# Create .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}

# Format code
npx prettier --write "src/**/*.{js,jsx,json,css}"
```

#### 3. Pre-commit Hooks

```bash
# Install Husky
npm install --save-dev husky

# Setup
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "npm test && npm run lint"
```

### Performance Tips

1. **Lazy Load Routes**
```javascript
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
```

2. **Optimize Images**
```javascript
<img loading="lazy" src={image} alt={title} />
```

3. **Debounce Search**
```javascript
const debouncedSearch = useMemo(
  () => debounce((query) => search(query), 300),
  []
);
```

4. **Virtualize Long Lists**
```javascript
import { FixedSizeList } from 'react-window';
```

### Security Best Practices

1. **Sanitize User Input**
```javascript
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(userInput);
```

2. **Validate Data**
```javascript
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```

3. **Use Environment Variables**
```javascript
const API_URL = process.env.REACT_APP_API_URL;
```

---

## Contributing

### Contribution Guidelines

1. **Fork the repository**
2. **Create feature branch**
3. **Make changes**
4. **Write tests**
5. **Update documentation**
6. **Submit pull request**

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added new tests
- [ ] Updated existing tests

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings
```

---

## Useful Commands

```bash
# Development
npm start              # Start dev server
npm test               # Run tests
npm run build          # Production build
npm run lint           # Run linter
npm run format         # Format code

# Dependencies
npm install            # Install all dependencies
npm install package    # Install specific package
npm update             # Update dependencies
npm audit              # Security audit
npm audit fix          # Fix vulnerabilities

# Git
git status             # Check status
git add .              # Stage all changes
git commit -m "msg"    # Commit changes
git push               # Push to remote
git pull               # Pull from remote
git checkout -b name   # Create branch
git merge branch       # Merge branch

# Debugging
npm run build          # Check for build errors
npm start -- --verbose # Verbose output
```

---

## Resources

### Official Documentation
- [React Docs](https://react.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)

### Learning Resources
- [React Tutorial](https://react.dev/learn)
- [JavaScript.info](https://javascript.info/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)

### Tools
- [VS Code](https://code.visualstudio.com/)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

---

**Document Version:** 1.0.0  
**Last Updated:** 2024  
**Maintained By:** SmartStay Development Team  
**Contact:** dev@smartstay-cordillera.com

## New Components and UI Enhancements

### Login and Signup Pages
- **`Login.js`**: Enhanced UI with new styling for layout, form elements, and buttons. Integrated a "Sign Up" link.
- **`Signup.js`**: Enhanced UI with new styling for layout, form elements, and buttons. Integrated a "Login" link.

### Home Page
- **`Home.js`**: 
    - **Hero Section**: Incorporated a background image, updated text styling, and redesigned the search bar.
    - **Featured Properties**: Improved styling and added a `Star` icon.
    - **AI Smart Suggestions**: Improved styling, adjusted to a grid format, and added a `Lightbulb` icon.

### Header Component
- **`Header.js`**: Implemented dynamic navigation links based on user roles and added a logout button. Integrated an event listener for dynamic updates on login/logout.

### Routing and Authentication
- **`App.js`**: Integrated `Login`, `Signup`, and `ProtectedRoute` components. Configured role-based access control for `/dashboard` and `/admin` routes.

### Mock Data
- **`mockData.js`**: Added `mockUsers` array for authentication testing.
