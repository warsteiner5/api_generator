import { ApiCreateCustomerComissionProtocolDto } from '../../../swagger/models/api-create-customer-comission-protocol-dto';
import { CreateCustomerComissionProtocol } from '../../models/create-customer-comission-protocol.interface';
import { customerComissionProtocolAdapter } from './customer-comission-protocol.adapter';

export const createCustomerComissionProtocolAdapter = (source?: ApiCreateCustomerComissionProtocolDto | null): CreateCustomerComissionProtocol => {
  return {
    customerComissionProtocol: source?.CustomerComissionProtocol === null ? undefined : customerComissionProtocolAdapter(source?.CustomerComissionProtocol),
    tradeId: source?.TradeId,
  };
}
