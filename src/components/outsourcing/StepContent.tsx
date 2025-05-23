import React from 'react';
import { useOutsourcing } from '../../context/OutsourcingContext';
import Step1JOFApproval from './steps/Step1JOFApproval';
import Step2WOCreation from './steps/Step2WOCreation';
import Step3ProjectGeneration from './steps/Step3ProjectGeneration';
import Step4Notification from './steps/Step4Notification';
import Step5AdditionalHours from './steps/Step5AdditionalHours';
import Step6TaskCompletion from './steps/Step6TaskCompletion';
import Step7Profitability from './steps/Step7Profitability';
import Step8InvoiceLinking from './steps/Step8InvoiceLinking';
import Step9FinalReview from './steps/Step9FinalReview';
import Step10PostEngagement from './steps/Step10PostEngagement';

const StepContent: React.FC = () => {
  const { currentStep, viewMode } = useOutsourcing();

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1JOFApproval viewMode={viewMode} />;
      case 2:
        return <Step2WOCreation viewMode={viewMode} />;
      case 3:
        return <Step3ProjectGeneration viewMode={viewMode} />;
      case 4:
        return <Step4Notification viewMode={viewMode} />;
      case 5:
        return <Step5AdditionalHours viewMode={viewMode} />;
      case 6:
        return <Step6TaskCompletion viewMode={viewMode} />;
      case 7:
        return <Step7Profitability viewMode={viewMode} />;
      case 8:
        return <Step8InvoiceLinking viewMode={viewMode} />;
      case 9:
        return <Step9FinalReview viewMode={viewMode} />;
      case 10:
        return <Step10PostEngagement viewMode={viewMode} />;
      default:
        return <div>Select a step to view details</div>;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default StepContent;