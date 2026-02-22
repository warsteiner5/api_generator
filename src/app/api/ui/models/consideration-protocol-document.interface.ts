import { ConsiderationProtocolDocumentTypeEnum } from '../enums/consideration-protocol-document-type.enum';
import { DocumentDto3 } from './document-dto-3.interface';

// @ts-ignore
export interface ConsiderationProtocolDocument extends DocumentDto3 {
  documentType: ConsiderationProtocolDocumentTypeEnum;
}
