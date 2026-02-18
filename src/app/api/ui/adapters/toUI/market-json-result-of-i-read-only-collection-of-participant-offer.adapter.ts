import { ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-participant-offer-dto';
import { MarketJsonResultOfIReadOnlyCollectionOfParticipantOffer } from '../../models/market-json-result-of-i-read-only-collection-of-participant-offer.interface';

export function adaptMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferToUI(source?: ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto | null): MarketJsonResultOfIReadOnlyCollectionOfParticipantOffer {
  return (source ?? {}) as MarketJsonResultOfIReadOnlyCollectionOfParticipantOffer;
}
