import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfDealListItem } from './market-pagination-result-of-list-of-deal-list-item.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfDealListItem = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfDealListItem | null; };
