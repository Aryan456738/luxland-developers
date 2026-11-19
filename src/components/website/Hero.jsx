'use client';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-amber-400 text-sm font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Plot The Link • Premium Coastal & Gaothan Plots
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Discover Your Dream Home <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400">
            With Lux Land Developers
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed">
          Find the perfect property for your lifestyle. High-return land parcels, sea-touch coastal plots, and prime Alibaug real estate backed by clear titles.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#properties"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold hover:shadow-lg hover:shadow-amber-500/20 transition duration-300 transform hover:-translate-y-0.5"
          >
            Explore Properties
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-white font-semibold hover:bg-white/10 transition duration-300"
          >
            Schedule Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
