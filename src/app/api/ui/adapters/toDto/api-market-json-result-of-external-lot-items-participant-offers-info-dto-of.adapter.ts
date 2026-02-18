import { MarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf } from '../../models/market-json-result-of-external-lot-items-participant-offers-info-dto-of.interface';
import { ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf } from '../../../swagger/models/api-market-json-result-of-external-lot-items-participant-offers-info-dto-of';

export function adaptApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf(source?: MarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf | null): ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf;
}
