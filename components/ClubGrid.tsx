
import React from 'react';
import { CLUBS } from '../constants';

const ClubGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {CLUBS.map((club) => (
        <div 
          key={club.name}
          className="group relative bg-white/80 p-4 rounded-2xl border border-slate-100 hover:border-indigo-400 hover:bg-white hover:shadow-xl transition-all cursor-pointer text-center flex flex-col items-center justify-center transform hover:-translate-y-2"
        >
          <div className={`${club.color} w-10 h-10 rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform group-hover:rotate-6`}>
            <i className={`fa-solid ${club.icon} text-white text-xs`}></i>
          </div>
          <h3 className="text-slate-800 font-black text-[10px] uppercase tracking-tighter whitespace-nowrap group-hover:text-indigo-600 transition-colors">
            {club.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ClubGrid;
