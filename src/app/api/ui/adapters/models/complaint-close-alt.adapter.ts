import { ApiComplaintCloseAltDto } from '../../../swagger/models/api-complaint-close';
import { ComplaintCloseAlt } from '../../models/complaint-close-alt.interface';
import { complaintCloseReasonEnumAdapter } from '../enums/complaint-close-reason-enum.adapter';

export const complaintCloseAltAdapter = (source?: ApiComplaintCloseAltDto | null): ComplaintCloseAlt => {
  return {
    closeReason: source?.CloseReason === null ? undefined : complaintCloseReasonEnumAdapter(source?.CloseReason),
    comment: source?.Comment,
    id: source?.Id,
  };
}
