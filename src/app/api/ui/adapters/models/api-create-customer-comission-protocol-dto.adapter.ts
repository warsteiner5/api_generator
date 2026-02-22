import { CreateCustomerComissionProtocol } from '../../models/create-customer-comission-protocol.interface';
import { ApiCreateCustomerComissionProtocolDto } from '../../../swagger/models/api-create-customer-comission-protocol-dto';
import { apiCustomerComissionProtocolDtoAdapter } from './api-customer-comission-protocol-dto.adapter';

export const apiCreateCustomerComissionProtocolDtoAdapter = (source?: CreateCustomerComissionProtocol | null): ApiCreateCustomerComissionProtocolDto => {
  return {
    CustomerComissionProtocol: source?.customerComissionProtocol === null ? undefined : apiCustomerComissionProtocolDtoAdapter(source?.customerComissionProtocol),
    TradeId: source?.tradeId,
  };
}
