import { ApiComplaintDto } from '../../../swagger/models/api-complaint-dto';
import { Complaint } from '../../models/complaint.interface';

export const complaintAdapter = (source?: ApiComplaintDto | null): Complaint => {
  return (source ?? {}) as Complaint;
}
