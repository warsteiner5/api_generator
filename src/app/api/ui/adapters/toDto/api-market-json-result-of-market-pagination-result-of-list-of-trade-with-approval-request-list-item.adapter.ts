import { MarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-trade-with-approval-request-list-item.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-trade-with-approval-request-list-item';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem(source?: MarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem;
}
