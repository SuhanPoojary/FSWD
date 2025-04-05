
export type WorkOrderStatus = 'pending' | 'in-progress' | 'completed' | 'cancelled' | 'scheduled';

export interface WorkOrder {
  id: string;
  title: string;
  description: string;
  status: WorkOrderStatus;
  location: string;
  dueDate: string;
  assignedTo?: string;
  priority: 'low' | 'medium' | 'high';
}
