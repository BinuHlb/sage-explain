import React from 'react';
import { Users, User, UserCheck } from 'lucide-react';

interface ViewModeSelectorProps {
  viewMode: 'manager' | 'subcontractor' | 'reviewer';
  setViewMode: (mode: 'manager' | 'subcontractor' | 'reviewer') => void;
}

const ViewModeSelector: React.FC<ViewModeSelectorProps> = ({ viewMode, setViewMode }) => {
  return (
    <div className="flex items-center space-x-2 bg-white rounded-lg border border-gray-200 p-1">
      <button
        onClick={() => setViewMode('manager')}
        className={`
          flex items-center px-3 py-2 rounded-md text-sm transition-colors
          ${viewMode === 'manager' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-600 hover:bg-gray-100'}
        `}
      >
        <Users className="w-4 h-4 mr-2" />
        <span>Manager View</span>
      </button>
      
      <button
        onClick={() => setViewMode('subcontractor')}
        className={`
          flex items-center px-3 py-2 rounded-md text-sm transition-colors
          ${viewMode === 'subcontractor' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-600 hover:bg-gray-100'}
        `}
      >
        <User className="w-4 h-4 mr-2" />
        <span>Subcontractor View</span>
      </button>
      
      <button
        onClick={() => setViewMode('reviewer')}
        className={`
          flex items-center px-3 py-2 rounded-md text-sm transition-colors
          ${viewMode === 'reviewer' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-600 hover:bg-gray-100'}
        `}
      >
        <UserCheck className="w-4 h-4 mr-2" />
        <span>Reviewer View</span>
      </button>
    </div>
  );
};

export default ViewModeSelector;