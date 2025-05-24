import React from 'react';
import { FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { jofWoData } from '../jofData';

interface Step1JOFApprovalProps {
  viewMode: 'manager' | 'subcontractor' | 'reviewer';
}

const Step1JOFApproval: React.FC<Step1JOFApprovalProps> = ({ viewMode }) => {
  const renderManagerView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">JOF Approval Trigger</h2>
          <p className="text-gray-600">Input: JOF approved in Sage X3</p>
        </div>
      </div>
      <div className="relative p-4 bg-gray-50 rounded-lg">
  <h3 className="text-lg font-medium mb-2">JOF to WO Conversion Log</h3>
  <p className="text-xs text-gray-400 mb-1">← Scroll right to see all columns</p>

  <div className="relative overflow-x-auto">
   
    <table className="min-w-full divide-y divide-gray-200 text-sm">
      <thead className="bg-gray-100">
        <tr>
          {[
            'JOF ID', 'WO', 'Verified By', 'Reg Auth', 'Signed On', 'Project Code',
            'Coat', 'Date', 'Scope', 'Category', 'Fees', 'Job Status',
            'Signed Year', 'Managers', 'Report Type', 'Period', 'Date of Report'
          ].map((header, idx) => (
            <th key={idx} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
  {jofWoData.map((item, i) => (
    <tr key={i} className="hover:bg-gray-100 cursor-pointer">
      <td className="px-4 py-3 whitespace-nowrap">{item.jofId}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.woId}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.verifiedBy}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.regAuth}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.signedOn}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.projectCode}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.coat}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.date}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.scope}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.category}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.fees}</td>
      <td className="px-4 py-3 whitespace-nowrap">
        <span className={`px-2 py-1 text-xs rounded-full whitespace-nowrap ${
          item.jobStatus === 'Completed'
            ? 'bg-green-100 text-green-800'
            : item.jobStatus === 'In Progress'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {item.jobStatus}
        </span>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">{item.signedYear}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.manager}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.reportType}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.period}</td>
      <td className="px-4 py-3 whitespace-nowrap">{item.reportDate}</td>
    </tr>
  ))}
</tbody>
    </table>
  </div>
</div>

      <div className="space-y-4">
        <div className="flex items-start space-x-8">
          <div className="flex-1 border rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-medium mb-2">Sage X3</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white border rounded-md">
                <div className="flex justify-between">
                  <span className="font-medium">JOF-2025-001</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Approved</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Website Development Project</p>
                <div className="mt-2 text-xs text-gray-500">Approved on: 10/15/2025</div>
              </div>
              
              <div className="p-3 bg-white border rounded-md">
                <div className="flex justify-between">
                  <span className="font-medium">JOF-2025-002</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Approved</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Mobile App Enhancement</p>
                <div className="mt-2 text-xs text-gray-500">Approved on: 10/18/2025</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-blue-500" />
          </div>
          
          <div className="flex-1 border rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-medium mb-2">PMS</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white border rounded-md">
                <div className="flex justify-between">
                  <span className="font-medium">WO-2025-001</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Created</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Linked to JOF-2025-001</p>
                <div className="mt-2 text-xs text-gray-500">Created on: 10/15/2025</div>
              </div>
              
              <div className="p-3 bg-white border rounded-md">
                <div className="flex justify-between">
                  <span className="font-medium">WO-2025-002</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Created</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Linked to JOF-2025-002</p>
                <div className="mt-2 text-xs text-gray-500">Created on: 10/18/2025</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="flex items-start">
            <div className="mr-3 mt-1">
              <CheckCircle className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h4 className="font-medium text-blue-700">Automatic Integration</h4>
              <p className="text-sm text-blue-600 mt-1">
                When a JOF is approved in Sage X3, an API trigger automatically creates a corresponding Work Order in the PMS system.
                This ensures seamless workflow transition without manual intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubcontractorView = () => (
    <div className="flex items-center justify-center h-64">
      <div className="text-center p-6">
        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-500">JOF Approval Stage</h3>
        <p className="text-gray-500 mt-2">
          This step is handled internally. You'll be notified when tasks are assigned to you.
        </p>
      </div>
    </div>
  );

  const renderReviewerView = () => (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-medium mb-3">JOF to WO Conversion Log</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">JOF ID</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WO ID</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created On</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-3 text-sm">JOF-2025-001</td>
            <td className="px-4 py-3 text-sm">WO-2025-001</td>
            <td className="px-4 py-3 text-sm">10/15/2025 09:32 AM</td>
            <td className="px-4 py-3">
              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Success</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm">JOF-2025-002</td>
            <td className="px-4 py-3 text-sm">WO-2025-002</td>
            <td className="px-4 py-3 text-sm">10/18/2025 02:14 PM</td>
            <td className="px-4 py-3">
              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Success</span>
            </td>
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

export default Step1JOFApproval;