import { CreateDealDraftsRequest } from '../../models/create-deal-drafts-request.interface';
import { ApiCreateDealDraftsRequestDto } from '../../../swagger/models/api-create-deal-drafts-request-dto';

export const apiCreateDealDraftsRequestDtoAdapter = (source?: CreateDealDraftsRequest | null): ApiCreateDealDraftsRequestDto => {
  return {
    ApplicationLotItemIds: source?.applicationLotItemIds,
    LotId: source?.lotId,
  };
}
