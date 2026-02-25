import { ApiNotificationFilterObjectAltDto } from '../../../swagger/models/api-notification-filter-object';
import { NotificationFilterObjectAlt } from '../../models/notification-filter-object-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { notificationTypeEnumAdapter } from '../enums/notification-type-enum.adapter';

export const notificationFilterObjectAltAdapter = (source?: ApiNotificationFilterObjectAltDto | null): NotificationFilterObjectAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    sender: source?.Sender,
    message: source?.Message,
    type: source?.Type === null ? undefined : notificationTypeEnumAdapter(source?.Type),
    unreadOnly: source?.UnreadOnly,
    isMarketNotification: source?.IsMarketNotification,
    organizationIds: source?.OrganizationIds,
  };
}
