import { ApiCreateDealDraftsRequestDto } from '../../../swagger/models/api-create-deal-drafts-request-dto';
import { CreateDealDraftsRequest } from '../../models/create-deal-drafts-request.interface';

export function adaptCreateDealDraftsRequestToUI(source?: ApiCreateDealDraftsRequestDto | null): CreateDealDraftsRequest {
  return {
    applicationLotItemIds: source?.ApplicationLotItemIds ?? [],
    lotId: source?.LotId ?? 0,
  };
}
