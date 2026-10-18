import React, { useState } from 'react';
import { Globe, Bell, MapPin, ChevronDown, LogOut } from 'lucide-react';
import { PoshanSetuLogo } from '../components/PoshanSetuLogo';
import {
  StockReceivedIllustration,
  StockUsageIllustration,
  BalanceRemainingIllustration,
  SetuShareIllustration,
  DailyFoodMenuIllustration,
  StudentAttendanceIllustration,
  MealPhotoIllustration,
  SmartRationIllustration,
  DownloadReportIllustration
} from '../components/GridCardIllustrations';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  isOnline: boolean;
  onToggleOnline: () => void;
  onOpenNotifications: () => void;
  unreadCount: number;
  onLogout?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  lang,
  onLanguageChange,
  isOnline,
  onToggleOnline,
  onOpenNotifications,
  unreadCount,
  onLogout
}) => {
  const t = translations[lang];
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const gridCards = [
    {
      id: 'stock-received',
      title: t.stockReceived,
      illustration: StockReceivedIllustration,
      bg: 'bg-[#F0FDF4]',
      border: 'border-emerald-100/70',
      screen: 'stock-received'
    },
    {
      id: 'stock-usage',
      title: t.stockUsage,
      illustration: StockUsageIllustration,
      bg: 'bg-[#FFF7ED]',
      border: 'border-orange-100/70',
      screen: 'stock-usage'
    },
    {
      id: 'balance-remaining',
      title: t.balanceRemaining,
      illustration: BalanceRemainingIllustration,
      bg: 'bg-[#F0FDF4]',
      border: 'border-emerald-100/70',
      screen: 'balance-remaining'
    },
    {
      id: 'setu-share',
      title: t.setuShareExchange,
      illustration: SetuShareIllustration,
      bg: 'bg-[#F0FDF4]',
      border: 'border-emerald-100/70',
      screen: 'setu-share'
    },
    {
      id: 'food-menu',
      title: t.dailyFoodMenu,
      illustration: DailyFoodMenuIllustration,
      bg: 'bg-[#FFF7ED]',
      border: 'border-orange-100/70',
      screen: 'food-menu'
    },
    {
      id: 'student-attendance',
      title: t.studentAttendance,
      illustration: StudentAttendanceIllustration,
      bg: 'bg-[#F0FDF4]',
      border: 'border-emerald-100/70',
      screen: 'student-attendance'
    },
    {
      id: 'meal-photo',
      title: t.mealPhotoUpload,
      illustration: MealPhotoIllustration,
      bg: 'bg-[#FFF7ED]',
      border: 'border-orange-100/70',
      screen: 'meal-photo'
    },
    {
      id: 'smart-ration',
      title: t.smartRation,
      illustration: SmartRationIllustration,
      bg: 'bg-[#F0FDF4]',
      border: 'border-emerald-100/70',
      screen: 'smart-ration'
    },
    {
      id: 'download-report',
      title: t.downloadReport,
      illustration: DownloadReportIllustration,
      bg: 'bg-[#FFF7ED]',
      border: 'border-orange-100/70',
      screen: 'download-report'
    }
  ];

  return (
    <div className="px-4 pt-1 pb-6 space-y-4">
      {/* Profile Card Header (Matching poshan_setu_homepage_v2.jpg) */}
      <div className="bg-[#EAF7EE] border border-emerald-200/60 rounded-2xl p-3 flex items-center justify-between shadow-xs">
        {/* Worker Avatar & Info */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white border-2 border-emerald-300 shadow-xs shrink-0 flex items-center justify-center">
            {/* Indian Woman Worker Profile Avatar */}
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
              <rect width="48" height="48" fill="#FCE7F3" />
              {/* Saree & Blouse */}
              <path d="M12 48C12 38 18 32 24 32C30 32 36 38 36 48H12Z" fill="#BE185D" />
              <path d="M18 33L26 48H20L14 36Z" fill="#F43F5E" />
              {/* Face */}
              <circle cx="24" cy="20" r="10" fill="#FDE047" />
              <circle cx="21" cy="19" r="1.3" fill="#1E293B" />
              <circle cx="27" cy="19" r="1.3" fill="#1E293B" />
              {/* Bindi */}
              <circle cx="24" cy="16" r="1" fill="#DC2626" />
              {/* Smile */}
              <path d="M21 23C22 25 26 25 27 23" stroke="#92400E" strokeWidth="1.2" strokeLinecap="round" />
              {/* Hair */}
              <path d="M14 18C14 12 18 8 24 8C30 8 34 12 34 18C34 19 32 21 32 21C30 14 26 13 24 13C22 13 18 14 16 21C16 21 14 19 14 18Z" fill="#1E293B" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-slate-900 text-sm tracking-tight leading-snug">
              {t.workerName}
            </h2>
            <p className="text-[11px] text-slate-600 font-medium">
              {t.workerRole}
            </p>
          </div>
        </div>

        {/* Location & Online Status Pill */}
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-emerald-700 fill-emerald-100" />
            <span>{t.centreName}</span>
            <span className="text-[10px] text-slate-500 font-medium">({lang === 'en' ? 'Anand' : 'આણંદ'})</span>
          </div>

          {/* Online/Offline Toggle Button */}
          <button
            onClick={onToggleOnline}
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-2xs ${
              isOnline
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                : 'bg-amber-100 text-amber-900 border border-amber-300'
            }`}
            title="Click to toggle online/offline simulation"
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isOnline ? 'bg-emerald-600 animate-pulse' : 'bg-amber-500'
              }`}
            />
            <span>{isOnline ? t.online : t.offline}</span>
          </button>
        </div>
      </div>

      {/* Brand Bar & Controls (Matching poshan_setu_homepage_v2.jpg) */}
      <div className="flex items-center justify-between pt-1">
        {/* Brand Logo & Wordmark */}
        <div className="flex items-center gap-2">
          <PoshanSetuLogo size="sm" />
        </div>

        {/* Right Action Icons: Language Dropdown & Notification Bell */}
        <div className="flex items-center gap-2">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-slate-600" />
              <span>{lang === 'en' ? 'English' : 'ગુજરાતી'}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-white rounded-xl shadow-lg border border-slate-200 py-1 z-30 animate-in fade-in zoom-in-95">
                <button
                  onClick={() => {
                    onLanguageChange('en');
                    setLangMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between ${
                    lang === 'en' ? 'text-emerald-700 font-bold bg-emerald-50' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  English {lang === 'en' && '✓'}
                </button>
                <button
                  onClick={() => {
                    onLanguageChange('gu');
                    setLangMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between ${
                    lang === 'gu' ? 'text-emerald-700 font-bold bg-emerald-50' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  ગુજરાતી {lang === 'gu' && '✓'}
                </button>
              </div>
            )}
          </div>

          {/* Notification Bell with Urgent Supervision Alert Indicator */}
          <button
            onClick={onOpenNotifications}
            className="w-9 h-9 rounded-full bg-white border border-rose-200 hover:border-red-400 flex items-center justify-center text-slate-700 hover:bg-rose-50 transition-colors relative shadow-2xs group"
            title={lang === 'en' ? 'Supervision Alert: Inspection is Coming!' : 'સુપરવિઝન એલર્ટ: મુલાકાત આવી રહી છે!'}
            aria-label="Supervision Alert"
          >
            <Bell className="w-4 h-4 text-rose-600 animate-wiggle" />
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600 text-[8px] font-black text-white items-center justify-center ring-2 ring-white">
                !
              </span>
            </span>
          </button>

          {/* Quick Logout Button */}
          {onLogout && (
            <button
              onClick={() => {
                if (window.confirm(lang === 'en' ? 'Log out of PoshanSetu?' : 'શું તમે લોગ આઉટ કરવા માંગો છો?')) {
                  onLogout();
                }
              }}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:bg-rose-50 hover:border-rose-300 text-slate-500 hover:text-rose-600 flex items-center justify-center transition-colors shadow-2xs"
              title={lang === 'en' ? 'Log Out' : 'લોગ આઉટ'}
              aria-label="Log Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 3x3 Illustrated Grid (Matching poshan_setu_homepage_v2.jpg) */}
      <div className="grid grid-cols-3 gap-3 pt-1">
        {gridCards.map((card) => {
          const Illustration = card.illustration;
          return (
            <button
              key={card.id}
              onClick={() => onNavigate(card.screen)}
              className={`${card.bg} ${card.border} border rounded-2xl p-2.5 flex flex-col items-center justify-between text-center transition-all duration-200 active:scale-[0.97] hover:shadow-md shadow-xs aspect-[4/4.8] cursor-pointer group`}
            >
              {/* Illustration Area */}
              <div className="w-full flex-1 flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
                <Illustration className="w-full h-20 max-h-24" />
              </div>

              {/* Title with Balanced Wrap */}
              <div className="w-full mt-1.5 min-h-[32px] flex items-center justify-center">
                <span className="text-[11.5px] font-bold text-slate-900 leading-tight tracking-tight whitespace-pre-line">
                  {card.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
