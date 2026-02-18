import { ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf } from '../../../swagger/models/api-market-json-result-of-lot-items-participant-offers-info-dto-of';
import { MarketJsonResultOfLotItemsParticipantOffersInfoDtoOf } from '../../models/market-json-result-of-lot-items-participant-offers-info-dto-of.interface';

export function adaptMarketJsonResultOfLotItemsParticipantOffersInfoDtoOfToUI(source?: ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf | null): MarketJsonResultOfLotItemsParticipantOffersInfoDtoOf {
  return (source ?? {}) as MarketJsonResultOfLotItemsParticipantOffersInfoDtoOf;
}
