'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Navigation links data
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/pages/About' },
    { name: 'Skills', path: '/pages/Skills' },
    { name: 'Contact', path: '/pages/Contact' },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 md:py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="logo text-xl md:text-2xl">
            <span className="uppercase text-yellow-400">m</span>uhammad{' '}
            <span className="uppercase text-yellow-400">e</span>hsan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`hover:text-yellow-400 transition-colors ${
                      pathname === link.path ? 'text-yellow-400' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-white rounded-full transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}
              ></span>
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-white rounded-full transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 mt-4 pb-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`block py-2 px-4 rounded hover:bg-gray-800 transition-colors ${
                    pathname === link.path ? 'text-yellow-400' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
