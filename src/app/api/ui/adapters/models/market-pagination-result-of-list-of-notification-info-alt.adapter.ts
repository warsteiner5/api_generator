import { ApiMarketPaginationResultOfListOfNotificationInfoAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-notification-info';
import { MarketPaginationResultOfListOfNotificationInfoAlt } from '../../models/market-pagination-result-of-list-of-notification-info-alt.interface';
import { notificationInfoAltAdapter } from './notification-info-alt.adapter';

export const marketPaginationResultOfListOfNotificationInfoAltAdapter = (source?: ApiMarketPaginationResultOfListOfNotificationInfoAltDto | null): MarketPaginationResultOfListOfNotificationInfoAlt => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => notificationInfoAltAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
