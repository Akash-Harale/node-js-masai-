// components/Navbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User, ShoppingCart, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-white font-bold text-xl">BrandName</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/wishlist" className="text-white hover:text-gray-200 transition-colors">
              <Heart size={20} />
            </Link>
            <Link href="/cart" className="text-white hover:text-gray-200 transition-colors">
              <ShoppingCart size={20} />
            </Link>
            <Link href="/login" className="bg-white text-indigo-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
              <User size={16} />
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-500 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-indigo-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/products" className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium">
            Products
          </Link>
          <Link href="/about" className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link href="/contact" className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
          <div className="flex space-x-4 px-3 py-2">
            <Link href="/wishlist" className="text-white hover:text-gray-200 transition-colors">
              <Heart size={20} />
            </Link>
            <Link href="/cart" className="text-white hover:text-gray-200 transition-colors">
              <ShoppingCart size={20} />
            </Link>
            <Link href="/login" className="flex items-center text-white">
              <User size={20} className="mr-1" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;