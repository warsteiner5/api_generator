import { ApiCreateCustomerComissionProtocolDto } from '../../../swagger/models/api-create-customer-comission-protocol-dto';
import { CreateCustomerComissionProtocol } from '../../models/create-customer-comission-protocol.interface';
import { adaptCustomerComissionProtocolToUI } from './customer-comission-protocol.adapter';

export function adaptCreateCustomerComissionProtocolToUI(source?: ApiCreateCustomerComissionProtocolDto | null): CreateCustomerComissionProtocol {
  return {
    customerComissionProtocol: adaptCustomerComissionProtocolToUI(source?.CustomerComissionProtocol),
    tradeId: source?.TradeId ?? 0,
  };
}
