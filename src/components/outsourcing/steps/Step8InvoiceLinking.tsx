import React, { useState } from 'react';
import { FileText, Upload, Search, Download, Eye, AlertCircle } from 'lucide-react';

interface Step8InvoiceLinkingProps {
  viewMode: 'manager' | 'subcontractor' | 'reviewer';
}

interface Invoice {
  id: string;
  workOrderId: string;
  amount: number;
  issueDate: string;
  status: 'pending' | 'approved' | 'rejected';
  fileUrl?: string;
}

const Step8InvoiceLinking: React.FC<Step8InvoiceLinkingProps> = ({ viewMode }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const mockInvoices: Invoice[] = [
    {
      id: 'INV-2023-001',
      workOrderId: 'WO-2023-001',
      amount: 12500,
      issueDate: '2023-10-15',
      status: 'approved',
      fileUrl: '#'
    },
    {
      id: 'INV-2023-002',
      workOrderId: 'WO-2023-002',
      amount: 8750,
      issueDate: '2023-10-18',
      status: 'pending',
      fileUrl: '#'
    }
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const renderManagerView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Invoice Management</h2>
          <p className="text-gray-600">Link and manage invoices for work orders</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg border overflow-hidden">
            <div className="px-4 py-3 bg-blue-50 border-b">
              <h3 className="font-medium">Invoice List</h3>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search invoices..."
                    className="w-full pl-10 pr-4 py-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {mockInvoices.map((invoice) => (
                  <div key={invoice.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">{invoice.id}</div>
                        <div className="text-sm text-gray-600">WO: {invoice.workOrderId}</div>
                        <div className="text-sm text-gray-600">Date: {invoice.issueDate}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-lg">${invoice.amount}</div>
                        <span className={`
                          inline-block px-2 py-1 text-xs rounded-full
                          ${invoice.status === 'approved' 
                            ? 'bg-green-100 text-green-800' 
                            : invoice.status === 'rejected'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'}
                        `}>
                          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end space-x-2">
                      <button className="flex items-center px-3 py-1.5 text-sm text-blue-600 font-medium rounded-md border border-blue-200 hover:bg-blue-50">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </button>
                      <button className="flex items-center px-3 py-1.5 text-sm text-blue-600 font-medium rounded-md border border-blue-200 hover:bg-blue-50">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white rounded-lg border overflow-hidden">
            <div className="px-4 py-3 bg-blue-50 border-b">
              <h3 className="font-medium">Upload New Invoice</h3>
            </div>
            <div className="p-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <div className="text-sm text-gray-600 mb-4">
                  Drag and drop your invoice here, or click to select
                </div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="invoice-upload"
                  accept=".pdf,.doc,.docx"
                />
                <label
                  htmlFor="invoice-upload"
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
                >
                  Select File
                </label>
                {selectedFile && (
                  <div className="mt-4 text-sm text-gray-600">
                    Selected: {selectedFile.name}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <button
                  className={`
                    w-full py-2 px-4 rounded-md font-medium
                    ${selectedFile 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'}
                  `}
                  disabled={!selectedFile}
                >
                  Upload Invoice
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
              <div className="text-sm text-blue-700">
                <strong>Note:</strong> Only PDF and Word documents are accepted. Maximum file size is 10MB.
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
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Your Invoices</h2>
          <p className="text-gray-600">View and manage your submitted invoices</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="px-4 py-3 bg-blue-50 border-b">
          <h3 className="font-medium">Invoice History</h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {mockInvoices.map((invoice) => (
              <div key={invoice.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{invoice.id}</div>
                    <div className="text-sm text-gray-600">Submitted: {invoice.issueDate}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-lg">${invoice.amount}</div>
                    <span className={`
                      inline-block px-2 py-1 text-xs rounded-full
                      ${invoice.status === 'approved' 
                        ? 'bg-green-100 text-green-800' 
                        : invoice.status === 'rejected'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'}
                    `}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="flex items-center px-3 py-1.5 text-sm text-blue-600 font-medium rounded-md border border-blue-200 hover:bg-blue-50">
                    <Download className="w-4 h-4 mr-1" />
                    Download Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviewerView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Invoice Review</h2>
          <p className="text-gray-600">Review and approve submitted invoices</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="px-4 py-3 bg-blue-50 border-b">
          <h3 className="font-medium">Pending Reviews</h3>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Invoice ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Work Order
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Submission Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockInvoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{invoice.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{invoice.workOrderId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${invoice.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{invoice.issueDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`
                    px-2 py-1 text-xs rounded-full
                    ${invoice.status === 'approved' 
                      ? 'bg-green-100 text-green-800' 
                      : invoice.status === 'rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'}
                  `}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Review</button>
                  <button className="text-blue-600 hover:text-blue-900">Download</button>
                </td>
              </tr>
            ))}
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

export default Step8InvoiceLinking;