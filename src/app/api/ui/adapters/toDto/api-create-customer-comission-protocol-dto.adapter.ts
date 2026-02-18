import { CreateCustomerComissionProtocol } from '../../models/create-customer-comission-protocol.interface';
import { ApiCreateCustomerComissionProtocolDto } from '../../../swagger/models/api-create-customer-comission-protocol-dto';
import { adaptApiCustomerComissionProtocolDto } from './api-customer-comission-protocol-dto.adapter';

export function adaptApiCreateCustomerComissionProtocolDto(source?: CreateCustomerComissionProtocol | null): ApiCreateCustomerComissionProtocolDto {
  return {
    CustomerComissionProtocol: adaptApiCustomerComissionProtocolDto(source?.customerComissionProtocol),
    TradeId: source?.tradeId,
  };
}
