import { ApiMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-with-approval-request-list-item';
import { MarketPaginationResultOfListOfTradeWithApprovalRequestListItemAlt } from '../../models/market-pagination-result-of-list-of-trade-with-approval-request-list-item-alt.interface';
import { adaptTradeWithApprovalRequestListItemAltToUI } from './trade-with-approval-request-list-item-alt.adapter';

export function adaptMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltToUI(source?: ApiMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDto | null): MarketPaginationResultOfListOfTradeWithApprovalRequestListItemAlt {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptTradeWithApprovalRequestListItemAltToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
