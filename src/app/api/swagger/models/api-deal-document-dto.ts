/* tslint:disable */
/* eslint-disable */
import { ApiDocumentChangeEnum } from '../models/api-document-change-enum';
import { ApiDocumentTypeEnum } from '../models/api-document-type-enum';
export interface ApiDealDocumentDto {
  DocumentChange?: ApiDocumentChangeEnum;
  DocumentType?: ApiDocumentTypeEnum;
  FileName?: string | null;
  HasCustomerDigitalSignature?: boolean;
  HasParticipantDigitalSignature?: boolean;
  Id?: string | null;
  SignByCustomer?: string | null;
  SignBySupplier?: string | null;
  Size?: number | null;
  UploadDate?: string;
  Url?: string | null;
}
