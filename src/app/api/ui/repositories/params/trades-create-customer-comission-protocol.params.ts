import { CreateCustomerComissionProtocol } from '../../models/create-customer-comission-protocol.interface';
import { TradesCreateCustomerComissionProtocol$Params } from '../../../swagger/fn/trades/trades-create-customer-comission-protocol';
import { adaptApiCreateCustomerComissionProtocolDto } from '../../adapters/toDto/api-create-customer-comission-protocol-dto.adapter';

export interface TradesCreateCustomerComissionProtocolParams {
  id: number;
  body?: CreateCustomerComissionProtocol;
}

export const tradesCreateCustomerComissionProtocolParamsAdapter = {
  adapt(params?: TradesCreateCustomerComissionProtocolParams): TradesCreateCustomerComissionProtocol$Params {
    if (!params) {
      return {} as TradesCreateCustomerComissionProtocol$Params;
    }
    return {
      id: params.id,
      body: adaptApiCreateCustomerComissionProtocolDto(params.body),
    };
  }
};
