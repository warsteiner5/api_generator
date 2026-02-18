import { GetParticipantOffersByTradeResponse } from './get-participant-offers-by-trade-response.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfGetParticipantOffersByTradeResponse = MarketJsonVoidResultAlt & { 'data'?: GetParticipantOffersByTradeResponse | null; };
