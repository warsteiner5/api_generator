import { Complaint } from '../../models/complaint.interface';
import { ApiComplaintDto } from '../../../swagger/models/api-complaint-dto';

export const apiComplaintDtoAdapter = (source?: Complaint | null): ApiComplaintDto => {
  return (source ?? {}) as ApiComplaintDto;
}
