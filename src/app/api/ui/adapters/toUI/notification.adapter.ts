import { ApiNotificationDto } from '../../../swagger/models/api-notification-dto';
import { Notification } from '../../models/notification.interface';
import { adaptDocumentToUI } from './document.adapter';

export function adaptNotificationToUI(source?: ApiNotificationDto | null): Notification {
  return {
    attachedDocuments: (source?.AttachedDocuments ?? []).map((item) => adaptDocumentToUI(item)),
    createdOn: source?.CreatedOn ?? '',
    id: source?.Id ?? 0,
    isRead: source?.IsRead ?? false,
    message: source?.Message ?? '',
    messageTemplateId: source?.MessageTemplateId ?? 0,
    organizationRecipientId: source?.OrganizationRecipientId ?? 0,
    recipientTypeName: source?.RecipientTypeName ?? '',
    sender: source?.Sender ?? '',
    subject: source?.Subject ?? '',
    useMessageBodyStyles: source?.UseMessageBodyStyles ?? false,
    userRecipientId: source?.UserRecipientId ?? '',
  };
}
