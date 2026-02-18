import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-trade-with-approval-request-list-item';
import { MarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-trade-with-approval-request-list-item.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItemToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem | null): MarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfTradeWithApprovalRequestListItem;
}
