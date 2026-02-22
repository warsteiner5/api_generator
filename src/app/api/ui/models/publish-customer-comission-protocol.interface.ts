import { CreateCustomerComissionProtocol } from './create-customer-comission-protocol.interface';
import { TradeDocument } from './trade-document.interface';

// @ts-ignore
export interface PublishCustomerComissionProtocol extends CreateCustomerComissionProtocol {
  fileIdList: TradeDocument[];
}
