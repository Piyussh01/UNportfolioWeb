import React from 'react';
import "./projectss.css"
const Projects2 = () => {
  const projects = [
    {
      title: "MT3D",
      description: "A Gaussian splatting based 2D lifting technique that generates 3D representation by learning the basic shape/structure from a high-fidelity 3D object.",
      link: "https://arxiv.org/pdf/2408.05938v1",
      imagePlaceholder: "/path/to/your/image-placeholder.jpg" // Update this path as needed
    },
    {
      title: "PolyINR",
      description: "Developed Poly-INR, the first INR-based model that can represent complex shapes and generate large, diverse datasets like ImageNet. Models images as polynomial functions of their coordinates, progressively increasing polynomial degrees through multiple MLP layers.",
      link: "", // No link provided
      imagePlaceholder: "/path/to/your/image-placeholder.jpg"
    },
    {
      title: "RNAS-CL",
      description: "Proposes Robust Neural Architecture Search by Cross-Layer Knowledge Distillation (RNAS-CL), optimizing accuracy, latency, and robustness without adversarial training. Demonstrates student models inheriting robustness from adversarially robust teacher models.",
      link: "https://link.springer.com/article/10.1007/s11263-024-02133-4",
      imagePlaceholder: "/path/to/your/image-placeholder.jpg"
    },
    {
      title: "Adjoined Network",
      description: "Introduces Adjoined Networks (AN), a novel training approach that simultaneously compresses and regularizes CNN-based architectures. AN trains the base and compressed networks together, with the compressed network's parameters being a subset of the base network's.",
      link: "https://arxiv.org/pdf/2006.05624",
      imagePlaceholder: "/path/to/your/image-placeholder.jpg"
    }
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Link</a>}
          {/* <img src={project.imagePlaceholder} alt="Placeholder" /> Placeholder for project image */}
        </div>
      ))}
    </div>
  );
};

export default Projects2;
