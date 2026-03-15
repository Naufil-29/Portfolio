import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Github, Twitter, Linkedin, Mail, Menu, X } from 'lucide-react'
import fullAvatar from "/assets/fullAvatar.jpg"
import avatar from "/assets/avatar2.jpg"

const CONNECT_LINKS = [
  { href: 'https://x.com/Naufil_Codes_29', Icon: Twitter, label: 'Twitter/X' },
  { href: 'https://www.linkedin.com/in/naufil-kathiyara-981353360/', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/Naufil-29', Icon: Github, label: 'GitHub' },
  { href: 'mailto:dev.naufil@gmail.com?subject=Portfolio%20Inquiry', Icon: Mail, label: 'Email' }
]

const navLinkClass = (isActive) =>
  `transition-all duration-200 ${isActive ? 'text-white font-bold md:scale-150' : 'text-gray-400 hover:text-gray-300'}`

export default function Layout() {
  const { pathname } = useLocation()
  const [visitCount, setVisitCount] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isHome = pathname === '/'
  const isProjects = pathname === '/projects'

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/naufil-portfolio/visits')
      .then((res) => res.json())
      .then((data) => setVisitCount(data.value))
      .catch(() => setVisitCount(null))
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <div className="body text-white w-full min-h-screen bg-[#171716] flex flex-col">
      <div className="px-4 sm:px-6 lg:px-0 lg:ml-25 lg:mr-25 bg-[#171715] flex-1">
        <nav className="navbar flex pt-2 justify-between items-center p-3 shadow-md rounded-2xl bg-black border-b-1">
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8 min-w-0">
            <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-25 md:w-25 flex-shrink-0">
              <img src={fullAvatar} className="h-full w-full object-cover rounded-2xl" alt="Naufil" />
            </div>
            <span className="min-w-0">
              <h1 className="text-sm sm:text-base md:text-lg truncate">Naufil_Kathiyara</h1>
              <h3 className="text-[10px] sm:text-[11px] text-gray-400 border-t-1 border-white">Software Developer</h3>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 pr-20">
            <Link to="/" className={navLinkClass(isHome)}>Home</Link>
            <Link to="/projects" className={navLinkClass(isProjects)}>Projects</Link>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#27272a] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-black border border-[#171716] flex flex-col gap-2">
            <Link to="/" className={navLinkClass(isHome) + ' py-2 px-3 rounded-lg hover:bg-[#27272a]'} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/projects" className={navLinkClass(isProjects) + ' py-2 px-3 rounded-lg hover:bg-[#27272a]'} onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          </div>
        )}
        <Outlet />
      </div>

      <footer className="mt-auto border-t border-[#27272a] bg-[#0f0f0f] text-gray-400">
        <div className="px-4 sm:px-6 lg:px-0 lg:ml-25 lg:mr-25 py-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="flex items-start gap-6">
              <img
                src={avatar}
                alt=""
                className="w-12 h-12 rounded-lg object-cover flex-shrink-0 opacity-90"
              />
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Navigate</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                  <Link to="/" className="text-sm hover:text-white transition-colors">Home</Link>
                  <Link to="/projects" className="text-sm hover:text-white transition-colors">Projects</Link>
                  <a href="#" className="text-sm hover:text-white transition-colors">Resume</a>
                  <a href="https://github.com/Naufil-29" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">GitHub</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Connect</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {CONNECT_LINKS.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#171716] border border-[#27272a] text-gray-400 hover:text-white hover:border-gray-600 transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10 pt-6 border-t border-[#27272a] text-sm">
            <p className="text-gray-500">© 2026 Naufil_Kathiyara. All rights reserved.</p>
            {visitCount != null && (
              <p className="text-gray-500">
                You're the <span className="font-bold text-gray-300">{visitCount.toLocaleString()}</span>th visitor
              </p>
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}
