import { ComplaintCloseAlt } from '../../models/complaint-close-alt.interface';
import { ApiComplaintCloseAltDto } from '../../../swagger/models/api-complaint-close';
import { adaptApiComplaintCloseReasonEnum } from './api-complaint-close-reason-enum.adapter';

export function adaptApiComplaintCloseAltDto(source?: ComplaintCloseAlt | null): ApiComplaintCloseAltDto {
  return {
    CloseReason: adaptApiComplaintCloseReasonEnum(source?.closeReason),
    Comment: source?.comment,
    Id: source?.id,
  };
}
