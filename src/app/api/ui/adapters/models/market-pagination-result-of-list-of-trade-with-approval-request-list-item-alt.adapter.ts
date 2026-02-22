import { ApiMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-with-approval-request-list-item';
import { MarketPaginationResultOfListOfTradeWithApprovalRequestListItemAlt } from '../../models/market-pagination-result-of-list-of-trade-with-approval-request-list-item-alt.interface';
import { tradeWithApprovalRequestListItemAltAdapter } from './trade-with-approval-request-list-item-alt.adapter';

export const marketPaginationResultOfListOfTradeWithApprovalRequestListItemAltAdapter = (source?: ApiMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDto | null): MarketPaginationResultOfListOfTradeWithApprovalRequestListItemAlt => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => tradeWithApprovalRequestListItemAltAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
