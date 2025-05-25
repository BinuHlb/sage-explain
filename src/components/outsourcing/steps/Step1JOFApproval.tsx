import React, { useState, useMemo } from 'react';
import { FileText, ArrowRight, CheckCircle, ChevronUp, ChevronDown } from 'lucide-react'; // Added ChevronUp/Down for sort icons


// --- jofData.ts (Simulated Data) ---
// In a real application, this would likely come from an API or a larger data source.
// Ensure this file is in the same directory as Step1JOFApproval.tsx or adjust the import path.
export const jofWoData = [
  {
    jofId: 'JOF-2025-001', woId: 'WO-2025-001', verifiedBy: 'John Doe', regAuth: 'NY',
    signedOn: '2025-10-15', projectCode: 'WEBDEV-001', coat: 'A', date: '2025-10-15',
    scope: 'Website Build', category: 'IT', fees: 15000, jobStatus: 'Completed',
    signedYear: 2025, manager: 'Alice Smith', reportType: 'Monthly', period: 'Q4',
    reportDate: '2025-11-01'
  },
  {
    jofId: 'JOF-2025-002', woId: 'WO-2025-002', verifiedBy: 'Jane Doe', regAuth: 'CA',
    signedOn: '2025-10-18', projectCode: 'MOBILE-002', coat: 'B', date: '2025-10-18',
    scope: 'Mobile App Dev', category: 'IT', fees: 20000, jobStatus: 'In Progress',
    signedYear: 2025, manager: 'Bob Johnson', reportType: 'Quarterly', period: 'Q4',
    reportDate: '2025-11-05'
  },
  {
    jofId: 'JOF-2025-003', woId: 'WO-2025-003', verifiedBy: 'Peter Jones', regAuth: 'TX',
    signedOn: '2025-09-20', projectCode: 'CONSULT-003', coat: 'C', date: '2025-09-20',
    scope: 'Consulting Services', category: 'Services', fees: 5000, jobStatus: 'Completed',
    signedYear: 2025, manager: 'Alice Smith', reportType: 'Annual', period: 'FY',
    reportDate: '2025-10-01'
  },
  {
    jofId: 'JOF-2025-004', woId: 'WO-2025-004', verifiedBy: 'Sarah Lee', regAuth: 'FL',
    signedOn: '2025-11-01', projectCode: 'MARKET-004', coat: 'A', date: '2025-11-01',
    scope: 'Marketing Campaign', category: 'Marketing', fees: 8000, jobStatus: 'Pending',
    signedYear: 2025, manager: 'Charlie Brown', reportType: 'Monthly', period: 'Q4',
    reportDate: '2025-11-10'
  },
  {
    jofId: 'JOF-2025-005', woId: 'WO-2025-005', verifiedBy: 'David Kim', regAuth: 'GA',
    signedOn: '2025-10-25', projectCode: 'HR-005', coat: 'B', date: '2025-10-25',
    scope: 'HR System Upgrade', category: 'HR', fees: 12000, jobStatus: 'In Progress',
    signedYear: 2025, manager: 'Bob Johnson', reportType: 'Quarterly', period: 'Q4',
    reportDate: '2025-11-08'
  },
  {
    jofId: 'JOF-2025-006', woId: 'WO-2025-006', verifiedBy: 'Emily Chen', regAuth: 'WA',
    signedOn: '2025-09-10', projectCode: 'DESIGN-006', coat: 'C', date: '2025-09-10',
    scope: 'UI/UX Design', category: 'Design', fees: 7500, jobStatus: 'Completed',
    signedYear: 2025, manager: 'Alice Smith', reportType: 'Monthly', period: 'Q3',
    reportDate: '2025-10-05'
  },
  {
    jofId: 'JOF-2025-007', woId: 'WO-2025-007', verifiedBy: 'Frank White', regAuth: 'OR',
    signedOn: '2025-11-15', projectCode: 'SALES-007', coat: 'A', date: '2025-11-15',
    scope: 'Sales Training', category: 'Sales', fees: 6000, jobStatus: 'Pending',
    signedYear: 2025, manager: 'Charlie Brown', reportType: 'Annual', period: 'FY',
    reportDate: '2025-11-20'
  },
  {
    jofId: 'JOF-2025-008', woId: 'WO-2025-008', verifiedBy: 'Grace Hall', regAuth: 'AZ',
    signedOn: '2025-10-01', projectCode: 'OPS-008', coat: 'B', date: '2025-10-01',
    scope: 'Operations Review', category: 'Operations', fees: 9000, jobStatus: 'Completed',
    signedYear: 2025, manager: 'Bob Johnson', reportType: 'Quarterly', period: 'Q4',
    reportDate: '2025-10-10'
  },
  {
    jofId: 'JOF-2025-009', woId: 'WO-2025-009', verifiedBy: 'Henry Green', regAuth: 'CO',
    signedOn: '2025-11-20', projectCode: 'FINANCE-009', coat: 'C', date: '2025-11-20',
    scope: 'Financial Audit', category: 'Finance', fees: 18000, jobStatus: 'In Progress',
    signedYear: 2025, manager: 'Alice Smith', reportType: 'Monthly', period: 'Q4',
    reportDate: '2025-11-25'
  },
  {
    jofId: 'JOF-2025-010', woId: 'WO-2025-010', verifiedBy: 'Ivy Black', regAuth: 'NV',
    signedOn: '2025-09-05', projectCode: 'LEGAL-010', coat: 'A', date: '2025-09-05',
    scope: 'Legal Review', category: 'Legal', fees: 4000, jobStatus: 'Completed',
    signedYear: 2025, manager: 'Charlie Brown', reportType: 'Annual', period: 'FY',
    reportDate: '2025-09-15'
  },
  {
    jofId: 'JOF-2025-011', woId: 'WO-2025-011', verifiedBy: 'Jack White', regAuth: 'UT',
    signedOn: '2025-12-01', projectCode: 'IT-011', coat: 'B', date: '2025-12-01',
    scope: 'Network Upgrade', category: 'IT', fees: 25000, jobStatus: 'Pending',
    signedYear: 2025, manager: 'Bob Johnson', reportType: 'Monthly', period: 'Q4',
    reportDate: '2025-12-05'
  },
  {
    jofId: 'JOF-2025-012', woId: 'WO-2025-012', verifiedBy: 'Karen Green', regAuth: 'ID',
    signedOn: '2025-11-10', projectCode: 'HR-012', coat: 'C', date: '2025-11-10',
    scope: 'Employee Training', category: 'HR', fees: 7000, jobStatus: 'In Progress',
    signedYear: 2025, manager: 'Alice Smith', reportType: 'Quarterly', period: 'Q4',
    reportDate: '2025-11-18'
  },
];

interface JofWoDataItem {
  jofId: string;
  woId: string;
  verifiedBy: string;
  regAuth: string;
  signedOn: string;
  projectCode: string;
  coat: string;
  date: string;
  scope: string;
  category: string;
  fees: number;
  jobStatus: string;
  signedYear: number;
  manager: string;
  reportType: string;
  period: string;
  reportDate: string;
}

interface Step1JOFApprovalProps {
  viewMode: 'manager' | 'subcontractor' | 'reviewer';
}

const Step1JOFApproval: React.FC<Step1JOFApprovalProps> = ({ viewMode }) => {
  // State for search/filter functionality
  const [searchTerm, setSearchTerm] = useState<string>('');
  // State for sorting functionality: { key: column_key, direction: 'asc' | 'desc' }
  const [sortConfig, setSortConfig] = useState<{ key: keyof JofWoDataItem | null; direction: 'asc' | 'desc' }>({ key: null, direction: 'asc' });
  // State for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage] = useState<number>(5); // Number of rows to display per page

  // State for row click modal
  const [selectedItem, setSelectedItem] = useState<JofWoDataItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editableItem, setEditableItem] = useState<Partial<JofWoDataItem> | null>(null); // State for editable data

  // Memoized filtered and sorted data
  const processedData = useMemo(() => {
    let filterableData = [...jofWoData];

    // 1. Filter data based on search term
    if (searchTerm) {
      filterableData = filterableData.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // 2. Sort data based on sortConfig
    if (sortConfig.key !== null) {
      filterableData.sort((a, b) => {
        const aValue = a[sortConfig.key!];
        const bValue = b[sortConfig.key!];

        // Handle numeric and date comparisons
        let compareA = aValue;
        let compareB = bValue;

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          // Already numbers, no conversion needed
        } else if (sortConfig.key === 'fees' || sortConfig.key === 'signedYear') {
          compareA = parseFloat(String(aValue).replace(/[^0-9.-]+/g, ""));
          compareB = parseFloat(String(bValue).replace(/[^0-9.-]+/g, ""));
          if (isNaN(compareA as number)) compareA = -Infinity;
          if (isNaN(compareB as number)) compareB = -Infinity;
        } else if (sortConfig.key === 'date' || sortConfig.key === 'reportDate' || sortConfig.key === 'signedOn') {
          compareA = new Date(String(aValue)).getTime();
          compareB = new Date(String(bValue)).getTime();
          if (isNaN(compareA as number)) compareA = -Infinity;
          if (isNaN(compareB as number)) compareB = -Infinity;
        } else {
          // Default to string comparison for other types
          compareA = String(aValue).toLowerCase();
          compareB = String(bValue).toLowerCase();
        }

        if (compareA < compareB) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (compareA > compareB) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filterableData;
  }, [jofWoData, searchTerm, sortConfig]); // Re-run when these dependencies change

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = processedData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(processedData.length / rowsPerPage);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleSort = (key: keyof JofWoDataItem) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    setCurrentPage(1); // Reset to first page on new sort
  };

  const handleRowClick = (item: JofWoDataItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
 setEditableItem(item); // Initialize editable state with selected item data
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditableItem(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", editableItem);
    // In a real application, you would dispatch an action to update the data here.
    closeModal();
  };

  // Column headers with their corresponding data keys
  // Moved 'Job Status' to the end as requested
  const tableHeaders: { label: string; key: keyof JofWoDataItem }[] = [
    { label: 'JOF ID', key: 'jofId' },
    { label: 'WO', key: 'woId' },
    { label: 'Verified By', key: 'verifiedBy' },
    { label: 'Reg Auth', key: 'regAuth' },
    { label: 'Signed On', key: 'signedOn' },
    { label: 'Project Code', key: 'projectCode' },
    { label: 'Coat', key: 'coat' },
    { label: 'Date', key: 'date' },
    { label: 'Scope', key: 'scope' },
    { label: 'Category', key: 'category' },
    { label: 'Fees', key: 'fees' },
    { label: 'Signed Year', key: 'signedYear' }, // Moved up
    { label: 'Managers', key: 'manager' },
    { label: 'Report Type', key: 'reportType' },
    { label: 'Period', key: 'period' },
    { label: 'Date of Report', key: 'reportDate' },
    { label: 'Job Status', key: 'jobStatus' }, // Now at the end
  ];

  const renderManagerView = () => (
    <div className="p-4 sm:p-6 lg:p-8"> {/* Added responsive padding */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">JOF Approval Trigger</h2>
          <p className="text-gray-600">Input: JOF approved in Sage X3</p>
        </div>
      </div>

      <div className="relative p-4 bg-gray-50 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-medium mb-2">JOF to WO Conversion Log</h3>
        {/* Made scroll message more prominent */}
        <p className="text-sm font-semibold text-blue-600 mb-3 animate-pulse">
          ← Scroll right to see all columns on smaller screens
        </p>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            id="table-search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search all columns..."
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-1/3"
          />
        </div>

        {/* Table Container */}
        <div className="relative overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                {tableHeaders.map((header, idx) => (
                  <th
                    key={idx}
                    scope="col"
                    className={`px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap cursor-pointer hover:bg-gray-200
                      ${header.key === 'jobStatus' ? 'sticky right-0 bg-gray-100 z-20' : ''}
                    `}
                    onClick={() => handleSort(header.key)}
                  >
                    <div className="flex items-center">
                      {header.label}
                      {sortConfig.key === header.key ? (
                        sortConfig.direction === 'asc' ? (
                          <ChevronUp className="ml-1 w-3 h-3" />
                        ) : (
                          <ChevronDown className="ml-1 w-3 h-3" />
                        )
                      ) : (
                        <ChevronUp className="ml-1 w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" /> // Placeholder for alignment
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentRows.length > 0 ? (
                currentRows.map((item, i) => (
                  <tr key={item.jofId} className="hover:bg-gray-100 cursor-pointer" onClick={() => handleRowClick(item)}>
                    {/* Render table cells dynamically based on tableHeaders order */}
                    {tableHeaders.map((header, cellIdx) => (
                      <td
                        key={cellIdx}
                        className={`px-4 py-3 whitespace-nowrap
                          ${header.key === 'jobStatus' ? 'sticky right-0 bg-white z-10 border-l border-gray-200' : ''}
                        `}
                      >
                        {header.key === 'jobStatus' ? ( // Special rendering for jobStatus
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            item.jobStatus === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : item.jobStatus === 'In Progress'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {item.jobStatus}
                          </span>
                        ) : (
                          // Render other fields normally
                          (item[header.key] as React.ReactNode)
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={tableHeaders.length} className="px-4 py-6 text-center text-gray-500">
                    No data available or no matching results.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {processedData.length > rowsPerPage && (
          <nav className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4 rounded-b-lg">
            <div className="flex flex-1 justify-between sm:hidden">
              <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages}
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{indexOfFirstRow + 1}</span> to <span className="font-medium">{Math.min(indexOfLastRow, processedData.length)}</span> of{' '}
                  <span className="font-medium">{processedData.length}</span> results
                </p>
              </div>
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      aria-current={currentPage === pageNumber ? 'page' : undefined}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold
                              ${currentPage === pageNumber
                                  ? 'bg-blue-600 text-white focus:outline-offset-0'
                                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
                              }`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </nav>
        )}
      </div>

      {/* Workflow Integration Section */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0">
          <div className="flex-1 border rounded-lg p-4 bg-gray-50 shadow-sm w-full">
            <h3 className="text-lg font-medium mb-2">Sage X3</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white border rounded-md shadow-sm">
                <div className="flex justify-between">
                  <span className="font-medium">JOF-2025-001</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Approved</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Website Development Project</p>
                <div className="mt-2 text-xs text-gray-500">Approved on: 10/15/2025</div>
              </div>

              <div className="p-3 bg-white border rounded-md shadow-sm">
                <div className="flex justify-between">
                  <span className="font-medium">JOF-2025-002</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Approved</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Mobile App Enhancement</p>
                <div className="mt-2 text-xs text-gray-500">Approved on: 10/18/2025</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full md:w-auto">
            <ArrowRight className="w-8 h-8 text-blue-500" />
          </div>

          <div className="flex-1 border rounded-lg p-4 bg-gray-50 shadow-sm w-full">
            <h3 className="text-lg font-medium mb-2">PMS</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white border rounded-md shadow-sm">
                <div className="flex justify-between">
                  <span className="font-medium">WO-2025-001</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Created</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Linked to JOF-2025-001</p>
                <div className="mt-2 text-xs text-gray-500">Created on: 10/15/2025</div>
              </div>

              <div className="p-3 bg-white border rounded-md shadow-sm">
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

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm">
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

      {/* Row Details Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full  max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">JOF/WO Details: {selectedItem.jofId}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
              {tableHeaders.map((header) => (
                <div key={header.key} className="flex flex-col">
                  <label htmlFor={header.key} className="text-sm font-medium text-gray-700 mb-1">
                    {header.label}:
                  </label>
                  {header.key === 'jobStatus' ? (
                    // Special handling for job status - maybe a dropdown in a real app
                    <input
                      type="text"
                      id={header.key}
 name={header.key}
 value={editableItem[header.key] as string | number | readonly string[] | undefined || ''}
 onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : header.key === 'fees' || header.key === 'signedYear' ? (
                    // Handle numeric inputs
                    <input
                      type="number"
                      id={header.key}
 name={header.key}
 value={editableItem[header.key] as number | string | readonly string[] | undefined || ''}
 onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : header.key === 'date' || header.key === 'reportDate' || header.key === 'signedOn' ? (
                    // Handle date inputs
                    <input
                      type="date"
                      id={header.key}
 name={header.key}
 value={editableItem[header.key] as string | number | readonly string[] | undefined || ''}
 onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    // Default to text input for other fields
                    <input
                      type="text"
                      id={header.key}
 name={header.key}
 value={editableItem[header.key] as string | number | readonly string[] | undefined || ''}
 onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={closeModal}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderSubcontractorView = () => (
    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg shadow-md p-4">
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
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-3">JOF to WO Conversion Log</h3>
      {/* Reviewer view can also be made interactive if needed, but keeping it simple as per original */}
      <div className="relative overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">JOF ID</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">WO ID</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Created On</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm whitespace-nowrap">JOF-2025-001</td>
              <td className="px-4 py-3 text-sm whitespace-nowrap">WO-2025-001</td>
              <td className="px-4 py-3 text-sm whitespace-nowrap">10/15/2025 09:32 AM</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Success</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm whitespace-nowrap">JOF-2025-002</td>
              <td className="px-4 py-3 text-sm whitespace-nowrap">WO-2025-002</td>
              <td className="px-4 py-3 text-sm whitespace-nowrap">10/18/2025 02:14 PM</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Success</span>
              </td>
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

export default Step1JOFApproval;
