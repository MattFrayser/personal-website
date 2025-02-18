"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Papa from 'papaparse';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (id) {
      fetch('/projects.csv')
        .then(response => response.text())
        .then(csvText => {
          Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
              const project = results.data.find(p => p.id === id);
              setProject(project);
            }
          });
        });
    }
  }, [id]);
  
  return (
    <div className="main">
      <Header />
      <main className="container">
        <section id="project-detail" className="section">
          <Link href="/projects"> 
            <h2 className="subheader my-4"> Back </h2>
          </Link>
          <h1 className="header">{project.title}</h1>
          <p className="text">{project.description}</p>
          <div className="mt-4">
            {project.tech.split(';').map((tech, i) => (
              <p key={i} className="small-tech-bubble">{tech}</p>
            ))}
          </div>

          {project.link && (
            <div> 
              <Link href={`https://github.com/MattFrayser/${project.link}`}>
                <p className="small-link-bubble my-20"> GitHub Repository </p>
              </Link>
            </div>
          )}

        </section>
      </main>
      <Footer />
    </div>
  );
}