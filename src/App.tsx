import React from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin, Mail, MapPin, Phone,Facebook } from 'lucide-react';
import Navbar from './components/Navbar';
import SkillBar from './components/SkillBar';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/formu';
import paulimage from './images/paul1.jpeg';
import projet1 from './images/projet1.svg';
import projet2 from './images/projet2.svg';
import projet3 from './images/projet3.svg';

function App() {
  const skills = [
    { name: 'AUTOCAD', level: 100 },
    { name: 'Revit', level: 85 },
    { name: 'ARCHICAD', level: 100 },
    { name: 'ROBOT', level: 75 },
    { name: 'GRAPHIC DESIGN', level: 100 },
    { name: 'LUMION', level: 90 }
  ];

  const projects = [
    {
      title: 'Construction dune ferme Agricole',
      description: 'Visualization and construction of an agricultural farm that is both ecological and economical.',
      image: projet1,
      tools: ['AutoCAD', 'ARCHICAD', 'LUMION'],
      impact: 'As answer to School Project'
    },
    {
      title: 'Urban Housing Complex',
      description: 'Visualization and construction of an agricultural farm that is both ecological and economical.',
      image: projet2,
      tools: ['AutoCAD', 'ARCHICAD', 'LUMION'],
      impact: 'As answer to School Project'
    },
    {
      title: 'Green Infrastructure Project',
      description: 'Visualization and construction of an agricultural farm that is both ecological and economical.',
      image: projet3,
      tools: ['AutoCAD', 'ARCHICAD', 'LUMION'],
      impact: 'As answer to School Project'
    }
  ];

  return (
    <div className="bg-white">
      <Navbar /> 
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src= {paulimage}
                alt="Paul Tekeu"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-steel-blue">
                Paul Tekeu
              </h1>
              <h2 className="text-2xl md:text-3xl text-concrete mb-6">
                Building today for tomorrow's world
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Future Civil Engineer passionate about sustainable infrastructure
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="bg-steel-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="border-2 border-steel-blue text-steel-blue px-6 py-3 rounded-lg hover:bg-steel-blue hover:text-white transition"
                >
                  View Projects
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-300 rounded-lg">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              As a 4th-year Civil Engineering student at the National School of Public Works (ENSTP), 
              I am driven by the desire to create sustainable infrastructure that positively impacts communities.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My academic journey has equipped me with strong technical skills and a deep understanding of 
              civil engineering principles. I believe in combining innovative solutions with sustainable practices 
              to address modern infrastructure challenges.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-bold mb-2 text-steel-blue">Vision</h3>
                <p>Creating sustainable infrastructure solutions for future generations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-bold mb-2 text-steel-blue">Mission</h3>
                <p>Implementing innovative engineering solutions while prioritizing environmental responsibility</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-bold mb-2 text-steel-blue ">Values</h3>
                <p>Excellence, Sustainability, Innovation, and Integrity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[#FFF6F4]">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white">
        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-steel-blue mb-2">
                  Construction Site Intern
                </h3>
                <p className="text-concrete mb-4">June 2023 - August 2023</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Assisted in structural integrity assessments</li>
                  <li>Participated in quality control procedures</li>
                  <li>Collaborated with senior engineers on project planning</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-steel-blue mb-2">
                  Design Office Training
                </h3>
                <p className="text-concrete mb-4">January 2023 - March 2023</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Developed proficiency in AutoCAD and Revit</li>
                  <li>Created detailed technical drawings</li>
                  <li>Contributed to sustainable design solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50">
        <div className="section-container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-steel-blue" />
                  <span>Yaoundé/Melen/Street: monté science</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-steel-blue" />
                  <span>takoukacil@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-steel-blue" />
                  <span>+237 653 85 24 08</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/kacil-takou-63b3682a2/" className="text-steel-blue hover:text-blue-600 transition" target='_blank'>
                    <Linkedin size={24} />
                  </a>
                  <a href="https://www.facebook.com/paul.tekeu.33/" className="text-steel-blue hover:text-blue-600 transition" target='_blank'>
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://drive.google.com/file/d/13QQAw-VXhCB3UM757jCtJbOwVTX5Ih73/view?usp=drive_link"
                  className="inline-flex items-center gap-2 bg-steel-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>
            </div>
  <ContactForm/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;