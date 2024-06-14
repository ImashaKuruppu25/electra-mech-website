import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}> ElectraMech Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] text-justify"
      >
        In the rapidly evolving landscape of electric vehicles (EVs), the demand
        for sustainable transportation is on the rise globally. However, in
        countries like Sri Lanka, the adoption of electric vehicles is hindered
        by several challenges, including limited public knowledge about EVs,
        difficulties in locating skilled mechanics for repairs, and the scarcity
        of necessary spare parts. These obstacles contribute to a reluctance
        among individuals to transition to electric vehicles, despite their
        environmental benefits.
        <br /> <br />
        Our proposed solution aims to address these issues by providing
        innovative AI-powered solutions for common breakdown challenges,
        ultimately revolutionizing vehicle assistance. Many individuals,
        especially those with limited technical knowledge, struggle to identify
        and resolve breakdown problems when they occur. The lack of easily
        accessible information, reliable mechanics, spare part shops, and
        maintenance advice exacerbates this issue, often leading to uncertainty
        and inconvenience during breakdowns.
        <br /> <br />
        To tackle these challenges, our research focuses on several key
        objectives. We are developing a user-friendly AI chatbot capable of
        diagnosing electric vehicle faults based on text input and dashboard
        warnings, providing users with practical solutions. Additionally, we are
        implementing a geolocation-based system that offers intelligent
        assistance during EV breakdowns, including AI-based repair service cost
        estimation. Utilizing image processing and computer vision techniques,
        we are creating an automated system for identifying and locating
        necessary spare parts efficiently. Furthermore, we aim to enhance user
        experience in vehicle maintenance through a digital monitoring calendar
        that provides timely reminders for essential maintenance tasks. This
        innovative approach holds the potential to significantly improve the
        reliability and accessibility of vehicle assistance services,
        encouraging more individuals to embrace electric vehicles and contribute
        to a sustainable future.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
