import React from 'react';
import { FlowStep } from '../../types/outsourcing';
import { CheckCircle, Circle } from 'lucide-react';

interface StepIndicatorProps {
  steps: FlowStep[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div 
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => onStepClick(step.id)}
            >
              <div 
                className={`
                  flex items-center justify-center w-8 h-8 rounded-full
                  transition-all duration-200 ease-in-out
                  ${currentStep === step.id 
                    ? 'bg-blue-500 text-white' 
                    : currentStep > step.id 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-500'
                  }
                `}
              >
                {currentStep > step.id ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-medium">{step.id}</span>
                )}
              </div>
              <span className="hidden md:block mt-2 text-xs text-center font-medium">
                {step.title}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div 
                className={`
                  flex-1 h-1 mx-2
                  ${currentStep > index + 1 
                    ? 'bg-green-500' 
                    : currentStep === index + 1 
                      ? 'bg-gradient-to-r from-green-500 to-gray-200' 
                      : 'bg-gray-200'
                  }
                `}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;