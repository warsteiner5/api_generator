import { ApiEisIntegrationSendTradeRequestAltDto } from '../../../swagger/models/api-eis-integration-send-trade-request';
import { EisIntegrationSendTradeRequestAlt } from '../../models/eis-integration-send-trade-request-alt.interface';

export function adaptEisIntegrationSendTradeRequestAltToUI(source?: ApiEisIntegrationSendTradeRequestAltDto | null): EisIntegrationSendTradeRequestAlt {
  return {
    purchaseMethodCode: source?.PurchaseMethodCode ?? 0,
    purchaseMethodUrl: source?.PurchaseMethodUrl ?? '',
    tradeId: source?.TradeId ?? 0,
  };
}
