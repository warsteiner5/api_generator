import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketParticipantOfferInfo } from './market-participant-offer-info.interface';

export type MarketJsonResultOfMarketParticipantOfferInfo = MarketJsonVoidResultAlt & { 'data'?: MarketParticipantOfferInfo | null; };
