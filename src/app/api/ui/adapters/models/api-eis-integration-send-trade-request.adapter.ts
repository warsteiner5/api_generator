import { EisIntegrationSendTradeRequestAlt } from '../../models/eis-integration-send-trade-request-alt.interface';
import { ApiEisIntegrationSendTradeRequestAltDto } from '../../../swagger/models/api-eis-integration-send-trade-request';

export const apiEisIntegrationSendTradeRequestAltDtoAdapter = (source?: EisIntegrationSendTradeRequestAlt | null): ApiEisIntegrationSendTradeRequestAltDto => {
  return {
    PurchaseMethodCode: source?.purchaseMethodCode,
    PurchaseMethodUrl: source?.purchaseMethodUrl,
    TradeId: source?.tradeId,
  };
}
