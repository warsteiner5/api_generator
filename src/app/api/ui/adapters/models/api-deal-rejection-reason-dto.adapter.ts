import { DealRejectionReason } from '../../models/deal-rejection-reason.interface';
import { ApiDealRejectionReasonDto } from '../../../swagger/models/api-deal-rejection-reason-dto';

export const apiDealRejectionReasonDtoAdapter = (source?: DealRejectionReason | null): ApiDealRejectionReasonDto => {
  return {
    Id: source?.id,
    Reason: source?.reason,
    SortOrder: source?.sortOrder,
  };
}
