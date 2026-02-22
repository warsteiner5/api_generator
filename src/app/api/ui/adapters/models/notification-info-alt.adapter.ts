import { ApiNotificationInfoAltDto } from '../../../swagger/models/api-notification-info';
import { NotificationInfoAlt } from '../../models/notification-info-alt.interface';

export const notificationInfoAltAdapter = (source?: ApiNotificationInfoAltDto | null): NotificationInfoAlt => {
  return {
    createdOn: source?.CreatedOn,
    id: source?.Id,
    isRead: source?.IsRead,
    message: source?.Message,
    messageTemplateId: source?.MessageTemplateId,
    sender: source?.Sender,
    subject: source?.Subject,
  };
}
