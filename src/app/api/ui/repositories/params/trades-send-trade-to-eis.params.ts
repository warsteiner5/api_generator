import { EisIntegrationSendTradeRequestAlt } from '../../models/eis-integration-send-trade-request-alt.interface';
import { TradesSendTradeToEis$Params } from '../../../swagger/fn/trades/trades-send-trade-to-eis';
import { adaptApiEisIntegrationSendTradeRequestAltDto } from '../../adapters/toDto/api-eis-integration-send-trade-request.adapter';

export interface TradesSendTradeToEisParams {
  body?: EisIntegrationSendTradeRequestAlt;
}

export const tradesSendTradeToEisParamsAdapter = {
  adapt(params?: TradesSendTradeToEisParams): TradesSendTradeToEis$Params {
    if (!params) {
      return {} as TradesSendTradeToEis$Params;
    }
    return {
      body: adaptApiEisIntegrationSendTradeRequestAltDto(params.body),
    };
  }
};
