import React, { useState, createContext, useContext } from 'react';
import {
  ArrowUpRight,
  ArrowDownRight,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  ArrowRight,
  Plus,
  Minus,
  MoreHorizontal,
  MoreVertical,
  Layers,
  Box,
  Cpu,
  Activity,
  Wallet,
  Settings,
  Bell,
  Search,
  Globe,
  LayoutDashboard,
  Home,
  Zap,
  Star,
  Radio,
  Sparkles,
  Moon,
  LogOut,
  Package,
  Code,
  File,
  FileText,
  Folder,
  Download,
  Upload,
  User,
  Users,
  UserPlus,
  Play,
  Pause,
  Volume2,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  XCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  Clock,
  Calendar,
  Link,
  Lock,
  Unlock,
  Heart,
  Bookmark,
  Share2,
  Tag,
  CreditCard,
  DollarSign,
  X,
  Menu,
  Check,
  Copy,
  Trash,
  Edit,
  Command,
  Twitter,
  Github,
  Linkedin,
} from 'lucide-react';

/**
 * VANGUARD DESIGN SYSTEM - UIKit
 * Enhanced with Glassmorphism + Neuromorphism + Liquid Glass
 */

const theme = {
  radius: {
    base: "rounded-2xl",
    large: "rounded-[2rem]",
    xlarge: "rounded-[2.5rem]",
    card: "rounded-[2rem]",
    full: "rounded-full"
  },
  // Enhanced glass with liquid refraction
  glass: "bg-white/5 backdrop-blur-xl border border-white/10",
  liquidGlass: "bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-2xl border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
  neuromorphic: "bg-[#0a0a0b] shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.03)] border border-white/5",
  liquidSurface: "bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
  animation: {
    fast: "transition-all duration-300 ease-out",
    slow: "transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)",
    slower: "transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1)",
    liquid: "transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
  colors: {
    primary: "bg-blue-600",
    accent: "text-blue-400"
  },
  // Liquid gradient animations
  liquidGradient: "bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-white/10",
  holographic: "bg-gradient-to-br from-blue-400/10 via-white/5 to-white/[0.02]",
};

// ==================== BUTTONS ====================

export const VanguardButton = ({
  children,
  icon: Icon,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const variants = {
    // Liquid glass primary with refraction
    primary: "bg-gradient-to-br from-white via-white/90 to-white/80 text-black hover:shadow-[0_0_50px_rgba(255,255,255,0.3),inset_0_1px_2px_rgba(255,255,255,0.5)] border border-white/30",
    // Neuromorphic accent with depth
    accent: "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_8px_24px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:translate-y-[-2px]",
    // Multi-layer glass with liquid refraction
    glass: "bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-gradient-to-br hover:from-white/15 hover:via-white/8 hover:to-white/[0.03] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]",
    // Subtle ghost with liquid highlight
    ghost: "bg-transparent text-white/60 hover:text-white hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-[9px]",
    md: "px-6 py-3.5 text-[10px]",
    lg: "px-8 py-4 text-xs"
  };

  return (
    <button
      className={`group relative ${theme.radius.base} font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 ${theme.animation.slow} active:scale-95 ${variants[variant]} ${sizes[size]} ${className} overflow-hidden`}
      {...props}
    >
      {/* Liquid shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      <span className="relative z-10">{children}</span>
      {Icon && <Icon size={14} className="group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" />}
    </button>
  );
};

export const IconButton = ({
  icon: Icon,
  variant = "glass",
  size = "md",
  className = "",
  ...props
}) => {
  const variants = {
    // Liquid glass with refraction
    glass: "bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-xl border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-gradient-to-br hover:from-white/15 hover:via-white/8 hover:to-white/[0.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]",
    // Neuromorphic primary
    primary: "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_4px_12px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)]",
    // Minimal ghost
    ghost: "bg-transparent hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
  };

  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  return (
    <button
      className={`${theme.radius.base} flex items-center justify-center ${theme.animation.liquid} ${variants[variant]} ${sizes[size]} ${className} overflow-hidden`}
      {...props}
    >
      {/* Liquid highlight ring */}
      <div className="absolute inset-0 rounded-[inherit] border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <Icon size={18} className="relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
    </button>
  );
};

// ==================== CARDS ====================

export const VanguardCard = ({
  children,
  title,
  description,
  icon: Icon,
  tag,
  hoverable = true,
  glass = true,
  className = "",
  delay = "0",
  ...props
}) => {
  return (
    <div
      className={`group relative p-[1px] ${theme.radius.xlarge} overflow-hidden ${hoverable ? 'animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms`, ...props.style }}
    >
      {/* Liquid gradient border animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/30 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-[spin_8s_linear_infinite_reverse]" style={{ margin: '-100%' }} />
      
      {/* Holographic shine */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className={`relative z-10 h-full w-full bg-[#0a0a0b] ${glass ? theme.liquidGlass : theme.neuromorphic} p-8 md:p-10 ${theme.radius.xlarge} flex flex-col justify-between`}>
        {(title || Icon || tag) && (
          <div>
            <div className="flex justify-between items-start mb-8">
              {Icon && (
                <div className={`p-4 ${theme.liquidSurface} rounded-2xl text-blue-400 group-hover:scale-110 group-hover:rotate-3 ${theme.animation.liquid} shadow-[0_4px_16px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]`}>
                  <Icon size={24} />
                </div>
              )}
              {tag && (
                <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 text-blue-300 border border-blue-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md">
                  {tag}
                </span>
              )}
            </div>
            {title && (
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{title}</h3>
            )}
            {description && (
              <p className="text-white/40 leading-relaxed text-sm font-medium">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export const StatCard = ({
  title,
  value,
  change,
  trend = "up",
  icon: Icon,
  className = ""
}) => (
  <div className={`${theme.liquidSurface} ${theme.radius.card} p-6 group hover:bg-gradient-to-br hover:from-white/[0.1] hover:via-white/[0.05] hover:to-white/[0.02] ${theme.animation.slow} ${className}`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 ${theme.holographic} text-blue-400 rounded-xl group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white ${theme.animation.liquid} shadow-[0_4px_12px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]`}>
        {Icon && <Icon size={20} />}
      </div>
      <div className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${trend === 'up' ? 'bg-gradient-to-br from-blue-500/20 to-blue-500/10 text-blue-300 border border-blue-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' : 'bg-gradient-to-br from-white/10 to-white/5 text-white/70 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'}`}>
        {trend === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
        {change}
      </div>
    </div>
    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{title}</p>
    <h3 className="text-3xl font-bold tracking-tighter group-hover:translate-x-1 transition-transform bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{value}</h3>
  </div>
);

// ==================== BADGES & TAGS ====================

export const StatusBadge = ({ children, variant = "blue" }) => {
  const variantColors = {
    blue: { bg: 'from-blue-500/20 to-blue-500/10', text: 'text-blue-300', border: 'border-blue-400/30', glow: 'rgba(59,130,246,0.5)', color: '#3b82f6' }
  };

  const colors = variantColors[variant];

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.liquidSurface} backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`}>
      <div className={`w-1.5 h-1.5 rounded-full bg-${variant}-500 animate-pulse shadow-[0_0_12px_${colors.glow}]`} style={{
        backgroundColor: colors.color,
        boxShadow: `0 0 12px ${colors.glow}, 0 0 24px ${colors.glow}40`
      }} />
      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/70">{children}</span>
    </div>
  );
};

export const Badge = ({ children, variant = "default", size = "md", className = "" }) => {
  const variants = {
    default: "bg-white/5 text-white/60 border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
    blue: "bg-gradient-to-br from-blue-500/20 to-blue-500/10 text-blue-300 border-blue-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[8px]",
    md: "px-3 py-1 text-[9px]",
    lg: "px-4 py-1.5 text-[10px]"
  };

  return (
    <span className={`font-black uppercase tracking-widest rounded-full border backdrop-blur-md ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

// ==================== FORM ELEMENTS ====================

export const Input = ({
  icon: Icon,
  placeholder,
  className = "",
  ...props
}) => (
  <div className={`flex items-center gap-3 px-5 py-3 ${theme.liquidSurface} rounded-2xl focus-within:border-blue-400/50 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] ${theme.animation.slow} ${className}`}>
    {Icon && <Icon size={16} className="text-white/30" />}
    <input
      type="text"
      placeholder={placeholder}
      className="bg-transparent border-none outline-none text-xs font-bold w-full placeholder:text-white/20"
      {...props}
    />
    <Command size={14} className="text-white/20" />
  </div>
);

export const SearchInput = ({ placeholder = "Search...", className = "" }) => (
  <div className={`flex items-center gap-3 px-5 py-3 ${theme.liquidSurface} rounded-2xl focus-within:border-blue-400/50 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2)] ${theme.animation.slow} ${className}`}>
    <Search size={16} className="text-white/30" />
    <input
      type="text"
      placeholder={placeholder}
      className="bg-transparent border-none outline-none text-xs font-bold w-full md:w-48 placeholder:text-white/20"
    />
    <Command size={14} className="text-white/20" />
  </div>
);

export const Textarea = ({ placeholder, rows = 3, className = "", ...props }) => (
  <div className={`${theme.liquidSurface} rounded-2xl p-4 focus-within:border-blue-400/50 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2)] ${theme.animation.slow} ${className}`}>
    <textarea
      placeholder={placeholder}
      rows={rows}
      className="w-full bg-transparent border-none outline-none text-xs font-bold placeholder:text-white/20 resize-none"
      {...props}
    />
  </div>
);

export const Select = ({ options, value, onChange, placeholder = "Select...", className = "" }) => (
  <div className={`relative ${theme.liquidSurface} rounded-2xl ${className}`}>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full appearance-none bg-transparent border-none outline-none px-5 py-3 text-xs font-bold text-white cursor-pointer"
    >
      <option value="" className="bg-[#0a0a0b]">{placeholder}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value} className="bg-[#0a0a0b]">{opt.label}</option>
      ))}
    </select>
    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
  </div>
);

export const Toggle = ({ checked, onChange, label, className = "" }) => (
  <label className={`flex items-center justify-between cursor-pointer group ${className}`}>
    <span className="text-xs font-bold text-white/70">{label}</span>
    <div className={`relative w-12 h-6 ${theme.radius.full} ${checked ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_12px_rgba(59,130,246,0.4)]' : theme.neuromorphic} transition-all duration-300`}>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <div className={`absolute top-1 left-1 w-4 h-4 ${theme.radius.full} bg-white shadow-md transition-all duration-300 ${checked ? 'translate-x-6' : ''}`} />
    </div>
  </label>
);

export const Switch = ({ checked, onChange, label, className = "" }) => (
  <label className={`flex items-center gap-3 cursor-pointer group ${className}`}>
    <div className={`relative w-10 h-5 ${theme.radius.full} ${checked ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_12px_rgba(59,130,246,0.4)]' : theme.neuromorphic} transition-all duration-300`}>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <div className={`absolute top-0.5 left-0.5 w-4 h-4 ${theme.radius.full} bg-gradient-to-br from-white to-white/90 shadow-lg transition-all duration-300 ${checked ? 'translate-x-5' : ''}`} />
    </div>
    <span className="text-xs font-bold text-white/70">{label}</span>
  </label>
);

export const Checkbox = ({ checked, onChange, label, className = "" }) => (
  <label className={`flex items-center gap-3 cursor-pointer group ${className}`}>
    <div className={`relative w-5 h-5 ${theme.radius.base} ${checked ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.4)]' : theme.neuromorphic} flex items-center justify-center transition-all duration-300`}>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {checked && <Check size={12} className="text-white" />}
    </div>
    <span className="text-xs font-bold text-white/70">{label}</span>
  </label>
);

export const RadioGroup = ({ options, value, onChange, className = "" }) => (
  <div className={`space-y-3 ${className}`}>
    {options.map((opt, idx) => (
      <label key={idx} className="flex items-center gap-3 cursor-pointer group">
        <div className={`relative w-4 h-4 rounded-full ${value === opt.value ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.4)]' : theme.neuromorphic} flex items-center justify-center transition-all duration-300`}>
          <input type="radio" className="sr-only" name="radio" value={opt.value} checked={value === opt.value} onChange={(e) => onChange(e.target.value)} />
          {value === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
        </div>
        <span className="text-xs font-bold text-white/70">{opt.label}</span>
      </label>
    ))}
  </div>
);

export const Slider = ({ value, onChange, min = 0, max = 100, className = "" }) => (
  <div className={`relative w-full h-2 ${theme.radius.full} ${theme.neuromorphic} ${className}`}>
    <div 
      className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-[0_2px_12px_rgba(59,130,246,0.4)]"
      style={{ width: `${((value - min) / (max - min)) * 100}%` }}
    />
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
    />
    <div 
      className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 ${theme.radius.full} bg-gradient-to-br from-white to-white/90 shadow-lg pointer-events-none transition-all duration-100`}
      style={{ left: `calc(${((value - min) / (max - min)) * 100}% - 10px)` }}
    />
  </div>
);

// ==================== NAVIGATION ====================

export const SidebarItem = ({ icon: Icon, label, active = false, className = "" }) => (
  <button className={`w-full flex items-center gap-4 px-4 py-3 ${theme.radius.base} transition-all ${active ? 'bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] text-white shadow-[0_4px_16px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/10' : 'text-white/40 hover:text-white/60 hover:bg-white/5'} ${className}`}>
    {Icon && <Icon size={18} />}
    <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
  </button>
);

export const NavTab = ({ children, active = false, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 ${theme.radius.base} text-[9px] font-black uppercase tracking-widest transition-all ${active ? 'bg-gradient-to-br from-white via-white/90 to-white/80 text-black shadow-[0_4px_16px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.5)]' : 'text-white/40 hover:text-white/60 hover:bg-white/5'} ${className}`}
  >
    {children}
  </button>
);

// ==================== LISTS & TABLES ====================

export const ProjectRow = ({ name, status, progress, category, className = "" }) => (
  <div className={`flex items-center justify-between p-4 ${theme.radius.base} hover:${theme.liquidSurface} transition-all border border-transparent hover:border-white/5 group ${className}`}>
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 ${theme.radius.base} ${theme.liquidSurface} flex items-center justify-center border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`}>
        <Layers size={18} className="text-blue-400" />
      </div>
      <div>
        <p className="text-sm font-bold tracking-tight">{name}</p>
        <p className="text-[10px] font-black uppercase tracking-widest text-white/30">{category}</p>
      </div>
    </div>
    <div className="flex items-center gap-8">
      <div className="hidden md:block">
        <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full group-hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-all duration-700" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${status === 'Active' || status === 'active' ? 'border-blue-400/30 text-blue-300 bg-gradient-to-br from-blue-500/20 to-blue-500/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' : 'border-white/10 text-white/40'}`}>
        {status}
      </span>
      <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <MoreHorizontal size={16} />
      </button>
    </div>
  </div>
);

export const AlertItem = ({ title, time, color = "blue", className = "" }) => (
  <div className={`p-4 ${theme.radius.base} ${theme.neuromorphic} flex justify-between items-center group cursor-pointer hover:bg-gradient-to-br hover:from-white/[0.06] hover:via-white/[0.03] hover:to-transparent transition-all ${className}`}>
    <div className="flex items-center gap-3">
      <div
        className="w-1.5 h-1.5 rounded-full"
        style={{
          backgroundColor: '#3b82f6',
          boxShadow: '0 0 10px rgba(59,130,246,0.5)'
        }}
      />
      <p className="text-xs font-bold tracking-tight">{title}</p>
    </div>
    <span className="text-[9px] font-black text-white/20 uppercase">{time}</span>
  </div>
);

// ==================== LAYOUT COMPONENTS ====================

export const WorkspaceSelector = ({ name = "Vanguard HQ", plan = "Workspace Pro", icon: Icon = Box, className = "" }) => (
  <div className={`flex items-center justify-between p-3 ${theme.liquidSurface} rounded-2xl border border-white/10 hover:border-blue-400/30 transition-colors cursor-pointer group ${className}`}>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white shadow-[0_4px_12px_rgba(59,130,246,0.4)]">
        <Icon size={16} />
      </div>
      <div>
        <p className="text-[11px] font-black uppercase tracking-tighter">{name}</p>
        <p className="text-[9px] text-white/30 font-bold">{plan}</p>
      </div>
    </div>
    <ChevronRight size={14} className="text-white/20 group-hover:text-white transition-colors" />
  </div>
);

export const Avatar = ({ src, alt = "Avatar", size = "md", className = "" }) => {
  const sizes = {
    sm: "w-8 h-8 rounded-lg",
    md: "w-10 h-10 rounded-xl",
    lg: "w-12 h-12 rounded-2xl"
  };

  return (
    <div className={`${theme.radius.base} bg-gradient-to-tr from-blue-500 to-blue-400 p-[2px] cursor-pointer hover:rotate-6 ${theme.animation.liquid} shadow-[0_4px_16px_rgba(59,130,246,0.3)] ${sizes[size]} ${className}`}>
      <div className={`w-full h-full ${theme.radius.base} bg-black flex items-center justify-center overflow-hidden`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export const UpgradeCard = ({ version = "v5.4", title, buttonText = "Upgrade", className = "" }) => (
  <div className={`mt-auto p-6 ${theme.radius.xlarge} ${theme.holographic} border border-white/10 relative overflow-hidden group ${className}`}>
    {/* Liquid wave animation */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-white/5 to-blue-400/10 animate-pulse" />
    <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
      <Cpu size={100} />
    </div>
    <p className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-2">Engine {version}</p>
    <p className="text-sm font-bold mb-4 relative z-10">{title || "Optimize your calculations with native AI."}</p>
    <button className="w-full py-3 bg-gradient-to-br from-white via-white/90 to-white/80 text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gradient-to-br hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 hover:text-white transition-all shadow-xl shadow-black/20 shadow-[0_8px_24px_rgba(59,130,246,0.3)]">
      {buttonText}
    </button>
  </div>
);

// ==================== CHARTS ====================

export const BarChart = ({
  data = [60, 40, 85, 50, 95, 70, 45, 100, 80, 55, 90, 65, 75, 50],
  height = 288,
  className = ""
}) => (
  <div className="flex items-end gap-3 px-2" style={{ height }}>
    {data.map((h, i) => (
      <div key={i} className="flex-1 group/bar relative h-full flex items-end">
        <div
          className="w-full bg-gradient-to-t from-blue-600/20 via-blue-500/40 to-blue-400/60 group-hover/bar:to-blue-400 transition-all duration-500 rounded-t-lg shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          style={{ height: `${h}%` }}
        />
        <div
          className="absolute inset-x-0 bottom-0 bg-blue-500/30 blur-xl opacity-0 group-hover/bar:opacity-100 transition-opacity"
          style={{ height: `${h}%` }}
        />
      </div>
    ))}
  </div>
);

// ==================== DECORATIVE ====================

export const BackgroundDecor = ({ className = "" }) => (
  <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
    {/* Liquid gradient orbs */}
    <div className="absolute top-[-15%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-blue-600/15 via-blue-500/10 to-white/5 blur-[140px] rounded-full animate-pulse" />
    <div className="absolute bottom-[-15%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-blue-600/10 via-white/5 to-blue-600/10 blur-[140px] rounded-full opacity-50" />
    {/* Holographic overlay */}
    <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-gradient-to-br from-blue-500/5 via-white/5 to-blue-400/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
  </div>
);

export const GlassPanel = ({ children, className = "", radius = "large", ...props }) => {
  const radii = {
    base: "rounded-2xl",
    large: "rounded-[2rem]",
    xlarge: "rounded-[2.5rem]"
  };

  return (
    <div className={`${theme.liquidGlass} ${radii[radius]} p-6 md:p-10 ${className} shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]`} {...props}>
      {children}
    </div>
  );
};

// ==================== TYPOGRAPHY ====================

export const Heading = ({
  children,
  level = 1,
  uppercase = false,
  italic = false,
  className = ""
}) => {
  const sizes = {
    1: "text-4xl md:text-5xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl"
  };

  const Component = `h${level}`;

  return (
    <Component className={`font-black tracking-tighter ${uppercase ? 'uppercase' : ''} ${italic ? 'italic' : ''} ${sizes[level]} ${className} bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent`}>
      {children}
    </Component>
  );
};

export const Text = ({
  children,
  size = "md",
  variant = "default",
  className = ""
}) => {
  const sizes = {
    xs: "text-[9px]",
    sm: "text-[10px]",
    md: "text-xs",
    lg: "text-sm",
    xl: "text-base"
  };

  const variants = {
    default: "text-white/60",
    muted: "text-white/40",
    subtle: "text-white/20",
    primary: "text-blue-300"
  };

  return (
    <p className={`font-medium leading-relaxed ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </p>
  );
};

// ==================== SOCIAL ====================

export const SocialLink = ({ icon: Icon, href = "#", className = "" }) => (
  <a
    href={href}
    className={`w-10 h-10 ${theme.radius.base} ${theme.liquidSurface} flex items-center justify-center hover:bg-gradient-to-br hover:from-white/20 hover:via-white/10 hover:to-white/5 hover:shadow-[0_4px_16px_rgba(255,255,255,0.15)] transition-all ${className}`}
  >
    <Icon size={18} />
  </a>
);

export const SocialLinks = ({ className = "" }) => (
  <div className={`flex gap-4 ${className}`}>
    <SocialLink icon={Twitter} />
    <SocialLink icon={Github} />
    <SocialLink icon={Linkedin} />
  </div>
);

// ==================== NAVBAR ====================

export const Navbar = ({
  scrolled = false,
  children,
  className = ""
}) => (
  <nav className={`fixed top-0 w-full z-[100] px-6 md:px-12 py-6 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0b]/90 backdrop-blur-2xl border-b border-white/5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' : 'bg-transparent'} ${className}`}>
    {children}
  </nav>
);

export const Logo = ({ name = "VANGUARD", subtitle = "Forge Studio", className = "" }) => {
  const BoxIcon = Box;
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-10 h-10 bg-gradient-to-br from-white via-white/90 to-white/80 rounded-xl flex items-center justify-center text-black shadow-[0_4px_16px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.5)] group-hover:rotate-[10deg] group-hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)] transition-all duration-500">
        <BoxIcon size={20} />
      </div>
      <div className="leading-none">
        <span className="text-lg font-black tracking-tighter block bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{name}</span>
        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-blue-300">{subtitle}</span>
      </div>
    </div>
  );
};

// ==================== FOOTER ====================

export const FooterLink = ({ children, href = "#", className = "" }) => (
  <li className={`hover:text-white transition-colors cursor-pointer ${className}`}>{children}</li>
);

export const FooterSection = ({ title, links = [], className = "" }) => (
  <div className={`space-y-6 ${className}`}>
    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300">{title}</p>
    <ul className="space-y-4 text-[12px] font-bold text-white/40">
      {links.map((link, idx) => (
        <FooterLink key={idx}>{link}</FooterLink>
      ))}
    </ul>
  </div>
);

// ==================== MODAL & DIALOG ====================

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  showClose = true,
  className = ""
}) => {
  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[90vw]"
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className={`relative w-full ${sizes[size]} mx-4 ${theme.radius.large} ${theme.liquidGlass} border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] animate-in zoom-in-95 fade-in duration-300 ${className}`}>
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <h3 className="text-xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{title}</h3>
            {showClose && (
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-xl transition-colors">
                <X size={20} />
              </button>
            )}
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export const Dialog = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  className = ""
}) => (
  <Modal isOpen={isOpen} onClose={onClose} title={title} showClose={false} className={className}>
    <div className="space-y-4">
      {children}
      {footer && (
        <div className="flex justify-end gap-4 pt-4 border-t border-white/5">
          {footer}
        </div>
      )}
    </div>
  </Modal>
);

export const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm",
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "accent"
}) => (
  <Dialog
    isOpen={isOpen}
    onClose={onClose}
    title={title}
    footer={
      <>
        <VanguardButton variant="glass" onClick={onClose}>{cancelText}</VanguardButton>
        <VanguardButton variant={variant} onClick={() => { onConfirm(); onClose(); }}>{confirmText}</VanguardButton>
      </>
    }
  >
    <Text>{message}</Text>
  </Dialog>
);

// ==================== DROPDOWN ====================

export const Dropdown = ({ trigger, children, align = "left", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className={`absolute top-full mt-2 ${align === 'right' ? 'right-0' : 'left-0'} z-50 min-w-[200px] ${theme.liquidGlass} ${theme.radius.large} border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] animate-in fade-in zoom-in-95 duration-200`}>
            <div className="p-2">{children}</div>
          </div>
        </>
      )}
    </div>
  );
};

export const DropdownItem = ({ children, icon: Icon, danger = false, onClick, className = "" }) => (
  <button
    onClick={() => { onClick?.(); }}
    className={`w-full flex items-center gap-3 px-3 py-2 ${theme.radius.base} text-left text-sm font-bold transition-all ${danger ? 'text-blue-400 hover:bg-blue-500/10' : 'text-white/70 hover:bg-white/5'}`}
  >
    {Icon && <Icon size={16} />}
    {children}
  </button>
);

export const DropdownDivider = ({ className = "" }) => (
  <div className={`my-2 h-px ${theme.glass} ${className}`} />
);

// ==================== TOOLTIP ====================

export const Tooltip = ({ children, content, position = "top", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`absolute ${positions[position]} z-50 px-3 py-1.5 ${theme.radius.base} ${theme.liquidGlass} border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.3)] whitespace-nowrap animate-in fade-in zoom-in-95 duration-200`}>
          <span className="text-[9px] font-bold text-white/70">{content}</span>
        </div>
      )}
    </div>
  );
};

// ==================== TOAST ====================

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = ({ title, message, variant = "info", duration = 4000 }) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, message, variant }]);
    setTimeout(() => removeToast(id), duration);
  };

  const removeToast = (id) => setToasts(prev => prev.filter(t => t.id !== id));

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[300] space-y-4">
        {toasts.map(toast => (
          <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};

export const Toast = ({ title, message, variant = "info", onClose, className = "" }) => {
  const variants = {
    success: "border-blue-400/30 shadow-[0_8px_24px_rgba(59,130,246,0.2)]",
    error: "border-white/30 shadow-[0_8px_24px_rgba(255,255,255,0.2)]",
    warning: "border-white/20 shadow-[0_8px_24px_rgba(255,255,255,0.1)]",
    info: "border-blue-400/30 shadow-[0_8px_24px_rgba(59,130,246,0.2)]"
  };

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertTriangle,
    info: Info
  };

  const Icon = icons[variant];

  return (
    <div className={`${theme.liquidGlass} ${theme.radius.large} border ${variants[variant]} p-4 min-w-[300px] animate-in slide-in-from-right duration-300 ${className}`}>
      <div className="flex items-start gap-3">
        <Icon size={20} className={variant === 'success' ? 'text-blue-400' : variant === 'error' ? 'text-white/70' : variant === 'warning' ? 'text-white/50' : 'text-blue-400'} />
        <div className="flex-1">
          <p className="text-sm font-bold text-white">{title}</p>
          <p className="text-xs text-white/60 mt-1">{message}</p>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/5 rounded-lg transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

// ==================== SKELETON ====================

export const Skeleton = ({ className = "" }) => (
  <div className={`${theme.radius.base} ${theme.holographic} animate-pulse ${className}`} />
);

export const SkeletonText = ({ lines = 3, className = "" }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton key={i} className={`h-4 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`} />
    ))}
  </div>
);

export const SkeletonCard = ({ className = "" }) => (
  <div className={`${theme.radius.xlarge} ${theme.liquidSurface} p-6 ${className}`}>
    <div className="flex justify-between items-start mb-4">
      <Skeleton className="w-12 h-12 rounded-xl" />
      <Skeleton className="w-16 h-6 rounded-full" />
    </div>
    <Skeleton className="w-3/4 h-6 mb-2" />
    <SkeletonText lines={2} />
  </div>
);

// ==================== SPINNER ====================

export const Spinner = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  return (
    <div className={`${sizes[size]} animate-spin ${className}`}>
      <div className="w-full h-full border-2 border-white/10 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
};

// ==================== EMPTY STATE ====================

export const EmptyState = ({ icon: Icon, title, message, action, className = "" }) => (
  <div className={`text-center py-12 ${className}`}>
    {Icon && <Icon size={48} className="mx-auto text-white/20 mb-4" />}
    <h3 className="text-lg font-bold text-white/60 mb-2">{title}</h3>
    <p className="text-sm text-white/40 mb-6">{message}</p>
    {action}
  </div>
);

// ==================== PRICING ====================

export const PricingCard = ({ title, price, period, features, buttonText, popular = false, className = "" }) => (
  <div className={`${theme.radius.xlarge} ${popular ? theme.liquidGlass + ' border-blue-400/30 shadow-[0_8px_32px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]' : theme.neuromorphic} p-8 relative overflow-hidden group ${className}`}>
    {popular && (
      <div className="absolute top-4 right-4">
        <Badge variant="blue">Popular</Badge>
      </div>
    )}
    <div className="relative z-10">
      <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">{title}</p>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{price}</span>
        <span className="text-sm text-white/40">/{period}</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm text-white/60">
            <Check size={16} className="text-blue-400" />
            {feature}
          </li>
        ))}
      </ul>
      <VanguardButton variant={popular ? 'accent' : 'glass'} className="w-full">{buttonText}</VanguardButton>
    </div>
  </div>
);

// ==================== TESTIMONIAL ====================

export const TestimonialCard = ({ quote, author, role, className = "" }) => (
  <div className={`${theme.liquidSurface} ${theme.radius.xlarge} p-8 ${className}`}>
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="text-white fill-white" />
      ))}
    </div>
    <p className="text-sm text-white/70 mb-6 leading-relaxed">"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 ${theme.radius.base} ${theme.holographic} flex items-center justify-center`}>
        <User size={18} className="text-white/60" />
      </div>
      <div>
        <p className="text-sm font-bold text-white">{author}</p>
        <p className="text-[10px] text-white/40">{role}</p>
      </div>
    </div>
  </div>
);

// ==================== FEATURE CARD ====================

export const FeatureCard = ({ icon: Icon, title, description, className = "" }) => (
  <div className={`${theme.liquidSurface} ${theme.radius.xlarge} p-8 group hover:bg-gradient-to-br hover:from-white/[0.1] hover:via-white/[0.05] hover:to-white/[0.02] transition-all ${className}`}>
    <div className={`w-12 h-12 ${theme.radius.large} ${theme.holographic} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-[0_4px_16px_rgba(59,130,246,0.2)]`}>
      {Icon && <Icon size={24} className="text-blue-400" />}
    </div>
    <h3 className="text-xl font-bold mb-2 bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{title}</h3>
    <p className="text-sm text-white/60 leading-relaxed">{description}</p>
  </div>
);

// ==================== DIVIDER ====================

export const Divider = ({ className = "" }) => (
  <div className={`h-px ${theme.glass} ${className}`} />
);

// ==================== ANIMATIONS ====================

export const FadeIn = ({ children, delay = 0, className = "" }) => (
  <div className={`animate-in fade-in duration-700 ${className}`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

export const SlideIn = ({ children, direction = "up", delay = 0, className = "" }) => {
  const directions = {
    up: "slide-in-from-bottom-10",
    down: "slide-in-from-top-10",
    left: "slide-in-from-left-10",
    right: "slide-in-from-right-10"
  };

  return (
    <div className={`animate-in fade-in ${directions[direction]} duration-700 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export const ScaleIn = ({ children, delay = 0, className = "" }) => (
  <div className={`animate-in zoom-in-95 fade-in duration-700 ${className}`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

// ==================== LAYOUT UTILS ====================

export const GridLayout = ({ children, columns = 3, gap = "6", className = "" }) => {
  const cols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4"
  };

  const gaps = {
    4: "gap-4",
    6: "gap-6",
    8: "gap-8"
  };

  return (
    <div className={`grid ${cols[columns]} ${gaps[gap]} ${className}`}>
      {children}
    </div>
  );
};

export const Stack = ({ children, direction = "vertical", gap = "4", className = "" }) => {
  const directions = {
    vertical: "flex-col",
    horizontal: "flex-row"
  };

  const gaps = {
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    6: "gap-6"
  };

  return (
    <div className={`flex ${directions[direction]} ${gaps[gap]} ${className}`}>
      {children}
    </div>
  );
};

export const Center = ({ children, className = "" }) => (
  <div className={`flex items-center justify-center ${className}`}>
    {children}
  </div>
);

export const Between = ({ children, className = "" }) => (
  <div className={`flex items-center justify-between ${className}`}>
    {children}
  </div>
);

// ==================== FORM GROUP ====================

export const Label = ({ children, htmlFor, className = "" }) => (
  <label htmlFor={htmlFor} className="block text-[10px] font-black uppercase tracking-widest text-white/60 mb-2">
    {children}
  </label>
);

export const FormGroup = ({ label, children, className = "" }) => (
  <div className={className}>
    {label && <Label>{label}</Label>}
    {children}
  </div>
);

// ==================== PROGRESS ====================

export const ProgressBar = ({ value, variant = "blue", size = "md", showLabel = false, className = "" }) => {
  const variants = {
    blue: "from-blue-500 to-blue-600 shadow-[0_2px_12px_rgba(59,130,246,0.4)]",
    gradient: "from-blue-500 to-blue-400 shadow-[0_2px_12px_rgba(59,130,246,0.4)]"
  };

  const sizes = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3"
  };

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between mb-2">
          <span className="text-[9px] font-bold text-white/60">Progress</span>
          <span className="text-[9px] font-bold text-white/40">{value}%</span>
        </div>
      )}
      <div className={`w-full ${theme.radius.full} ${theme.neuromorphic} overflow-hidden`}>
        <div
          className={`h-full ${sizes[size]} bg-gradient-to-r ${variants[variant]} rounded-full transition-all duration-700`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export const CircularProgress = ({ value, variant = "blue", size = 64, className = "" }) => {
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  const variantColors = {
    blue: "text-blue-500"
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          className="text-white/5"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={`${variantColors[variant]} transition-all duration-700`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ filter: 'drop-shadow(0 2px 8px rgba(59,130,246,0.4))' }}
        />
      </svg>
      <span className="absolute text-[9px] font-bold text-white/70">{value}%</span>
    </div>
  );
};

// ==================== TABLE ====================

export const Table = ({ columns, data, emptyMessage = "No data", className = "" }) => (
  <div className={`overflow-hidden ${theme.radius.xlarge} ${theme.liquidSurface} ${className}`}>
    <table className="w-full">
      <thead>
        <tr className="border-b border-white/5">
          {columns.map((col, idx) => (
            <th key={idx} className="text-left py-4 px-4 text-[9px] font-black uppercase tracking-widest text-white/40">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="py-8 text-center text-white/40">
              {emptyMessage}
            </td>
          </tr>
        ) : (
          data.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="py-4 px-4 text-sm text-white/70">
                  {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

// ==================== PAGINATION ====================

export const Pagination = ({ currentPage, totalPages, onPageChange, className = "" }) => (
  <div className={`flex items-center justify-center gap-2 ${className}`}>
    <IconButton
      icon={ChevronLeft}
      variant="glass"
      size="sm"
      onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      disabled={currentPage === 1}
    />
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        onClick={() => onPageChange(i + 1)}
        className={`w-8 h-8 ${theme.radius.base} text-[9px] font-bold transition-all ${currentPage === i + 1 ? 'bg-gradient-to-br from-white via-white/90 to-white/80 text-black shadow-[0_4px_16px_rgba(255,255,255,0.2)]' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
      >
        {i + 1}
      </button>
    ))}
    <IconButton
      icon={ChevronRight}
      variant="glass"
      size="sm"
      onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      disabled={currentPage === totalPages}
    />
  </div>
);

// ==================== TABS ====================

export const Tabs = ({ tabs, activeTab, onChange, variant = "filled", className = "" }) => (
  <div className={`flex gap-2 ${className}`}>
    {tabs.map(tab => (
      <NavTab key={tab.id} active={activeTab === tab.id} onClick={() => onChange(tab.id)}>
        {tab.label}
      </NavTab>
    ))}
  </div>
);

export const TabContent = ({ children, active = false, className = "" }) => (
  <div className={`${active ? 'block' : 'hidden'} ${className}`}>
    {children}
  </div>
);

// ==================== ACCORDION ====================

export const Accordion = ({ items, allowMultiple = false, className = "" }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    if (allowMultiple) {
      setOpenItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    } else {
      setOpenItems(prev => prev.includes(id) ? [] : [id]);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <div key={item.id} className={`${theme.radius.xlarge} ${theme.liquidSurface} overflow-hidden`}>
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <span className="text-sm font-bold text-white/70">{item.title}</span>
            {openItems.includes(item.id) ? <ChevronDown size={18} className="text-white/40" /> : <ChevronRight size={18} className="text-white/40" />}
          </button>
          {openItems.includes(item.id) && (
            <div className="px-4 pb-4 text-sm text-white/60 leading-relaxed">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ==================== ICONS EXPORT ====================

export const Icons = {
  ArrowUpRight,
  ArrowDownRight,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  ArrowRight,
  Plus,
  Minus,
  MoreHorizontal,
  MoreVertical,
  Layers,
  Box,
  Cpu,
  Activity,
  Wallet,
  Settings,
  Bell,
  Search,
  Globe,
  LayoutDashboard,
  Home,
  Zap,
  Star,
  Radio,
  Sparkles,
  Moon,
  LogOut,
  Package,
  Code,
  File,
  FileText,
  Folder,
  Download,
  Upload,
  User,
  Users,
  UserPlus,
  Play,
  Pause,
  Volume2,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  XCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  Clock,
  Calendar,
  Link,
  Lock,
  Unlock,
  Heart,
  Bookmark,
  Share2,
  Tag,
  CreditCard,
  DollarSign,
  X,
  Menu,
  Check,
  Copy,
  Trash,
  Edit,
  Command,
  Twitter,
  Github,
  Linkedin,
};
