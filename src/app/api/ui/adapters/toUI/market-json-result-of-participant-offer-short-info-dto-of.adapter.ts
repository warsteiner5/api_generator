import { ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf } from '../../../swagger/models/api-market-json-result-of-participant-offer-short-info-dto-of';
import { MarketJsonResultOfParticipantOfferShortInfoDtoOf } from '../../models/market-json-result-of-participant-offer-short-info-dto-of.interface';

export function adaptMarketJsonResultOfParticipantOfferShortInfoDtoOfToUI(source?: ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf | null): MarketJsonResultOfParticipantOfferShortInfoDtoOf {
  return (source ?? {}) as MarketJsonResultOfParticipantOfferShortInfoDtoOf;
}
