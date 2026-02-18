import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfEmployeeItem } from './market-pagination-result-of-list-of-employee-item.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfEmployeeItem = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfEmployeeItem | null; };
