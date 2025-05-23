import React from 'react';
import { Home, FileText, Users, Settings, Calendar, BarChart2, ExternalLink } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex md:flex-col md:w-64 md:bg-white md:border-r md:border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-32 h-8">
           <img src="/src/assets/logo.svg" alt="Logo" />

          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <SidebarItem icon={<Home className="w-5 h-5" />} label="Dashboard" isActive={false} />
        <SidebarItem icon={<FileText className="w-5 h-5" />} label="Projects" isActive={false} />
        <SidebarItem icon={<ExternalLink className="w-5 h-5" />} label="Outsourcing" isActive={true} />
        <SidebarItem icon={<Users className="w-5 h-5" />} label="Subcontractors" isActive={false} />
        <SidebarItem icon={<Calendar className="w-5 h-5" />} label="Schedule" isActive={false} />
        <SidebarItem icon={<BarChart2 className="w-5 h-5" />} label="Reports" isActive={false} />
        
        <div className="pt-4 mt-4 border-t border-gray-200">
          <SidebarItem icon={<Settings className="w-5 h-5" />} label="Settings" isActive={false} />
        </div>
      </nav>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive }) => {
  return (
    <a
      href="#"
      className={`
        flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
        ${isActive 
          ? 'bg-blue-50 text-blue-600' 
          : 'text-gray-600 hover:bg-gray-100'}
      `}
    >
      <div className={`mr-3 ${isActive ? 'text-blue-500' : 'text-gray-400'}`}>
        {icon}
      </div>
      {label}
    </a>
  );
};