import { ApiMarketOrderViewDto } from '../../../swagger/models/api-market-order-view-dto';
import { MarketOrderView } from '../../models/market-order-view.interface';
import { orderViewAdapter } from './order-view.adapter';
import { participantOfferDocumentAdapter } from './participant-offer-document.adapter';

export const marketOrderViewAdapter = (source?: ApiMarketOrderViewDto | null): MarketOrderView => {
  return {
    ...orderViewAdapter(source as unknown as Parameters<typeof orderViewAdapter>[0]),
    dealId: source?.DealId,
    pictureFileGuids: source?.PictureFileGuids,
    isCustomPrice: source?.IsCustomPrice,
    minOrderQuantity: source?.MinOrderQuantity,
    initialOrderPrice: source?.InitialOrderPrice,
    participantOfferDocuments: source?.ParticipantOfferDocuments?.map((item) => participantOfferDocumentAdapter(item)),
  };
}
