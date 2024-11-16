"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MenuIcon, X, Moon, Sun, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

//image
import profile from "../public/myprofile.jpg";
import about_profile from "../public/about_profile.jpg";
import lara_jobify from "../public/lara_jobify.png";
import react_bookshop from "../public/react_bookshop.png";
import mern_recipe from "../public/mern_recipe.png";
import react_native_aora from "../public/react_native_aora.png";
import ec_rn from "../public/ec_rn.png";
import amz_studio from "../public/amz_studio.png"



export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "HTML", progress: 90 },
    { name: "CSS", progress: 85 },
    { name: "JavaScript", progress: 80 },
    { name: "TypeScript", progress: 75 },
    { name: "React.js", progress: 85 },
    { name: "React Native", progress: 70 },
    { name: "Next.js", progress: 80 },
    { name: "Node.js", progress: 75 },
    { name: "PHP", progress: 70 },
    { name: "Laravel", progress: 65 },
    { name: "SQL", progress: 75 },
    { name: "Git", progress: 85 },
  ]



  const projects = [
    {
      id: 1,
      name: "Jobify",
      desc: "The purpose of this project is to create a web app that makes it easy for employers and employees to search for jobs.",
      img: lara_jobify,
      github: "https://github.com/ThutaNyan788/Lara-Jobify"
    },
    {
      id: 3,
      name: "Awesome Bookshop",
      desc: "This project has been created so that you can easily find the book you want without having to look for books at the bookstore. You can also buy them online",
      img: react_bookshop,
      github: "https://github.com/ThutaNyan788/React-Book-Store"
    },
    {
      id: 4,
      name: "Recipes Made Easy",
      desc: "This project is a web app that makes it easy for people who want to cook alone and housewives to cook",
      img: mern_recipe,
      github: "https://github.com/ThutaNyan788/MERN-Recipe"
    },
    {
      id: 5,
      name: "Aora Platform",
      desc: "The purpose of this project is to be with family or loved ones It is a small app where you can post your own video posts.",
      img: react_native_aora,
      github: "https://github.com/ThutaNyan788/ReactNative_Aora"
    },
    {
      id: 6,
      name: "KIWI Ecommerce",
      desc:"The purpose of this project is It is an app made to make it convenient for people who sell things to buy it. You can buy the jackets you like.",
      img:ec_rn,
      github: "https://github.com/ThutaNyan788/ReactNative_Ecommerce"
    },
    {
      id: 7,
      name: "AMZ Photo Studio",
      desc:"This project made for personal studio landing page to attract people their design and photo",
      img:amz_studio,
      github: "https://github.com/ThutaNyan788/AMZstudioproject"
    },
  ]



  return (
    <div className={`min-h-screen bg-gradient-to-br ${isDarkMode ? 'from-gray-900 to-gray-800 text-white' : 'from-gray-100 to-white text-gray-900'} transition-colors duration-300`}>
      <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-900 bg-opacity-90' : 'bg-white bg-opacity-90'}`}>
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold">
              ThutaNyan
            </a>
            <div className="hidden md:flex space-x-4">
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-300">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-gray-300">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-gray-300">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300">
                Contact
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} py-2`}
          >
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-6 py-2 hover:bg-gray-700">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-6 py-2 hover:bg-gray-700">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-6 py-2 hover:bg-gray-700">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-6 py-2 hover:bg-gray-700">
              Contact
            </button>
          </motion.div>
        )}
      </header>

      <main className="pt-16">
        <section className="hero min-h-screen flex items-center">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Image
                src={profile}
                alt="ThutaNyan"
                width={200}
                height={200}
                className="rounded-full w-40 h-40 mx-auto object-cover border-4 border-white shadow-lg"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Hi, I&apos;m Thuta Nyan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl mb-2"
            >
              Full-stack Developer & AI/ML Enthusiast
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-md  mb-8"
            >
              I want to build a web and cross-platform app with the best performance and security.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" >
                <a href={"/thutanyan_cv.pdf"} target="_blank" className="flex justify-between">
                  <Download className="mr-2 h-4 w-4" /> Download My CV
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src={about_profile}
                  alt="ThutaNyan"
                  width={300}
                  height={300}
                  className="rounded-full w-64 h-64 object-cover mx-auto"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  I&apos;m a passionate full-stack developer with 5 years of experience in creating beautiful and
                  functional web applications. My expertise includes React, Node.js, and modern CSS frameworks like
                  Tailwind.
                </p>
                <p className="text-lg mb-4">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                  projects, or enjoying a good cup of coffee while solving coding challenges.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="https://github.com/ThutaNyan788" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`} aria-label="GitHub Profile">
                    <Github />
                  </a>
                  <a href="https://www.linkedin.com/in/thuta-nyan-380ba5250" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`} aria-label="LinkedIn Profile">
                    <Linkedin />
                  </a>
                  <a href="mailto:thutanyan788@gmail.com" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`} aria-label="Email Me">
                    <Mail />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm font-medium">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: project.id * 0.1 }}
                  className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg overflow-hidden shadow-lg`}
                >
                  <Image
                    src={project.img}
                    alt={project.name}
                    width={1000}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                      {project.desc}
                    </p>
                      <div className="flex space-x-2">
                        <Button variant={"outline"} onClick={()=>window.location.href=project.github}>
                          <Github/>
                        </Button>
                      </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message here..." />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'} py-6`}>
        <div className="container mx-auto px-6 text-center">
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>© 2024 ThutaNyan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}