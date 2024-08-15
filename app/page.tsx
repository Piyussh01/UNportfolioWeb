"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowTrendingUpIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import { BlogPosts } from "./components/posts";
import Button from "./components/Button";
import displayImage from "../public/utkarsh.jpg";

export default function Page() {
  const [featuredProject, setFeaturedProject] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProject = async () => {
      try {
        const response = await fetch("/api/github", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            featuredId: 818561625,
            includeDescription: true,
            includeTopics: false,
            includeName: true,
            includeHtmlUrl: true,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          setFeaturedProject(data);
        } else {
          setError(data.error || "Failed to fetch featured project");
        }
      } catch (err) {
        setError("Failed to fetch featured project");
      }
    };

    fetchFeaturedProject();
  }, []);

  return (
    <section className="py-4 lg:py-6">
      <div className="flex flex-col lg:flex-row lg:gap-24 items-start">
        {/* Profile Section */}
        <div className="flex-none lg:w-1/4 flex flex-col items-center lg:items-start">
          <div className="relative mb-12 bg-transparent">
            <Image
              src={displayImage}
              alt="Utkarsh Nath"
              width={220}
              height={220}
              className="rounded-full shadow-lg"
            />
          </div>
          <h2 className="text-lg font-semibold">Utkarsh Nath</h2>
          <div className="w-full mb-8 lg:hidden">
            <h1 className="text-3xl font-bold mb-8 tracking-tight text-center lg:text-left">
              Hey, I'm Utkarsh 👋
            </h1>
            <p className="text-gray-300 mt-4 mb-4 tracking-tight">
            I'm a 4th Year PhD Student in the School of Computing and Augmented Intelligence, with a specialization in computer vision and deep learning. I work as a research assistant in the Geometric Media Lab, under the expert guidance of Dr. Pavan Turaga. My current research is focused on the efficient and controllable generation of videos and 3D representations. Apart from research, I love hiking and playing squash. 
            </p>
            <section className="mb-4">
  <h1 className="text-xl font mb-3">Education</h1>
  <div className="space-y-3">
  <h3 className="text-lg font-medium">
      PhD in Computer Science
    </h3>
    <div className="flex justify-between items-center">
    
      <p className="text-sm">
        Arizona State University
      </p>
      <p className="text-yellow-500 text-sm">2021 — 2025 (Expected)</p>
    </div>
    
    <h3 className="text-lg font-medium">MS in Computer Science</h3>
    <div className="flex justify-between items-center">
      <p className="text-sm">
        New York University
      </p>
      <p className="text-yellow-500 text-sm">2019 — 2021</p>
    </div>
    
    <h3 className="text-lg font-medium">B Tech in Information Technology</h3>
    <div className="flex justify-between items-center">
      <p className="text-sm">
        Delhi Technological University
      </p>
      <p className="text-yellow-500 text-sm">2014 — 2018</p>
    </div>
  </div>
</section>


          </div>

          {/* <div className="w-full mb-4">
            <h2 className="text-xl font-bold mb-4 lg:text-center">
              Featured Project ✦
            </h2>
            {error && <p className="text-red-500">{error}</p>}
            {featuredProject ? (
              <div className="border-2 border-gray-800 rounded-lg p-4 mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  {featuredProject.name}
                </h3>
                {featuredProject.description && (
                  <p className="text-xs text-gray-400 mb-4">
                    {featuredProject.description}
                  </p>
                )}
                <a
                  href={featuredProject.html_url}
                  className="font-semibold !text-violet-500 hover:text-blue-300 inline-flex items-center"
                >
                  Github
                  <CommandLineIcon className="w-4 h-4 ml-1" />
                </a>
                {featuredProject.topics && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {featuredProject.topics.map(
                      (topic: string, index: number) => (
                        <span key={index} className="custom-topic-pill">
                          {topic}
                        </span>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <p className="mt-2 mb-2 lg:text-center">
                Doing the heavy lifting 🚀
              </p>
            )}
          </div> */}
        </div>

        {/* Content Section */}
        <div className="flex-1 lg:w-4/5">
          <div className="w-full mb-8 hidden lg:block">
            <h1 className="text-3xl font-bold mb-4 tracking-tight text-center lg:text-left">
              Hey, I'm Utkarsh 👋
            </h1>
            <p className="text-gray-300 mb-4">
            I'm a 4th Year PhD Student in the School of Computing and Augmented Intelligence, with a specialization in computer vision and deep learning. I work as a research assistant in the Geometric Media Lab, under the expert guidance of Dr. Pavan Turaga. My current research is focused on the efficient and controllable generation of videos and 3D representations. Apart from research, I love hiking and playing squash. 
            </p>
            

          </div>
          <section className="mb-4">
  <h1 className="text-xl font mb-3">Education</h1>
  <div className="space-y-3">
  <h3 className="text-lg font-medium">
      PhD in Computer Science
    </h3>
    <div className="flex justify-between items-center">
    
      <p className="text-sm">
        Arizona State University
      </p>
      <p className="text-yellow-500 text-sm">2021 — 2025</p>
    </div>
    
    <h3 className="text-lg font-medium">MS in Computer Science</h3>
    <div className="flex justify-between items-center">
      <p className="text-sm">
        New York University
      </p>
      <p className="text-yellow-500 text-sm">2019 — 2021</p>
    </div>
    
    <h3 className="text-lg font-medium">B Tech in Information Technology</h3>
    <div className="flex justify-between items-center">
      <p className="text-sm">
        Delhi Technological University
      </p>
      <p className="text-yellow-500 text-sm">2014 — 2018</p>
    </div>
  </div>
</section>


        </div>
      </div>
    </section>
  );
}
