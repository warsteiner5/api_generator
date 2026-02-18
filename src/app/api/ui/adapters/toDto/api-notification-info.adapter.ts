import { NotificationInfoAlt } from '../../models/notification-info-alt.interface';
import { ApiNotificationInfoAltDto } from '../../../swagger/models/api-notification-info';

export function adaptApiNotificationInfoAltDto(source?: NotificationInfoAlt | null): ApiNotificationInfoAltDto {
  return {
    CreatedOn: source?.createdOn,
    Id: source?.id,
    IsRead: source?.isRead,
    Message: source?.message,
    MessageTemplateId: source?.messageTemplateId,
    Sender: source?.sender,
    Subject: source?.subject,
  };
}
