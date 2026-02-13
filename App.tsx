
import React, { useEffect, useState } from 'react';
import AuthForm from './components/AuthForm';
import AnnouncementTicker from './components/AnnouncementTicker';
import ClubGrid from './components/ClubGrid';
import Logo from './components/Logo';
import { SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center font-sans bg-slate-50">
      {/* 
          Professional Gradient Background 
          - Primary soft sky/indigo gradient
          - Subtle mesh accents for a premium feel
      */}
      
      {/* Base Gradient Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-50 via-white to-sky-50"></div>

      {/* Animated Mesh Blooms */}
      <div className="absolute -top-20 -left-20 w-[60%] h-[60%] bg-indigo-200/30 rounded-full blur-[140px] animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[50%] h-[50%] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Upper Right One-Liner Tag - Professional Institutional Slogan */}
      <div className="absolute top-8 right-8 z-20 hidden md:block">
        <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-2xl border border-indigo-100 rounded-full shadow-xl shadow-indigo-100/20 group hover:scale-105 transition-all duration-500 cursor-default">
           <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse"></div>
           <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.25em]">
             Pioneering <span className="text-indigo-600">Excellence</span> in Professional Education Since 1994
           </span>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="relative z-10 w-full max-w-[1400px] px-6 py-10 flex flex-col gap-10 lg:gap-12">
        
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-7 group">
            <div className="w-24 h-28 bg-white rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-all duration-700 border border-white relative overflow-hidden">
              <Logo className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent pointer-events-none"></div>
            </div>

            <div className="text-left">
              <div className="flex flex-col">
                <h1 className="text-slate-900 text-6xl lg:text-7xl font-black tracking-tighter leading-none">
                  INDIRA
                </h1>
                <h2 className="text-sky-600 text-xl lg:text-2xl font-extrabold tracking-[0.4em] mt-2">
                  UNIVERSITY
                </h2>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span className="h-[2px] w-12 bg-slate-300 rounded-full"></span>
                <p className="text-slate-400 text-[11px] font-bold tracking-[0.5em] uppercase">
                  Believe | Prepare | Achieve
                </p>
                <span className="h-[2px] w-12 bg-slate-300 rounded-full"></span>
              </div>
            </div>
          </div>
          
          {/* Quick Support / Admission Badge */}
          <div className="hidden lg:flex bg-indigo-600 text-white px-8 py-4 rounded-[2rem] shadow-lg shadow-indigo-200 items-center gap-6 hover:-translate-y-1 transition-all group">
             <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                <i className="fa-solid fa-graduation-cap text-white text-lg"></i>
             </div>
             <div className="flex flex-col">
               <span className="text-[10px] text-indigo-100 font-black uppercase tracking-[0.2em] mb-0.5">Academic Intake</span>
               <p className="text-white font-black leading-tight text-sm tracking-widest">
                 ADMISSIONS 2026-27 OPEN
               </p>
             </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          
          {/* Left Column: Updates & Hubs */}
          <div className="w-full lg:w-[40%] flex flex-col gap-10">
            <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] border border-white transition-all duration-700 flex flex-col flex-grow">
              <div className="bg-slate-900 px-10 py-7 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 bg-sky-400 rounded-full animate-pulse"></div>
                  <h3 className="text-white text-sm font-black uppercase tracking-[0.35em]">Live Updates</h3>
                </div>
                <i className="fa-solid fa-bell text-slate-500 text-sm"></i>
              </div>
              <div className="p-8 flex-grow">
                <AnnouncementTicker />
              </div>
              
              <div className="p-10 bg-white/40 border-t border-slate-100">
                 <div className="flex justify-between items-center mb-8">
                    <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.35em]">Student Communities</h4>
                    <button className="text-[10px] font-black text-indigo-600 hover:text-indigo-800 flex items-center gap-2 transition-all hover:translate-x-1">
                      VIEW ALL <i className="fa-solid fa-arrow-right-long text-[9px]"></i>
                    </button>
                 </div>
                 <ClubGrid />
              </div>
            </div>
          </div>

          {/* Right Column: Portal Login */}
          <div className="w-full lg:w-[60%]">
            <div className="bg-white rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-slate-200/60 overflow-hidden h-full flex flex-col md:flex-row">
               
               {/* Aesthetic Branding Sidebar */}
               <div className="hidden md:flex w-[38%] bg-gradient-to-b from-slate-50 to-indigo-50 flex-col justify-center p-14 items-center text-center border-r border-slate-100 relative group">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                       style={{ backgroundImage: 'radial-gradient(#4f46e5 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center mb-10 text-white shadow-xl mx-auto transform hover:rotate-6 transition-transform">
                       <i className="fa-solid fa-lock text-3xl"></i>
                    </div>
                    <h4 className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Secured Login</h4>
                    <h3 className="text-slate-900 font-black text-4xl leading-tight mb-8 tracking-tighter">
                      Global <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">Campus.</span>
                    </h3>
                    <div className="w-12 h-1 bg-indigo-200 rounded-full mx-auto mb-8"></div>
                    <p className="text-slate-400 text-[10px] font-bold leading-relaxed uppercase tracking-[0.2em] px-4">
                      Excellence is not an act, but a habit.
                    </p>
                  </div>
               </div>

               {/* Interaction Form Area */}
               <div className="flex-grow p-12 md:p-20 flex flex-col justify-center bg-white">
                  <div className="mb-12">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-indigo-50 rounded-full mb-6 border border-indigo-100/50">
                       <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                       <span className="text-[10px] font-black text-indigo-700 uppercase tracking-widest">Portal Authentication</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4 leading-tight">Welcome Back.</h2>
                    <p className="text-slate-400 text-sm font-semibold">Enter your credentials to access your academic dashboard</p>
                  </div>
                  <AuthForm />
               </div>
            </div>
          </div>
        </div>

        {/* Dynamic Footer with Colorful Socials & Enquiry */}
        <div className="flex flex-wrap items-center justify-between gap-8 py-8 px-12 bg-white/60 backdrop-blur-2xl rounded-[2.5rem] border border-white shadow-xl shadow-slate-200/50 mb-10">
           
           {/* Colorful Social Media Logos */}
           <div className="flex flex-col gap-4">
              <span className="text-slate-500 text-[9px] font-black uppercase tracking-[0.4em] ml-1">Official Networks</span>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url}
                    target="_blank"
                    className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 hover:shadow-lg ${link.color} text-white shadow-md relative overflow-hidden group`}
                    title={link.name}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <i className={`fa-brands ${link.icon} text-xl relative z-10`}></i>
                  </a>
                ))}
              </div>
           </div>

           {/* Enquiry Number & Main Call to Action */}
           <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-5 bg-slate-900 text-white px-8 py-5 rounded-[2rem] shadow-xl group cursor-default">
                 <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-sky-500 transition-all duration-500">
                   <i className="fa-solid fa-phone-volume text-lg text-white"></i>
                 </div>
                 <div className="flex flex-col">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-0.5">Enquiry Hotline</p>
                    <p className="font-black text-xl tracking-tight text-white">+91 20 6675 9115</p>
                 </div>
              </div>
              
              <button className="bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white py-6 px-12 rounded-[2rem] text-xs font-black uppercase tracking-[0.3em] shadow-2xl shadow-sky-200 transform transition-all active:scale-95 flex items-center gap-5 group">
                 <span>Admission Open</span>
                 <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
              </button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default App;
