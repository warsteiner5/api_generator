import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfMzPriceList } from './market-pagination-result-of-list-of-mz-price-list.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfMzPriceList = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfMzPriceList | null; };
