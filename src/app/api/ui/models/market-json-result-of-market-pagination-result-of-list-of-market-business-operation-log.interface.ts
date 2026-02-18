import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfMarketBusinessOperationLog } from './market-pagination-result-of-list-of-market-business-operation-log.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLog = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfMarketBusinessOperationLog | null; };
