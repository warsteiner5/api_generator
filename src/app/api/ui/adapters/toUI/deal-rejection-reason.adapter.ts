import { ApiDealRejectionReasonDto } from '../../../swagger/models/api-deal-rejection-reason-dto';
import { DealRejectionReason } from '../../models/deal-rejection-reason.interface';

export function adaptDealRejectionReasonToUI(source?: ApiDealRejectionReasonDto | null): DealRejectionReason {
  return {
    id: source?.Id ?? 0,
    reason: source?.Reason ?? '',
    sortOrder: source?.SortOrder ?? 0,
  };
}
