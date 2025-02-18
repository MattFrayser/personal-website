"use client";
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import "@/app/globals.css";

export default function Work() {
  const [work, setWork] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch and parse the CSV file
    fetch('/work.csv')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            if (results.errors.length) {
              setError('Error parsing CSV file');
            } else {
              setWork(results.data);
            }
          }
        });
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="main">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="work" className="py-8">
          <div className="mt-4">
            {work.map((job, index) => (
              <div key={index} className="my-4 bubble p-4">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="subheader">{job.company}</p>
                    <p className="text-sm-lt">{job.start} - {job.end}</p>
                  </div>
                  <p className="text-sm-lt">{job.title}</p>
                  <p className="text py-4">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}