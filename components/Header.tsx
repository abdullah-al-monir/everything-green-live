'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { apiClient } from '@/lib/api';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      setIsMobileMenuOpen(false);
      setIsDropdownOpen(false);
      prevPathnameRef.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLogout = async () => {
    try {
      await apiClient.logout();
      logout();
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
      logout();
      router.push('/');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-light">
      <nav className="container-custom flex-between py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gradient relative z-50">
          <Image
            src="/logo.png"
            alt="Everything Green Logo"
            width={249}
            height={60}
            className="inline-block mr-2 w-auto h-10 sm:h-12 md:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-md font-medium hover:text-gray-darker smooth-transition ${pathname === link.href ? 'font-extrabold text-gray-darker' : 'text-gray-dark'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden lg:flex items-center gap-4">
          {isAuthenticated && user ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-light smooth-transition"
              >
                <div className="w-8 h-8 rounded-full bg-green-primary flex-center text-white text-sm font-bold">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium">{user.username}</span>
              </button>

              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-light z-20">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-light rounded-t-lg"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-light text-red-500 rounded-b-lg"
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Link href="/login" className="btn-tertiary py-2 text-sm">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-50 p-2 rounded-lg hover:bg-gray-light smooth-transition"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <HiX className="w-7 h-7 text-gray-darker" />
          ) : (
            <HiMenu className="w-7 h-7 text-gray-darker" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 right-0 h-full w-full bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header*/}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-light">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="shrink-0"
              >
                <Image
                  src="/logo.png"
                  alt="Everything Green Logo"
                  width={200}
                  height={48}
                  className="w-auto h-10 sm:h-12"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-light shrink-0 ml-4"
                aria-label="Close menu"
              >
                <HiX className="w-7 h-7 text-gray-darker" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col py-6 px-4 sm:px-6 space-y-2 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-5 py-4 rounded-lg font-medium text-lg smooth-transition ${pathname === link.href
                    ? 'bg-green-light text-green-secondary font-bold'
                    : 'text-gray-dark hover:bg-gray-light'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Section */}
            <div className="p-4 sm:p-6 border-t border-gray-light">
              {isAuthenticated && user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 px-4 py-3 bg-gray-light rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-green-primary flex-center text-white text-lg font-bold shrink-0">
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-darker text-lg truncate">{user.username}</p>
                      <p className="text-sm text-gray-dark truncate">{user.email}</p>
                    </div>
                  </div>
                  <Link
                    href="/profile"
                    className="block w-full text-center px-4 py-3 bg-gray-light text-gray-darker font-medium rounded-lg hover:bg-gray-200 smooth-transition"
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-3 bg-red-50 text-red-500 font-medium rounded-lg hover:bg-red-100 smooth-transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="block w-full text-center btn-primary py-4 text-lg"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}