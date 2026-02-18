import { MarketPaginationResultOfListOfTradeWithApprovalRequestListItemAlt } from '../../models/market-pagination-result-of-list-of-trade-with-approval-request-list-item-alt.interface';
import { ApiMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-with-approval-request-list-item';
import { adaptApiTradeWithApprovalRequestListItemAltDto } from './api-trade-with-approval-request-list-item.adapter';

export function adaptApiMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDto(source?: MarketPaginationResultOfListOfTradeWithApprovalRequestListItemAlt | null): ApiMarketPaginationResultOfListOfTradeWithApprovalRequestListItemAltDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiTradeWithApprovalRequestListItemAltDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
