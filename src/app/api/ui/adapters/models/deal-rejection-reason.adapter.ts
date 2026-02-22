import { ApiDealRejectionReasonDto } from '../../../swagger/models/api-deal-rejection-reason-dto';
import { DealRejectionReason } from '../../models/deal-rejection-reason.interface';

export const dealRejectionReasonAdapter = (source?: ApiDealRejectionReasonDto | null): DealRejectionReason => {
  return {
    id: source?.Id,
    reason: source?.Reason,
    sortOrder: source?.SortOrder,
  };
}
