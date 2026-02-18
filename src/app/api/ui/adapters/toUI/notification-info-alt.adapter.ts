import { ApiNotificationInfoAltDto } from '../../../swagger/models/api-notification-info';
import { NotificationInfoAlt } from '../../models/notification-info-alt.interface';

export function adaptNotificationInfoAltToUI(source?: ApiNotificationInfoAltDto | null): NotificationInfoAlt {
  return {
    createdOn: source?.CreatedOn ?? '',
    id: source?.Id ?? 0,
    isRead: source?.IsRead ?? false,
    message: source?.Message ?? '',
    messageTemplateId: source?.MessageTemplateId ?? 0,
    sender: source?.Sender ?? '',
    subject: source?.Subject ?? '',
  };
}
