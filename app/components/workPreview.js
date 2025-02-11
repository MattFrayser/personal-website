"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function WorkPreview() {
  const [work, setWork] = useState(null);

  useEffect(() => {
    fetch('/work.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            if (results.data.length > 0) {
              setWork(results.data[0]); // Only store the first item (most recent job)
            }
          }
        });
      });
  }, []);

  return (
    <div>
      <section id="work" className="py-8">
        <h3 className="text-2xl font-bold">Work</h3>
        <div className="mt-4">
          {work && (
            <div className="mb-6 border p-4 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <p className="font-bold">{work.company}</p>
                <p className="text-gray-500">{work.title}</p>
                <p className="list-inside text-gray-300 max-w-[650px]">{work.description}</p>
              </div>

              <Link href="/work" className="hover:underline flex items-center ">
                <span className="text-[11px]">Previous Employment</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}