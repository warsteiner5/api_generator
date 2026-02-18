import { MarketJsonResultOfListOfParticipantOfferItem } from '../../models/market-json-result-of-list-of-participant-offer-item.interface';
import { ApiMarketJsonResultOfListOfParticipantOfferItemDto } from '../../../swagger/models/api-market-json-result-of-list-of-participant-offer-item-dto';

export function adaptApiMarketJsonResultOfListOfParticipantOfferItemDto(source?: MarketJsonResultOfListOfParticipantOfferItem | null): ApiMarketJsonResultOfListOfParticipantOfferItemDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfParticipantOfferItemDto;
}
