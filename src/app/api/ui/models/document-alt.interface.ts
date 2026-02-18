import { TradeDocumentTypeEnum } from '../enums/trade-document-type.enum';

export interface DocumentAlt {
  fileGuid: string;
  isSigned: boolean;
  name: string;
  sendDate: string;
  signByCustomerDate: string;
  signByProviderDate: string;
  signDate: string;
  signedByCustomer: boolean;
  signedByOrganizer: boolean;
  signedByOrganizerDate: string;
  signedByProvider: boolean;
  size: number;
  tradeDocumentType: TradeDocumentTypeEnum;
  type: string;
}
