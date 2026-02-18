import { ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto } from '../../../swagger/models/api-market-json-result-of-get-participant-offers-by-trade-response-dto';
import { MarketJsonResultOfGetParticipantOffersByTradeResponse } from '../../models/market-json-result-of-get-participant-offers-by-trade-response.interface';

export function adaptMarketJsonResultOfGetParticipantOffersByTradeResponseToUI(source?: ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto | null): MarketJsonResultOfGetParticipantOffersByTradeResponse {
  return (source ?? {}) as MarketJsonResultOfGetParticipantOffersByTradeResponse;
}
