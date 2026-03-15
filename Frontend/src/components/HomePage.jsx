import { useRef, useEffect } from 'react'
import '../App.css'
import avatar2 from "/assets/avatar2.jpg"
import xProfile from "/assets/xProfile.jpg"
import GitHubCalendar from "react-github-calendar"
import { Earth } from 'lucide-react'
import React from "/assets/React.png"
import Express from "/assets/Express-2.png"
import Node from "/assets/Node.js.png"
import Mongodb from "/assets/MongoDB.png"
import Tailwind from "/assets/Tailwind CSS.png"
import Github from "/assets/GitHub.png"
import X from "/assets/x.svg"
import gmail from "/assets/gmail.png"
import linkedin from "/assets/linkedin.svg"
import frontend from "/assets/frontend-icon.png"
import backend from "/assets/backend-icon.png"
import app from "/assets/App.png"
import aws from "/assets/AWS.png"
import css from "/assets/CSS3.png"
import html from "/assets/HTML5.png"
import cursor from "/assets/cursor-ai.png"
import javascript from "/assets/JavaScript.png"
import nextJs from "/assets/Next.js.png"
import postgres from "/assets/PostgresSQL.png"
import postman from "/assets/Postman.png"
import ws from "/assets/Socket.io.png"
import typescript from "/assets/TypeScript.png"
import stripe from "/assets/stripe-icon.png"
import redis from "/assets/Redis.png"
import resume from "/assets/resume.pdf"

export default function HomePage() {
  const calendarRef = useRef(null)
  const calendarWrapperRef = useRef(null)

  useEffect(() => {
    const scrollMaxRight = () => {
      requestAnimationFrame(() => {
        const root = calendarRef.current
        const wrapper = calendarWrapperRef.current
        if (!root || !wrapper) return
        const scrollContainer =
          root.querySelector('.react-activity-calendar__scroll-container') ||
          root.firstElementChild
        const el = scrollContainer?.scrollWidth > scrollContainer?.clientWidth ? scrollContainer : wrapper
        if (el.scrollWidth > el.clientWidth) {
          el.scrollLeft = el.scrollWidth - el.clientWidth
        }
      })
    }
    scrollMaxRight()
    const timeouts = [400, 800, 1200, 2000, 3500].map((ms) => setTimeout(scrollMaxRight, ms))
    const id = setInterval(scrollMaxRight, 500)
    const t = setTimeout(() => clearInterval(id), 4500)
    return () => {
      timeouts.forEach(clearTimeout)
      clearInterval(id)
      clearTimeout(t)
    }
  }, [])

  return (
    <>
      <div className="grid mt-4 md:mt-5 w-full min-h-0 md:h-[900px] grid-cols-1 gap-4 md:grid-cols-2 auto-rows-auto md:auto-rows-[10rem] lg:auto-rows-[10rem] mb-3">
        <div className="Div-1 w-full min-h-0 md:h-85">
          <div className="Div-1.1 flex flex-col md:flex-row gap-4 md:gap-5">
            <div className="github-calendar min-h-[200px] md:h-55 w-full rounded-2xl bg-black border-[#171716] text-white p-3 overflow-y-hidden no-scrollbar">
              <div className="flex items-center justify-between border-b-1 border-white pb-1">
                <h3 className="text-[10px] sm:text-[11px] font-bold relative top-0">Activity calendar</h3>
                <h4 className="text-[10px] sm:text-[11px] font-bold relative top-0 hidden sm:inline">My GitHub Contributions</h4>
              </div>
              <div ref={calendarWrapperRef} className="overflow-x-auto mt-2 overflow-y-hidden no-scrollbar rounded-2xl relative top-1">
                <GitHubCalendar
                  ref={calendarRef}
                  username="Naufil-29"
                  className="react-github-calendar"
                  blockSize={10}
                  blockMargin={2}
                  fontSize={12}
                  theme={{
                    dark: ['#21262d', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    light: ['#21262d', '#0e4429', '#006d32', '#26a641', '#39d353']
                  }}
                />
              </div>
            </div>
            <div className="twitter-profile hidden md:inline-flex min-h-[180px] md:h-55  w-full p-3 rounded-2xl bg-black border-[#171716]">
              <a href="https://x.com/Naufil_Codes_29">
                <div className="border-b pb-1 flex items-center justify-between font-bold text-xs">
                  <h3 className="pl-2">TwitterX</h3>
                  <h3 className="pr-2">Naufil-29</h3>
                </div>
                <img className="mt-2 h-32 sm:h-40 md:h-45 w-full object-cover object-center rounded-2xl" src={xProfile} alt="twitterX-profile" />
              </a>
            </div>
          </div>
          <div className="main-profile w-full min-h-0 md:h-75 rounded-2xl mt-4 md:mt-5 bg-black border-[#171716] p-4 sm:p-6 md:p-8">
            <div className="flex flex-row sm:flex-row gap-4 md:gap-5">
              <div className="relative w-28 h-30 sm:w-40 sm:h-50 md:w-36 md:h-28 rounded-lg  flex-shrink-0">
                <img src={avatar2} alt="profile" className="w-full h-full mt-4 border-1 border-white object-cover rounded-lg relative z-10 sm:w-full sm:h-full" />
              </div>
              <div className="w-full flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-3 min-w-0">
                <div className="min-w-0">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <h4 className="inline-block px-2 py-1 bg-black border-1 border-white rounded-3xl text-xs sm:text-sm font-bold">🟢  Available To Work</h4>
                  </a>
                  <h1 className="mt-2 sm:relative sm:top-4 font-bold text-xl sm:text-2xl md:text-[28px]">Naufil_Kathiyara</h1>
                  <h3 className="mt-1 sm:relative sm:top-2 font-bold text-gray-500 text-xs sm:text-sm">
                    <span className="text-gray-400">F</span>
                    <span className="text-gray-400">U</span>
                    <span className="text-gray-400">L</span>
                    <span className="text-gray-400">L</span>-<span className="text-gray-400">STACK</span>_<span className="text-gray-400">DEVELOPER</span>
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <a href={resume} target="_blank" rel="noopener noreferrer"><button className="h-9 sm:h-8 bg-black border-1 border-white py-1 px-3 font-bold rounded-lg text-xs sm:text-[14px]">See CV 🗎</button></a>
                  <a href={resume} download><button className="h-9 sm:h-8 bg-black border-1 border-white py-1 px-3 font-bold rounded-lg text-xs sm:text-[14px]">Save CV 🗎</button></a>
                </div>
              </div>
            </div>
            <p className="w-full text-xs sm:text-sm md:text-[14px] font-medium text-white pt-4 md:pt-6">I'm a passionate MERN stack developer who enjoys building practical and user-friendly web applications. I love turning ideas into real projects, I focus on understanding core concepts deeply before moving on to advanced features. I enjoy solving problems, experimenting with new tools, and continuously improving my skills. My goal is to create clean, efficient, and creative solutions that not only work but also provide a great user experience.</p>
          </div>
        </div>

        <div className="Div-2 flex flex-col md:flex-row gap-4 md:gap-3">
        <div className="project-1 w-full md:w-1/2 min-h-0 md:h-135 rounded-2xl bg-black border-[#171716] p-3">
            <div className="inline-flex items-center justify-between border-b-1 h-4 w-full pb-1">
              <p className="h- text-[12px] font-bold">Project</p>
              <p className="h- text-[12px] font-bold">CoursERA</p>
            </div>
            <a href="https://www.youtube.com/watch?v=_PGDgbsfRIQ" target="_blank" rel="noopener noreferrer">
              <iframe
                className="w-full aspect-video min-h-[160px] md:h-45 rounded-xl mt-2"
                src="https://www.youtube.com/embed/_PGDgbsfRIQ?autoplay=1&mute=1&loop=1&playlist=_PGDgbsfRIQ&controls=0"
                title="Course Selling SaaS Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </a>
            <span className="px-2">
              <div className="flex items-center justify-between">
                <h2 className="relative font-bold text-lg sm:text-[20px]">CoursERA</h2>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <a href="https://coursera-oanq.onrender.com" target="_blank" rel="noopener noreferrer">
                    <p className="flex gap-2 text-[12px] w-25 font-bold bg-black rounded-lg decoration-0 p-1 text-center items-center">
                      <Earth alt="url" className="w-8 h-8 animate-spin-slow text-blue-500" />
                      Live-App
                    </p>
                  </a>
                </div>
              </div>
              <h4 className="text-[12px] text-gray-600">March_03_2026</h4>
              <p className="text-[13px] mt-3 font-bold">CoursERA is a full-stack learning-platform, where user can purchase and learn new skills And admins can create, sell and maintain contnents</p>
              <div className="mt-4 md:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={Node} className="w-5 h-5 flex-shrink-0 animate-spin-slow" alt="Node.js" />
                    Node.js
                  </p>
                </div>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={Express} className="w-4 h-4 flex-shrink-0 spin-y" alt="Express.js" />
                    Express.js
                  </p>
                </div>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={stripe} className="w-4 h-4 flex-shrink-0 spin-y" alt="Stripe" />
                    Stripe
                  </p>
                </div>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={React} className="w-5 h-5 flex-shrink-0 animate-spin-slow" alt="React" />
                    React.js
                  </p>
                </div>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={Mongodb} className="w-5 h-5 flex-shrink-0 spin-y" alt="MongoDB" />
                    MongoDB
                  </p>
                </div>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={redis} className="w-5 h-5 flex-shrink-0 spin-y" alt="Redis" />
                    Redis
                  </p>
                </div>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={Tailwind} className="w-5 h-5 flex-shrink-0 animate-spin-slow" alt="Tailwind" />
                    Tailwind
                  </p>
                </div>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={javascript} className="w-5 h-5 flex-shrink-0 spin-y" alt="JavaScript" />
                    Javascript
                  </p>
                </div>
              </div>
            </span>
          </div>
          <div className="project-2 w-full md:w-1/2 min-h-0 md:h-135 rounded-2xl bg-black border-[#171716] p-3">
            <div className="inline-flex items-center justify-between border-b-1 h-4 w-full pb-1">
              <p className="h- text-[12px] font-bold">Project</p>
              <p className="h- text-[12px] font-bold">Notezy</p>
            </div>
            <a href="https://youtu.be/f_N9xNn7iEA" target="_blank" rel="noopener noreferrer">
              <iframe
                className="w-full aspect-video min-h-[160px] md:h-45 rounded-xl mt-2"
                src="https://www.youtube.com/embed/f_N9xNn7iEA?autoplay=1&mute=1&loop=1&playlist=f_N9xNn7iEA&controls=0"
                title="Course Selling SaaS Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </a>
            <span className="px-2">
              <div className="flex items-center justify-between">
                <h2 className="relative font-bold text-lg sm:text-[20px]">Notezy</h2>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <a href="https://notezy-frontend-pdao.onrender.com" target="_blank" rel="noopener noreferrer">
                    <p className="flex gap-2 text-[12px] w-25 font-bold bg-black rounded-lg decoration-0 p-1 text-center items-center">
                      <Earth alt="url" className="w-8 h-8 animate-spin-slow text-blue-500" />
                      Live-App
                    </p>
                  </a>
                </div>
              </div>
              <h4 className="text-[12px] text-gray-600">August_31_2025</h4>
              <p className="text-[13px] mt-3 font-bold">Notezy is a smart, minimal notes app, with integrated AI chatbot helping you stay organized and productive with ease.</p>
              <div className="mt-4 md:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={Node} className="w-5 h-5 flex-shrink-0 animate-spin-slow" alt="Node.js" />
                    Node.js
                  </p>
                </div>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={Express} className="w-4 h-4 flex-shrink-0 spin-y" alt="Express.js" />
                    Express.js
                  </p>
                </div>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={React} className="w-5 h-5 flex-shrink-0 animate-spin-slow" alt="React" />
                    React.js
                  </p>
                </div>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={Mongodb} className="w-5 h-5 flex-shrink-0 spin-y" alt="MongoDB" />
                    MongoDB
                  </p>
                </div>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={Tailwind} className="w-5 h-5 flex-shrink-0 animate-spin-slow" alt="Tailwind" />
                    Tailwind
                  </p>
                </div>
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] h-8 bg-[#171716] rounded-lg px-2 items-center">
                    <img src={javascript} className="w-5 h-5 flex-shrink-0 spin-y" alt="JavaScript" />
                    Javascript
                  </p>
                </div>
              </div>
            </span>
          </div>
          
        </div>
        <div className="Div-3 flex flex-col md:flex-row gap-4 md:gap-5 w-full min-h-0 md:h-85 mt-6 md:mt-95 bg-[#171716]">
          <div className="Social-media-handles w-full md:w-1/2 min-h-0 md:h-85 rounded-2xl p-3 md:p-2 bg-black border-[#171716]">
            <div className="flex items-center justify-between border-b-1 h-7 pb-1 mx-1">
              <h3 className="text-[12px] font-bold relative top-0 ml-1">Social Media</h3>
              <h4 className="text-[12px] font-bold relative top-0 mr-1">Contact</h4>
            </div>
            <div className="w-full min-h-[80px] md:h-30 flex flex-wrap gap-2 mt-4 md:mt-6">
              <div className="w-1/4 bg-white md:bg-black min-w-[120px]  flex-1 rounded-lg flex items-center justify-center">
                <a href="https://github.com/Naufil-29" className="block p-2">
                  <img className="bg-white w-14 h-14 sm:w-20 sm:h-20 rounded-xl border-1 hover:scale-110 transition-transform object-contain" src={Github} alt="Github" />
                </a>
              </div>
              <div className="w-1/2 bg-white md:bg-black min-w-[120px] flex-1 rounded-lg flex items-center justify-center">
                <a href="https://x.com/Naufil_Codes_29" className="block p-2">
                  <img className="bg-white w-14 h-14 sm:w-20 sm:h-20 rounded-xl border-1 hover:scale-110 transition-transform object-contain" src={X} alt="TwitterX" />
                </a>
              </div>
              <div className="w-1/2 bg-white md:bg-black min-w-[120px] flex-1 rounded-lg flex items-center justify-center">
                <a href="https://www.linkedin.com/in/naufil-kathiyara-981353360/" className="block p-2">
                  <img className="bg-white w-14 h-14 sm:w-20 sm:h-20 rounded-xl border-1 hover:scale-110 transition-transform object-contain" src={linkedin} alt="LinkedIN" />
                </a>
              </div>
              <div className="w-1/2 bg-white md:bg-black min-w-[120px] flex-1 rounded-lg flex items-center justify-center">
                <a href="mailto:dev.naufil@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Naufil,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." className="block p-2">
                  <img className="bg-white w-14 h-14 sm:w-20 sm:h-20 rounded-xl hover:scale-110 transition-transform object-contain" src={gmail} alt="Email" />
                </a>
              </div>
            </div>
          </div>
          <div className="Social-media-handles-2 w-full md:w-1/2 min-h-0 md:h-85 rounded-2xl p-3 md:p-2 bg-black border-[#171716]">
            <div className="flex items-center justify-between border-b-1 h-7 pb-1 mx-2">
              <h3 className="text-[12px] font-bold relative top-0 ml-1">Skills</h3>
            </div>
            <div className="flex flex-col gap-3 items-center mt-4 md:mt-6">
              <div className="min-h-12 md:h-13 w-full max-w-[90%] flex items-center justify-start gap-3 bg-white text-black rounded-2xl text-sm sm:text-base md:text-lg font-semibold p-3 md:p-4">
                <p>Backend-Development</p>
                <img className="w-6 md:w-8 flex-shrink-0" src={backend} alt="Backend" />
              </div>
              <div className="min-h-12 md:h-13 w-full max-w-[90%] flex items-center justify-start gap-3 bg-white text-black rounded-2xl text-sm sm:text-base md:text-lg font-semibold p-3 md:p-4">
                <p>Desktop-Application</p>
                <img className="w-6 md:w-8 rounded-lg flex-shrink-0" src={app} alt="App" />
              </div>
              <div className="min-h-12 md:h-13 w-full max-w-[90%] flex items-center justify-start gap-3 bg-white text-black rounded-2xl text-sm sm:text-base md:text-lg font-semibold p-3 md:p-4">
                <p>Web-Design</p>
                <img className="w-6 md:w-8 flex-shrink-0" src={frontend} alt="Frontend" />
              </div>
              <div className="min-h-12 md:h-13 w-full max-w-[90%] bg-white text-gray-500 rounded-2xl text-sm sm:text-base md:text-lg font-semibold p-3 md:p-4">
                <p>Devops <span>[ currently learning ]</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="Div-4 w-full min-h-0 md:h-85 mt-6 md:mt-95">
          <div className="Tech&tools w-full min-h-0 md:h-85 rounded-2xl p-3 md:p-2 bg-black">
            <div className="flex items-center justify-between border-b-1 h-7 pb-1 mx-2">
              <h3 className="text-[12px] font-bold relative top-0 ml-1">Technologies</h3>
              <h4 className="text-[12px] font-bold relative top-0 mr-1">Tools</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 md:mt-5">
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={html} alt="HTML5" />
                <p className="text-xs sm:text-sm truncate">HTML5</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={css} alt="CSS3" />
                <p className="text-xs sm:text-sm truncate">CSS3</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={javascript} alt="JavaScript" />
                <p className="text-xs sm:text-sm truncate">JavaScript</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={typescript} alt="TypeScript" />
                <p className="text-xs sm:text-sm truncate">TypeScript</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={Mongodb} alt="MongoDB" />
                <p className="text-xs sm:text-sm truncate">MongoDB</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-5 md:w-6 spin-y flex-shrink-0" src={Express} alt="Express.js" />
                <p className="text-xs sm:text-sm truncate">Express.js</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={React} alt="React.js" />
                <p className="text-xs sm:text-sm truncate">React.js</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={Node} alt="Node.js" />
                <p className="text-xs sm:text-sm truncate">Node.js</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={ws} alt="WebSocket" />
                <p className="text-xs sm:text-sm truncate">WebSocket</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={nextJs} alt="Next.js" />
                <p className="text-xs sm:text-sm truncate">Next.js</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={Tailwind} alt="Tailwind" />
                <p className="text-xs sm:text-sm truncate">Tailwind</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={postgres} alt="Postgres" />
                <p className="text-xs sm:text-sm truncate">Postgres</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={cursor} alt="Cursor" />
                <p className="text-xs sm:text-sm truncate">Cursor</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={postman} alt="Postman" />
                <p className="text-xs sm:text-sm truncate">Postman</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={Github} alt="GitHub" />
                <p className="text-xs sm:text-sm truncate">GitHub</p>
              </div>
              <div className="min-h-12 md:h-13 flex items-center justify-center gap-2 md:gap-3 bg-white text-black rounded-lg p-2 md:p-3">
                <img className="w-6 md:w-8 spin-y flex-shrink-0" src={aws} alt="AWS" />
                <p className="text-xs sm:text-sm truncate">AWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
