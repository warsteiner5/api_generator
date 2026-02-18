import { MarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo } from '../../models/market-json-result-of-market-pagination-result-of-list-of-notification-info.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-notification-info';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo(source?: MarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo;
}
