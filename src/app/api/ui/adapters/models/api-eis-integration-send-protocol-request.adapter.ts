import { EisIntegrationSendProtocolRequestAlt } from '../../models/eis-integration-send-protocol-request-alt.interface';
import { ApiEisIntegrationSendProtocolRequestAltDto } from '../../../swagger/models/api-eis-integration-send-protocol-request';

export const apiEisIntegrationSendProtocolRequestAltDtoAdapter = (source?: EisIntegrationSendProtocolRequestAlt | null): ApiEisIntegrationSendProtocolRequestAltDto => {
  return {
    ProtocolTypeCode: source?.protocolTypeCode,
    ProtocolTypeUrl: source?.protocolTypeUrl,
    TradeId: source?.tradeId,
  };
}
