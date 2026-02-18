import { ConsiderationProtocolDocument } from './consideration-protocol-document.interface';
import { CustomerComissionProtocol } from './customer-comission-protocol.interface';
import { ProtocolTypeEnum } from '../enums/protocol-type.enum';

export type CustomerComissionProtocolWithDocs = CustomerComissionProtocol & { 'Documents'?: Array<ConsiderationProtocolDocument> | null; 'IsExported'?: boolean; 'PublishDate'?: string | null; 'ProtocolTypeEnum'?: ProtocolTypeEnum | null; };
