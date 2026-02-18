import { PublishCustomerComissionProtocol } from '../../models/publish-customer-comission-protocol.interface';
import { TradesNoEisPublishConsiderationProtocol$Params } from '../../../swagger/fn/trades/trades-no-eis-publish-consideration-protocol';
import { adaptApiPublishCustomerComissionProtocolDto } from '../../adapters/toDto/api-publish-customer-comission-protocol-dto.adapter';

export interface TradesNoEisPublishConsiderationProtocolParams {
  id: number;
  body?: PublishCustomerComissionProtocol;
}

export const tradesNoEisPublishConsiderationProtocolParamsAdapter = {
  adapt(params?: TradesNoEisPublishConsiderationProtocolParams): TradesNoEisPublishConsiderationProtocol$Params {
    if (!params) {
      return {} as TradesNoEisPublishConsiderationProtocol$Params;
    }
    return {
      id: params.id,
      body: adaptApiPublishCustomerComissionProtocolDto(params.body),
    };
  }
};
