import { ConsiderationProtocolDocumentTypeEnum } from '../enums/consideration-protocol-document-type.enum';
import { DocumentDto3 } from './document-dto-3.interface';

export type ConsiderationProtocolDocument = DocumentDto3 & { 'DocumentType'?: ConsiderationProtocolDocumentTypeEnum | null; };
