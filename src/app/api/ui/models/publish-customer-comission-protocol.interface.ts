import { CreateCustomerComissionProtocol } from './create-customer-comission-protocol.interface';
import { TradeDocument } from './trade-document.interface';

export type PublishCustomerComissionProtocol = CreateCustomerComissionProtocol & { 'FileIdList'?: Array<TradeDocument> | null; };
