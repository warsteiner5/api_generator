import { ApiEisIntegrationSendProtocolRequestAltDto } from '../../../swagger/models/api-eis-integration-send-protocol-request';
import { EisIntegrationSendProtocolRequestAlt } from '../../models/eis-integration-send-protocol-request-alt.interface';

export function adaptEisIntegrationSendProtocolRequestAltToUI(source?: ApiEisIntegrationSendProtocolRequestAltDto | null): EisIntegrationSendProtocolRequestAlt {
  return {
    protocolTypeCode: source?.ProtocolTypeCode ?? 0,
    protocolTypeUrl: source?.ProtocolTypeUrl ?? '',
    tradeId: source?.TradeId ?? 0,
  };
}
