import { ApiSetDealIdForOrdersLinkModelAltDto } from '../../../swagger/models/api-set-deal-id-for-orders-link-model';
import { SetDealIdForOrdersLinkModelAlt } from '../../models/set-deal-id-for-orders-link-model-alt.interface';

export const setDealIdForOrdersLinkModelAltAdapter = (source?: ApiSetDealIdForOrdersLinkModelAltDto | null): SetDealIdForOrdersLinkModelAlt => {
  return {
    dealId: source?.DealId,
    tradeId: source?.TradeId,
  };
}
