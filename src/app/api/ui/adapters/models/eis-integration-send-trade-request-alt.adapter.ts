import { ApiEisIntegrationSendTradeRequestAltDto } from '../../../swagger/models/api-eis-integration-send-trade-request';
import { EisIntegrationSendTradeRequestAlt } from '../../models/eis-integration-send-trade-request-alt.interface';

export const eisIntegrationSendTradeRequestAltAdapter = (source?: ApiEisIntegrationSendTradeRequestAltDto | null): EisIntegrationSendTradeRequestAlt => {
  return {
    purchaseMethodCode: source?.PurchaseMethodCode,
    purchaseMethodUrl: source?.PurchaseMethodUrl,
    tradeId: source?.TradeId,
  };
}
