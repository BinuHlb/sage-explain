import React, { useState } from 'react';
import { ListChecks, CalendarClock, DollarSign } from 'lucide-react';

interface Step3ProjectGenerationProps {
  viewMode: 'manager' | 'subcontractor' | 'reviewer';
}

const Step3ProjectGeneration: React.FC<Step3ProjectGenerationProps> = ({ viewMode }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  
  const templates = [
    { id: 'temp1', name: 'Web Development', tasks: 12 },
    { id: 'temp2', name: 'Mobile App Development', tasks: 15 },
    { id: 'temp3', name: 'Database Migration', tasks: 8 },
  ];
  
  const tasks = [
    { id: 'task1', name: 'Initial Requirements Analysis', hours: 8, role: 'Business Analyst' },
    { id: 'task2', name: 'Architecture Design', hours: 16, role: 'Solution Architect' },
    { id: 'task3', name: 'Database Design', hours: 12, role: 'Database Developer' },
    { id: 'task4', name: 'Frontend Development', hours: 40, role: 'Frontend Developer' },
    { id: 'task5', name: 'Backend API Development', hours: 32, role: 'Backend Developer' },
  ];

  const renderManagerView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <ListChecks className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Project & Task Generation</h2>
          <p className="text-gray-600">Auto-generate project and tasks using predefined templates</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        
        <div className="md:col-span-3  rounded-lg">
          <h3 className="text-lg font-medium mb-3">Template Tasks</h3>
          <div className="overflow-scroll rounded-md border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 border">
  <thead className="bg-gray-100">
    <tr>
      <th rowSpan={2} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
        Task
      </th>
      <th colSpan={4} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
        <div className="flex items-center">
          <CalendarClock className="w-4 h-4 mr-1" />
          <span>Hours</span>
        </div>
      </th>
      <th colSpan={4} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
        <div className="flex items-center">
          <DollarSign className="w-4 h-4 mr-1" />
          <span>Budget</span>
        </div>
      </th>
    </tr>
    <tr>
      {['UAE Budgeted', 'UAE Actual', 'Subcontractor Budgeted', 'Subcontractor Actual'].map((label, i) => (
        <th key={`h-${i}`} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
          {label}
        </th>
      ))}
      {['UAE Budgeted', 'UAE Actual', 'Subcontractor Budgeted', 'Subcontractor Actual'].map((label, i) => (
        <th key={`b-${i}`} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
          {label}
        </th>
      ))}
    </tr>
  </thead>

  <tbody className="bg-white divide-y divide-gray-200">
    {[
      {
        id: 1,
        name: 'Electrical Setup',
        role: 'Engineer',
        hours: [10, 8, 5, 6],
        budget: [750, 600, 375, 450],
      },
      {
        id: 2,
        name: 'Plumbing Maintenance',
        role: 'Technician',
        hours: [12, 11, 4, 5],
        budget: [900, 825, 300, 375],
      },
      {
        id: 3,
        name: 'Interior Finishing',
        role: 'Designer',
        hours: [15, 13, 6, 7],
        budget: [1125, 975, 450, 525],
      }
    ].map((task) => (
      <tr key={task.id}>
        <td className="px-4 py-3 border">
          <div className="text-sm font-medium">{task.name}</div>
          <div className="text-xs text-gray-500">{task.role}</div>
        </td>
        {task.hours.map((h, i) => (
          <td key={`h-${i}`} className="px-4 py-3 text-sm border">{h} hrs</td>
        ))}
        {task.budget.map((b, i) => (
          <td key={`b-${i}`} className="px-4 py-3 text-sm border">${b}</td>
        ))}
      </tr>
    ))}
  </tbody>

  <tfoot className="bg-gray-50">
    <tr>
      <td className="px-4 py-2 text-sm font-medium border">Total</td>
      {[37, 32, 15, 18].map((h, i) => (
        <td key={`tf-h-${i}`} className="px-4 py-2 text-sm font-medium border">{h} hrs</td>
      ))}
      {[2775, 2400, 1125, 1350].map((b, i) => (
        <td key={`tf-b-${i}`} className="px-4 py-2 text-sm font-medium border">${b}</td>
      ))}
    </tr>
  </tfoot>
</table>

          </div>
          
          <div className="flex justify-end mt-4">
            <button 
              className={`
                px-4 py-2 rounded-md text-white font-medium
                ${selectedTemplate 
                  ? 'bg-blue-500 hover:bg-blue-600' 
                  : 'bg-gray-300 cursor-not-allowed'}
              `}
              disabled={!selectedTemplate}
            >
              Generate Project
            </button>
          </div>
        </div>
        <div className="md:col-span-3 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Project Templates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template) => (
              <div 
                key={template.id}
                className={`
                  p-3 border rounded-md cursor-pointer transition-colors
                  ${selectedTemplate === template.id 
                    ? 'bg-blue-50 border-blue-300' 
                    : 'bg-white hover:bg-blue-50'}
                `}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="font-medium">{template.name}</div>
                <div className="text-sm text-gray-600 mt-1">{template.tasks} predefined tasks</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubcontractorView = () => (
    <div className="p-6 text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
        <ListChecks className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-medium text-gray-800 mb-2">Project Generation in Progress</h3>
      <p className="text-gray-600 max-w-md mx-auto">
        Your project and tasks are being generated based on predefined templates.
        You will be notified once tasks are ready for you to start working on them.
      </p>
    </div>
  );

  const renderReviewerView = () => (
    <div>
      <h3 className="text-lg font-medium mb-3">Template Usage Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-xl font-semibold text-blue-600">12</div>
          <div className="text-sm text-gray-600">Templates Available</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-xl font-semibold text-green-600">86%</div>
          <div className="text-sm text-gray-600">Template Usage Rate</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-xl font-semibold text-purple-600">8.5 hrs</div>
          <div className="text-sm text-gray-600">Avg. Time Saved per Project</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="px-4 py-3 bg-gray-50 border-b">
          <h4 className="font-medium">Most Used Templates</h4>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Template</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage Count</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Budget</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm">Web Development</td>
              <td className="px-4 py-3 text-sm">32</td>
              <td className="px-4 py-3 text-sm">$12,500</td>
              <td className="px-4 py-3 text-sm">94%</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">Mobile App Development</td>
              <td className="px-4 py-3 text-sm">18</td>
              <td className="px-4 py-3 text-sm">$22,800</td>
              <td className="px-4 py-3 text-sm">91%</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">Database Migration</td>
              <td className="px-4 py-3 text-sm">15</td>
              <td className="px-4 py-3 text-sm">$8,750</td>
              <td className="px-4 py-3 text-sm">88%</td>
            </tr>
          </tbody>
        </table>
      </div>
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

export default Step3ProjectGeneration;