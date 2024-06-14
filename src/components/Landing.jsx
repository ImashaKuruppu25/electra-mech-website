import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Tech from './Tech';
import Works from './Works';
import Feedbacks from './Feedbacks';
import Contact from './Contact';
import { StarsCanvas } from './canvas';
import ExperienceHeader from './ExperienceHeader';
import Stacks from './Stacks';

const Landing = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <br />
      <br />
      <ExperienceHeader />
      <Experience />
      <br />
      <br />
      <Stacks />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default Landing