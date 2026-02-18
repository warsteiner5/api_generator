/* tslint:disable */
/* eslint-disable */
import { ApiDocumentDto } from '../models/api-document-dto';
export interface ApiNotificationDto {
  AttachedDocuments?: Array<ApiDocumentDto> | null;
  CreatedOn?: string;
  Id?: number;
  IsRead?: boolean;
  Message?: string | null;
  MessageTemplateId?: number | null;
  OrganizationRecipientId?: number | null;
  RecipientTypeName?: string | null;
  Sender?: string | null;
  Subject?: string | null;
  UseMessageBodyStyles?: boolean;
  UserRecipientId?: string | null;
}
