"use client";
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch and parse the CSV file
    fetch('/projects.csv')
    .then(response => response.text())
    .then(csvText => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        quoteChar: '"',
        delimiter: ",",
        complete: (results) => {
          setProjects(results.data);
        }
      });
    });
  }, []);

  return (

    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />

    <main className="container">
      <section id="projects" className="section">
        <div className="flex justify-between items-center mb-6">
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="tech-bubble">
              <p className="text-sm">{project.year}</p>
              <h4 className="subheader">{project.title}</h4>
              <p className="text">{project.description}</p>
              <div className="mt-4">
                {project.tech.split(';').map((tech, i) => (
                  <p key={i} className="small-tech-bubble">{tech}</p>
                ))}
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