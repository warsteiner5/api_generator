import { PublishCustomerComissionProtocol } from '../../models/publish-customer-comission-protocol.interface';
import { TradesPublishConsiderationProtocol$Params } from '../../../swagger/fn/trades/trades-publish-consideration-protocol';
import { adaptApiPublishCustomerComissionProtocolDto } from '../../adapters/toDto/api-publish-customer-comission-protocol-dto.adapter';

export interface TradesPublishConsiderationProtocolParams {
  id: number;
  body?: PublishCustomerComissionProtocol;
}

export const tradesPublishConsiderationProtocolParamsAdapter = {
  adapt(params?: TradesPublishConsiderationProtocolParams): TradesPublishConsiderationProtocol$Params {
    if (!params) {
      return {} as TradesPublishConsiderationProtocol$Params;
    }
    return {
      id: params.id,
      body: adaptApiPublishCustomerComissionProtocolDto(params.body),
    };
  }
};
