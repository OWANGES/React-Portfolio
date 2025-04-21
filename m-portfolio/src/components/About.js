import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.div
    className="about"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="about-content">
      <h2>About Me</h2>
      <p>
        Hello! I'm Megan, I primarily focus on UX/UI and developing websites. 
        I also make graphics and do art occasionally.
      </p>
      <h3>Skills</h3>
      <ul>
        <li>HTML - CSS - JavaScript - PHP - Python - React</li>
        <li>Adobe Creative Cloud - Photoshop - Illustrator - Clip Studio Paint</li>
      </ul>
      
    </div>
  </motion.div>
);

export default About;
