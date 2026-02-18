import { Complaint } from '../../models/complaint.interface';
import { ApiComplaintDto } from '../../../swagger/models/api-complaint-dto';

export function adaptApiComplaintDto(source?: Complaint | null): ApiComplaintDto {
  return (source ?? {}) as ApiComplaintDto;
}
