import { ApiEisIntegrationSendProtocolRequestAltDto } from '../../../swagger/models/api-eis-integration-send-protocol-request';
import { EisIntegrationSendProtocolRequestAlt } from '../../models/eis-integration-send-protocol-request-alt.interface';

export const eisIntegrationSendProtocolRequestAltAdapter = (source?: ApiEisIntegrationSendProtocolRequestAltDto | null): EisIntegrationSendProtocolRequestAlt => {
  return {
    protocolTypeCode: source?.ProtocolTypeCode,
    protocolTypeUrl: source?.ProtocolTypeUrl,
    tradeId: source?.TradeId,
  };
}
