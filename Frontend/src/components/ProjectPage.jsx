import { Earth } from 'lucide-react'
import '../App.css'
import Notezyvideo from "/assets/Notezyvideo.mp4"
import courseVideo from "/assets/course-saas-video.mp4"
import ExceildrawVideo from "/assets/ExcelidrawVideo.mp4"
import React from "/assets/React.png"
import Express from "/assets/Express-2.png"
import Node from "/assets/Node.js.png"
import Mongodb from "/assets/MongoDB.png"
import Tailwind from "/assets/Tailwind CSS.png"
import javascript from "/assets/JavaScript.png"
import stripe from "/assets/stripe-icon.png"
import redis from "/assets/Redis.png"
import Next from "/assets/Next.js.png"
import SQL from "/assets/PostgresSQL.png"
import typescript from "/assets/TypeScript.png"
import turborepo from "/assets/turborepoIcon.svg"
import websocket from "/assets/websocket.svg"
import github from "/assets/GitHub.png"

const projects = [
  {
    id: 'excelidraw',
    title: 'Excelidraw',
    date: 'March 12, 2025',
    description: 'A real-time collaborative whiteboard with hand-drawn style diagrams. Create rooms, draw shapes, and sync with others instantly.',
    video: ExceildrawVideo,
    githubUrl: 'https://github.com/Naufil-29/Excalidraw',
    demoUrl: 'https://youtu.be/ORo3ehnOOlE',
    liveUrl: 'https://notezy-frontend-pdao.onrender.com',
    features: [
      'Free drawing — Shapes, lines, and text with a natural hand-drawn look. Resize and move elements with corner handles.',
      'Real-time collaboration — Create or join rooms; everyone sees the same canvas and updates as they happen.',
      'Cloud sync — Shapes and positions are persisted. Reload or return later and pick up where you left off Room.',
      'Create a room by name (slug) or join an existing one by slug; each room has its own canvas and chat.',
      'Designed and architecured with multiple-backends'
    ],
    tech: [
      { name: 'Node.js', icon: Node },
      { name: 'Express.js', icon: Express },
      { name: 'Next.js', icon: Next },
      { name: 'Postgres-SQL', icon: SQL },
      { name: 'Tailwind', icon: Tailwind },
      { name: 'TypeScript', icon: typescript },
      { name: 'Turborepo', icon: turborepo },
      { name: 'WebSocket', icon: websocket }
    ]
  },
  {
    id: 'coursera',
    title: 'CoursERA',
    date: 'March 03, 2026',
    description: 'CoursERA is a full-stack learning platform where users can purchase and learn new skills. Admins can create, sell, and maintain content.',
    video: courseVideo,
    githubUrl: 'https://github.com/Naufil-29/course-selling-SaaS',
    demoUrl: 'https://youtu.be/_PGDgbsfRIQ',
    liveUrl: 'https://cousera-959f.onrender.com',
    features: [
      'User authentication and role-based access (learner / admin)',
      'Course catalog with purchase and enrollment',
      'Video/content delivery',
      'Stripe integration for payments',
      'Admin dashboard for content and sales management'
    ],
    tech: [
      { name: 'Node.js', icon: Node },
      { name: 'Express.js', icon: Express },
      { name: 'Stripe', icon: stripe },
      { name: 'React.js', icon: React },
      { name: 'MongoDB', icon: Mongodb },
      { name: 'Redis', icon: redis },
      { name: 'Tailwind', icon: Tailwind },
      { name: 'JavaScript', icon: javascript }
    ]
  },
  {
    id: 'notezy',
    title: 'Notezy',
    date: 'August 31, 2025',
    description: 'Notezy is a smart, minimal notes app, with integrated AI chatbot helping you stay organized and productive with ease.',
    video: Notezyvideo,
    githubUrl: 'https://github.com/Naufil-29/Notezy-main',
    demoUrl: 'https://youtu.be/f_N9xNn7iEA',
    liveUrl: 'https://notezy-frontend-pdao.onrender.com',
    features: [
      'Create, edit, and delete notes with a clean interface',
      'Integrated AI chatbot for quick assistance and organization',
      'Real-time sync and persistent storage',
      'Minimal, distraction-free design'
    ],
    tech: [
      { name: 'Node.js', icon: Node },
      { name: 'Express.js', icon: Express },
      { name: 'React.js', icon: React },
      { name: 'MongoDB', icon: Mongodb },
      { name: 'Tailwind', icon: Tailwind },
      { name: 'JavaScript', icon: javascript }
    ]
  },
  
]

export default function ProjectPage() {
  return (
    <div className="mt-4 md:mt-6 pb-8 md:pb-12 px-0">
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-4 md:mb-2">Projects</h1>

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl bg-black border border-[#171716] p-4 sm:p-6 md:p-8 text-white overflow-hidden"
          >
            <div className="flex flex-col p-3 md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0 w-full md:w-[420px]">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <video
                    className="w-full aspect-video rounded-xl object-cover border border-[#171716]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </a>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2 mb-2">
                  <h2 className="text-lg sm:text-xl font-bold">{project.title}</h2>
                  <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-5 flex-wrap"> 
                    <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold bg-[#171716] hover:bg-[#27272a] rounded-lg px-3 py-2 text-white transition-colors"
                    > 
                      <img className="bg-white w-5 rounded-lg" src={github} alt="github"></img>
                      GitHub
                    </a>
                    <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold bg-[#171716] hover:bg-[#27272a] rounded-lg px-3 py-2 text-blue-400 transition-colors"
                  >
                    <Earth className="w-4 h-4" />
                    Live App
                  </a>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mb-3">{project.date}</p>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h3 className="font-bold text-xl text-gray-400 uppercase tracking-wider mb-2">Highlighted features</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Tech stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(({ name, icon }) => (
                      <span
                        key={name}
                        className="inline-flex items-center gap-2 text-xs bg-[#171716] rounded-lg px-3 py-2"
                      >
                        <img src={icon} className="w-5 h-5" alt={name} />
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
