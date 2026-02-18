import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfStopListItemExtended } from './market-pagination-result-of-list-of-stop-list-item-extended.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtended = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfStopListItemExtended | null; };
