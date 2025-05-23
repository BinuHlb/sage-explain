import React, { useState } from 'react';
import { useOutsourcing } from '../../context/OutsourcingContext';
import StepIndicator from '../common/StepIndicator';
import FlowStepCard from './FlowStepCard';
import { flowSteps } from './flowStepData';
import ViewModeSelector from './ViewModeSelector';
import StepContent from './StepContent';

const OutsourcingDashboard: React.FC = () => {
  const { currentStep, setCurrentStep, viewMode, setViewMode } = useOutsourcing();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Outsourcing Workflow</h1>
        <ViewModeSelector viewMode={viewMode} setViewMode={setViewMode} />
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 font-medium flex items-center mb-4"
          >
            {isExpanded ? 'Hide flow overview' : 'Show flow overview'}
            <svg 
              className={`ml-1 w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              {flowSteps.map((step) => (
                <FlowStepCard 
                  key={step.id}
                  step={step}
                  isActive={currentStep === step.id}
                  isCompleted={currentStep > step.id}
                  onClick={() => setCurrentStep(step.id)}
                />
              ))}
            </div>
          )}
          
          <StepIndicator 
            steps={flowSteps} 
            currentStep={currentStep} 
            onStepClick={setCurrentStep} 
          />
        </div>
      </div>
      
      <StepContent />
    </div>
  );
};

export default OutsourcingDashboard;