import { MarketPaginationResultOfListOfTradeWithApprovalRequestListItemAlt } from '../../models/market-pagination-result-of-list-of-trade-with-approval-request-list-item-alt.interface';
import { ApiMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-with-approval-request-list-item';
import { apiTradeWithApprovalRequestListItemAltDtoAdapter } from './api-trade-with-approval-request-list-item.adapter';

export const apiMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDtoAdapter = (source?: MarketPaginationResultOfListOfTradeWithApprovalRequestListItemAlt | null): ApiMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiTradeWithApprovalRequestListItemAltDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
