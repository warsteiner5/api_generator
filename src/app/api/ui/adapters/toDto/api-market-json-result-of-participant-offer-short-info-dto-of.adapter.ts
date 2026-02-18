import { MarketJsonResultOfParticipantOfferShortInfoDtoOf } from '../../models/market-json-result-of-participant-offer-short-info-dto-of.interface';
import { ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf } from '../../../swagger/models/api-market-json-result-of-participant-offer-short-info-dto-of';

export function adaptApiMarketJsonResultOfParticipantOfferShortInfoDtoOf(source?: MarketJsonResultOfParticipantOfferShortInfoDtoOf | null): ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf;
}
