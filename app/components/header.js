import React from 'react';
import Link from 'next/link';
import ThemeToggle from './themeToggle';

export default function Header() {
  return (
    <header className="flex items-center justify-center py-4 px-4 border-b border-gray-700">      <nav>
        <ul className="flex gap-4 font-bold subheader">
          <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
          <li>|</li>
          <li><Link href="/work" className="hover:text-gray-200">Work</Link></li>
          <li><Link href="/projects" className="hover:text-gray-200">Projects</Link></li>
          <li><a href="/about" className="hover:text-gray-200">About me</a></li>
        </ul>
      </nav>

      <div className="ml-10">
        <ThemeToggle />
      </div>
    </header>
  );
}