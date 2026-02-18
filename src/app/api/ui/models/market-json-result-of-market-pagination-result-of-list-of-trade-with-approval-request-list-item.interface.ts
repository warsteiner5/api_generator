import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfTradeWithApprovalRequestListItemAlt } from './market-pagination-result-of-list-of-trade-with-approval-request-list-item-alt.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfTradeWithApprovalRequestListItemAlt | null; };
