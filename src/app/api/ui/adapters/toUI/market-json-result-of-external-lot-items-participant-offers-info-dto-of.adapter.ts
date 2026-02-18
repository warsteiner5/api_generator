import { ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf } from '../../../swagger/models/api-market-json-result-of-external-lot-items-participant-offers-info-dto-of';
import { MarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf } from '../../models/market-json-result-of-external-lot-items-participant-offers-info-dto-of.interface';

export function adaptMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOfToUI(source?: ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf | null): MarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf {
  return (source ?? {}) as MarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf;
}
