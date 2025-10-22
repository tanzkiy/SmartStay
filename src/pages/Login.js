import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import houseImg from '../house.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Mock authentication logic
    if (email === 'admin@example.com' && password === 'adminpass') {
      localStorage.setItem('userRole', 'admin');
      window.dispatchEvent(new Event('userRoleChanged'));
      navigate('/admin');
    } else if (email === 'partner@example.com' && password === 'partnerpass') {
      localStorage.setItem('userRole', 'partner');
      window.dispatchEvent(new Event('userRoleChanged'));
      navigate('/partner');
    } else if (email === 'landlord@example.com' && password === 'landlordpass') {
      localStorage.setItem('userRole', 'landlord');
      window.dispatchEvent(new Event('userRoleChanged'));
      navigate('/landlord');
    } else if (email === 'renter@example.com' && password === 'renterpass') {
      localStorage.setItem('userRole', 'renter');
      window.dispatchEvent(new Event('userRoleChanged'));
      navigate('/renter');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 px-4 py-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100/80 dark:border-gray-700/60">
        {/* Visual / Marketing panel */}
        <div
          className="relative hidden md:block"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${houseImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-mountain-green/70 via-mountain-green/50 to-transparent" />
          <div className="relative h-full w-full p-8 flex flex-col justify-between text-white">
            <img src={logo} alt="Logo" className="h-10 w-10 opacity-90" />
            <div>
              <h2 className="text-3xl font-semibold leading-snug">Welcome back</h2>
              <p className="mt-2 text-sm text-white/90 max-w-sm">
                Sign in to access personalized property insights, save your favorite listings, and continue where you left off.
              </p>
            </div>
            <p className="text-xs text-white/80">Secure login • Dark mode ready • Tailored experience</p>
          </div>
        </div>

        {/* Form panel */}
        <div className="p-6 sm:p-8 md:p-10">
          <div className="mx-auto w-full max-w-md">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <img src={logo} alt="Logo" className="h-8 w-8" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Sign in to your account</span>
            </div>

            {/* 3rd-party quick actions (mock) */}
            <div className="space-y-3">
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M24 9.5c3.94 0 7.5 1.62 10.06 4.24l6.9-6.9C36.68 2.93 30.66 0 24 0 14.62 0 6.58 5.38 2.72 13.16l8.7 6.75C13.19 13.58 18.11 9.5 24 9.5Z" fill="#EA4335"/>
                  <path d="M46.08 24.5c0-1.62-.16-3.18-.46-4.68H24v9.02h12.4c-.54 2.9-2.16 5.36-4.6 7.02l7.03 5.46c4.12-3.8 7.25-9.38 7.25-16.82Z" fill="#4285F4"/>
                  <path d="M11.42 27.07A14.5 14.5 0 0 1 10.8 24c0-1.07.18-2.1.5-3.07l-8.58-6.77A24 24 0 0 0 0 24c0 3.83.92 7.44 2.56 10.63l8.86-7.56Z" fill="#FBBC05"/>
                  <path d="M24 48c6.48 0 11.92-2.1 15.89-5.72l-7.03-5.46c-2 1.35-4.55 2.13-8.86 2.13-5.9 0-10.83-4.08-12.6-9.54l-8.7 6.75C6.53 42.58 14.61 48 24 48Z" fill="#34A853"/>
                </svg>
                Continue with Google
              </button>
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.15 6.83 9.47.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.19-3.37-1.19-.45-1.15-1.11-1.46-1.11-1.46-.9-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.26.1-2.62 0 0 .85-.27 2.79 1.03a9.72 9.72 0 0 1 5.08 0c1.94-1.3 2.79-1.03 2.79-1.03.55 1.36.2 2.37.1 2.62.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.41-.01 2.73 0 .26.18.58.69.48A10.007 10.007 0 0 0 22 12c0-5.5-4.46-9.96-9.96-9.96Z" />
                </svg>
                Continue with GitHub
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">or use your email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    className="w-full px-3.5 py-2.5 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm dark:bg-gray-700 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mountain-green/30 focus:border-mountain-green"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 12.713 1.2 6.6A2 2 0 0 1 3 4h18a2 2 0 0 1 1.8 2.6L12 12.713Zm0 2.574L24 8v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8l12 7.287Z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    className="w-full px-3.5 py-2.5 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm dark:bg-gray-700 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mountain-green/30 focus:border-mountain-green"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-invalid={Boolean(error)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute inset-y-0 right-2.5 px-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 5C7 5 2.73 8.11 1 12c.86 1.96 2.3 3.66 4.12 4.88L3.7 18.3l1.4 1.4 2-2c1.49.5 3.08.78 4.9.78 5 0 9.27-3.11 11-7-1-2.29-2.74-4.23-4.9-5.52l1.6-1.6-1.4-1.4-2.1 2.1C14.9 5.22 13.48 5 12 5Zm0 2c1.07 0 2.1.14 3.06.4l-1.16 1.16A4 4 0 0 0 8.6 13.86L7.17 15.3A10.1 10.1 0 0 1 2.9 12C4.5 9.18 8 7 12 7Zm10.1 5c-1.6 2.82-5.1 5-9.1 5-.9 0-1.78-.1-2.6-.3l1.67-1.67A4 4 0 0 0 15.4 10.1l1.67-1.67C19.8 9.54 21.6 11.09 22.1 12Z" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 5c5 0 9.27 3.11 11 7-1.73 3.89-6 7-11 7S2.73 15.89 1 12c1.73-3.89 6-7 11-7Zm0 2C8 7 4.5 9.18 2.9 12 4.5 14.82 8 17 12 17s7.5-2.18 9.1-5C19.5 9.18 16 7 12 7Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-sm text-red-600 dark:text-red-400" role="alert">{error}</div>
              )}

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 select-none text-sm text-gray-700 dark:text-gray-300">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-mountain-green focus:ring-mountain-green"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember me
                </label>
                <Link
                  to="#"
                  className="text-sm font-medium text-mountain-green hover:text-mountain-green-light"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 text-white bg-mountain-green rounded-lg hover:bg-mountain-green-light focus:outline-none focus:ring-2 focus:ring-mountain-green/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2a5 5 0 0 1 5 5v2h1a3 3 0 0 1 3 3v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-6a3 3 0 0 1 3-3h1V7a5 5 0 0 1 5-5Zm3 7V7a3 3 0 1 0-6 0v2h6Z" />
                </svg>
                Sign in
              </button>

              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <Link to="/signup" className="font-medium text-mountain-green hover:text-mountain-green-light">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;