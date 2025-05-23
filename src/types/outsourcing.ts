export interface FlowStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface WorkOrder {
  id: string;
  jofId: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
  subcontractorId?: string;
  budget?: number;
  startDate?: string;
  endDate?: string;
}

export interface Subcontractor {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  rating?: number;
}

export interface Task {
  id: string;
  workOrderId: string;
  title: string;
  description?: string;
  hours: number;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo?: string;
  startDate?: string;
  dueDate?: string;
  completedDate?: string;
}

export interface KpiChecklist {
  id: string;
  taskId: string;
  items: KpiChecklistItem[];
}

export interface KpiChecklistItem {
  id: string;
  description: string;
  isCompleted: boolean;
}

export interface AdditionalHoursRequest {
  id: string;
  taskId: string;
  requestedHours: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedBy: string;
  requestedDate: string;
  approvedBy?: string;
  approvedDate?: string;
}

export interface Invoice {
  id: string;
  workOrderId: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: 'pending' | 'paid';
  fileUrl?: string;
}

export interface ProfitabilityReport {
  workOrderId: string;
  totalBudget: number;
  totalCost: number;
  profit: number;
  profitMargin: number;
}