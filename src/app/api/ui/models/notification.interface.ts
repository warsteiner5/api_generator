import { Document } from './document.interface';

export interface Notification {
  attachedDocuments: Document[];
  createdOn: string;
  id: number;
  isRead: boolean;
  message: string;
  messageTemplateId: number;
  organizationRecipientId: number;
  recipientTypeName: string;
  sender: string;
  subject: string;
  useMessageBodyStyles: boolean;
  userRecipientId: string;
}
