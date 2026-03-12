import { useState } from 'react'
import './App.css'
import avatar2 from "/assets/avatar2.jpg"
import fullAvatar from "/assets/fullAvatar.jpg"
import xProfile from "/assets/xProfile.jpg"
// import { Button } from "@/components/ui/button";
// import { Card } from '@/components/ui/card';
// import logo from "@/assets/letter-logo.png"
import GitHubCalendar from "react-github-calendar";
// import avatar from "@/assets/Avatar-img2.png";
import { Earth } from 'lucide-react'
 import React from "/assets/React.png"
 import Express from "/assets/Express-2.png";
 import Node from "/assets/Node.js.png";
 import Mongodb from "/assets/MongoDB.png";
 import Tailwind from "/assets/Tailwind CSS.png";
import Notezyvideo from "/assets/Notezyvideo.mp4";
  import Github from "/assets/GitHub.png";
  import X from "/assets/x.svg";
  import gmail from "/assets/gmail.png";
  import linkedin from "/assets/linkedin.svg";
// import urlicon from "@/assets/url5-icon.png";



function App() {


  return (
<div className='body text-white w-full h-full bg-[#2a2a29]'> 
   <div className='ml-25 mr-25 bg-[#2a2a29]'> 
    <nav className='navbar flex pt-2 justify-between p-3 shadow-md rounded-2xl bg-black border-b-1'> 
      <div className='flex items-center gap-8'> 
        <div className='h-25'><img src={fullAvatar} className='h-full rounded-2xl'></img></div>
        <span>
          <h1>Naufil_Kathiyara</h1> 
          <h3 className='text-[11px] text-gray-400 border-t-1 border-white'>Software Developer</h3>
        </span>
      </div>
      <div className='flex items-center gap-8'> 
        <button>Home</button>
        <button>Projects</button>
      </div>
    </nav>

   <div className='grid mt-5 w-full h-125 grid-cols-1 gap-4 md:grid-cols-2 auto-rows-[9rem] md:auto-rows-[10rem] lg:auto-rows-[10rem]  mb-3 '>
     <div className='Div-1 w-full h-85'> 
        <div className='Div-1.1 flex gap-5'> 
            <div className='github-calendar h-55 w-full rounded-2xl bg-black border-[#171716] text-white p-3 overflow-y-hidden no-scrollbar '>  
              <div className='flex items-center justify-between border-b-1 border-white pb-1'> 
              <h3 className='text-[11px] font-bold relative top-0'>Activity calendar</h3>  
              <h4 className="text-[11px] font-bold relative top-0">My GitHub Contributions</h4>
              </div>
 
              <div className='overflow-hidden no-scrollbar rounded-2xl relative top-0'>
              <GitHubCalendar username="Naufil-29" className='react-github-calendar'         
              blockSize={10}     
              blockMargin={2}   
              fontSize={12}/>
              </div>
              
            </div>
             <div className='twitter-profile h-55 w-full p-3 rounded-2xl bg-black border-[#171716]'>
              <a href='https://x.com/Naufil_Codes_29'>
                <div className='border-b pb-1 flex items-center justify-between font-bold text-xs'>
                  <h3 className='pl-2'>TwitterX</h3>
                  <h3 className='pr-2'>Naufil-29</h3>
                </div>
               <img className='mt-2 h-45 content-center rounded-2xl' src={xProfile} alt='twitterX-profile'/>
               </a>
             </div>
        </div>
          <div className='main-profile w-full h-75 rounded-2xl mt-5 bg-black border-[#171716] p-8'> 
            <div className='flex gap-5'>
              <div className='relative w-40 h-28 rounded-lg overflow-hidden'>
                <img src={avatar2} alt="profile" className="w-full h-full border-1 border-white object-cover rounded-lg relative z-10"></img>
              </div>
              <div className='w-full flex justify-between'> 
                <div>
                  <a href='' target='_blank' rel='noopener noreferrer'>
                    <h4 className='px-2 py-1 bg-black border-1 border-white rounded-3xl text-sm font-bold w-40'>🟢  Available To Work</h4>
                  </a>
                  <h1 className='relative top-4 font-bold text-[28px]'>Naufil_Kathiyara</h1>
                  <h3 className='relative top-2 font-bold text-gray-500'>
                    <span className='text-gray-400'>F</span>
                    <span className='text-gray-400'>U</span>
                    <span className='text-gray-400'>L</span>
                    <span className='text-gray-400'>L</span>-<span className='text-gray-400'>STACK</span>_<span className='text-gray-400'>DEVELOPER</span></h3>
                </div>
                <h2 className='relative top-0 h-8 bg-black border-1 border-white py-1 px-3 font-bold rounded-lg text-[14px]'>Resume   <span className='size-59'> 🗎 </span></h2>
              </div>
            </div>
                <p className='w-full text-[14px] font-medium text-white pt-6'>I’m a passionate MERN stack developer who enjoys building practical and user-friendly web applications. I love turning ideas into real projects, I focus on understanding core concepts deeply before moving on to advanced features. I enjoy solving problems, experimenting with new tools, and continuously improving my skills. My goal is to create clean, efficient, and creative solutions that not only work but also provide a great user experience.</p>
          </div>
      </div> 


      <div className='Div-2 flex gap-3'> 
        <div className='project-1 w-1/2 h-135 rounded-2xl bg-black border-[#171716] p-3'> 
        <div className='inline-flex items-center justify-between border-b-1 h-4 w-full pb-1'>
          <p className='h- text-[12px] font-bold '>Project</p>
          <p className='h- text-[12px] font-bold'>Notezy</p>
        </div>
        <a href='https://youtu.be/f_N9xNn7iEA' target='_blank' rel='noopener noreferrer'>
          <video
            className="w-full h-45 rounded-xl object-cover mt-2"
            autoPlay
            loop
            muted
            playsInline
          >
          <source src={Notezyvideo} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
          </a>



       <span className='px-2'>
        
          <div className='flex items-center justify-between'> 
            <h2 className='relative font-bold text-[20px]'>Notezy</h2>
            <div className='perspective inline-block hover:scale-110 transition-transform duration-200'> 
                   <a href='https://notezy-frontend-pdao.onrender.com' target='_blank' rel='noopener noreferrer'>
                    <p className='flex gap-2 text-[12px] w-25 font-bold bg-black rounded-lg decoration-0 p-1 text-center items-center'> 
                      <Earth alt='url' className='w-8 h-8 animate-spin-slow text-blue-500'/>
                      Live-App
                    </p>
                    </a>
            </div>
          </div>
          <h4 className='text-[12px] text-gray-600'>August_31_2025</h4>
          <p className='text-[13px] mt-3 font-bold'>Notezy is a smart, minimal notes app, with integrated AI chatbot helping you stay organized and productive with ease.</p>
          <div className='mt-6'> 
            <div className='flex gap-2 mb-2'> 

                {/* React JSX */}
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] w-22 bg-[#171716] rounded-lg p-1 text-center items-center">
                    <img src={Node} className="w-5 h-5 animate-spin-slow" alt="Express.js logo" />
                   Node.js
                 </p>
                </div>
                {/* React JSX */}
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 justify-center items-center text-[10px] w-25 h-8 bg-[#171716] rounded-lg p-1 text-center ">
                    <img src={Express} className="w-4 h-4 spin-y" alt="Express.js logo" />
                   Express.js
                 </p>
                </div>

            </div>
            <div className='flex gap-2'> 
             <p className='flex gap-4 text-[10px] w-22 items-center bg-[#171716] rounded-lg hover:scale-110 transition-transform duration-200'>
              <img src={React} className='size-5 animate-spin-slow'></img>
              React.js
              </p>

            {/* React JSX */}
            <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
               <p className="flex gap-2 text-[10px] w-25 bg-[#171716] rounded-lg p-1 text-center items-center">
                <img src={Mongodb} className="w-6 h-h spin-y" alt="MongoDB logo" />
                 MongoDB
              </p>
            </div>
            </div>
            <div className='flex gap-3 mt-2'> 
              <p className='flex gap-2 text-[10px] w-25 h-8 bg-[#171716] rounded-lg items-center justify-center hover:scale-110 transition-transform duration-200'>
                <img src={Tailwind} className='size-5 animate-spin-slow'></img>
                Tailwind.CSS
                </p>
            </div>
          </div>
        </span>
        </div>
        <div className='project-2 w-1/2 h-135 rounded-2xl bg-black border-[#171716] p-3'> 
        <div className='inline-flex items-center justify-between border-b-1 h-4 w-full pb-1'>
          <p className='h- text-[12px] font-bold '>Project</p>
          <p className='h- text-[12px] font-bold'>Notezy</p>
        </div>
        <a href='https://youtu.be/f_N9xNn7iEA' target='_blank' rel='noopener noreferrer'>
          <video
            className="w-full h-45 rounded-xl object-cover mt-2"
            autoPlay
            loop
            muted
            playsInline
          >
          <source src={Notezyvideo} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
          </a>



       <span className='px-2'>
        
          <div className='flex items-center justify-between'> 
            <h2 className='relative font-bold text-[20px]'>Notezy</h2>
            <div className='perspective inline-block hover:scale-110 transition-transform duration-200'> 
                   <a href='https://notezy-frontend-pdao.onrender.com' target='_blank' rel='noopener noreferrer'>
                    <p className='flex gap-2 text-[12px] w-25 font-bold bg-black rounded-lg decoration-0 p-1 text-center items-center'> 
                      <Earth alt='url' className='w-8 h-8 animate-spin-slow text-blue-500'/>
                      Live-App
                    </p>
                    </a>
            </div>
          </div>
          <h4 className='text-[12px] text-gray-600'>August_31_2025</h4>
          <p className='text-[13px] mt-3 font-bold'>Notezy is a smart, minimal notes app, with integrated AI chatbot helping you stay organized and productive with ease.</p>
          <div className='mt-6'> 
            <div className='flex gap-2 mb-2'> 

                {/* React JSX */}
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 text-[10px] w-22 bg-[#171716] rounded-lg p-1 text-center items-center">
                    <img src={Node} className="w-5 h-5 animate-spin-slow" alt="Express.js logo" />
                   Node.js
                 </p>
                </div>
                {/* React JSX */}
                <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
                  <p className="flex gap-2 justify-center items-center text-[10px] w-25 h-8 bg-[#171716] rounded-lg p-1 text-center ">
                    <img src={Express} className="w-4 h-4 spin-y" alt="Express.js logo" />
                   Express.js
                 </p>
                </div>

            </div>
            <div className='flex gap-2'> 
             <p className='flex gap-4 text-[10px] w-22 items-center bg-[#171716] rounded-lg hover:scale-110 transition-transform duration-200'>
              <img src={React} className='size-5 animate-spin-slow'></img>
              React.js
              </p>

            {/* React JSX */}
            <div className="perspective inline-block hover:scale-110 transition-transform duration-200">
               <p className="flex gap-2 text-[10px] w-25 bg-[#171716] rounded-lg p-1 text-center items-center">
                <img src={Mongodb} className="w-6 h-h spin-y" alt="MongoDB logo" />
                 MongoDB
              </p>
            </div>
            </div>
            <div className='flex gap-3 mt-2'> 
              <p className='flex gap-2 text-[10px] w-25 h-8 bg-[#171716] rounded-lg items-center justify-center hover:scale-110 transition-transform duration-200'>
                <img src={Tailwind} className='size-5 animate-spin-slow'></img>
                Tailwind.CSS
                </p>
            </div>
          </div>
        </span>
        </div>
       </div> 
       <div className='Div-3 flex gap-5 w-full h-85 mt-95 bg-[#2a2a29]'> 
        <div className='Social-media-handles w-1/2 h-85 rounded-2xl p-2 bg-black border-[#171716]'> 
            <div className='flex items-center justify-between border-b-1 h-7 pb-1 mx-1'> 
              <h3 className='text-[12px] font-bold relative top-0 ml-1'>Social Media</h3>  
              <h4 className="text-[12px] font-bold relative top-0 mr-1">Contact</h4>
            </div>

            <div className='w-full h-30 flex gap-2 mt-6'> 
                <div className=' w-1/2 bg- rounded-lg flex items-center justify-center hover:scale-150 transition-all'> 
                <a href="https://github.com/Naufil-29">
                  <img className="bg-white w-20 rounded-xl border-1" src={Github} alt="Github"/>
                </a>
                </div>
              <div className=' w-1/2 bg-  rounded-lg g flex items-center justify-center hover:scale-150 transition-all'> 
                <a href="https://x.com/Naufil_Codes_29">
                 <img className="bg-white w-20 rounded-xl border-1" src={X} alt="TwitterX"/>
                </a>
              </div>
            </div>
            <div className='w-full h-30 flex gap-2 mt-2'> 
              <div className=' w-1/2 bg-  rounded-lg flex items-center justify-center hover:scale-150 transition-all'>
                <a href="https://www.linkedin.com/in/naufil-kathiyara-981353360/"> 
                 <img className="bg-white w-20 rounded-xl border-1" src={linkedin} alt="LinkedIN"/>
                </a>
              </div>
              <div className=' w-1/2 bg- rounded-lg flex items-center justify-center '> 
                <a href="mailto:dev.naufil@gmail.com">
                 <img className="bg-white w-20 rounded-xl hover:scale-150 transition-all" src={gmail} alt="Email"/>
                 </a>
              </div>
            </div>
        </div>
        <div className='Social-media-handles-2 w-1/2 h-85 rounded-2xl p-2 bg-[#171716] border-[#171716]'> 
              <div className='inline-flex items-center justify-between border-b-1 h-7 pb-1 mx-2'> 
                <h3 className='text-[12px] font-bold relative top-0 ml-1'>Social Media</h3>  
                <h4 className="text-[12px] font-bold relative top-0 mr-1">Contact</h4>
              </div> 
              <div className='flex flex-col gap-2'> 
                <div className='h-15 w-full bg-red-500 rounded-lg'></div>
                <div className='h-15 w-full bg-black rounded-lg'></div>
                <div className='h-15 w-full bg-red-500 rounded-lg'></div>
                <div className='h-15 w-full bg-black rounded-lg'></div>
              </div>
        </div>
       </div>
        <div className='Div-4 w-full h-85 mt-95'>
          <div className='Tech&tools w-full h-85 rounded-2xl p-2 bg-[#171716] border-[#171716]'> 
              <div className='inline-flex items-center justify-between border-b-1 h-7 pb-1 mx-2'> 
                <h3 className='text-[12px] font-bold relative top-0 ml-1'>Technologies</h3>  
                <h4 className="text-[12px] font-bold relative top-0 mr-1">Tools</h4>
              </div>
              <div className='grid gap-2'>
                  <div className='h-15 flex gap-2 w-full rounded-lg p-1'> 
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                  </div>
                  <div className='h-15 flex gap-2 w-full rounded-lg p-1'> 
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                  </div>
                  <div className='h-15 flex gap-2 w-full rounded-lg p-1'> 
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                  </div>
                  <div className='h-15 flex gap-2 w-full rounded-lg p-1'> 
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                    <div className='w-1/4 h-15 bg-black rounded-lg'></div>
                  </div>

            </div> 
          </div>
         </div>
     </div>
  </div>   
       <div className='Contact&Info bg-[#2a2a29] h-200 m- rounded-2xl '></div>
</div> 
  )
}

export default App;
