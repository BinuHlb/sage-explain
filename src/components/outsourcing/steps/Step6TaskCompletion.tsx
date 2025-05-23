import React, { useState } from 'react';
import { Clock, CheckSquare, AlertCircle } from 'lucide-react';

interface Step6TaskCompletionProps {
  viewMode: 'manager' | 'subcontractor' | 'reviewer';
}

interface TimeEntry {
  date: string;
  hours: number;
  description: string;
}

interface KPIItem {
  id: string;
  title: string;
  completed: boolean;
  required: boolean;
}

const Step6TaskCompletion: React.FC<Step6TaskCompletionProps> = ({ viewMode }) => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  const [newEntry, setNewEntry] = useState<TimeEntry>({
    date: new Date().toISOString().split('T')[0],
    hours: 0,
    description: ''
  });
  
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

  const handleTimeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeEntries([...timeEntries, newEntry]);
    setNewEntry({
      date: new Date().toISOString().split('T')[0],
      hours: 0,
      description: ''
    });
  };

  const toggleKPIItem = (id: string) => {
    setKpiItems(kpiItems.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);
  const allRequiredCompleted = kpiItems
    .filter(item => item.required)
    .every(item => item.completed);

  const renderManagerView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <CheckSquare className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Task Completion Review</h2>
          <p className="text-gray-600">Review time entries and KPI checklist</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="px-4 py-3 bg-blue-50 border-b">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-blue-500 mr-2" />
              <h3 className="font-medium">Time Entries</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {timeEntries.map((entry, index) => (
                <div key={index} className="border rounded p-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{entry.date}</span>
                    <span className="text-blue-600 font-medium">{entry.hours} hours</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{entry.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Hours:</span>
                <span className="text-blue-600 font-medium">{totalHours} hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="px-4 py-3 bg-blue-50 border-b">
            <div className="flex items-center">
              <CheckSquare className="w-5 h-5 text-blue-500 mr-2" />
              <h3 className="font-medium">KPI Checklist</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {kpiItems.map(item => (
                <div key={item.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleKPIItem(item.id)}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                  <span className="ml-3 text-gray-700">{item.title}</span>
                  {item.required && (
                    <span className="ml-2 text-xs text-red-500">*Required</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubcontractorView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <Clock className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Log Time & Complete Tasks</h2>
          <p className="text-gray-600">Track your work and verify completion</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="px-4 py-3 bg-blue-50 border-b">
            <h3 className="font-medium">Log Time</h3>
          </div>
          <div className="p-4">
            <form onSubmit={handleTimeSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={newEntry.date}
                  onChange={e => setNewEntry({ ...newEntry, date: e.target.value })}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hours</label>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={newEntry.hours}
                  onChange={e => setNewEntry({ ...newEntry, hours: parseFloat(e.target.value) })}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newEntry.description}
                  onChange={e => setNewEntry({ ...newEntry, description: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  rows={3}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Log Time
              </button>
            </form>

            <div className="mt-6">
              <h4 className="font-medium mb-3">Recent Entries</h4>
              <div className="space-y-3">
                {timeEntries.map((entry, index) => (
                  <div key={index} className="border rounded p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{entry.date}</span>
                      <span className="text-blue-600 font-medium">{entry.hours} hours</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{entry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="px-4 py-3 bg-blue-50 border-b">
            <h3 className="font-medium">Completion Checklist</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {kpiItems.map(item => (
                <div key={item.id} className="flex items-start">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleKPIItem(item.id)}
                    className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                  <div className="ml-3">
                    <span className="text-gray-700 block">{item.title}</span>
                    {item.required && (
                      <span className="text-xs text-red-500">This item is required</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {!allRequiredCompleted && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-sm text-yellow-700">
                    All required items must be completed before marking the task as done
                  </span>
                </div>
              </div>
            )}

            <button
              className={`
                w-full mt-4 py-2 px-4 rounded-md font-medium
                ${allRequiredCompleted
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'}
              `}
              disabled={!allRequiredCompleted}
            >
              Mark Task as Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviewerView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <CheckSquare className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Task Completion Overview</h2>
          <p className="text-gray-600">Review completion status and time logs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="px-4 py-3 bg-blue-50 border-b">
            <h3 className="font-medium">Time Summary</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <span className="font-medium">Total Hours Logged</span>
                <span className="text-blue-600 font-medium">{totalHours} hours</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <span className="font-medium">Completion Rate</span>
                <span className="text-green-600 font-medium">
                  {Math.round((kpiItems.filter(item => item.completed).length / kpiItems.length) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="px-4 py-3 bg-blue-50 border-b">
            <h3 className="font-medium">KPI Status</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {kpiItems.map(item => (
                <div key={item.id} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                  <span className="text-gray-700">{item.title}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.completed
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.completed ? 'Completed' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
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

export default Step6TaskCompletion;