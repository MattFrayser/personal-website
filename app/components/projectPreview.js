"use client"
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function ProjectsPreview() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Fetch and parse the CSV file
    fetch('/projects.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            setProjects(results.data.slice(0, 6)); // Only store the first 6 projects
          }
        });
      });
  }, []);
  

  return (
    <section id="projects" className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="subheader">Projects</h3>
        <button className="bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-600">All Projects</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bubble">
            <div className="p-4">
              <p className="text-sm-lt">{project.year}</p>
              <h4 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h4>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );s
}