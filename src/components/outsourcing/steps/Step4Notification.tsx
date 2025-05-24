import React from 'react';
import { Bell, Mail, MessageSquare } from 'lucide-react';

interface Step4NotificationProps {
  viewMode: 'manager' | 'subcontractor' | 'reviewer';
}

const Step4Notification: React.FC<Step4NotificationProps> = ({ viewMode }) => {
  const renderManagerView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <Bell className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Notification & Task Access</h2>
          <p className="text-gray-600">Subcontractors receive notifications and can access assigned tasks</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 bg-gray-50">
          <h3 className="text-lg font-medium mb-3">Notification Templates</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white border rounded-md">
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-medium">Task Assignment Notification</span>
              </div>
              <div className="text-sm bg-gray-50 p-3 rounded border">
                <p className="mb-2"><strong>Subject:</strong> New Task Assignment: [Task Name]</p>
                <p><strong>Body:</strong> Dear [Subcontractor], you have been assigned a new task in the [Project Name] project. Please log in to the PMS to view task details and deadlines.</p>
              </div>
              <div className="mt-2 flex justify-end">
                <button className="text-blue-600 text-sm font-medium">Edit Template</button>
              </div>
            </div>
            
            <div className="p-4 bg-white border rounded-md">
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-medium">Deadline Reminder</span>
              </div>
              <div className="text-sm bg-gray-50 p-3 rounded border">
                <p className="mb-2"><strong>Subject:</strong> Reminder: [Task Name] Due in [X] Days</p>
                <p><strong>Body:</strong> This is a friendly reminder that your assigned task [Task Name] is due in [X] days. Please ensure timely completion.</p>
              </div>
              <div className="mt-2 flex justify-end">
                <button className="text-blue-600 text-sm font-medium">Edit Template</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-4 bg-gray-50">
          <h3 className="text-lg font-medium mb-3">Notification History</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white border rounded-md">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="font-medium">Task Assignment</span>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Notified TechSolutions Inc about Frontend Development task</p>
              <div className="mt-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-800">Delivered</span>
              </div>
            </div>
            
            <div className="p-3 bg-white border rounded-md">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="font-medium">Task Assignment</span>
                </div>
                <span className="text-xs text-gray-500">3 hours ago</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Notified DevPro Services about UI Enhancement task</p>
              <div className="mt-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-800">Delivered</span>
              </div>
            </div>
            
            <div className="p-3 bg-white border rounded-md">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="font-medium">Deadline Reminder</span>
                </div>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Reminded DataMasters about Database Migration task</p>
              <div className="mt-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-800">Delivered</span>
              </div>
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
          <Bell className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Your Task Notifications</h2>
          <p className="text-gray-600">You have been assigned tasks for the following projects</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="px-4 py-3 bg-blue-50 border-b">
          <div className="flex items-center">
            <Bell className="w-5 h-5 text-blue-500 mr-2" />
            <span className="font-medium">New Tasks Assigned</span>
          </div>
        </div>
        
        <div className="divide-y divide-gray-100">
          <div className="p-4 hover:bg-gray-50">
            <div className="flex justify-between">
              <div className="font-medium">Frontend Development</div>
              <span className="text-xs text-gray-500">Assigned: Oct 16, 2025</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Part of WO-2025-001: Website Development Project</p>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500">Estimated hours: 40</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-xs text-gray-500">Due: Oct 30, 2025</span>
              </div>
              <button className="px-3 py-1 text-sm text-blue-600 font-medium rounded-md border border-blue-200 hover:bg-blue-50">
                View Details
              </button>
            </div>
          </div>
          
          <div className="p-4 hover:bg-gray-50">
            <div className="flex justify-between">
              <div className="font-medium">Backend API Creation</div>
              <span className="text-xs text-gray-500">Assigned: Oct 16, 2025</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Part of WO-2025-001: Website Development Project</p>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500">Estimated hours: 30</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-xs text-gray-500">Due: Nov 5, 2025</span>
              </div>
              <button className="px-3 py-1 text-sm text-blue-600 font-medium rounded-md border border-blue-200 hover:bg-blue-50">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start">
          <MessageSquare className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-800">Access Instructions</h4>
            <p className="text-sm text-yellow-700 mt-1">
              You can log time and update progress directly in the PMS for your assigned tasks.
              Click on "View Details" to access the task page where you can track your work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviewerView = () => (
    <div>
      <h3 className="text-lg font-medium mb-3">Notification System Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-xl font-semibold text-blue-600">98.7%</div>
          <div className="text-sm text-gray-600">Email Delivery Rate</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-xl font-semibold text-green-600">91%</div>
          <div className="text-sm text-gray-600">Open Rate</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-xl font-semibold text-purple-600">82%</div>
          <div className="text-sm text-gray-600">Task Access within 24h</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="px-4 py-3 bg-gray-50 border-b">
          <h4 className="font-medium">Recent Notification Activity</h4>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipient</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sent</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action Taken</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm">Task Assignment</td>
              <td className="px-4 py-3 text-sm">TechSolutions Inc</td>
              <td className="px-4 py-3 text-sm">2 hours ago</td>
              <td className="px-4 py-3 text-sm">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Opened</span>
              </td>
              <td className="px-4 py-3 text-sm">Viewed task</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">Task Assignment</td>
              <td className="px-4 py-3 text-sm">DevPro Services</td>
              <td className="px-4 py-3 text-sm">3 hours ago</td>
              <td className="px-4 py-3 text-sm">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Opened</span>
              </td>
              <td className="px-4 py-3 text-sm">Started work</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">Deadline Reminder</td>
              <td className="px-4 py-3 text-sm">DataMasters</td>
              <td className="px-4 py-3 text-sm">1 day ago</td>
              <td className="px-4 py-3 text-sm">
                <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Delivered</span>
              </td>
              <td className="px-4 py-3 text-sm">No action yet</td>
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

export default Step4Notification;