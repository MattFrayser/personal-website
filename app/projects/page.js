"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Papa from 'papaparse';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch and parse the CSV file
    fetch('/projects.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setProjects(results.data);
          }
        });
      });
  }, []);

  return (
    <div className="main">
      <Header />
      <main className="container">
        <section id="projects" className="section">
          <div className="flex justify-between items-center mb-6">
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link key={index} href={`/projects/${project.id}`}>
                <div className="bubble cursor-pointer">
                  <p className="text-sm-lt">{project.year}</p>
                  <h4 className="subheader font-bold text-blue-400 mb-2">{project.title}</h4>
                  <p className="text-3line ">{project.description}</p>
                  <div className="mt-4">
                    {project.tech.split(';').map((tech, i) => (
                      <p key={i} className="small-tech-bubble">{tech}</p>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}