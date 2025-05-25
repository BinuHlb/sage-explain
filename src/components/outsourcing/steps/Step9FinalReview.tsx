import React, { useState, useEffect } from 'react';
import { CheckSquare, User, } from 'lucide-react';

// Define ViewMode if it's not globally available or imported from a specific type file.
type ViewMode = 'edit' | 'view'; // Assuming ViewMode is a string literal type

interface Step9FinalReviewProps {
  viewMode: ViewMode;
}

interface KPIItem {
  id: string;
  title: string;
  completed: boolean;
  required: boolean;
}

const approverOptions = [
  'John Doe',
  'Jane Smith',
  'Michael Lee',
  'Emily Johnson',
  'David Clark',
];

const Step9FinalReview: React.FC<Step9FinalReviewProps> = ({ viewMode }) => {
  const currentDate = new Date().toISOString().split("T")[0];

  // Roles for the Approvals section
  const approvalRoles = [
    'Engagement Lead',
    'Engagement Partner',
    'Qlty Review Partner',
  ];

  // State for the approvals section
  const [approvals, setApprovals] = useState(
    approvalRoles.map(() => ({
      approver: '',
      date: currentDate,
    }))
  );

  // Handler for approvals section changes
  const handleApprovalChange = (
    index: number,
    field: 'approver' | 'date',
    value: string
  ) => {
    const updated = [...approvals];
    updated[index][field] = value;
    setApprovals(updated);
  };

  // State for KPI checklist section (remains the same)
  const [kpiItems, setKpiItems] = useState<KPIItem[]>([
    { id: '1', title: 'Signed Financial Statements', completed: false, required: true },
    { id: '2', title: 'Zoho Timesheet Summary Report', completed: false, required: true },
    { id: '3', title: 'Letter of Representation (LOR)', completed: false, required: true },
    { id: '4', title: 'Specific LORs, if applicable', completed: false, required: true },
    { id: '5', title: 'Management Letter', completed: false, required: true },
    { id: '6', title: 'Client-approved FS', completed: false, required: true },
    { id: '7', title: 'AML Certificate (for Exchange House clients)', completed: false, required: true },
    { id: '8', title: 'Free Zone Summary Certificate (where applicable)', completed: false, required: true }
  ]);

  // Handler to toggle KPI item completion status
  const toggleKPIItem = (id: string) => {
    if (viewMode === 'view') return; // Prevent toggling in view mode
    setKpiItems(kpiItems.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };


  return (
    <div>
       <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <CheckSquare className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Final Review & Sign-off</h2>
          <p className="text-gray-600">Input: JOF approved in Sage X3</p>
        </div>
      </div>

      {/* Approvals and KPI Checklist Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Approvals Card */}
        <div className="bg-white rounded-xl  border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 bg-blue-50 border-b">
            <h3 className="font-medium">Approvals</h3>
          </div>
          <div className="p-5">
            <div className="space-y-4"> {/* Container for the actual rows */}
              {approvalRoles.map((role, index) => (
                <div key={index} className="space-y-2 py-3 px-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                  {/* Role as the primary label for the row */}
                  <label className="block text-base font-medium text-gray-800 mb-2">{role}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      {/* Approver Select with its own label */}
                      <label htmlFor={`approver-${index}`} className="block text-sm font-medium text-gray-600 mb-1">Approver</label>
                      <select
                        id={`approver-${index}`} // Added id for accessibility
                        // Adjusted padding and height to match the input field
                        className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 h-11"
                        value={approvals[index].approver}
                        onChange={(e) => handleApprovalChange(index, 'approver', e.target.value)}
                        disabled={viewMode === 'view'}
                      >
                        <option value="">Select approver</option>
                        {approverOptions.map((name, idx) => (
                          <option key={idx} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      {/* Verified On Input with its own label */}
                      <label htmlFor={`verified-on-${index}`} className="block text-sm font-medium text-gray-600 mb-1">Verified On</label>
                      <input
                        id={`verified-on-${index}`} // Added id for accessibility
                        type="date"
                        // Adjusted padding and height to match the select field
                        className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 h-11"
                        value={approvals[index].date}
                        onChange={(e) => handleApprovalChange(index, 'date', e.target.value)}
                        disabled={viewMode === 'view'}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* KPI Checklist Card */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 bg-blue-50 border-b">
            <h3 className="font-medium">KPI Checklist</h3>
          </div>
          <div className="p-5">
            <div className="space-y-3">
              {kpiItems.map(item => (
                <label
                  key={item.id}
                  className={`flex items-center py-2 px-3 rounded-lg cursor-pointer transition-colors duration-200
                              ${item.completed ? 'bg-green-50 text-green-800' : 'hover:bg-gray-50'}
                              ${viewMode === 'view' ? 'opacity-70 cursor-default' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleKPIItem(item.id)}
                    disabled={viewMode === 'view'}
                    className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 flex-shrink-0"
                  />
                  <span className={`ml-3 text-base flex-grow
                                    ${item.completed ? 'line-through text-gray-600' : 'text-gray-800'}`}>
                    {item.title}
                  </span>
                  {item.required && (
                    <span className="ml-2 text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-full flex-shrink-0">Required</span>
                  )}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step9FinalReview;
