
import React, { useState } from 'react';

const AuthForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="w-full max-w-[400px]">
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="space-y-2">
          <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] ml-1">Username / PRN</label>
          <div className="relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors">
              <i className="fa-solid fa-user-tag"></i>
            </div>
            <input 
              required 
              type="text" 
              placeholder="Enter your PRN number" 
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-blue-50/50 border border-blue-100/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-[15px] font-semibold text-slate-800 placeholder:text-slate-300 shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em]">Password</label>
            <a href="#" className="text-[10px] font-black text-blue-600 hover:text-indigo-600 transition-colors uppercase tracking-widest">Forgot Access?</a>
          </div>
          <div className="relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors">
              <i className="fa-solid fa-key"></i>
            </div>
            <input 
              required 
              type="password" 
              placeholder="••••••••" 
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-blue-50/50 border border-blue-100/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-[15px] font-semibold text-slate-800 placeholder:text-slate-300 shadow-sm"
            />
          </div>
        </div>

        <button 
          disabled={loading}
          type="submit" 
          className="w-full py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:shadow-blue-300/50 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-500/20 transform transition-all active:scale-[0.97] disabled:opacity-50 flex items-center justify-center gap-4 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          {loading ? (
            <i className="fa-solid fa-spinner animate-spin text-xl"></i>
          ) : (
            <>
              <span>Access Dashboard</span>
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
            </>
          )}
        </button>
      </form>

      <div className="mt-12 text-center">
        <p className="text-[13px] font-bold text-slate-400">
          New student? <a href="#" className="text-blue-600 font-black hover:text-indigo-600 transition-colors ml-1 border-b-2 border-blue-100 hover:border-blue-500">Register Profile</a>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
