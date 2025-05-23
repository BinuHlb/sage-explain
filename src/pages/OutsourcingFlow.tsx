import React, { useState } from 'react';
import OutsourcingDashboard from '../components/outsourcing/OutsourcingDashboard';
import { OutsourcingProvider } from '../context/OutsourcingContext';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';

const OutsourcingFlow: React.FC = () => {
  return (
    <OutsourcingProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title="Outsourcing Flow" />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <OutsourcingDashboard />
          </main>
        </div>
      </div>
    </OutsourcingProvider>
  );
};

export default OutsourcingFlow;