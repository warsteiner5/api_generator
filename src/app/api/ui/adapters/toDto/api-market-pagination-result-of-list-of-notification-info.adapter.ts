import { MarketPaginationResultOfListOfNotificationInfoAlt } from '../../models/market-pagination-result-of-list-of-notification-info-alt.interface';
import { ApiMarketPaginationResultOfListOfNotificationInfoAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-notification-info';
import { adaptApiNotificationInfoAltDto } from './api-notification-info.adapter';

export function adaptApiMarketPaginationResultOfListOfNotificationInfoAltDto(source?: MarketPaginationResultOfListOfNotificationInfoAlt | null): ApiMarketPaginationResultOfListOfNotificationInfoAltDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiNotificationInfoAltDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
