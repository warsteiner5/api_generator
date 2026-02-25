import { NotificationFilterObjectAlt } from '../../models/notification-filter-object-alt.interface';
import { ApiNotificationFilterObjectAltDto } from '../../../swagger/models/api-notification-filter-object';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiNotificationTypeEnumAdapter } from '../enums/api-notification-type-enum.adapter';

export const apiNotificationFilterObjectAltDtoAdapter = (source?: NotificationFilterObjectAlt | null): ApiNotificationFilterObjectAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    Sender: source?.sender,
    Message: source?.message,
    Type: source?.type === null ? undefined : apiNotificationTypeEnumAdapter(source?.type),
    UnreadOnly: source?.unreadOnly,
    IsMarketNotification: source?.isMarketNotification,
    OrganizationIds: source?.organizationIds,
  };
}
