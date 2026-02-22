import { PublishCustomerComissionProtocol } from '../../models/publish-customer-comission-protocol.interface';
import { TradesPublishConsiderationProtocol$Params } from '../../../swagger/fn/trades/trades-publish-consideration-protocol';
import { apiPublishCustomerComissionProtocolDtoAdapter } from '../../adapters/models/api-publish-customer-comission-protocol-dto.adapter';

// @ts-ignore
export interface TradesPublishConsiderationProtocolParams {
  id: number;
  body?: PublishCustomerComissionProtocol;
}

export function tradesPublishConsiderationProtocolAdapter(params?: TradesPublishConsiderationProtocolParams): TradesPublishConsiderationProtocol$Params {
  if (!params) {
    return {} as TradesPublishConsiderationProtocol$Params;
  }
  return {
      id: params.id,
      body: apiPublishCustomerComissionProtocolDtoAdapter(params.body),
  };
}
