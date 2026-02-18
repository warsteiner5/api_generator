import { MarketJsonResultOfGetParticipantOffersByTradeResponse } from '../../models/market-json-result-of-get-participant-offers-by-trade-response.interface';
import { ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto } from '../../../swagger/models/api-market-json-result-of-get-participant-offers-by-trade-response-dto';

export function adaptApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto(source?: MarketJsonResultOfGetParticipantOffersByTradeResponse | null): ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto {
  return (source ?? {}) as ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto;
}
