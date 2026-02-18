import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfRoleItemResponse } from './market-pagination-result-of-list-of-role-item-response.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponse = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfRoleItemResponse | null; };
