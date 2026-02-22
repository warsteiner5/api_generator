import { ApiNotificationDto } from '../../../swagger/models/api-notification-dto';
import { Notification } from '../../models/notification.interface';
import { documentAdapter } from './document.adapter';

export const notificationAdapter = (source?: ApiNotificationDto | null): Notification => {
  return {
    attachedDocuments: source?.AttachedDocuments?.map((item) => documentAdapter(item)),
    createdOn: source?.CreatedOn,
    id: source?.Id,
    isRead: source?.IsRead,
    message: source?.Message,
    messageTemplateId: source?.MessageTemplateId,
    organizationRecipientId: source?.OrganizationRecipientId,
    recipientTypeName: source?.RecipientTypeName,
    sender: source?.Sender,
    subject: source?.Subject,
    useMessageBodyStyles: source?.UseMessageBodyStyles,
    userRecipientId: source?.UserRecipientId,
  };
}
