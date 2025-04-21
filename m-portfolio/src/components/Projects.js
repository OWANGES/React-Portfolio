import React from 'react';
import image1 from '../Assets/Images/image 1.png';
import image2 from '../Assets/Images/image2.png';

const Projects = () => (
  <div className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      <div className="project">
        <h4>Wordpress Page Redesign</h4>
        <p>Redesigned Arboretrum Mission & Vision page in addition to other work on the website including creating the Alumni Map.</p>
        <img src={image1} alt="Project screenshot" />
        <br />
        <a href="https://arboretum.ucf.edu/about/" target="_blank" rel="noreferrer">View Wordpress Page Project</a>
      </div>
      <div className="project">
        <h4>Figma App Prototype</h4>
        <p>Prototype for PowerFX App that was created and now used by Arboretrum Interns at UCF</p>
        <div className="figma-embed">
            <iframe
              src="https://embed.figma.com/proto/wG43n6Q1g5Zz7qwVsBwnWD/Untitled?node-id=1-932&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share"
              allowFullScreen
              title="Figma Prototype"
            />
        </div>

        <a href="https://www.figma.com/proto/wG43n6Q1g5Zz7qwVsBwnWD/Untitled?node-id=1-932&t=6FEwcosnp9Pvpb12-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noreferrer">View Figma Prototype</a>
      </div>
      <div className="project">
        <h4>Florida Man - Headline Graphic/Poster</h4>
        <p>Graphic poster based on florida man headline.</p>
        <img src={image2} alt="Graphic" />
      </div>
    </div>
  </div>
);

export default Projects;
