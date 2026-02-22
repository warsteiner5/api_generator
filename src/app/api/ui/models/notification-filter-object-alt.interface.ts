import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { NotificationTypeEnum } from '../enums/notification-type.enum';

// @ts-ignore
export interface NotificationFilterObjectAlt extends BaseFilterObjectAlt {
  sender: string;
  message: string;
  type: NotificationTypeEnum;
  unreadOnly: boolean;
  isMarketNotification: boolean;
  organizationIds: number[];
}
