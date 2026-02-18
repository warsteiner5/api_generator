import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfPriceListItemAlt } from './market-pagination-result-of-list-of-price-list-item-alt.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfPriceListItem = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfPriceListItemAlt | null; };
