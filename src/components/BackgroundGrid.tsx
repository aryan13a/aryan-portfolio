"use client";

import React from "react";

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Linear Data Grid Mesh */}
      <div className="absolute inset-0 bg-grid-mesh opacity-80" />
      
      {/* Ambient Radial Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[52rem] h-[26rem] bg-gradient-to-b from-cyan-500/15 via-indigo-500/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      
      <div className="absolute top-1/3 -left-40 w-[30rem] h-[30rem] bg-cyan-600/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "10s" }} />
      
      <div className="absolute top-2/3 -right-40 w-[30rem] h-[30rem] bg-indigo-600/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Axis Crosshairs */}
      <div className="absolute top-20 left-10 text-[10px] font-mono text-cyan-500/20 hidden md:block">
        GRID_LOC [36.7, -119.4] • SYS_OK
      </div>
      <div className="absolute bottom-10 right-10 text-[10px] font-mono text-cyan-500/20 hidden md:block">
        ETL_STREAM :: LIVE • REFRESH 60s
      </div>
    </div>
  );
}
