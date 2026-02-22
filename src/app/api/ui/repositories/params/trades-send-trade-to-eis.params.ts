import { EisIntegrationSendTradeRequestAlt } from '../../models/eis-integration-send-trade-request-alt.interface';
import { TradesSendTradeToEis$Params } from '../../../swagger/fn/trades/trades-send-trade-to-eis';
import { apiEisIntegrationSendTradeRequestAltDtoAdapter } from '../../adapters/models/api-eis-integration-send-trade-request.adapter';

// @ts-ignore
export interface TradesSendTradeToEisParams {
  body?: EisIntegrationSendTradeRequestAlt;
}

export function tradesSendTradeToEisAdapter(params?: TradesSendTradeToEisParams): TradesSendTradeToEis$Params {
  if (!params) {
    return {} as TradesSendTradeToEis$Params;
  }
  return {
      body: apiEisIntegrationSendTradeRequestAltDtoAdapter(params.body),
  };
}
