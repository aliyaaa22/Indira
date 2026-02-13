
import React from 'react';
import { ANNOUNCEMENTS } from '../constants';

const AnnouncementTicker: React.FC = () => {
  return (
    <div className="h-[220px] overflow-hidden relative rounded-2xl">
      <div className="animate-scroll space-y-4">
        {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((ann, idx) => (
          <div key={`${ann.id}-${idx}`} className="p-4 bg-slate-50/50 border border-slate-100 rounded-2xl group cursor-pointer hover:border-amber-300 hover:bg-amber-50/20 hover:shadow-sm transition-all flex gap-4">
            <div className="flex-shrink-0 w-12 text-center flex flex-col justify-center border-r border-slate-200 pr-3">
               <span className="text-[10px] text-amber-600 font-black uppercase">{ann.date.split(' ')[0]}</span>
               <span className="text-xl text-slate-900 font-black leading-none">{ann.date.split(' ')[1]}</span>
            </div>
            <div className="flex-grow flex flex-col justify-center">
               <span className={`text-[8px] px-2 py-0.5 rounded-full uppercase font-black mb-1.5 inline-block w-fit ${
                 ann.type === 'alert' ? 'bg-red-100 text-red-600' : 
                 ann.type === 'event' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-600'
               }`}>
                 {ann.type}
               </span>
               <p className="text-slate-700 text-[13px] font-bold leading-snug group-hover:text-amber-700 transition-colors">
                 {ann.text}
               </p>
            </div>
          </div>
        ))}
      </div>
      {/* Refined Fade Gradients */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default AnnouncementTicker;
