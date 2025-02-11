"use client";
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import ExpChart from '../components/expChart';
import '../globals.css'; // Import the global CSS

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function about() {
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
    <div className="main">
      <Header />
      <main className="container">
        <section className="section">
          <h1 className="header">Education</h1>
          <div className="mb-4">
            <h2 className="subheader">Virginia Commonwealth University</h2>
            <p className="text mt-1">Bachelors of Science in Computer Science</p>
          </div>
          <div>
            <h3 className="subheader">Relevant Classes</h3>
            <div className="bubble-container mt-2">
              {classes.map((item, index) => (
                <span key={index} className="bubble">
                  {item.class}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <h1 className="header">Languages</h1>
          <ExpChart />
        </section>
      </main>
      <Footer />
    </div>
  );
}