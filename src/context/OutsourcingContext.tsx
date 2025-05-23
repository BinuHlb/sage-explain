import React, { createContext, useState, useContext, ReactNode } from 'react';
import { FlowStep, WorkOrder, Subcontractor, Task } from '../types/outsourcing';

interface OutsourcingContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedWorkOrder: WorkOrder | null;
  setSelectedWorkOrder: (workOrder: WorkOrder | null) => void;
  workOrders: WorkOrder[];
  subcontractors: Subcontractor[];
  tasks: Task[];
  viewMode: 'manager' | 'subcontractor' | 'reviewer';
  setViewMode: (mode: 'manager' | 'subcontractor' | 'reviewer') => void;
}

const defaultContext: OutsourcingContextType = {
  currentStep: 1,
  setCurrentStep: () => {},
  selectedWorkOrder: null,
  setSelectedWorkOrder: () => {},
  workOrders: [],
  subcontractors: [],
  tasks: [],
  viewMode: 'manager',
  setViewMode: () => {},
};

export const OutsourcingContext = createContext<OutsourcingContextType>(defaultContext);

export const useOutsourcing = () => useContext(OutsourcingContext);

export const OutsourcingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedWorkOrder, setSelectedWorkOrder] = useState<WorkOrder | null>(null);
  const [viewMode, setViewMode] = useState<'manager' | 'subcontractor' | 'reviewer'>('manager');
  
  // Mock data
  const workOrders: WorkOrder[] = [
    { id: 'WO-2023-001', jofId: 'JOF-2023-001', title: 'Website Development', status: 'in-progress' },
    { id: 'WO-2023-002', jofId: 'JOF-2023-002', title: 'Mobile App Enhancement', status: 'pending' },
    { id: 'WO-2023-003', jofId: 'JOF-2023-003', title: 'Database Migration', status: 'completed' },
  ];
  
  const subcontractors: Subcontractor[] = [
    { id: 'SC-001', name: 'TechSolutions Inc', email: 'contact@techsolutions.com' },
    { id: 'SC-002', name: 'DevPro Services', email: 'info@devpro.com' },
    { id: 'SC-003', name: 'DataMasters', email: 'projects@datamasters.com' },
  ];
  
  const tasks: Task[] = [
    { id: 'T-001', workOrderId: 'WO-2023-001', title: 'Frontend Development', hours: 40, status: 'in-progress' },
    { id: 'T-002', workOrderId: 'WO-2023-001', title: 'Backend API Creation', hours: 30, status: 'pending' },
    { id: 'T-003', workOrderId: 'WO-2023-002', title: 'UI Enhancement', hours: 25, status: 'completed' },
  ];

  return (
    <OutsourcingContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        selectedWorkOrder,
        setSelectedWorkOrder,
        workOrders,
        subcontractors,
        tasks,
        viewMode,
        setViewMode,
      }}
    >
      {children}
    </OutsourcingContext.Provider>
  );
};