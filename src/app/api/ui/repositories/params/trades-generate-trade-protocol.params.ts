import { GenerateTradeProtocolRequestAlt } from '../../models/generate-trade-protocol-request-alt.interface';
import { TradesGenerateTradeProtocol$Params } from '../../../swagger/fn/trades/trades-generate-trade-protocol';
import { apiGenerateTradeProtocolRequestAltDtoAdapter } from '../../adapters/models/api-generate-trade-protocol-request.adapter';

// @ts-ignore
export interface TradesGenerateTradeProtocolParams {
  body?: GenerateTradeProtocolRequestAlt;
}

export function tradesGenerateTradeProtocolAdapter(params?: TradesGenerateTradeProtocolParams): TradesGenerateTradeProtocol$Params {
  if (!params) {
    return {} as TradesGenerateTradeProtocol$Params;
  }
  return {
      body: apiGenerateTradeProtocolRequestAltDtoAdapter(params.body),
  };
}
