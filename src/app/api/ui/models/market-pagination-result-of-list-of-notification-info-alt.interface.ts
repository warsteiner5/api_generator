import { NotificationInfoAlt } from './notification-info-alt.interface';

export interface MarketPaginationResultOfListOfNotificationInfoAlt {
  currentPage: number;
  items: NotificationInfoAlt[];
  total: number;
  totalPages: number;
}
