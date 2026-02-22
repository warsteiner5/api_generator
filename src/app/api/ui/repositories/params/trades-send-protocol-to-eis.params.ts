import { EisIntegrationSendProtocolRequestAlt } from '../../models/eis-integration-send-protocol-request-alt.interface';
import { TradesSendProtocolToEis$Params } from '../../../swagger/fn/trades/trades-send-protocol-to-eis';
import { apiEisIntegrationSendProtocolRequestAltDtoAdapter } from '../../adapters/models/api-eis-integration-send-protocol-request.adapter';

// @ts-ignore
export interface TradesSendProtocolToEisParams {
  body?: EisIntegrationSendProtocolRequestAlt;
}

export function tradesSendProtocolToEisAdapter(params?: TradesSendProtocolToEisParams): TradesSendProtocolToEis$Params {
  if (!params) {
    return {} as TradesSendProtocolToEis$Params;
  }
  return {
      body: apiEisIntegrationSendProtocolRequestAltDtoAdapter(params.body),
  };
}
