import { MarketOrderView } from '../../models/market-order-view.interface';
import { ApiMarketOrderViewDto } from '../../../swagger/models/api-market-order-view-dto';
import { apiOrderViewDtoAdapter } from './api-order-view-dto.adapter';
import { apiParticipantOfferDocumentDtoAdapter } from './api-participant-offer-document-dto.adapter';

export const apiMarketOrderViewDtoAdapter = (source?: MarketOrderView | null): ApiMarketOrderViewDto => {
  return {
    ...apiOrderViewDtoAdapter(source as unknown as Parameters<typeof apiOrderViewDtoAdapter>[0]),
    DealId: source?.dealId,
    PictureFileGuids: source?.pictureFileGuids,
    IsCustomPrice: source?.isCustomPrice,
    MinOrderQuantity: source?.minOrderQuantity,
    InitialOrderPrice: source?.initialOrderPrice,
    ParticipantOfferDocuments: source?.participantOfferDocuments?.map((item) => apiParticipantOfferDocumentDtoAdapter(item)),
  };
}
