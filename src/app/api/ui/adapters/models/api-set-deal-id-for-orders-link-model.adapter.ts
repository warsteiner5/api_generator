import { SetDealIdForOrdersLinkModelAlt } from '../../models/set-deal-id-for-orders-link-model-alt.interface';
import { ApiSetDealIdForOrdersLinkModelAltDto } from '../../../swagger/models/api-set-deal-id-for-orders-link-model';

export const apiSetDealIdForOrdersLinkModelAltDtoAdapter = (source?: SetDealIdForOrdersLinkModelAlt | null): ApiSetDealIdForOrdersLinkModelAltDto => {
  return {
    DealId: source?.dealId,
    TradeId: source?.tradeId,
  };
}
