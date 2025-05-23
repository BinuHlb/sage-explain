import React from 'react';
import { FlowStep } from '../../types/outsourcing';
import { CheckCircle, FileText, ListChecks, Bell, Clock, ClipboardCheck, TrendingUp, Lock, Star, FilePlus } from 'lucide-react';

interface FlowStepCardProps {
  step: FlowStep;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const FlowStepCard: React.FC<FlowStepCardProps> = ({ step, isActive, isCompleted, onClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'check-circle': return <CheckCircle className="w-5 h-5" />;
      case 'file-plus': return <FilePlus className="w-5 h-5" />;
      case 'list-check': return <ListChecks className="w-5 h-5" />;
      case 'bell': return <Bell className="w-5 h-5" />;
      case 'clock': return <Clock className="w-5 h-5" />;
      case 'clipboard-check': return <ClipboardCheck className="w-5 h-5" />;
      case 'trending-up': return <TrendingUp className="w-5 h-5" />;
      case 'file-text': return <FileText className="w-5 h-5" />;
      case 'lock': return <Lock className="w-5 h-5" />;
      case 'star': return <Star className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div
      onClick={onClick}
      className={`
        p-4 rounded-lg border cursor-pointer transition-all duration-200
        ${isActive 
          ? 'border-blue-500 bg-blue-50 shadow-md' 
          : isCompleted 
            ? 'border-green-200 bg-green-50' 
            : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50'
        }
      `}
    >
      <div className="flex items-center mb-2">
        <div className={`
          p-2 rounded-full mr-3
          ${isActive 
            ? 'bg-blue-100 text-blue-600' 
            : isCompleted 
              ? 'bg-green-100 text-green-600' 
              : 'bg-gray-100 text-gray-600'
          }
        `}>
          {getIcon(step.icon)}
        </div>
        <span className="font-medium">{step.id}. {step.title}</span>
      </div>
      <p className="text-sm text-gray-600 ml-10">{step.description}</p>
    </div>
  );
};

export default FlowStepCard;