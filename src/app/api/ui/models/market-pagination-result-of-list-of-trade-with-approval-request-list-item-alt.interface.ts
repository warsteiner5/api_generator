import { TradeWithApprovalRequestListItemAlt } from './trade-with-approval-request-list-item-alt.interface';

export interface MarketPaginationResultOfListOfTradeWithApprovalRequestListItemAlt {
  currentPage: number;
  items: TradeWithApprovalRequestListItemAlt[];
  total: number;
  totalPages: number;
}
