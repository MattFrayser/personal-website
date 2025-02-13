"use client";
import React from 'react';
import Link from 'next/link'
import Header from "@/app/components/header";
import ProjectsPreview from "@/app/components/projectPreview";
import Footer from "@/app/components/footer";
import WorkPreview from '@/app/components/workPreview';


export default function Home() {
  return (
      <div className="main">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <section className="py-8">
                <h1 className="header">Matt Frayser</h1>
                <h2 className="text-xl text-gray-400 mt-2">Software Engineer</h2>
                <p className="mt-4 text">
                  Hi there! I'm a December 2024 graduate with a degree in Computer Science from Virginia Commonwealth University. As a passionate software engineer, I love creating and developing innovative software applications. With experience in full-stack development, I'm proficient in Java, Python, and JavaScript. I'm a go-getter, always eager to learn new skills and take on exciting challenges. Currently, I'm on the lookout for a full-time position as a software engineer where I can contribute and grow.
                </p>
              </section>
              <WorkPreview />
              <ProjectsPreview />
        </main>
        <Footer />
      </div>
  );
}