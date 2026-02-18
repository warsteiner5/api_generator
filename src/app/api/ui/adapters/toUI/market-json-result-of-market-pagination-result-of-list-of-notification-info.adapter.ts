import { ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-notification-info';
import { MarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo } from '../../models/market-json-result-of-market-pagination-result-of-list-of-notification-info.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfoToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo | null): MarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo;
}
