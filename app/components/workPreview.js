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
        <div className="flex justify-between items-center mb-6">
          <h3 className="subheader">Work</h3>
          <button className="bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-600">Previous Employment</button>
        </div>
        <div className="mt-4">
          {work && (
            <div className="mb-6 border p-4 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <p className="font-bold text">{work.company}</p>
                <p className="text-sm-lt">{work.title}</p>
                <p className=" mt-4 list-inside text">{work.description}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}