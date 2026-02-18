import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfStopListItem } from './market-pagination-result-of-list-of-stop-list-item.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfStopListItem = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfStopListItem | null; };
