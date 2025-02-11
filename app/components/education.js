"use client";
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function Education() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch and parse the classes CSV file
    fetch('/classes.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setClasses(results.data);
          }
        });
      });
  }, []);

  return (
    <div>
      <div className="mb-4">
        <h2 className="subheader">Virginia Commonwealth University</h2>
            <p className="text">Bachelors of Science in Computer Science</p>
      </div>
      <div>
        <h2 className="subheader">Relevant Classes</h2>
          <div className="flex flex-wrap gap-2">
              {classes.map((item, index) => (
                <span key={index} className="bg-gray-700 text-white px-3 py-1 rounded-full">
                  {item.class}
                </span>
              ))}
          </div>
      </div>
    </div>
  );
}