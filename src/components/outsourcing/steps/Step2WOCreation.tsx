import React, { useState } from 'react';
import { FilePlus, User, Users } from 'lucide-react';
import { useOutsourcing } from '../../../context/OutsourcingContext';

interface Step2WOCreationProps {
  viewMode: 'manager' | 'subcontractor' | 'reviewer';
}

const Step2WOCreation: React.FC<Step2WOCreationProps> = ({ viewMode }) => {
  const { workOrders, subcontractors } = useOutsourcing();
  const [selectedWorkOrder, setSelectedWorkOrder] = useState<string | null>(null);
  const [selectedSubcontractor, setSelectedSubcontractor] = useState<string | null>(null);

  const renderManagerView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <FilePlus className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">WO Creation & Subcontractor Assignment</h2>
          <p className="text-gray-600">Assign work orders to subcontractors from the master list</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 bg-gray-50">
          <h3 className="text-lg font-medium mb-3">Work Orders</h3>
          <div className="space-y-3 mb-4">
            {workOrders.map((wo) => (
              <div 
                key={wo.id}
                className={`
                  p-3 border rounded-md cursor-pointer transition-colors
                  ${selectedWorkOrder === wo.id 
                    ? 'bg-blue-50 border-blue-300' 
                    : 'bg-white hover:bg-blue-50'}
                `}
                onClick={() => setSelectedWorkOrder(wo.id)}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{wo.id}</span>
                  <span className={`
                    px-2 py-1 text-xs rounded-full
                    ${wo.status === 'pending' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : wo.status === 'in-progress' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'}
                  `}>
                    {wo.status.charAt(0).toUpperCase() + wo.status.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{wo.title}</p>
                <div className="mt-2 text-xs text-gray-500">JOF ID: {wo.jofId}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border rounded-lg p-4 bg-gray-50">
          <h3 className="text-lg font-medium mb-3">Subcontractors</h3>
          <div className="space-y-3 mb-4">
            {subcontractors.map((sc) => (
              <div 
                key={sc.id}
                className={`
                  p-3 border rounded-md cursor-pointer transition-colors
                  ${selectedSubcontractor === sc.id 
                    ? 'bg-blue-50 border-blue-300' 
                    : 'bg-white hover:bg-blue-50'}
                `}
                onClick={() => setSelectedSubcontractor(sc.id)}
              >
                <div className="flex items-center">
                  <div className="mr-3 bg-gray-100 rounded-full p-2">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium">{sc.name}</div>
                    <div className="text-sm text-gray-600">{sc.email}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button 
          className={`
            px-4 py-2 rounded-md text-white font-medium
            ${selectedWorkOrder && selectedSubcontractor 
              ? 'bg-blue-500 hover:bg-blue-600' 
              : 'bg-gray-300 cursor-not-allowed'}
          `}
          disabled={!selectedWorkOrder || !selectedSubcontractor}
        >
          Assign Subcontractor
        </button>
      </div>
    </div>
  );

  const renderSubcontractorView = () => (
    <div className="p-6 text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
        <Users className="w-8 h-8 text-yellow-500" />
      </div>
      <h3 className="text-xl font-medium text-gray-800 mb-2">Waiting for Assignment</h3>
      <p className="text-gray-600 max-w-md mx-auto">
        Work Orders are being processed and will be assigned to you soon. 
        You'll receive a notification when tasks are ready.
      </p>
    </div>
  );

  const renderReviewerView = () => (
    <div>
      <h3 className="text-lg font-medium mb-3">Subcontractor Assignment History</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WO ID</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subcontractor</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned By</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-3 text-sm">WO-2023-001</td>
            <td className="px-4 py-3 text-sm">TechSolutions Inc</td>
            <td className="px-4 py-3 text-sm">John Manager</td>
            <td className="px-4 py-3 text-sm">10/16/2023</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm">WO-2023-002</td>
            <td className="px-4 py-3 text-sm">DevPro Services</td>
            <td className="px-4 py-3 text-sm">Jane Manager</td>
            <td className="px-4 py-3 text-sm">10/19/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  switch (viewMode) {
    case 'manager':
      return renderManagerView();
    case 'subcontractor':
      return renderSubcontractorView();
    case 'reviewer':
      return renderReviewerView();
    default:
      return renderManagerView();
  }
};

export default Step2WOCreation;