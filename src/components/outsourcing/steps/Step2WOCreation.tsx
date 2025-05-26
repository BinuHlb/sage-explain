import React, { useState, useEffect } from 'react';
import { FilePlus, User, Users } from 'lucide-react';
import { useOutsourcing } from '../../../context/OutsourcingContext';

interface WorkOrder {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed' | string;
  jofId: string;
  category?: string;
  reportType?: string;
  reportingPeriod?: string;
  startDate?: string;
  fileType?: string;
  engagementPartner?: string;
  engagementManager?: string;
}

interface Subcontractor {
  id: string;
  name: string;
  email: string;
}

interface EditableFormField {
  name: string;
  label: string;
  type: 'text' | 'date' | 'select' | 'number';
  options?: { value: string; label: string }[];
}

interface EditableFormProps {
  fieldsConfig: EditableFormField[];
  initialData: Record<string, any>;
  staticFields?: string[];
  onFormChange?: (updatedData: Record<string, any>) => void;
  workOrderDataForStaticDisplay?: Record<string, any>;
  viewMode?: 'manager' | 'subcontractor' | 'reviewer';
}

const EditableForm: React.FC<EditableFormProps> = ({
  fieldsConfig,
  initialData,
  staticFields = [],
  onFormChange,
  workOrderDataForStaticDisplay = {},
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    setFormData(initialData ? JSON.parse(JSON.stringify(initialData)) : {});
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    if (onFormChange) {
      onFormChange(newFormData);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {fieldsConfig.map((field) => {
          const isStatic = staticFields.includes(field.name);
          const displayValue = isStatic
            ? workOrderDataForStaticDisplay.hasOwnProperty(field.name)
              ? workOrderDataForStaticDisplay[field.name]
              : formData[field.name]
            : formData[field.name];

          return (
            <div key={field.name} className="flex flex-col">
              <label htmlFor={field.name} className="mb-1 text-sm font-medium text-gray-600">
                {field.label}
              </label>
              {isStatic ? (
                <p className="p-2.5 border border-gray-200 rounded-md bg-gray-50 text-gray-700 min-h-[42px] break-words whitespace-pre-wrap">
                  {displayValue !== undefined && displayValue !== null && displayValue !== '' ? displayValue : 'N/A'}
                </p>
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors w-full h-[42px]"
                >
                  <option value="" disabled>{`Select ${field.label}`}</option>
                  {field.options?.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors w-full h-[42px]"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface Step2WOCreationProps {
  viewMode: 'manager' | 'subcontractor' | 'reviewer';
}

const Step2WOCreation: React.FC<Step2WOCreationProps> = ({ viewMode }) => {
  const { workOrders: contextWorkOrders = [], subcontractors = [], goToStepWithItem } = useOutsourcing();
  const workOrders: WorkOrder[] = contextWorkOrders as WorkOrder[];

  const [selectedWorkOrderId, setSelectedWorkOrderId] = useState<string | null>(null);
  const [selectedSubcontractor, setSelectedSubcontractor] = useState<string | null>(null);
  const [engagementFormData, setEngagementFormData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(false);

  const currentWorkOrder = selectedWorkOrderId ? workOrders.find(wo => wo.id === selectedWorkOrderId) : null;

  // Automatically select the first work order when available
  useEffect(() => {
    if (workOrders.length > 0 && !selectedWorkOrderId) {
      setSelectedWorkOrderId(workOrders[0].id);
    }
  }, [workOrders]);

  useEffect(() => {
    if (currentWorkOrder) {
      setEngagementFormData({
        category: currentWorkOrder.category || '',
        reportType: currentWorkOrder.reportType || '',
        reportingPeriod: currentWorkOrder.reportingPeriod || '',
        startDate: currentWorkOrder.startDate || '',
        jobStatus: currentWorkOrder.status || 'pending',
        fileType: currentWorkOrder.fileType || '',
        engagementPartner: currentWorkOrder.engagementPartner || '',
        engagementManager: currentWorkOrder.engagementManager || '',
      });
    } else {
      setEngagementFormData({
        category: '', reportType: '', reportingPeriod: '', startDate: '',
        jobStatus: 'pending', fileType: '', engagementPartner: '', engagementManager: '',
      });
    }
  }, [currentWorkOrder]);

  const handleEngagementFormChange = (updatedData: Record<string, any>) => {
    setEngagementFormData(updatedData);
  };

  const engagementFieldsConfig: EditableFormField[] = [
    { name: 'woIdDisplay', label: 'Work Order ID', type: 'text' },
    { name: 'woTitleDisplay', label: 'Work Order Title', type: 'text' },
    { name: 'woJofIdDisplay', label: 'JOF ID', type: 'text' },
    { name: 'category', label: 'Category', type: 'text' },
    { name: 'reportType', label: 'Report Type', type: 'text' },
    { name: 'reportingPeriod', label: 'Reporting Period', type: 'text' },
    { name: 'startDate', label: 'Start Date', type: 'date' },
    { 
      name: 'jobStatus', 
      label: 'Job Status', 
      type: 'select', 
      options: [
        { value: 'pending', label: 'Pending' },
        { value: 'in-progress', label: 'In Progress' },
        { value: 'completed', label: 'Completed' },
        { value: 'on-hold', label: 'On Hold' },
      ] 
    },
    { 
      name: 'fileType', 
      label: 'File Type', 
      type: 'select',
      options: [
        { value: 'pdf', label: 'PDF' },
        { value: 'excel', label: 'Excel (XLSX)' },
        { value: 'word', label: 'Word (DOCX)' },
        { value: 'csv', label: 'CSV' },
        { value: 'txt', label: 'Text File' },
        { value: 'other', label: 'Other' },
      ]
    },
    { name: 'engagementPartner', label: 'Engagement Partner', type: 'text' },
    { name: 'engagementManager', label: 'Engagement Manager', type: 'text' },
  ];

  const staticEngagementFields = ['woIdDisplay', 'woTitleDisplay', 'woJofIdDisplay'];
  const workOrderSpecificStaticData = currentWorkOrder ? {
    woIdDisplay: currentWorkOrder.id,
    woTitleDisplay: currentWorkOrder.title,
    woJofIdDisplay: currentWorkOrder.jofId,
  } : {};

  const renderManagerView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <FilePlus className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Engagement Detail</h2>
          <p className="text-gray-600">Select a Work Order, update details, and assign to a subcontractor.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 space-y-4 bg-white">
          <h3 className="text-lg font-medium text-gray-700 mb-1">Work Order Details</h3>
          
          <div>
            <label htmlFor="workOrderSelect" className="block text-sm font-medium text-gray-700 mb-1">
              Select Work Order
            </label>
            <select
              id="workOrderSelect"
              name="workOrderSelect"
              value={selectedWorkOrderId || ''}
              onChange={(e) => setSelectedWorkOrderId(e.target.value || null)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              disabled={workOrders.length === 0}
            >
              {workOrders.map((wo) => (
                <option key={wo.id} value={wo.id}>
                  {wo.id} - {wo.title}
                </option>
              ))}
            </select>
          </div>

          {selectedWorkOrderId && currentWorkOrder ? (
            <EditableForm
              fieldsConfig={engagementFieldsConfig}
              initialData={engagementFormData}
              staticFields={staticEngagementFields}
              onFormChange={handleEngagementFormChange}
              workOrderDataForStaticDisplay={workOrderSpecificStaticData}
              viewMode={viewMode}
            />
          ) : (
            <p className="text-gray-500 p-3 text-center bg-gray-50 rounded-md">
              {workOrders.length > 0 ? 'Please select a Work Order to view and edit details.' : 'No Work Orders to display.'}
            </p>
          )}
        </div>
        
        <div className="border rounded-lg p-4 bg-white">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Assign to Subcontractor</h3>
          {workOrders.length === 0 || !selectedWorkOrderId ? (
            <p className="text-gray-500 p-3 text-center bg-gray-50 rounded-md">
                Select a Work Order first.
            </p>
          ) : subcontractors.length === 0 ? (
            <p className="text-gray-500 p-3 text-center bg-gray-50 rounded-md">
                No subcontractors available.
            </p>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
                {subcontractors.map((sc) => (
                <div 
                    key={sc.id}
                    className={`
                    p-3 border rounded-md cursor-pointer transition-colors
                    ${selectedSubcontractor === sc.id 
                        ? 'bg-blue-100 border-blue-400 ring-blue-300' 
                        : 'bg-gray-50 hover:bg-blue-50 border-gray-200'}
                    `}
                    onClick={() => setSelectedSubcontractor(sc.id)}
                >
                    <div className="flex items-center">
                    <div className={`mr-3 p-2 rounded-full ${selectedSubcontractor === sc.id ? 'bg-blue-200' : 'bg-gray-100'}`}>
                        <User className={`w-4 h-4 ${selectedSubcontractor === sc.id ? 'text-blue-700' : 'text-gray-600'}`} />
                    </div>
                    <div>
                        <div className="font-medium text-gray-800">{sc.name}</div>
                        <div className="text-sm text-gray-600">{sc.email}</div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button 
          onClick={() => {
            if (selectedWorkOrderId && selectedSubcontractor && currentWorkOrder) {
              const assignmentData = {
                workOrderId: selectedWorkOrderId,
                subcontractorId: selectedSubcontractor,
                engagementDetails: {
                  ...engagementFormData,
                },
              };
              goToStepWithItem(3, assignmentData);
            }
          }}
          className={`
            px-6 py-2.5 rounded-md text-white font-medium text-sm
            ${selectedWorkOrderId && selectedSubcontractor 
              ? 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' 
              : 'bg-gray-300 cursor-not-allowed'}
            transition-all duration-150 ease-in-out
          `}
          disabled={!selectedWorkOrderId || !selectedSubcontractor}
        >
          Assign Subcontractor & Proceed →
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
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Subcontractor Assignment History</h3>
      <div className="overflow-x-auto bg-white rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WO ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subcontractor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned By</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">WO-2023-001</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">TechSolutions Inc</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">John Manager</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2023-10-16</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">WO-2023-002</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">DevPro Services</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Jane Manager</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2023-10-19</td>
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
      console.warn('Step2WOCreation: Unknown viewMode, defaulting to manager view.');
      return renderManagerView();
  }
};

export default Step2WOCreation;