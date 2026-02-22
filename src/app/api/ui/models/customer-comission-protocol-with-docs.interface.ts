import { ConsiderationProtocolDocument } from './consideration-protocol-document.interface';
import { CustomerComissionProtocol } from './customer-comission-protocol.interface';
import { ProtocolTypeEnum } from '../enums/protocol-type.enum';

// @ts-ignore
export interface CustomerComissionProtocolWithDocs extends CustomerComissionProtocol {
  documents: ConsiderationProtocolDocument[];
  isExported: boolean;
  publishDate: string;
  protocolTypeEnum: ProtocolTypeEnum;
}
