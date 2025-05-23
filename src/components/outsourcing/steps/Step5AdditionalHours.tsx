import React, { useState } from 'react';
import { Clock, Plus, Check, X } from 'lucide-react';

interface Step5AdditionalHoursProps {
  viewMode: 'manager' | 'subcontractor' | 'reviewer';
}

const Step5AdditionalHours: React.FC<Step5AdditionalHoursProps> = ({ viewMode }) => {
  const [requestHours, setRequestHours] = useState<number>(10);
  const [requestReason, setRequestReason] = useState<string>('');
  
  const renderManagerView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <Clock className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Additional Hours Workflow</h2>
          <p className="text-gray-600">Review and approve requests for additional hours</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border overflow-hidden mb-6">
        <div className="px-4 py-3 bg-blue-50 border-b">
          <h3 className="font-medium">Pending Approval Requests</h3>
        </div>
        
        <div className="divide-y divide-gray-100">
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Frontend Development</span>
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800">+15 Hours</span>
              </div>
              <span className="text-xs text-gray-500">Requested: Oct 22, 2023</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium">From:</span> TechSolutions Inc
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium">Reason:</span> Additional complexity in implementing responsive design for various devices and ensuring cross-browser compatibility.
            </p>
            <div className="mt-3 flex justify-end space-x-2">
              <button className="flex items-center px-3 py-1.5 text-sm text-red-600 font-medium rounded-md border border-red-200 hover:bg-red-50">
                <X className="w-4 h-4 mr-1" />
                <span>Reject</span>
              </button>
              <button className="flex items-center px-3 py-1.5 text-sm text-white font-medium rounded-md bg-green-500 hover:bg-green-600">
                <Check className="w-4 h-4 mr-1" />
                <span>Approve</span>
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Database Migration</span>
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800">+8 Hours</span>
              </div>
              <span className="text-xs text-gray-500">Requested: Oct 23, 2023</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium">From:</span> DataMasters
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium">Reason:</span> Discovered data inconsistencies requiring additional cleaning and transformation steps before migration can be completed.
            </p>
            <div className="mt-3 flex justify-end space-x-2">
              <button className="flex items-center px-3 py-1.5 text-sm text-red-600 font-medium rounded-md border border-red-200 hover:bg-red-50">
                <X className="w-4 h-4 mr-1" />
                <span>Reject</span>
              </button>
              <button className="flex items-center px-3 py-1.5 text-sm text-white font-medium rounded-md bg-green-500 hover:bg-green-600">
                <Check className="w-4 h-4 mr-1" />
                <span>Approve</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="px-4 py-3 bg-gray-50 border-b">
          <h3 className="font-medium">Recent Approvals</h3>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subcontractor</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Additional Hours</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved By</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm">UI Enhancement</td>
              <td className="px-4 py-3 text-sm">DevPro Services</td>
              <td className="px-4 py-3 text-sm">+12 Hours</td>
              <td className="px-4 py-3 text-sm">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Approved</span>
              </td>
              <td className="px-4 py-3 text-sm">John Manager</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">Backend API</td>
              <td className="px-4 py-3 text-sm">TechSolutions Inc</td>
              <td className="px-4 py-3 text-sm">+8 Hours</td>
              <td className="px-4 py-3 text-sm">
                <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Rejected</span>
              </td>
              <td className="px-4 py-3 text-sm">Jane Manager</td>
            </tr>
          </tbody>
        </table>
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
          <h2 className="text-xl font-semibold text-gray-800">Request Additional Hours</h2>
          <p className="text-gray-600">Submit a request if the allocated hours are insufficient</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg border overflow-hidden">
            <div className="px-4 py-3 bg-blue-50 border-b">
              <h3 className="font-medium">Your Current Tasks</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="p-4 hover:bg-gray-50 cursor-pointer">
                <div className="font-medium">Frontend Development</div>
                <p className="text-sm text-gray-600 mt-1">Allocated: 40 hours</p>
                <p className="text-sm text-gray-600">Used: 32 hours</p>
              </div>
              <div className="p-4 hover:bg-gray-50 cursor-pointer">
                <div className="font-medium">Backend API Creation</div>
                <p className="text-sm text-gray-600 mt-1">Allocated: 30 hours</p>
                <p className="text-sm text-gray-600">Used: 28 hours</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-white rounded-lg border overflow-hidden">
            <div className="px-4 py-3 bg-blue-50 border-b">
              <h3 className="font-medium">Request History</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="p-4">
                <div className="flex justify-between">
                  <span className="font-medium">Frontend Development</span>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Requested: +15 hours</p>
                <p className="text-sm text-gray-600">Submitted: Oct 22, 2023</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg border overflow-hidden">
            <div className="px-4 py-3 bg-blue-50 border-b">
              <h3 className="font-medium">New Request</h3>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Task</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Backend API Creation</option>
                  <option>Frontend Development</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Hours Needed</label>
                <div className="flex items-center">
                  <button 
                    className="px-3 py-1 bg-gray-200 rounded-l-md"
                    onClick={() => setRequestHours(Math.max(1, requestHours - 1))}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    className="w-20 p-1 text-center border-t border-b"
                    value={requestHours}
                    onChange={(e) => setRequestHours(parseInt(e.target.value) || 0)}
                  />
                  <button 
                    className="px-3 py-1 bg-gray-200 rounded-r-md"
                    onClick={() => setRequestHours(requestHours + 1)}
                  >
                    +
                  </button>
                  <span className="ml-2 text-sm text-gray-600">hours</span>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Additional Hours</label>
                <textarea 
                  className="w-full p-2 border rounded-md min-h-32"
                  placeholder="Please provide a detailed explanation of why additional hours are needed..."
                  value={requestReason}
                  onChange={(e) => setRequestReason(e.target.value)}
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button 
                  className={`
                    flex items-center px-4 py-2 rounded-md text-white font-medium
                    ${requestReason.length > 10 
                      ? 'bg-blue-500 hover:bg-blue-600' 
                      : 'bg-gray-300 cursor-not-allowed'}
                  `}
                  disabled={requestReason.length <= 10}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  <span>Submit Request</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviewerView = () => (
    <div>
      <h3 className="text-lg font-medium mb-3">Additional Hours Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-xl font-semibold text-blue-600">32</div>
          <div className="text-sm text-gray-600">Total Requests (YTD)</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-xl font-semibold text-green-600">68%</div>
          <div className="text-sm text-gray-600">Approval Rate</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-xl font-semibold text-amber-600">+18%</div>
          <div className="text-sm text-gray-600">Avg. Budget Impact</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border overflow-hidden mb-6">
        <div className="px-4 py-3 bg-gray-50 border-b">
          <h4 className="font-medium">Hours Request Trends</h4>
        </div>
        <div className="p-4">
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart showing additional hours requests over time</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="px-4 py-3 bg-gray-50 border-b">
          <h4 className="font-medium">Top Requesting Subcontractors</h4>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subcontractor</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requests</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approval Rate</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Additional Hours</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm">TechSolutions Inc</td>
              <td className="px-4 py-3 text-sm">12</td>
              <td className="px-4 py-3 text-sm">75%</td>
              <td className="px-4 py-3 text-sm">10.5 hours</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">DevPro Services</td>
              <td className="px-4 py-3 text-sm">8</td>
              <td className="px-4 py-3 text-sm">62%</td>
              <td className="px-4 py-3 text-sm">12.3 hours</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">DataMasters</td>
              <td className="px-4 py-3 text-sm">5</td>
              <td className="px-4 py-3 text-sm">80%</td>
              <td className="px-4 py-3 text-sm">8.2 hours</td>
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

export default Step5AdditionalHours;