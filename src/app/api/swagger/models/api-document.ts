/* tslint:disable */
/* eslint-disable */
import { ApiTradeDocumentTypeEnum } from '../models/api-trade-document-type-enum';
export interface ApiDocumentAltDto {
  FileGuid?: string;
  IsSigned?: boolean;
  Name?: string | null;
  SendDate?: string;
  SignByCustomerDate?: string | null;
  SignByProviderDate?: string | null;
  SignDate?: string | null;
  SignedByCustomer?: boolean;
  SignedByOrganizer?: boolean;
  SignedByOrganizerDate?: string | null;
  SignedByProvider?: boolean;
  Size?: number | null;
  TradeDocumentType?: ApiTradeDocumentTypeEnum | null;
  Type?: string | null;
}
