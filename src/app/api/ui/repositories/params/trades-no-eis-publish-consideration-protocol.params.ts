import { PublishCustomerComissionProtocol } from '../../models/publish-customer-comission-protocol.interface';
import { TradesNoEisPublishConsiderationProtocol$Params } from '../../../swagger/fn/trades/trades-no-eis-publish-consideration-protocol';
import { apiPublishCustomerComissionProtocolDtoAdapter } from '../../adapters/models/api-publish-customer-comission-protocol-dto.adapter';

// @ts-ignore
export interface TradesNoEisPublishConsiderationProtocolParams {
  id: number;
  body?: PublishCustomerComissionProtocol;
}

export function tradesNoEisPublishConsiderationProtocolAdapter(params?: TradesNoEisPublishConsiderationProtocolParams): TradesNoEisPublishConsiderationProtocol$Params {
  if (!params) {
    return {} as TradesNoEisPublishConsiderationProtocol$Params;
  }
  return {
      id: params.id,
      body: apiPublishCustomerComissionProtocolDtoAdapter(params.body),
  };
}
