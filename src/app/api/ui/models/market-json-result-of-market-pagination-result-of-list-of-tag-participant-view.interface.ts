import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfTagParticipantView } from './market-pagination-result-of-list-of-tag-participant-view.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfTagParticipantView = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfTagParticipantView | null; };
