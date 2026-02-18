import { ApiSetDealIdForOrdersLinkModelAltDto } from '../../../swagger/models/api-set-deal-id-for-orders-link-model';
import { SetDealIdForOrdersLinkModelAlt } from '../../models/set-deal-id-for-orders-link-model-alt.interface';

export function adaptSetDealIdForOrdersLinkModelAltToUI(source?: ApiSetDealIdForOrdersLinkModelAltDto | null): SetDealIdForOrdersLinkModelAlt {
  return {
    dealId: source?.DealId ?? 0,
    tradeId: source?.TradeId ?? 0,
  };
}
