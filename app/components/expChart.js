"use client";
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ExpChart() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    // Fetch and parse the CSV file
    fetch('/about.csv')
    .then(response => response.text())
    .then(csvText => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        quoteChar: '"',
        delimiter: ",",
        complete: (results) => {
          setAbout(results.data);
        }
      });
    });
  }, []);

  const experienceLabels = {
    1: 'Beginner',
    2: 'Intermediate',
    3: 'Advanced',
    4: 'Expert'
  };

  const data = {
    labels: about.map(item => item.language), // Assuming 'language' is a field in your CSV
    datasets: [
      {
        label: 'Experience in Programming Languages',
        data: about.map(item => item.experience), // Assuming 'experience' is a field in your CSV
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // This will make the bars horizontal
    scales: {
      x: {
        beginAtZero: true,
        min: 1,
        max: 4,
        ticks: {
          callback: function(value) {
            return experienceLabels[value] || '';
          },
          stepSize: 1,
          maxTicksLimit: Object.keys(experienceLabels).length,
        }
      },
    },
  };

  return (
    <div>
      <main className="max-w-4xl mx-auto px-4">
        <Bar data={data} options={options} />
      </main>
    </div>
  );
}