# SmartStay Cordillera - Quick Reference Guide

## 🚀 Quick Start

```bash
# Install
npm install

# Run
npm start

# Build
npm run build

# Test
npm test
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── layout/          # Header, Footer
│   ├── property/        # Property-specific
│   └── listings/        # Listing components
├── pages/               # Route pages
├── data/                # Mock data
└── App.js               # Root component
```

---

## 🎨 Common Tailwind Classes

### Layout
```javascript
flex items-center justify-between
grid grid-cols-1 md:grid-cols-3 gap-4
container mx-auto px-4
```

### Spacing
```javascript
p-4 m-4              // padding, margin
space-y-4            // vertical spacing
gap-4                // grid/flex gap
```

### Typography
```javascript
text-xl font-bold
text-gray-600 dark:text-gray-300
```

### Colors
```javascript
bg-white dark:bg-gray-800
text-mountain-green
hover:bg-mountain-green-light
```

### Responsive
```javascript
hidden md:block      // Hide mobile, show desktop
md:grid-cols-3       // 3 columns on desktop
```

---

## 🧩 Component Patterns

### Basic Component
```javascript
import React from 'react';

const MyComponent = ({ prop1, prop2 }) => {
  return (
    <div className="card">
      <h2>{prop1}</h2>
      <p>{prop2}</p>
    </div>
  );
};

export default MyComponent;
```

### Component with State
```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
```

### Component with Effect
```javascript
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;
  return <div>{data.title}</div>;
};
```

---

## 🔄 State Management

### Local State
```javascript
const [value, setValue] = useState(initialValue);
```

### Multiple States
```javascript
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [age, setAge] = useState(0);
```

### Object State
```javascript
const [user, setUser] = useState({
  name: '',
  email: '',
  age: 0
});

// Update
setUser({ ...user, name: 'John' });
```

### Array State
```javascript
const [items, setItems] = useState([]);

// Add
setItems([...items, newItem]);

// Remove
setItems(items.filter(item => item.id !== id));

// Update
setItems(items.map(item => 
  item.id === id ? { ...item, ...updates } : item
));
```

---

## 🎯 Common Hooks

### useState
```javascript
const [state, setState] = useState(initialValue);
```

### useEffect
```javascript
// Run once on mount
useEffect(() => {
  // code
}, []);

// Run when dependency changes
useEffect(() => {
  // code
}, [dependency]);

// Cleanup
useEffect(() => {
  // setup
  return () => {
    // cleanup
  };
}, []);
```

### useMemo
```javascript
const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);
```

### useCallback
```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

---

## 🛣️ Routing

### Basic Routes
```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

### Dynamic Routes
```javascript
<Route path="/property/:id" element={<PropertyDetails />} />

// Access params
const { id } = useParams();
```

### Navigation
```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/listings');
navigate('/property/123');
navigate(-1); // Go back
```

### Links
```javascript
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
<Link to={`/property/${id}`}>View Property</Link>
```

---

## 📝 Forms

### Controlled Input
```javascript
const [value, setValue] = useState('');

<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Form Submission
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  // Process form data
};

<form onSubmit={handleSubmit}>
  <input type="text" />
  <button type="submit">Submit</button>
</form>
```

### Multiple Inputs
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

<input
  name="name"
  value={formData.name}
  onChange={handleChange}
/>
```

---

## 🎨 Styling Patterns

### Conditional Classes
```javascript
<div className={`base-class ${isActive ? 'active' : 'inactive'}`}>

// Or using template literals
<div className={`
  base-class
  ${isActive && 'active'}
  ${isDisabled && 'disabled'}
`}>
```

### Dynamic Styles
```javascript
<div style={{
  backgroundColor: isActive ? 'green' : 'gray',
  fontSize: `${size}px`
}}>
```

---

## 🔍 Data Filtering

### Filter Array
```javascript
const filtered = items.filter(item => item.verified);
const filtered = items.filter(item => item.price < 5000);
```

### Sort Array
```javascript
const sorted = items.sort((a, b) => a.price - b.price);
const sorted = items.sort((a, b) => b.rating - a.rating);
```

### Map Array
```javascript
const titles = items.map(item => item.title);
const cards = items.map(item => <Card key={item.id} data={item} />);
```

### Reduce Array
```javascript
const total = items.reduce((sum, item) => sum + item.price, 0);
const avg = total / items.length;
```

---

## 🐛 Debugging

### Console Logging
```javascript
console.log('Value:', value);
console.table(arrayOfObjects);
console.error('Error:', error);
console.warn('Warning:', warning);
```

### React DevTools
```
F12 → Components tab
- View component tree
- Inspect props and state
- Profile performance
```

### Breakpoints
```javascript
debugger; // Pauses execution
```

---

## 📦 Common Imports

```javascript
// React
import React, { useState, useEffect, useMemo, useCallback } from 'react';

// Router
import { Link, useNavigate, useParams } from 'react-router-dom';

// Icons
import { Home, User, Settings } from 'lucide-react';

// Motion
import { motion, AnimatePresence } from 'framer-motion';

// Data
import { mockListings } from '../data/mockData';
```

---

## 🔧 Useful Snippets

### Loading State
```javascript
const [loading, setLoading] = useState(true);

if (loading) return <div>Loading...</div>;
```

### Error Handling
```javascript
const [error, setError] = useState(null);

if (error) return <div>Error: {error.message}</div>;
```

### Empty State
```javascript
if (items.length === 0) {
  return <div>No items found</div>;
}
```

### Pagination
```javascript
const itemsPerPage = 10;
const [currentPage, setCurrentPage] = useState(1);

const indexOfLast = currentPage * itemsPerPage;
const indexOfFirst = indexOfLast - itemsPerPage;
const currentItems = items.slice(indexOfFirst, indexOfLast);
```

---

## 🎯 Event Handlers

### Click
```javascript
<button onClick={() => handleClick()}>Click</button>
<button onClick={handleClick}>Click</button>
```

### Change
```javascript
<input onChange={(e) => setValue(e.target.value)} />
```

### Submit
```javascript
<form onSubmit={(e) => {
  e.preventDefault();
  handleSubmit();
}}>
```

### Keyboard
```javascript
<input onKeyPress={(e) => {
  if (e.key === 'Enter') handleEnter();
}} />
```

---

## 🌐 API Calls

### Fetch
```javascript
fetch('/api/data')
  .then(response => response.json())
  .then(data => setData(data))
  .catch(error => setError(error));
```

### Async/Await
```javascript
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  } catch (error) {
    setError(error);
  }
};
```

---

## 🎨 Animation

### Framer Motion
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

### Hover Animation
```javascript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

---

## 🔐 Environment Variables

### Access
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
const isDev = process.env.NODE_ENV === 'development';
```

### .env File
```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_ENABLE_ANALYTICS=false
```

---

## 📱 Responsive Design

### Breakpoints
```
sm: 640px   // Small devices
md: 768px   // Medium devices
lg: 1024px  // Large devices
xl: 1280px  // Extra large
2xl: 1536px // 2X Extra large
```

### Usage
```javascript
<div className="
  text-sm md:text-base lg:text-lg
  p-2 md:p-4 lg:p-6
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
```

---

## 🎯 PropTypes

```javascript
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  items: PropTypes.array,
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  }),
  onClick: PropTypes.func
};

MyComponent.defaultProps = {
  count: 0,
  items: []
};
```

---

## 🧪 Testing

### Basic Test
```javascript
import { render, screen } from '@testing-library/react';

test('renders component', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

### User Interaction
```javascript
import { fireEvent } from '@testing-library/react';

test('button click', () => {
  render(<MyComponent />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('Clicked')).toBeInTheDocument();
});
```

---

## 🚀 Performance

### Lazy Loading
```javascript
const Component = lazy(() => import('./Component'));

<Suspense fallback={<Loading />}>
  <Component />
</Suspense>
```

### Memoization
```javascript
const MemoizedComponent = memo(MyComponent);

const memoizedValue = useMemo(() => compute(a, b), [a, b]);

const memoizedCallback = useCallback(() => doSomething(), []);
```

---

## 📚 Keyboard Shortcuts

### VS Code
```
Ctrl+P          # Quick file open
Ctrl+Shift+P    # Command palette
Ctrl+`          # Toggle terminal
Ctrl+B          # Toggle sidebar
Ctrl+/          # Toggle comment
Alt+Up/Down     # Move line
Shift+Alt+Down  # Duplicate line
Ctrl+D          # Select next occurrence
```

### Browser DevTools
```
F12             # Open DevTools
Ctrl+Shift+C    # Inspect element
Ctrl+Shift+J    # Console
Ctrl+Shift+M    # Toggle device toolbar
Ctrl+R          # Reload
Ctrl+Shift+R    # Hard reload
```

---

## 🔗 Useful Links

- [React Docs](https://react.dev/)
- [Tailwind Docs](https://tailwindcss.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)

---

**Quick Reference v1.0.0**  

## ✨ Key Features and UI Updates

### Authentication & Authorization
- **Login/Signup**: New pages (`Login.js`, `Signup.js`) for user authentication.
- **Role-Based Access Control**: Implemented using `ProtectedRoute` in `App.js` for `/dashboard` (User) and `/admin` (Admin) routes.
- **Dynamic Header**: `Header.js` now dynamically displays navigation links and a logout button based on user roles, updating on login/logout events.
- **Mock Users**: `mockData.js` includes `mockUsers` for testing authentication.

### UI Enhancements
- **Login/Signup Pages**: Redesigned for improved visual appeal and user-friendliness.
- **Home Page**: 
    - **Hero Section**: Updated with a background image and redesigned search bar.
    - **Featured Properties**: Enhanced styling and added a `Star` icon.
    - **AI Smart Suggestions**: Improved layout with a grid format and added a `Lightbulb` icon.
