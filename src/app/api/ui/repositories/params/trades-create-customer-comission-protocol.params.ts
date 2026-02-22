import { CreateCustomerComissionProtocol } from '../../models/create-customer-comission-protocol.interface';
import { TradesCreateCustomerComissionProtocol$Params } from '../../../swagger/fn/trades/trades-create-customer-comission-protocol';
import { apiCreateCustomerComissionProtocolDtoAdapter } from '../../adapters/models/api-create-customer-comission-protocol-dto.adapter';

// @ts-ignore
export interface TradesCreateCustomerComissionProtocolParams {
  id: number;
  body?: CreateCustomerComissionProtocol;
}

export function tradesCreateCustomerComissionProtocolAdapter(params?: TradesCreateCustomerComissionProtocolParams): TradesCreateCustomerComissionProtocol$Params {
  if (!params) {
    return {} as TradesCreateCustomerComissionProtocol$Params;
  }
  return {
      id: params.id,
      body: apiCreateCustomerComissionProtocolDtoAdapter(params.body),
  };
}
