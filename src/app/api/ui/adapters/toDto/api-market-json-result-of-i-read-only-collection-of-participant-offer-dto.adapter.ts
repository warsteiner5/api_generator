import { MarketJsonResultOfIReadOnlyCollectionOfParticipantOffer } from '../../models/market-json-result-of-i-read-only-collection-of-participant-offer.interface';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-participant-offer-dto';

export function adaptApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto(source?: MarketJsonResultOfIReadOnlyCollectionOfParticipantOffer | null): ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto {
  return (source ?? {}) as ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto;
}
