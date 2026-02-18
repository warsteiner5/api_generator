import { ApiMarketPaginationResultOfListOfNotificationInfoAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-notification-info';
import { MarketPaginationResultOfListOfNotificationInfoAlt } from '../../models/market-pagination-result-of-list-of-notification-info-alt.interface';
import { adaptNotificationInfoAltToUI } from './notification-info-alt.adapter';

export function adaptMarketPaginationResultOfListOfNotificationInfoAltToUI(source?: ApiMarketPaginationResultOfListOfNotificationInfoAltDto | null): MarketPaginationResultOfListOfNotificationInfoAlt {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptNotificationInfoAltToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
