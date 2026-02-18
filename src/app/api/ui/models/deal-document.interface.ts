import { DocumentChangeEnum } from '../enums/document-change.enum';
import { DocumentTypeEnum } from '../enums/document-type.enum';

export interface DealDocument {
  documentChange: DocumentChangeEnum;
  documentType: DocumentTypeEnum;
  fileName: string;
  hasCustomerDigitalSignature: boolean;
  hasParticipantDigitalSignature: boolean;
  id: string;
  signByCustomer: string;
  signBySupplier: string;
  size: number;
  uploadDate: string;
  url: string;
}
