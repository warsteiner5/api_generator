import { EisIntegrationSendProtocolRequestAlt } from '../../models/eis-integration-send-protocol-request-alt.interface';
import { TradesSendProtocolToEis$Params } from '../../../swagger/fn/trades/trades-send-protocol-to-eis';
import { adaptApiEisIntegrationSendProtocolRequestAltDto } from '../../adapters/toDto/api-eis-integration-send-protocol-request.adapter';

export interface TradesSendProtocolToEisParams {
  body?: EisIntegrationSendProtocolRequestAlt;
}

export const tradesSendProtocolToEisParamsAdapter = {
  adapt(params?: TradesSendProtocolToEisParams): TradesSendProtocolToEis$Params {
    if (!params) {
      return {} as TradesSendProtocolToEis$Params;
    }
    return {
      body: adaptApiEisIntegrationSendProtocolRequestAltDto(params.body),
    };
  }
};
