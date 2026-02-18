import { MarketJsonResultOfLotItemsParticipantOffersInfoDtoOf } from '../../models/market-json-result-of-lot-items-participant-offers-info-dto-of.interface';
import { ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf } from '../../../swagger/models/api-market-json-result-of-lot-items-participant-offers-info-dto-of';

export function adaptApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf(source?: MarketJsonResultOfLotItemsParticipantOffersInfoDtoOf | null): ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf;
}
