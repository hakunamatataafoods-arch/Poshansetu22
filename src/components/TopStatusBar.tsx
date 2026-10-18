import React, { useState, useEffect } from 'react';

export const TopStatusBar: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('10:38');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTimeStr(`${hours}:${minutes}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full px-5 pt-2 pb-1 flex items-center justify-between text-slate-800 text-[13px] font-semibold tracking-tight select-none z-50">
      {/* Time */}
      <span className="tabular-nums font-medium">{timeStr}</span>

      {/* System Telemetry Icons */}
      <div className="flex items-center gap-1.5 text-slate-700">
        {/* Small alarm clock */}
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v4l2 2" />
          <path d="M5 3L2 6" />
          <path d="M22 6l-3-3" />
        </svg>

        {/* VoLTE */}
        <span className="text-[10px] font-bold tracking-tighter leading-none bg-slate-200/80 px-1 py-0.5 rounded">
          VoLTE
        </span>

        {/* 4G */}
        <span className="text-[11px] font-bold tracking-tighter leading-none">
          4G
        </span>

        {/* Cellular Bars */}
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="16" width="3" height="6" rx="0.5" />
          <rect x="7" y="12" width="3" height="10" rx="0.5" />
          <rect x="12" y="8" width="3" height="14" rx="0.5" />
          <rect x="17" y="4" width="3" height="18" rx="0.5" />
        </svg>

        {/* Battery with percentage */}
        <div className="flex items-center gap-1 ml-0.5">
          <span className="text-[11px] font-bold tabular-nums">58%</span>
          <div className="w-5 h-2.5 border border-slate-700 rounded-xs p-0.5 flex items-center relative">
            <div className="h-full bg-slate-800 rounded-2xs w-[58%]" />
            <div className="w-0.5 h-1 bg-slate-700 absolute -right-1 top-0.5 rounded-r" />
          </div>
        </div>
      </div>
    </div>
  );
};
