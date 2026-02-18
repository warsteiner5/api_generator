import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfAcceptedPriceListInfo } from './market-pagination-result-of-list-of-accepted-price-list-info.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfo = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfAcceptedPriceListInfo | null; };
