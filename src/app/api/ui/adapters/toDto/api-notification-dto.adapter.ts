import { Notification } from '../../models/notification.interface';
import { ApiNotificationDto } from '../../../swagger/models/api-notification-dto';
import { adaptApiDocumentDto } from './api-document-dto.adapter';

export function adaptApiNotificationDto(source?: Notification | null): ApiNotificationDto {
  return {
    AttachedDocuments: (source?.attachedDocuments ?? []).map((item) => adaptApiDocumentDto(item)),
    CreatedOn: source?.createdOn,
    Id: source?.id,
    IsRead: source?.isRead,
    Message: source?.message,
    MessageTemplateId: source?.messageTemplateId,
    OrganizationRecipientId: source?.organizationRecipientId,
    RecipientTypeName: source?.recipientTypeName,
    Sender: source?.sender,
    Subject: source?.subject,
    UseMessageBodyStyles: source?.useMessageBodyStyles,
    UserRecipientId: source?.userRecipientId,
  };
}
