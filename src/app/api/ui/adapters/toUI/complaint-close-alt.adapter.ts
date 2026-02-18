import { ApiComplaintCloseAltDto } from '../../../swagger/models/api-complaint-close';
import { ComplaintCloseAlt } from '../../models/complaint-close-alt.interface';
import { adaptComplaintCloseReasonEnumToUI } from './complaint-close-reason-enum.adapter';

export function adaptComplaintCloseAltToUI(source?: ApiComplaintCloseAltDto | null): ComplaintCloseAlt {
  return {
    closeReason: adaptComplaintCloseReasonEnumToUI(source?.CloseReason),
    comment: source?.Comment ?? '',
    id: source?.Id ?? 0,
  };
}
