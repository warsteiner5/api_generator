import { ComplaintCloseAlt } from '../../models/complaint-close-alt.interface';
import { ApiComplaintCloseAltDto } from '../../../swagger/models/api-complaint-close';
import { apiComplaintCloseReasonEnumAdapter } from '../enums/api-complaint-close-reason-enum.adapter';

export const apiComplaintCloseAltDtoAdapter = (source?: ComplaintCloseAlt | null): ApiComplaintCloseAltDto => {
  return {
    CloseReason: source?.closeReason === null ? undefined : apiComplaintCloseReasonEnumAdapter(source?.closeReason),
    Comment: source?.comment,
    Id: source?.id,
  };
}
