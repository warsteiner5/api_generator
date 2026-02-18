import { MarketJsonResultOfListOfParticipantOfferShortInfo } from '../../models/market-json-result-of-list-of-participant-offer-short-info.interface';
import { ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto } from '../../../swagger/models/api-market-json-result-of-list-of-participant-offer-short-info-dto';

export function adaptApiMarketJsonResultOfListOfParticipantOfferShortInfoDto(source?: MarketJsonResultOfListOfParticipantOfferShortInfo | null): ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto;
}
