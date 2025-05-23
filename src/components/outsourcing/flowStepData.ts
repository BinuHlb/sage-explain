import { FlowStep } from '../../types/outsourcing';

export const flowSteps: FlowStep[] = [
  {
    id: 1,
    title: 'JOF Approval Trigger',
    description: 'JOF approved in Sage X3 triggers WO creation in PMS',
    icon: 'check-circle'
  },
  {
    id: 2,
    title: 'WO Creation & Assignment',
    description: 'Work Order created and subcontractor assigned',
    icon: 'file-plus'
  },
  {
    id: 3,
    title: 'Project & Task Generation',
    description: 'Auto-generate project and tasks from templates',
    icon: 'list-check'
  },
  {
    id: 4,
    title: 'Notification & Task Access',
    description: 'Subcontractors notified and given access to tasks',
    icon: 'bell'
  },
  {
    id: 5,
    title: 'Additional Hours Workflow',
    description: 'Request and approval process for additional hours',
    icon: 'clock'
  },
  {
    id: 6,
    title: 'Task Completion',
    description: 'Task completion with KPI checklist validation',
    icon: 'clipboard-check'
  },
  {
    id: 7,
    title: 'Profitability Calculation',
    description: 'Auto-calculate profitability per WO/project',
    icon: 'trending-up'
  },
  {
    id: 8,
    title: 'Invoice Linking',
    description: 'Link invoice PDFs to respective projects',
    icon: 'file-text'
  },
  {
    id: 9,
    title: 'Final Review & Lock',
    description: 'Final approval and project/WO lock',
    icon: 'lock'
  },
  {
    id: 10,
    title: 'Post-Engagement Review',
    description: 'Update performance ratings and KPI reports',
    icon: 'star'
  }
];