import { ApiMarketJsonResultOfListOfParticipantOfferItemDto } from '../../../swagger/models/api-market-json-result-of-list-of-participant-offer-item-dto';
import { MarketJsonResultOfListOfParticipantOfferItem } from '../../models/market-json-result-of-list-of-participant-offer-item.interface';

export function adaptMarketJsonResultOfListOfParticipantOfferItemToUI(source?: ApiMarketJsonResultOfListOfParticipantOfferItemDto | null): MarketJsonResultOfListOfParticipantOfferItem {
  return (source ?? {}) as MarketJsonResultOfListOfParticipantOfferItem;
}
