import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfMarketParticipantOfferInfo } from './market-pagination-result-of-list-of-market-participant-offer-info.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfo = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfMarketParticipantOfferInfo | null; };
