import { ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto } from '../../../swagger/models/api-market-json-result-of-list-of-participant-offer-short-info-dto';
import { MarketJsonResultOfListOfParticipantOfferShortInfo } from '../../models/market-json-result-of-list-of-participant-offer-short-info.interface';

export function adaptMarketJsonResultOfListOfParticipantOfferShortInfoToUI(source?: ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto | null): MarketJsonResultOfListOfParticipantOfferShortInfo {
  return (source ?? {}) as MarketJsonResultOfListOfParticipantOfferShortInfo;
}
