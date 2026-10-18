import React from 'react';
import { Home, HelpCircle, School, User } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

export type DockTab = 'home' | 'help' | 'centre' | 'profile';

interface BottomDockProps {
  activeTab: DockTab;
  onTabChange: (tab: DockTab) => void;
  lang: Language;
}

export const BottomDock: React.FC<BottomDockProps> = ({
  activeTab,
  onTabChange,
  lang
}) => {
  const t = translations[lang];

  const items: { id: DockTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: t.home, icon: Home },
    { id: 'help', label: t.help, icon: HelpCircle },
    { id: 'centre', label: t.centreDetails, icon: School },
    { id: 'profile', label: t.profile, icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 max-w-[420px] mx-auto bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 shadow-lg">
      <div className="grid grid-cols-4 items-center">
        {items.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center py-1 transition-all rounded-xl ${
                isActive
                  ? 'text-[#15803D]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div
                className={`w-10 h-7 flex items-center justify-center rounded-full transition-colors ${
                  isActive ? 'bg-[#EAF7EE]' : 'bg-transparent'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
              </div>
              <span
                className={`text-[11px] mt-0.5 tracking-tight font-medium ${
                  isActive ? 'font-bold text-[#15803D]' : 'text-slate-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
