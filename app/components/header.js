import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-center py-4 px-4 border-b border-gray-700">      <nav>
        <ul className="flex gap-4 font-bold text-2xl text-gray-200">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li className='text-gray-500'>|</li>
          <li><Link href="/work" className="hover:text-gray-400">Work</Link></li>
          <li><Link href="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><a href="/about" className="hover:text-gray-400">About me</a></li>
        </ul>
      </nav>
    </header>
  );
}