'use client';
import React from 'react';

export default function PlotCard({ plot }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 group flex flex-col justify-between">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            {plot.zone || 'Land Parcel'}
          </span>
          <span className="text-sm text-slate-400 font-medium">{plot.area}</span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
            {plot.title}
          </h3>
          <p className="text-slate-400 text-sm mt-1">{plot.location}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
          <div><span className="text-slate-500">FSI:</span> {plot.fsi_basic} Basic</div>
          <div><span className="text-slate-500">Premium:</span> {plot.fsi_premium}</div>
        </div>

        {plot.highlights && plot.highlights.length > 0 && (
          <ul className="space-y-1.5 text-xs text-slate-300">
            {plot.highlights.map((h, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-amber-400">✓</span> {h}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-400 block">Rate</span>
          <span className="text-lg font-bold text-amber-400">{plot.rate}</span>
        </div>
        <a
          href="#contact"
          className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold text-white transition duration-200"
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
}
