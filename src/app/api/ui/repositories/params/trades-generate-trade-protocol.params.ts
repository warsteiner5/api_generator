import { GenerateTradeProtocolRequestAlt } from '../../models/generate-trade-protocol-request-alt.interface';
import { TradesGenerateTradeProtocol$Params } from '../../../swagger/fn/trades/trades-generate-trade-protocol';
import { adaptApiGenerateTradeProtocolRequestAltDto } from '../../adapters/toDto/api-generate-trade-protocol-request.adapter';

export interface TradesGenerateTradeProtocolParams {
  body?: GenerateTradeProtocolRequestAlt;
}

export const tradesGenerateTradeProtocolParamsAdapter = {
  adapt(params?: TradesGenerateTradeProtocolParams): TradesGenerateTradeProtocol$Params {
    if (!params) {
      return {} as TradesGenerateTradeProtocol$Params;
    }
    return {
      body: adaptApiGenerateTradeProtocolRequestAltDto(params.body),
    };
  }
};
