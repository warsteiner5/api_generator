import { ApiComplaintDto } from '../../../swagger/models/api-complaint-dto';
import { Complaint } from '../../models/complaint.interface';

export function adaptComplaintToUI(source?: ApiComplaintDto | null): Complaint {
  return (source ?? {}) as Complaint;
}
